# TikTok 字体检测逆向工程完整分析

## 一、字体检测源码位置

**文件**: `webmssdk.js`  
**函数**: 匿名函数，存储指纹到 `t.o[4]`

## 二、完整的字体检测源码 (美化后)

```javascript
function (n) {
    var t = n,
        r = "mmmmmmmmmmlli",  // 测试字符串
        i = ["monospace", "sans-serif", "serif"],  // 基准字体
        o = {},  // 存储基准宽度
        e = {};  // 存储基准高度
    
    // 边界检查: 如果没有 document.body，返回 "0"
    if (!document.body)
        return ((t.o[4] = { data: "0" }), { data: "0" });
    
    // 第一步: 测量基准字体的尺寸
    for (var u = 0; u < i.length; u++) {
        var f = i[u],
            a = document.createElement("span");
        a.innerHTML = r;
        a.style.fontSize = "72px";
        a.style.fontFamily = f;
        document.body.appendChild(a);
        o[f] = a.offsetWidth;   // 记录宽度
        e[f] = a.offsetHeight;  // 记录高度
        document.body.removeChild(a);
    }
    
    // 第二步: 检测29种目标字体
    var c = [
        "Trebuchet MS", "Wingdings", "Sylfaen", "Segoe UI", "Constantia",
        "SimSun-ExtB", "MT Extra", "Gulim", "Leelawadee", "Tunga",
        "Meiryo", "Vrinda", "CordiaUPC", "Aparajita", "IrisUPC",
        "Palatino", "Colonna MT", "Playbill", "Jokerman", "Parchment",
        "MS Outlook", "Tw Cen MT", "OPTIMA", "Futura", "AVENIR",
        "Arial Hebrew", "Savoye LET", "Castellar", "MYRIAD PRO"
    ];
    
    var v = 0;  // 结果位图 (32位整数)
    
    for (var s = 0; s < c.length; s++) {
        for (var d = 0; d < i.length; d++) {
            var h = i[d],  // 基准字体
                l = document.createElement("span");
            l.innerHTML = r;
            l.style.fontSize = "72px";
            
            var w = c[s];  // 目标字体
            l.style.fontFamily = w + "," + h;  // "目标字体,基准字体"
            document.body.appendChild(l);
            
            // 比较尺寸是否变化
            var A = l.offsetWidth !== o[h] || l.offsetHeight !== e[h];
            
            document.body.removeChild(l);
            
            if (A) {  // 如果尺寸变化，说明字体存在
                if (s < 30) {
                    v |= 1 << s;  // 用位运算记录 (第s位设为1)
                }
                break;  // 跳出内层循环，检测下一个字体
            }
        }
    }
    
    // 第三步: 存储结果 (16进制字符串)
    t.o[4] = { data: v.toString(16) };
}
```

## 三、检测原理详解

### 3.1 测试字符串选择

```javascript
r = "mmmmmmmmmmlli"
```

选择 `m`、`l`、`i` 的原因：
- `m` - 宽字符，在不同字体中宽度差异大
- `l` - 窄字符，用于测量笔画粗细
- `i` - 点字符，用于检测字体是否有衬线

### 3.2 基准字体作用

```javascript
i = ["monospace", "sans-serif", "serif"]
```

这三种是 CSS 通用字体族，任何浏览器都支持：
- `monospace` - 等宽字体 (如 Courier)
- `sans-serif` - 无衬线字体 (如 Arial)
- `serif` - 有衬线字体 (如 Times)

### 3.3 检测逻辑

```javascript
l.style.fontFamily = w + "," + h;  // "Arial,monospace"
```

CSS 字体回退机制：
1. 如果 "Arial" 存在，使用 Arial 渲染
2. 如果 "Arial" 不存在，回退到 monospace 渲染

**检测方法**：比较渲染后的尺寸
- 尺寸变化 → 目标字体存在
- 尺寸不变 → 目标字体不存在，回退到基准字体

### 3.4 位图编码

```javascript
v |= 1 << s;  // 位运算
```

| 字体索引 | 位掩码 | 示例 |
|---------|--------|------|
| 0 (Trebuchet MS) | 0x00000001 | 第0位 |
| 1 (Wingdings) | 0x00000002 | 第1位 |
| 2 (Sylfaen) | 0x00000004 | 第2位 |
| ... | ... | ... |
| 29 (MYRIAD PRO) | 0x20000000 | 第29位 |

## 四、字体数据的用途

### 4.1 存储位置

```javascript
t.o[4] = { data: v.toString(16) };  // 存储到 t.o[4]
```

### 4.2 参与签名计算

字体指纹是设备指纹的一部分，最终参与到 **X-Bogus** 签名的计算：

```
设备指纹 = {
    字体指纹 (o[4]),      // 例如: "1fffffff"
    Canvas指纹,           // Canvas 渲染哈希
    WebGL指纹,            // GPU 信息哈希
    Audio指纹,            // AudioContext 哈希
    屏幕信息,             // 分辨率、颜色深度
    时区信息,             // 时区偏移
    浏览器信息,           // UA、插件列表
    ...
}

X-Bogus = encrypt(设备指纹 + 请求URL + 时间戳)
```

### 4.3 实际网络请求示例

