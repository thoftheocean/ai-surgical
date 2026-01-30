# TikTok指纹浏览器检测绕过指南

## 检测到的问题及修复方案

### 1. 🔴 Window位置/尺寸异常 (必须修复)

**问题代码**:
```javascript
window.outerWidth   // 160 (异常)
window.outerHeight  // 28 (异常)
window.screenX      // -32000 (异常)
window.screenY      // -32000 (异常)
```

**修复方案**:
```javascript
// 在页面加载前注入
Object.defineProperty(window, 'outerWidth', {
    get: () => window.innerWidth + 16  // 边框宽度
});
Object.defineProperty(window, 'outerHeight', {
    get: () => window.innerHeight + 87  // 标题栏+边框
});
Object.defineProperty(window, 'screenX', {
    get: () => 0  // 或随机小正数
});
Object.defineProperty(window, 'screenY', {
    get: () => 0  // 或随机小正数
});
```

### 2. 🔴 时区/语言/字体不一致 (必须修复)

**方案A**: 统一为中国环境
```javascript
// 时区
Intl.DateTimeFormat = class extends Intl.DateTimeFormat {
    resolvedOptions() {
        return { ...super.resolvedOptions(), timeZone: 'Asia/Shanghai' };
    }
};

// 语言
Object.defineProperty(navigator, 'language', { get: () => 'zh-CN' });
Object.defineProperty(navigator, 'languages', { get: () => ['zh-CN', 'zh'] });
```

**方案B**: 统一为美国环境 (需要卸载中文字体或隐藏)
```javascript
// 伪造字体检测 - 只返回英文字体
// 需要Hook document.fonts 或 canvas measureText
```

### 3. 🟡 GPU信息伪造 (建议修复)

**问题**: GeForce 9600 GT 太老

**建议使用的GPU列表** (常见且合理):
```
- NVIDIA GeForce GTX 1650
- NVIDIA GeForce RTX 3060
- AMD Radeon RX 580
- Intel UHD Graphics 630
- Intel Iris Xe Graphics
```

**配置示例** (指纹浏览器):
```json
{
    "webgl.vendor": "Google Inc. (NVIDIA)",
    "webgl.renderer": "ANGLE (NVIDIA, NVIDIA GeForce GTX 1650 Direct3D11 vs_5_0 ps_5_0, D3D11)"
}
```

### 4. 🟡 网络信息修复

```javascript
// 统一为4G/WiFi环境
if (navigator.connection) {
    Object.defineProperty(navigator.connection, 'effectiveType', {
        get: () => '4g'
    });
    Object.defineProperty(navigator.connection, 'rtt', {
        get: () => 50  // 4G典型值
    });
    Object.defineProperty(navigator.connection, 'downlink', {
        get: () => 10  // 10 Mbps
    });
}
```

## 完整的指纹环境配置建议

### 配置方案1: 中国用户

```json
{
    "navigator": {
        "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "language": "zh-CN",
        "languages": ["zh-CN", "zh"],
        "platform": "Win32",
        "hardwareConcurrency": 8,
        "deviceMemory": 8
    },
    "timezone": "Asia/Shanghai",
    "screen": {
        "width": 1920,
        "height": 1080,
        "colorDepth": 24
    },
    "window": {
        "innerWidth": 1920,
        "innerHeight": 937,
        "outerWidth": 1936,
        "outerHeight": 1056,
        "screenX": 0,
        "screenY": 0
    },
    "webgl": {
        "vendor": "Google Inc. (NVIDIA)",
        "renderer": "ANGLE (NVIDIA, NVIDIA GeForce GTX 1650 Direct3D11 vs_5_0 ps_5_0, D3D11)"
    }
}
```

### 配置方案2: 美国用户

```json
{
    "navigator": {
        "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "language": "en-US",
        "languages": ["en-US", "en"],
        "platform": "Win32",
        "hardwareConcurrency": 8,
        "deviceMemory": 8
    },
    "timezone": "America/New_York",
    "fonts": ["Arial", "Times New Roman", "Verdana", "Georgia", "Courier New"]
}
```

## TikTok检测点总结

| 检测项 | 权重 | 你的状态 |
|--------|------|----------|
| window.outerWidth/Height | 高 | ❌ 异常 |
| window.screenX/Y | 高 | ❌ 异常 |
| 时区/语言/字体一致性 | 高 | ❌ 不一致 |
| GPU合理性 | 中 | ⚠️ 可疑 |
| webdriver | 高 | ✅ false |
| navigator.plugins | 中 | ✅ 正常 |
| Canvas指纹 | 中 | ✅ 正常 |
| AudioContext | 中 | ✅ 正常 |

## 指纹浏览器推荐设置

1. **启用真实窗口模式** - 不要使用headless
2. **统一地区设置** - 时区/语言/字体保持一致
3. **使用合理的GPU** - 不要用太老或太新的显卡
4. **随机但合理的值** - 不要每次都用固定值
5. **启用真实渲染** - Canvas/WebGL要有真实渲染结果
