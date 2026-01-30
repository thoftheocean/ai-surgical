---
name: app-reverse-engineering
description: 移动App逆向工程分析。Android APK反编译、iOS砸壳、Frida Hook、SSL Pinning绕过、SO层分析。当用户提到App逆向、APK分析、Frida、Xposed、抓包绕过、脱壳、smali、IDA时使用。
---

# App 逆向工程 (移动端)

## 触发关键词

当对话中出现以下关键词时自动加载此skill：

**核心词**: App逆向、移动端逆向、Android逆向、iOS逆向、手机抓包

**Android相关**: APK分析、APK反编译、jadx、apktool、smali、dex、脱壳、加固、360加固、腾讯乐固、Xposed、LSPosed、Magisk

**iOS相关**: IPA分析、砸壳、class-dump、Cycript、越狱、重签名、Mach-O

**Hook相关**: Frida、Objection、Hook、动态调试、Native Hook、JNI、SO逆向

**抓包相关**: SSL Pinning、证书绕过、抓包绕过、Charles证书、双向认证

**工具相关**: IDA、Ghidra、二进制分析、ARM汇编

---

## 分析工作流

```
任务进度:
- [ ] 抓包分析网络请求
- [ ] 绕过SSL Pinning (如有)
- [ ] 反编译/脱壳获取代码
- [ ] 定位关键加密逻辑
- [ ] Hook验证分析结果
- [ ] 复现加密算法
```

## Android 逆向

### 快速开始
```bash
# APK反编译 (Java层)
jadx-gui app.apk

# 资源+smali提取
apktool d app.apk -o output

# 查看签名信息
keytool -printcert -jarfile app.apk
```

### 关键文件定位
| 路径 | 内容 |
|------|------|
| `AndroidManifest.xml` | 入口Activity、权限、组件 |
| `classes.dex` | Java/Kotlin代码 |
| `lib/armeabi-v7a/*.so` | Native库 |
| `assets/` | 配置文件、加密资源 |
| `res/values/strings.xml` | 字符串资源 |

### 搜索关键词
```
encrypt, decrypt, sign, md5, sha, aes, rsa
secret, key, token, password
HttpClient, OkHttp, Retrofit
X-Sign, X-Token, signature
```

## iOS 逆向

### 快速开始
```bash
# 砸壳 (越狱设备)
frida-ios-dump -l          # 列出应用
frida-ios-dump com.app.id  # 导出IPA

# 提取头文件
class-dump -H App.app -o headers/

# 查看二进制信息
otool -L App.app/App       # 依赖库
otool -ov App.app/App      # OC类信息
```

### 关键文件定位
| 路径 | 内容 |
|------|------|
| `Info.plist` | Bundle ID、入口、配置 |
| `Frameworks/` | 动态库 |
| `_CodeSignature/` | 签名信息 |

## SSL Pinning 绕过

### Frida通用脚本
```javascript
// 绕过OkHttp
Java.perform(function() {
    var CertPinner = Java.use('okhttp3.CertificatePinner');
    CertPinner.check.overload('java.lang.String', 'java.util.List').implementation = function() {
        console.log('OkHttp SSL Pinning bypassed');
    };
});
```

### 常用工具
| 工具 | 平台 | 说明 |
|------|------|------|
| Objection | 通用 | `objection -g com.app explore` |
| Frida脚本 | 通用 | 自定义Hook |
| JustTrustMe | Android | Xposed模块 |
| SSL Kill Switch | iOS | 越狱插件 |

## Frida 速查

### 基础命令
```bash
# 列出进程
frida-ps -U

# 附加进程
frida -U -n "AppName" -l hook.js

# Spawn模式
frida -U -f com.app.package -l hook.js --no-pause

# 使用objection
objection -g com.app.package explore
```

### Hook模板
```javascript
// Android Java层
Java.perform(function() {
    var cls = Java.use('com.example.Crypto');
    cls.encrypt.implementation = function(input) {
        console.log('Input: ' + input);
        var result = this.encrypt(input);
        console.log('Output: ' + result);
        return result;
    };
});

// iOS OC层
if (ObjC.available) {
    var cls = ObjC.classes.CryptoManager;
    Interceptor.attach(cls['- encrypt:'].implementation, {
        onEnter: function(args) {
            console.log('Input: ' + ObjC.Object(args[2]));
        },
        onLeave: function(retval) {
            console.log('Output: ' + ObjC.Object(retval));
        }
    });
}
```

## Native层分析

### SO文件分析
```bash
# 查看导出函数
nm -D libcrypto.so | grep -i encrypt

# 查看字符串
strings libcrypto.so | grep -i key

# IDA/Ghidra打开分析
```

### Frida Hook Native
```javascript
// Hook导出函数
var addr = Module.findExportByName('libcrypto.so', 'encrypt');
Interceptor.attach(addr, {
    onEnter: function(args) {
        console.log('arg0: ' + args[0].readUtf8String());
    },
    onLeave: function(retval) {
        console.log('ret: ' + retval.readUtf8String());
    }
});

// Hook任意地址
var base = Module.findBaseAddress('libcrypto.so');
var offset = 0x1234;
Interceptor.attach(base.add(offset), { ... });
```

## 工具速查

| 工具 | 用途 |
|------|------|
| jadx | APK反编译为Java |
| apktool | APK解包/重打包 |
| Frida | 动态Hook神器 |
| Objection | Frida封装工具 |
| IDA Pro | 二进制分析 |
| Ghidra | 免费逆向工具 |
| Charles | 抓包+SSL代理 |

## 进阶资料

- Android详细技术: [android-techniques.md](android-techniques.md)
- iOS详细技术: [ios-techniques.md](ios-techniques.md)
- 工具安装配置: [tools-setup.md](tools-setup.md)