```
GET /api/post/item_list/
?aid=1988
&count=30
&cursor=0
&msToken=xxx...
&X-Bogus=DFSzswVLxxxxxxxBfr  ← 包含字体指纹的签名
```

## 五、字体检测的作用

### 5.1 设备唯一性识别

| 系统 | 典型字体指纹 | 说明 |
|------|-------------|------|
| Windows 10 中文 | `0x08F6FFEF` | 包含 SimSun-ExtB、Meiryo |
| Windows 10 英文 | `0x08F4FFEF` | 无 SimSun-ExtB |
| macOS | `0x07C08000` | 有 Palatino、OPTIMA、Futura |
| Linux | `0x00000001` | 通常只有 Trebuchet MS |

### 5.2 反爬虫/风控

1. **识别自动化工具**
   - Headless 浏览器通常缺少系统字体
   - 虚拟机字体集不完整

2. **跨浏览器追踪**
   - 同一设备的 Chrome/Firefox/Edge 字体指纹相同
   - 可用于关联不同浏览器的账号

3. **地区识别**
   - 中文系统有中文字体
   - 日文系统有日文字体
   - 可用于验证 IP 与系统语言是否匹配

### 5.3 账号关联

TikTok 使用字体指纹来：
- 检测多账号操作
- 识别批量注册
- 关联被封账号的新账号

## 六、绕过方案

### 6.1 方案1: Hook offsetWidth

```javascript
const originalDesc = Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'offsetWidth');

Object.defineProperty(HTMLElement.prototype, 'offsetWidth', {
    get: function() {
        // 如果是字体检测元素
        if (this.innerHTML === 'mmmmmmmmmmlli' && this.style.fontSize === '72px') {
            // 返回固定值或伪造值
            return 100;
        }
        return originalDesc.get.call(this);
    }
});
```

### 6.2 方案2: 伪造特定指纹

```javascript
// 伪造为 Windows 10 中文版
const targetFingerprint = 0x08F6FFEF;

// Hook 来返回指定的字体存在/不存在
const fontsToFake = {
    "Trebuchet MS": true,
    "Wingdings": true,
    "Sylfaen": true,
    "Segoe UI": true,
    "Constantia": true,
    "SimSun-ExtB": true,  // 中文系统特有
    // ...
};
```

### 6.3 方案3: 安装目标字体

最可靠的方式是在系统中安装 TikTok 检测的所有字体，使指纹与目标环境完全一致。

## 七、关键代码定位

### 7.1 搜索关键词

```javascript
// 在 webmssdk.js 中搜索
"mmmmmmmmmmlli"        // 测试字符串
"monospace"            // 基准字体
".offsetWidth"         // 宽度测量
"t.o[4]"               // 数据存储
".toString(16)"        // 16进制编码
```

### 7.2 Hook 点

| 位置 | 用途 | Hook 方法 |
|------|------|----------|
| `HTMLElement.prototype.offsetWidth` | 字体宽度测量 | Object.defineProperty |
| `HTMLElement.prototype.offsetHeight` | 字体高度测量 | Object.defineProperty |
| `document.createElement` | span 元素创建 | Proxy |
| `document.body.appendChild` | 元素插入 | Proxy |

## 八、测试验证

### 8.1 浏览器控制台测试

```javascript
// 复制粘贴到控制台执行
(function() {
    const r = "mmmmmmmmmmlli";
    const baseFonts = ["monospace", "sans-serif", "serif"];
    const testFonts = [
        "Trebuchet MS", "Wingdings", "Sylfaen", "Segoe UI", "Constantia",
        "SimSun-ExtB", "MT Extra", "Gulim", "Leelawadee", "Tunga",
        "Meiryo", "Vrinda", "CordiaUPC", "Aparajita", "IrisUPC",
        "Palatino", "Colonna MT", "Playbill", "Jokerman", "Parchment",
        "MS Outlook", "Tw Cen MT", "OPTIMA", "Futura", "AVENIR",
        "Arial Hebrew", "Savoye LET", "Castellar", "MYRIAD PRO"
    ];
    
    const baseWidths = {};
    baseFonts.forEach(font => {
        const span = document.createElement('span');
        span.innerHTML = r;
        span.style.cssText = 'font-size:72px;font-family:' + font + ';position:absolute;left:-9999px';
        document.body.appendChild(span);
        baseWidths[font] = span.offsetWidth;
        document.body.removeChild(span);
    });
    
    let v = 0;
    const detected = [];
    
    testFonts.forEach((font, i) => {
        for (const base of baseFonts) {
            const span = document.createElement('span');
            span.innerHTML = r;
            span.style.cssText = 'font-size:72px;font-family:"' + font + '",' + base + ';position:absolute;left:-9999px';
            document.body.appendChild(span);
            if (span.offsetWidth !== baseWidths[base]) {
                if (i < 30) v |= 1 << i;
                detected.push(font);
                document.body.removeChild(span);
                break;
            }
            document.body.removeChild(span);
        }
    });
    
    console.log('字体指纹 (hex):', v.toString(16));
    console.log('字体指纹 (dec):', v);
    console.log('检测到的字体:', detected);
})();
```

### 8.2 预期输出示例

```
字体指纹 (hex): 8f6ffef
字体指纹 (dec): 150339567
检测到的字体: ["Trebuchet MS", "Wingdings", "Sylfaen", "Segoe UI", ...]
```
