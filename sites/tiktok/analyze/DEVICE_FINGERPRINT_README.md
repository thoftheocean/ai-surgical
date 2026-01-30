# TikTok设备指纹收集脚本

基于TikTok `webmssdk.js` 逆向还原的设备指纹收集工具。

## 文件说明

```
sites/tiktok/js/
├── device_fingerprint.js    # 独立的设备指纹收集脚本 (本文件)
├── webmssdk.js              # TikTok原始指纹SDK
├── webmssdk_ex.js           # TikTok扩展指纹SDK
└── ...
```

## 收集的设备信息

### 1. Navigator信息
| 字段 | 说明 | 示例 |
|------|------|------|
| userAgent | 浏览器UA | Mozilla/5.0 (Windows NT 10.0...) |
| platform | 操作系统平台 | Win32 |
| language | 语言 | zh-CN |
| hardwareConcurrency | CPU核心数 | 16 |
| deviceMemory | 设备内存(GB) | 8 |
| maxTouchPoints | 最大触摸点 | 0 |
| webdriver | 自动化检测 | true/false |
| plugins | 浏览器插件列表 | [...] |

### 2. Screen信息
| 字段 | 说明 | 示例 |
|------|------|------|
| width | 屏幕宽度 | 1920 |
| height | 屏幕高度 | 1080 |
| colorDepth | 色深 | 24 |
| devicePixelRatio | 像素比 | 1 |

### 3. Canvas指纹
- 绘制特定图形和文字
- 生成dataURL并哈希
- 不同设备会产生不同结果

### 4. WebGL指纹
| 字段 | 说明 | 示例 |
|------|------|------|
| unmaskedVendor | GPU厂商 | Google Inc. (AMD) |
| unmaskedRenderer | GPU型号 | ANGLE (AMD, AMD Radeon...) |
| maxTextureSize | 最大纹理尺寸 | 16384 |
| extensions | 支持的扩展数 | 35 |

### 5. AudioContext指纹
| 字段 | 说明 |
|------|------|
| sampleRate | 采样率 |
| baseLatency | 基础延迟 |
| channelCount | 声道数 |
| fingerprint | 音频处理指纹 |

### 6. 字体检测
- 检测50+种常用字体
- 中文字体: 微软雅黑、宋体、黑体等
- 西文字体: Arial、Times New Roman等

### 7. 其他信息
- 时区信息
- 网络连接信息
- 电池状态
- 存储配额
- 浏览器特性支持

## 使用方法

### 浏览器中使用

```html
<script src="device_fingerprint.js"></script>
<script>
// 收集完整指纹
DeviceFingerprint.collect().then(fp => {
    console.log('完整指纹:', fp);
    console.log('指纹哈希:', fp.hash);
});

// 快速获取设备ID
DeviceFingerprint.getDeviceId().then(id => {
    console.log('设备ID:', id);
});
</script>
```

### Node.js中使用 (需要jsdom)

```javascript
const DeviceFingerprint = require('./device_fingerprint.js');

// 配合jsdom模拟浏览器环境
const { JSDOM } = require('jsdom');
const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>');
global.window = dom.window;
global.document = dom.window.document;
global.navigator = dom.window.navigator;
// ...

DeviceFingerprint.collect().then(console.log);
```

## 输出示例

```json
{
  "timestamp": 1738139000000,
  "version": "1.0.0",
  "navigator": {
    "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)...",
    "platform": "Win32",
    "language": "zh-CN",
    "hardwareConcurrency": 16,
    "deviceMemory": 8,
    "maxTouchPoints": 0,
    "webdriver": false
  },
  "screen": {
    "width": 1920,
    "height": 1080,
    "colorDepth": 24
  },
  "canvas": {
    "hash": "-6fd2ceb6",
    "length": 4270
  },
  "webgl": {
    "unmaskedVendor": "Google Inc. (AMD)",
    "unmaskedRenderer": "ANGLE (AMD, AMD Radeon 780M Graphics...)",
    "extensionsCount": 35
  },
  "audio": {
    "sampleRate": 48000,
    "fingerprint": "23.456789"
  },
  "fonts": {
    "detected": ["Arial", "Microsoft YaHei", "SimSun", ...],
    "count": 15
  },
  "timezone": {
    "timezone": "Asia/Shanghai",
    "offset": -480
  },
  "hash": "a1b2c3d4e5f6..."  // 完整指纹哈希
}
```

## 与TikTok webmssdk.js对比

| 功能 | webmssdk.js | device_fingerprint.js |
|------|-------------|----------------------|
| Navigator信息 | ✓ | ✓ |
| Screen信息 | ✓ | ✓ |
| Canvas指纹 | ✓ | ✓ |
| WebGL指纹 | ✓ | ✓ |
| AudioContext | ✓ | ✓ |
| 字体检测 | ✓ | ✓ |
| 电池API | ✓ | ✓ |
| 网络信息 | ✓ | ✓ |
| 代码混淆 | ✓ | ✗ (明文) |
| msToken生成 | ✓ | ✗ |

## 注意事项

1. **隐私合规**: 收集设备指纹需要用户同意
2. **浏览器兼容**: 部分API在某些浏览器不支持
3. **反检测**: 可能被隐私保护扩展阻止
4. **指纹稳定性**: 部分指纹可能随浏览器更新变化

## 用途

- 用户识别/追踪
- 反欺诈检测
- 设备指纹研究
- 自动化检测绕过研究

---
*基于TikTok webmssdk.js v2.0.0.447逆向*
