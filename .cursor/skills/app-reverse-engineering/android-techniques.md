# Android 逆向进阶技术

## APK结构分析

### 文件结构
```
app.apk
├── AndroidManifest.xml    # 清单文件(二进制)
├── classes.dex            # 主代码
├── classes2.dex           # 分包代码(如有)
├── resources.arsc         # 编译后的资源
├── res/                   # 资源文件
├── lib/                   # Native库
│   ├── armeabi-v7a/
│   ├── arm64-v8a/
│   └── x86/
├── assets/                # 原始资源
└── META-INF/              # 签名信息
```

### 多DEX处理
```bash
# 合并多个dex
d2j-dex2jar classes.dex classes2.dex -o merged.jar

# jadx直接处理APK会自动合并
jadx app.apk -d output
```

## 代码混淆识别

### ProGuard混淆
- 特征: `a`, `b`, `c` 等短类名/方法名
- 处理: 结合上下文、字符串、调用关系分析

### DexGuard混淆
- 特征: 字符串加密、类加密、Native化
- 处理: Hook解密函数获取明文

### 360加固/腾讯乐固
- 特征: 壳代码在`lib`目录，真实dex被加密
- 处理: 运行时dump脱壳

## 脱壳技术

### Frida DEX Dump
```javascript
// dex_dump.js
Java.perform(function() {
    Java.enumerateClassLoaders({
        onMatch: function(loader) {
            try {
                var dex = Java.cast(loader, Java.use('dalvik.system.BaseDexClassLoader'));
                var pathList = dex.pathList.value;
                var elements = pathList.dexElements.value;
                for (var i = 0; i < elements.length; i++) {
                    var dexFile = elements[i].dexFile.value;
                    if (dexFile) {
                        console.log('Found DEX: ' + dexFile.mFileName.value);
                        // 保存dex逻辑
                    }
                }
            } catch(e) {}
        },
        onComplete: function() {}
    });
});
```

### FART脱壳
```bash
# 修改FART源码编译ROM
# 或使用现成的FART镜像

# 脱壳结果在 /data/data/包名/fart/
```

### BlackDex
```bash
# 免root脱壳工具
# 安装BlackDex APK
# 选择目标应用进行脱壳
```

## Xposed Hook

### 模块开发
```java
// Hook类
public class HookModule implements IXposedHookLoadPackage {
    @Override
    public void handleLoadPackage(LoadPackageParam lpparam) {
        if (!lpparam.packageName.equals("com.target.app")) return;
        
        XposedHelpers.findAndHookMethod(
            "com.target.Crypto",
            lpparam.classLoader,
            "encrypt",
            String.class,
            new XC_MethodHook() {
                @Override
                protected void beforeHookedMethod(MethodHookParam param) {
                    XposedBridge.log("Input: " + param.args[0]);
                }
                @Override
                protected void afterHookedMethod(MethodHookParam param) {
                    XposedBridge.log("Output: " + param.getResult());
                }
            }
        );
    }
}
```

### LSPosed配置
1. 安装Magisk + Zygisk
2. 安装LSPosed模块
3. 在LSPosed管理器中启用Hook模块
4. 选择目标应用作用域

## Smali修改

### 常用修改
```smali
# 绕过签名校验 - 找到校验方法返回true
.method public checkSignature()Z
    .locals 1
    const/4 v0, 0x1    # 直接返回true
    return v0
.end method

# 绕过root检测 - 同上
.method public isRooted()Z
    .locals 1
    const/4 v0, 0x0    # 直接返回false
    return v0
.end method

# 打印日志
const-string v0, "TAG"
const-string v1, "value"
invoke-static {v0, v1}, Landroid/util/Log;->d(Ljava/lang/String;Ljava/lang/String;)I
```

### 重打包流程
```bash
# 1. 解包
apktool d app.apk -o app_src

# 2. 修改smali

# 3. 回编
apktool b app_src -o app_modified.apk

# 4. 签名
apksigner sign --ks my.keystore --out app_signed.apk app_modified.apk
```

## SO层逆向

### JNI函数定位
```c
// 静态注册: 函数名格式
Java_包名_类名_方法名

// 动态注册: 搜索RegisterNatives
```

### IDA分析流程
1. 导入SO文件
2. 搜索JNI函数或字符串
3. F5反编译查看伪代码
4. 分析算法逻辑

### Frida Native Hook
```javascript
// Hook JNI函数
Java.perform(function() {
    var System = Java.use('java.lang.System');
    System.loadLibrary.implementation = function(name) {
        console.log('Loading: ' + name);
        this.loadLibrary(name);
        
        // 加载后Hook
        if (name === 'crypto') {
            hookNativeFunc();
        }
    };
});

function hookNativeFunc() {
    var addr = Module.findExportByName('libcrypto.so', 'Java_com_app_Crypto_encrypt');
    Interceptor.attach(addr, {
        onEnter: function(args) {
            // args[0] = JNIEnv*, args[1] = jobject, args[2]+ = 参数
            console.log('JNI encrypt called');
        }
    });
}
```

## 抓包配置

### 系统代理抓包
```bash
# 设置WiFi代理指向电脑IP:8888
# Charles/Fiddler开启代理
# 安装CA证书到设备
```

### Android 7+ 证书问题
```xml
<!-- res/xml/network_security_config.xml -->
<network-security-config>
    <base-config>
        <trust-anchors>
            <certificates src="user" />  <!-- 信任用户证书 -->
            <certificates src="system" />
        </trust-anchors>
    </base-config>
</network-security-config>
```

### VPN抓包 (无需root)
- HttpCanary
- Packet Capture
- 配合Magisk模块信任用户证书
