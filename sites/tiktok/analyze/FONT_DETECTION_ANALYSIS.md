# TikTok 字体检测逆向分析

## 源码位置

**文件**: `webmssdk.js`  
**位置**: 约第 132814 字符处

## 检测方法

TikTok 使用经典的 **Canvas/DOM 字体检测** 方法：

### 算法流程

```javascript
// 1. 测试字符串
var r = "mmmmmmmmmmlli";  // 使用 m, l, i 组合，这些字符在不同字体中宽度差异大

// 2. 基准字体
var i = ["monospace", "sans-serif", "serif"];

// 3. 创建基准测量
var o = {}, e = {};  // o = 宽度, e = 高度

for (var u = 0; u < i.length; u++) {
    var f = i[u];
    var a = document.createElement("span");
    a.innerHTML = r;
    a.style.fontSize = "72px";
    a.style.fontFamily = f;
    document.body.appendChild(a);
    o[f] = a.offsetWidth;   // 记录基准宽度
    e[f] = a.offsetHeight;  // 记录基准高度
    document.body.removeChild(a);
}

// 4. 检测目标字体
var c = [/* 29种字体 */];
var v = 0;  // 结果位图

for (var s = 0; s < c.length; s++) {
    for (var d = 0; d < i.length; d++) {
        var h = i[d];  // 基准字体
        var l = document.createElement("span");
        l.innerHTML = r;
        l.style.fontSize = "72px";
        var w = c[s];  // 目标字体
        l.style.fontFamily = w + "," + h;  // 设置 "目标字体,基准字体"
        document.body.appendChild(l);
        
        // 比较宽度/高度是否变化
        var A = l.offsetWidth !== o[h] || l.offsetHeight !== e[h];
        
        document.body.removeChild(l);
        
        if (A) {  // 如果尺寸变化，说明字体存在
            if (s < 30) {
                v |= 1 << s;  // 用位运算记录
            }
            break;
        }
    }
}

// 5. 结果编码为16进制
t.o[4] = { data: v.toString(16) };
```

## TikTok 检测的字体列表 (29种)

| 序号 | 字体名称 | 位掩码 | 系统 |
|------|----------|--------|------|
| 1 | Trebuchet MS | 0x00000001 | Windows |
| 2 | Wingdings | 0x00000002 | Windows |
| 3 | Sylfaen | 0x00000004 | Windows |
| 4 | Segoe UI | 0x00000008 | Windows |
| 5 | Constantia | 0x00000010 | Windows |
| 6 | SimSun-ExtB | 0x00000020 | Windows (中文) |
| 7 | MT Extra | 0x00000040 | Windows |
| 8 | Gulim | 0x00000080 | Windows (韩文) |
| 9 | Leelawadee | 0x00000100 | Windows (泰文) |
| 10 | Tunga | 0x00000200 | Windows (卡纳达语) |
| 11 | Meiryo | 0x00000400 | Windows (日文) |
| 12 | Vrinda | 0x00000800 | Windows (孟加拉语) |
| 13 | CordiaUPC | 0x00001000 | Windows (泰文) |
| 14 | Aparajita | 0x00002000 | Windows (印度语) |
| 15 | IrisUPC | 0x00004000 | Windows (泰文) |
| 16 | Palatino | 0x00008000 | macOS |
| 17 | Colonna MT | 0x00010000 | Windows |
| 18 | Playbill | 0x00020000 | Windows |
| 19 | Jokerman | 0x00040000 | Windows |
| 20 | Parchment | 0x00080000 | Windows |
| 21 | MS Outlook | 0x00100000 | Windows |
| 22 | Tw Cen MT | 0x00200000 | Windows |
| 23 | OPTIMA | 0x00400000 | macOS |
| 24 | Futura | 0x00800000 | macOS |
| 25 | AVENIR | 0x01000000 | macOS |
| 26 | Arial Hebrew | 0x02000000 | macOS |
| 27 | Savoye LET | 0x04000000 | macOS |
| 28 | Castellar | 0x08000000 | Windows |
| 29 | MYRIAD PRO | 0x10000000 | Adobe |

## 结果解析

字体检测结果是一个 **16进制数字**，每一位代表一个字体是否存在：

### 示例

- `0x1FFFFFFF` = 所有29种字体都存在
- `0x0000000F` = 只有前4种字体存在 (Trebuchet MS, Wingdings, Sylfaen, Segoe UI)
- `0x00C00000` = 只有 OPTIMA 和 Futura 存在 (典型 macOS)

### 典型系统指纹

