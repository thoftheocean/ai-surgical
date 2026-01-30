# TikTok 设备信息收集分析报告

## 概述

通过分析TikTok官网加载的JS文件，发现其收集了大量设备指纹信息用于用户识别、反爬虫和安全验证。

## 核心SDK文件 (已下载14个)

| 文件 | 用途 |
|------|------|
| `webmssdk.js` | **核心指纹SDK** - 生成msToken签名 |
| `webmssdk_ex.js` | **扩展指纹** - Canvas/WebGL/Audio指纹 |
| `secsdk-lastest.umd.js` | **安全验证SDK** - 反自动化检测 |
| `tea_sdk.js` | **数据埋点SDK** - ByteDance Tea上报 |
| `slardar.js` | **性能监控** - 错误/性能上报 |
| `slardar_browser.js` | **浏览器监控** - 运行时数据收集 |
| `slardar_web_pre.js` | **预加载监控** |
| `privacy_protection_index.js` | **隐私框架入口** - 数据保护策略 |
| `privacy_protection_core.js` | **隐私框架核心** |
| `privacy_protection_devtools.js` | **隐私框架调试工具** |
| `common_monitors_1.14.1.js` | **通用监控插件** |
| `webapp-desktop.js` | **主应用入口** - 业务逻辑 |
| `builder-runtime.js` | **构建运行时** - Webpack运行时 |
| `biz-shared-init.js` | **业务初始化** - 路由/配置 |

## 收集的设备信息分类

### 1. 浏览器基础信息
```javascript
{
  userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64)...",
  platform: "Win32",
  language: "zh-CN",
  languages: ["zh-CN", "zh"],
  cookieEnabled: true,
  doNotTrack: null,
  vendor: "Google Inc."
}
```

### 2. 硬件信息
```javascript
{
  hardwareConcurrency: 16,      // CPU核心数
  deviceMemory: 8,              // 内存大小(GB)
  maxTouchPoints: 0,            // 触摸点数量
  jsHeapSizeLimit: 4294967296   // JS堆内存限制
}
```

### 3. 屏幕信息
```javascript
{
  screenWidth: 1920,
  screenHeight: 1080,
  screenAvailWidth: 1920,
  screenAvailHeight: 1032,
  screenColorDepth: 24,
  screenPixelDepth: 24,
  devicePixelRatio: 1
}
```

### 4. 时区信息
```javascript
{
  timezone: "Asia/Shanghai",
  timezoneOffset: -480  // 分钟
}
```

### 5. WebGL指纹 (重要!)
```javascript
{
  webglVendor: "Google Inc. (AMD)",
  webglRenderer: "ANGLE (AMD, AMD Radeon 780M Graphics...)",
  webglExtensions: 35  // 支持的扩展数量
}
```

### 6. 网络信息
```javascript
{
  effectiveType: "3g",
  downlink: 1.4,      // Mbps
  rtt: 300            // 延迟(ms)
}
```

### 7. 特征检测
```javascript
{
  canvasSupport: true,         // Canvas指纹
  audioContextSupport: true,   // AudioContext指纹
  webRTCSupport: true,         // WebRTC (可获取本地IP)
  batterySupport: true,        // 电池API
  touchSupport: false,         // 触屏检测
  mediaDevicesSupport: true,   // 摄像头/麦克风检测
  pluginCount: 5,              // 浏览器插件数量
  storageEstimate: true        // 存储配额API
}
```

### 8. 反自动化检测
```javascript
{
  webdriver: true  // 检测是否为自动化浏览器
}
```

## Cookie标识符

TikTok使用以下Cookie进行用户追踪：

| Cookie名 | 用途 |
|----------|------|
| `msToken` | 核心签名Token (152字符) |
| `delay_guest_mode_vid` | 访客模式标识 |
| `g_state` | Google登录状态 |
| `tiktok_webapp_theme` | 主题设置 |

## LocalStorage存储

- `SLARDARtiktok_webapp` - Slardar性能监控数据
- `HYBRID_SLARDAR_WEBtiktok_pns_web_runtime` - 运行时数据
- `tiktok-studio-guide-record_guest` - 用户引导记录

## 全局变量/对象

TikTok在window对象上暴露的关键变量：

```javascript
window.SlardarClient          // 性能监控客户端
window.__PNS_RUNTIME__        // 隐私保护运行时
window.__$UNIVERSAL_DATA$__   // 通用数据存储
window._signature             // webmssdk签名函数
window.byted_acrawler         // 反爬虫模块
```

## msToken签名机制

`webmssdk.js` 生成的 `msToken` 是TikTok API请求的核心签名参数，包含：
- 设备指纹哈希
- 时间戳
- 随机因子
- 加密签名

每次API请求都需要携带有效的msToken，用于验证请求来源的合法性。

## 指纹收集技术总结

### Canvas指纹
通过绘制特定图形并提取像素数据生成唯一hash

### WebGL指纹
- GPU厂商和型号
- 渲染器信息
- 支持的扩展列表

### AudioContext指纹
通过音频处理特征生成指纹

### 字体检测
检测系统安装的字体列表

### 屏幕/窗口特征
- 分辨率组合
- 可用区域
- 像素比

### 时区/语言特征
- 时区偏移
- 语言列表
- 区域设置

## 反检测建议

如需绑过TikTok指纹检测，需要伪造以下信息：
1. WebGL渲染器信息
2. Canvas绘制结果
3. 屏幕分辨率组合
4. 硬件并发数/内存
5. 时区设置
6. 浏览器语言
7. 禁用webdriver标志

---
*分析时间: 2026-01-29*
*数据来源: www.tiktok.com*
