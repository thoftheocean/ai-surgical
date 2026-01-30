# App逆向工具安装配置

## Frida

### 安装
```bash
# PC端
pip install frida-tools

# Android (root)
# 下载对应架构的frida-server
# https://github.com/frida/frida/releases
adb push frida-server /data/local/tmp/
adb shell chmod 755 /data/local/tmp/frida-server
adb shell /data/local/tmp/frida-server &

# iOS (越狱)
# Cydia添加源: https://build.frida.re
# 安装Frida
```

### 常用命令
```bash
# 列出设备
frida-ls-devices

# 列出进程
frida-ps -U              # USB设备
frida-ps -R              # 远程设备

# 附加Hook
frida -U -n "AppName" -l script.js

# Spawn模式
frida -U -f com.app.package -l script.js --no-pause

# 交互模式
frida -U -n "AppName"
```

## Objection

### 安装
```bash
pip install objection
```

### 常用命令
```bash
# 启动
objection -g com.app.package explore

# 内存搜索
memory search "keyword"

# 类枚举
android hooking list classes
ios hooking list classes

# 方法枚举
android hooking list class_methods com.app.Crypto
ios hooking list class_methods CryptoManager

# Hook方法
android hooking watch class_method com.app.Crypto.encrypt --dump-args --dump-return
ios hooking watch method "-[CryptoManager encrypt:]" --dump-args --dump-return

# SSL Pinning绕过
android sslpinning disable
ios sslpinning disable

# Root/越狱检测绕过
android root disable
ios jailbreak disable
```

## jadx

### 安装
```bash
# 下载release
# https://github.com/skylot/jadx/releases

# 或使用包管理器
brew install jadx        # macOS
choco install jadx       # Windows
```

### 使用
```bash
# GUI模式
jadx-gui app.apk

# 命令行
jadx app.apk -d output/

# 常用选项
jadx --deobf app.apk -d output/  # 反混淆
jadx --show-bad-code app.apk     # 显示无法反编译的代码
```

## apktool

### 安装
```bash
# https://ibotpeaches.github.io/Apktool/install/

# macOS
brew install apktool

# Windows - 下载jar和bat脚本
```

### 使用
```bash
# 解包
apktool d app.apk -o output/

# 只解资源
apktool d -s app.apk -o output/

# 回编
apktool b output/ -o new.apk

# 签名
apksigner sign --ks my.keystore new.apk
# 或
jarsigner -keystore my.keystore new.apk alias
```

## IDA Pro

### 分析SO文件
1. File -> Open -> 选择.so文件
2. 选择正确的处理器类型(ARM/ARM64)
3. 等待自动分析完成
4. View -> Open subviews -> Strings 查看字符串
5. F5 反编译函数

### 常用快捷键
| 快捷键 | 功能 |
|--------|------|
| `G` | 跳转到地址 |
| `N` | 重命名 |
| `X` | 查看交叉引用 |
| `F5` | 反编译 |
| `/` | 添加注释 |
| `Tab` | 切换汇编/伪代码 |

## Ghidra

### 安装
```bash
# https://ghidra-sre.org/
# 下载解压即可使用
# 需要JDK 11+
```

### 使用
1. File -> New Project
2. File -> Import File -> 选择二进制
3. 双击打开分析
4. 等待自动分析
5. Window -> Decompile 查看伪代码

## Charles

### 配置
1. Proxy -> Proxy Settings -> Port: 8888
2. Proxy -> SSL Proxying Settings -> Add: Host=*, Port=443
3. Help -> SSL Proxying -> Install Certificate

### 设备证书安装
```
Android:
1. 访问 chls.pro/ssl 下载证书
2. 设置 -> 安全 -> 安装证书

iOS:
1. 访问 chls.pro/ssl 下载证书
2. 设置 -> 通用 -> 描述文件 -> 安装
3. 设置 -> 通用 -> 关于 -> 证书信任设置 -> 启用
```

## Android Studio

### 模拟器配置
```bash
# 创建可写系统的模拟器
# 选择不带Google Play的镜像

# 启动时添加参数
emulator -avd Pixel_4_API_30 -writable-system

# 安装证书到系统
adb root
adb remount
adb push cert.0 /system/etc/security/cacerts/
adb shell chmod 644 /system/etc/security/cacerts/cert.0
```

### ADB常用命令
```bash
# 设备连接
adb devices
adb connect ip:port

# 应用操作
adb install app.apk
adb uninstall com.app.package
adb shell pm list packages | grep keyword

# 文件操作
adb push local remote
adb pull remote local

# 日志
adb logcat | grep keyword
adb logcat -s TAG

# 端口转发
adb forward tcp:27042 tcp:27042  # Frida
adb forward tcp:8888 tcp:8888   # 抓包
```

## Xcode + iOS模拟器

### 证书安装
```bash
# 模拟器安装证书
xcrun simctl keychain booted add-root-cert cert.pem

# 或拖拽.cer文件到模拟器
```

### 常用命令
```bash
# 列出模拟器
xcrun simctl list devices

# 启动模拟器
xcrun simctl boot "iPhone 14"

# 安装应用
xcrun simctl install booted app.app

# 获取应用沙盒路径
xcrun simctl get_app_container booted com.app.bundleid data
```