| 系统 | 典型值 | 存在的字体 |
|------|--------|-----------|
| Windows 10/11 中文版 | `0x08F6FFEF` | Windows字体 + SimSun-ExtB |
| Windows 10/11 英文版 | `0x08F4FFEF` | Windows字体 |
| macOS | `0x07C08000` | Palatino, OPTIMA, Futura, AVENIR, Arial Hebrew, Savoye LET |
| Linux | `0x00000001` | 通常只有 Trebuchet MS |

## 逆向还原代码

```javascript
/**
 * TikTok 字体检测还原
 * 来源: webmssdk.js
 */
function detectFonts() {
    const testString = "mmmmmmmmmmlli";
    const baseFonts = ["monospace", "sans-serif", "serif"];
    const testFonts = [
        "Trebuchet MS", "Wingdings", "Sylfaen", "Segoe UI", "Constantia",
        "SimSun-ExtB", "MT Extra", "Gulim", "Leelawadee", "Tunga",
        "Meiryo", "Vrinda", "CordiaUPC", "Aparajita", "IrisUPC",
        "Palatino", "Colonna MT", "Playbill", "Jokerman", "Parchment",
        "MS Outlook", "Tw Cen MT", "OPTIMA", "Futura", "AVENIR",
        "Arial Hebrew", "Savoye LET", "Castellar", "MYRIAD PRO"
    ];
    
    // 创建测量元素
    const createSpan = (fontFamily) => {
        const span = document.createElement("span");
        span.innerHTML = testString;
        span.style.fontSize = "72px";
        span.style.fontFamily = fontFamily;
        span.style.position = "absolute";
        span.style.left = "-9999px";
        span.style.visibility = "hidden";
        return span;
    };
    
    // 测量基准字体
    const baseWidths = {};
    const baseHeights = {};
    
    baseFonts.forEach(font => {
        const span = createSpan(font);
        document.body.appendChild(span);
        baseWidths[font] = span.offsetWidth;
        baseHeights[font] = span.offsetHeight;
        document.body.removeChild(span);
    });
    
    // 检测目标字体
    let result = 0;
    const detected = [];
    
    testFonts.forEach((testFont, index) => {
        for (const baseFont of baseFonts) {
            const span = createSpan(`${testFont},${baseFont}`);
            document.body.appendChild(span);
            
            const widthChanged = span.offsetWidth !== baseWidths[baseFont];
            const heightChanged = span.offsetHeight !== baseHeights[baseFont];
            
            document.body.removeChild(span);
            
            if (widthChanged || heightChanged) {
                if (index < 30) {
                    result |= (1 << index);
                }
                detected.push(testFont);
                break;
            }
        }
    });
    
    return {
        hex: result.toString(16),
        decimal: result,
        count: detected.length,
        fonts: detected
    };
}

// 使用示例
const fontFingerprint = detectFonts();
console.log("字体指纹:", fontFingerprint.hex);
console.log("检测到的字体:", fontFingerprint.fonts);
```

## 伪造/绕过方案

### 方案1: Hook offsetWidth/offsetHeight

```javascript
// 返回固定值，使所有字体检测失败
const originalOffsetWidth = Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'offsetWidth');
Object.defineProperty(HTMLElement.prototype, 'offsetWidth', {
    get: function() {
        // 如果是字体检测元素，返回固定值
        if (this.style.fontFamily && this.innerHTML === 'mmmmmmmmmmlli') {
            return 100;  // 固定宽度
        }
        return originalOffsetWidth.get.call(this);
    }
});
```

### 方案2: 伪造特定字体指纹

```javascript
// 伪造为 Windows 10 中文版
const targetFingerprint = 0x08F6FFEF;
const targetFonts = [
    "Trebuchet MS", "Wingdings", "Sylfaen", "Segoe UI", "Constantia",
    "SimSun-ExtB", "MT Extra", "Gulim", "Meiryo", "Palatino",
    "Colonna MT", "Playbill", "Jokerman", "Parchment", "MS Outlook",
    "Tw Cen MT", "Castellar"
];

// 修改 offsetWidth getter 来返回特定字体存在的结果
```

### 方案3: 安装对应字体

最可靠的方式是在系统中安装 TikTok 检测的字体，使指纹与目标平台一致。

## 注意事项

1. **字体指纹是系统级别的** - 同一台机器的所有浏览器配置文件会返回相同的字体指纹
2. **字体指纹可用于跨浏览器追踪** - 即使使用不同的浏览器，字体指纹也相同
3. **TikTok 只检测29种字体** - 相比 fingerprintjs 的数百种字体，TikTok的检测较轻量
4. **结果存储在 `t.o[4]`** - 最终以16进制字符串形式提交

## 相关文件

- `webmssdk.js` - 主要指纹采集SDK
- `secsdk-lastest.umd.js` - 安全验证SDK
- `webmssdk_ex.js` - 扩展指纹采集
