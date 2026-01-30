# TikTok index.js 分析报告

## 文件信息

- **文件**: `tiktok_privacy_protection_framework/loader/2.0.0.302/index.js`
- **大小**: ~156 KB
- **用途**: TikTok隐私保护框架 (PNS - Privacy & Security)
- **全局对象**: `window.__PNS_RUNTIME__`

## 核心功能

这个文件是TikTok的**隐私保护/安全监控框架**，用于：
1. 拦截和监控敏感Web API调用
2. 管理Cookie访问
3. 控制Storage读写
4. 记录网络请求
5. 事件追踪上报

## 规则集 (Ruleset) 结构

```javascript
__PNS_RUNTIME__.ruleset = {
  cookie: { ... },    // Cookie管理规则
  event: { ... },     // 事件追踪规则
  network: { ... },   // 网络请求规则
  reporter: { ... },  // 上报规则
  storage: { ... },   // 存储规则
  webapi: { ... }     // Web API监控规则
}
```

## 被监控的Web API (共56个)

### 传感器类 (Sensor APIs)
| API | 类型 | 采样率 |
|-----|------|--------|
| `AbsoluteOrientationSensor` | constructor | 100% |
| `Accelerometer` | constructor | 100% |
| `Gyroscope` | constructor | 100% |
| `Magnetometer` | constructor | 100% |
| `GravitySensor` | constructor | 100% |
| `LinearAccelerationSensor` | constructor | 100% |
| `OrientationSensor` | constructor | 100% |
| `RelativeOrientationSensor` | constructor | 100% |

### 定位类 (Geolocation)
| API | 类型 | 采样率 |
|-----|------|--------|
| `getCurrentPosition` | method | 100% |
| `watchPosition` | method | 100% |
| `clearWatch` | method | 100% |

### 媒体类 (Media)
| API | 类型 | 记录调用栈 |
|-----|------|------------|
| `getUserMedia` | method | ✓ |
| `getDisplayMedia` | method | ✗ |
| `mozGetUserMedia` | method | ✗ |
| `webkitGetUserMedia` | method | ✗ |

### WebRTC
| API | 类型 | 说明 |
|-----|------|------|
| `RTCPeerConnection` | constructor | 可获取本地IP |
| `WebSocket` | constructor | 通信监控 |

### 剪贴板 (Clipboard)
| API | 类型 | 记录调用栈 |
|-----|------|------------|
| `read` | method | ✓ |
| `readText` | method | ✓ |
| `write` | method | ✓ |
| `writeText` | method | ✓ |

### 其他敏感API
| API | 类型 | 说明 |
|-----|------|------|
| `getBattery` | method | 电池状态 |
| `vibrate` | method | 振动反馈 |
| `Notification` | constructor | 通知权限 |
| `PaymentRequest` | constructor | 支付请求 |
| `share` | method | 分享功能 |
| `execCommand` | method | 文档命令 |

## Cookie管理规则

```javascript
{
  "enabled": true,
  "sampleRate": 0.07,  // 7%采样率
  "blockers": [{
    "cookies": [
      "ktlvDW7IG5ClOcxYTbmY",
      "MONITOR_DEVICE_ID",
      "MONITOR_WEB_ID"
    ],
    "domains": ["tiktok.com", "tiktokv.com"]
  }]
}
```

**被阻止的Cookie**:
- `MONITOR_DEVICE_ID` - 设备监控ID
- `MONITOR_WEB_ID` - Web监控ID

## Storage规则

```javascript
{
  "enabled": true,
  "sampleRate": 0.0001,  // 0.01%采样率
  "valueRate": 0
}
```

## 页面上下文 (pageContext)

框架记录以下页面信息：
```javascript
{
  region: "...",      // 地区
  business: "...",    // 业务线
  env: "...",         // 环境
  url: "...",         // 当前URL
  host: "...",        // 主机名
  path: "...",        // 路径
  search: "...",      // 查询参数
  hash: "...",        // 哈希
  login: "...",       // 登录状态
  ftc: "...",         // FTC相关
  cb_enabled: "..."   // Cookie Banner状态
}
```

## 逆向分析要点

### 1. 绕过API监控
框架通过Proxy或Hook拦截API调用，可能的绕过方式：
- 在框架加载前保存原始API引用
- 使用iframe中的原始API
- 通过原型链访问原始方法

### 2. Cookie阻止器
某些设备追踪Cookie被阻止设置，说明这些是敏感的指纹标识。

### 3. 采样率
大部分API采样率为100%，但部分敏感操作（如getBattery）采样率很低(0.005%)，表明这些API调用会被上报到服务器。

## 相关全局变量

```javascript
window.__PNS_RUNTIME__        // 主运行时对象
window.__PUMBAA_RUN_FLAG__    // Pumbaa运行标志
window.__PNS_SW_CACHE__       // ServiceWorker缓存
```

---
*分析时间: 2026-01-29*
*文件版本: 2.0.0.302*
