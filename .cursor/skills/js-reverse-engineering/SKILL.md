---
name: js-reverse-engineering
description: Web端JavaScript逆向工程分析。分析混淆代码、定位加密函数、破解签名算法、Webpack逆向。当用户提到JS逆向、反混淆、加密参数、签名算法、webpack分析、OB混淆、浏览器调试时使用。
---

# JavaScript 逆向工程 (Web端)

## 触发关键词

当对话中出现以下关键词时自动加载此skill：

**核心词**: JS逆向、JavaScript逆向、前端逆向、Web逆向

**混淆相关**: 反混淆、OB混淆、obfuscator、代码混淆、webpack、打包分析、AST还原、控制流平坦化

**加密相关**: 加密参数、签名算法、sign参数、token生成、密钥提取、AES加密、RSA加密、MD5签名

**调试相关**: 浏览器调试、DevTools、断点调试、Hook、反调试、debugger绕过、XHR断点

**工具相关**: Fiddler替换、Charles抓包、Puppeteer、execjs、补环境

---

## 分析工作流

```
任务进度:
- [ ] 抓包分析请求/响应
- [ ] 定位关键接口和加密参数
- [ ] 找到对应JS文件
- [ ] 分析混淆类型
- [ ] 断点调试定位加密函数
- [ ] 提取/复现加密逻辑
```

### 快速定位加密入口
- 搜索关键字: `encrypt`, `sign`, `token`, `secret`, `md5`, `sha`, `aes`, `base64`
- XHR断点: Network面板右键请求 → Copy as fetch → 搜索参数名
- 全局搜索: `Ctrl+Shift+F` 搜索参数名或API路径
- 调用栈: 在Network请求的Initiator列查看调用链

## 混淆类型识别

| 特征 | 混淆类型 | 处理方案 |
|------|----------|----------|
| `_0x` 变量名 + 大数组 | OB混淆 | AST还原或在线工具 |
| `webpackJsonp` / `__webpack_require__` | Webpack | 分析入口找导出 |
| `eval(function(p,a,c,k,e,d)` | Packer | 在线解压或执行eval |
| 控制流平坦化(switch-case大循环) | OLLVM风格 | 动态调试为主 |
| `\x` 十六进制字符串 | 字符串编码 | 直接执行还原 |

## 断点调试技巧

```javascript
// 条件断点 - 参数匹配时断住
arguments[0] === 'target_value'

// 日志断点 - 不中断输出信息
console.log('func called:', arguments, new Error().stack)

// Hook原生函数
const _stringify = JSON.stringify;
JSON.stringify = function() {
    console.log('JSON.stringify:', arguments);
    return _stringify.apply(this, arguments);
};

// Hook所有XHR请求
const _open = XMLHttpRequest.prototype.open;
XMLHttpRequest.prototype.open = function(method, url) {
    console.log('XHR:', method, url);
    return _open.apply(this, arguments);
};
```

## 常见加密算法识别

| 特征 | 算法 | 还原要点 |
|------|------|----------|
| 32位hex输出 | MD5 | 检查是否加盐、多次hash |
| 40位hex输出 | SHA1 | 同上 |
| 64位hex输出 | SHA256 | 同上 |
| Base64 + 固定块大小 | AES | 找key/iv，确定模式(CBC/ECB) |
| 非对称 + 公钥 | RSA | 提取公钥，确定padding |
| 时间戳相关 | HMAC | 找密钥和消息格式 |

## 代码提取与复用

**Node.js环境模拟**:
```javascript
// 补环境基础框架
const window = global;
const document = {
    cookie: '',
    createElement: () => ({}),
    getElementById: () => null,
};
const navigator = { userAgent: 'Mozilla/5.0...', platform: 'Win32' };
const location = { href: 'https://example.com', hostname: 'example.com' };
```

**Python调用JS**:
```python
import execjs
ctx = execjs.compile(open('crypto.js').read())
result = ctx.call('encrypt', params)
```

## 工具速查

| 工具 | 用途 |
|------|------|
| DevTools Overrides | 本地覆盖JS文件调试 |
| Fiddler AutoResponder | 替换远程JS文件 |
| Charles Map Local | 同上 |
| AST Explorer | 在线分析AST结构 |
| Babel | 编写transform插件还原混淆 |
| Puppeteer | 自动化 + evaluate注入 |

## 进阶资料

- 详细技术文档: [techniques.md](techniques.md)
- 工具配置参考: [tools-reference.md](tools-reference.md)
