# iOS 逆向进阶技术

## IPA结构分析

### 文件结构
```
app.ipa (实际是zip)
└── Payload/
    └── App.app/
        ├── App                    # 主二进制(Mach-O)
        ├── Info.plist            # 应用信息
        ├── embedded.mobileprovision
        ├── Frameworks/           # 动态库
        ├── PlugIns/              # 扩展
        └── _CodeSignature/       # 签名
```

### Mach-O分析
```bash
# 查看架构
lipo -info App

# 提取单架构
lipo App -thin arm64 -output App_arm64

# 查看依赖
otool -L App

# 查看加载命令
otool -l App

# 查看OC类
otool -ov App
```

## 砸壳脱壳

### frida-ios-dump
```bash
# 安装
pip install frida-tools
git clone https://github.com/AloneMonkey/frida-ios-dump

# 配置 dump.py 中的SSH连接信息
HOST = 'localhost'
PORT = 2222  # USB映射
USER = 'root'
PASSWORD = 'alpine'

# 列出应用
python dump.py -l

# 砸壳
python dump.py com.app.bundleid
```

### Clutch (越狱)
```bash
# 设备上运行
Clutch -d com.app.bundleid
```

### bfdecrypt (越狱)
```bash
# Cydia安装bfdecrypt
# 设置 -> bfdecrypt -> 选择应用
# 运行应用自动砸壳到 /var/mobile/Documents/
```

## class-dump

### 导出头文件
```bash
# 导出所有头文件
class-dump -H App -o headers/

# 只看某个类
class-dump -C "ClassName" App
```

### 头文件分析
```objc
// 关注点
@interface CryptoManager : NSObject
- (NSString *)encrypt:(NSString *)input;
- (NSString *)sign:(NSDictionary *)params;
@property (nonatomic, strong) NSString *secretKey;
@end
```

## Frida iOS Hook

### OC方法Hook
```javascript
if (ObjC.available) {
    var cls = ObjC.classes.CryptoManager;
    
    // Hook实例方法
    Interceptor.attach(cls['- encrypt:'].implementation, {
        onEnter: function(args) {
            // args[0] = self, args[1] = _cmd, args[2]+ = 参数
            console.log('encrypt input: ' + ObjC.Object(args[2]));
        },
        onLeave: function(retval) {
            console.log('encrypt output: ' + ObjC.Object(retval));
        }
    });
    
    // Hook类方法
    Interceptor.attach(cls['+ sharedInstance'].implementation, {
        onLeave: function(retval) {
            console.log('sharedInstance: ' + retval);
        }
    });
}
```

### Swift方法Hook
```javascript
// Swift方法名会被mangle
// 使用Module.enumerateExports查找

Module.enumerateExports('App', {
    onMatch: function(exp) {
        if (exp.name.indexOf('encrypt') !== -1) {
            console.log(exp.name + ': ' + exp.address);
        }
    },
    onComplete: function() {}
});
```

### 常用Hook
```javascript
// Hook NSURLSession
var NSURLSession = ObjC.classes.NSURLSession;
Interceptor.attach(NSURLSession['- dataTaskWithRequest:completionHandler:'].implementation, {
    onEnter: function(args) {
        var request = ObjC.Object(args[2]);
        console.log('URL: ' + request.URL());
        console.log('Headers: ' + request.allHTTPHeaderFields());
    }
});

// Hook UserDefaults
var NSUserDefaults = ObjC.classes.NSUserDefaults;
Interceptor.attach(NSUserDefaults['- setObject:forKey:'].implementation, {
    onEnter: function(args) {
        console.log('setObject: ' + ObjC.Object(args[2]) + ' forKey: ' + ObjC.Object(args[3]));
    }
});
```

## Cycript

### 基础使用
```bash
# 附加进程
cycript -p AppName

# 或通过bundle id
cycript -p com.app.bundleid
```

### 常用操作
```javascript
// 获取当前ViewController
UIApp.keyWindow.rootViewController

// 遍历视图层级
UIApp.keyWindow.recursiveDescription().toString()

// 调用方法
var crypto = [CryptoManager sharedInstance]
[crypto encrypt:@"test"]

// 修改属性
crypto.secretKey = @"new_key"
```

## 抓包配置

### Charles SSL代理
1. iPhone安装Charles证书: chls.pro/ssl
2. 设置 -> 通用 -> 关于本机 -> 证书信任设置 -> 启用
3. WiFi设置代理指向电脑

### SSL Pinning绕过

**Frida脚本**:
```javascript
// 通用SSL Pinning绕过
var resolver = new ApiResolver('objc');
resolver.enumerateMatches('*[* SSL*]', {
    onMatch: function(match) {
        console.log(match.name);
    },
    onComplete: function() {}
});

// AFNetworking
var AFSecurityPolicy = ObjC.classes.AFSecurityPolicy;
Interceptor.attach(AFSecurityPolicy['- setSSLPinningMode:'].implementation, {
    onEnter: function(args) {
        args[2] = ptr(0);  // AFSSLPinningModeNone
    }
});
```

**SSL Kill Switch 2** (越狱):
```bash
# Cydia安装 SSL Kill Switch 2
# 设置中启用
```

## 重签名

### 使用iOS App Signer
1. 导出砸壳后的IPA
2. 准备开发者证书和Provisioning Profile
3. iOS App Signer选择IPA和证书
4. 生成重签名IPA
5. 使用Xcode/ideviceinstaller安装

### 命令行重签名
```bash
# 解压IPA
unzip app.ipa

# 替换embedded.mobileprovision
cp new.mobileprovision Payload/App.app/

# 重签名
codesign -f -s "iPhone Developer: xxx" --entitlements entitlements.plist Payload/App.app

# 重新打包
zip -r app_resigned.ipa Payload/
```

## 越狱检测绕过

### 常见检测点
```objc
// 文件检测
/Applications/Cydia.app
/Library/MobileSubstrate/
/bin/bash
/usr/sbin/sshd

// URL Scheme检测
cydia://

// 沙盒检测
尝试写入沙盒外路径
```

### Frida绕过
```javascript
// Hook文件检测
var NSFileManager = ObjC.classes.NSFileManager;
Interceptor.attach(NSFileManager['- fileExistsAtPath:'].implementation, {
    onEnter: function(args) {
        var path = ObjC.Object(args[2]).toString();
        if (path.indexOf('Cydia') !== -1 || 
            path.indexOf('MobileSubstrate') !== -1) {
            this.bypass = true;
        }
    },
    onLeave: function(retval) {
        if (this.bypass) {
            retval.replace(0);
        }
    }
});
```
