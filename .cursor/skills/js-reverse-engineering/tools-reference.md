# Web端JS逆向工具参考

## Chrome DevTools

### 调试快捷键
| 快捷键 | 功能 |
|--------|------|
| `F8` | 继续执行 |
| `F10` | 单步跳过 |
| `F11` | 单步进入 |
| `Shift+F11` | 单步跳出 |
| `Ctrl+\` | 暂停执行 |
| `Ctrl+Shift+F` | 全局搜索 |

### Overrides 本地覆盖
1. Sources → Overrides → Select folder
2. 允许DevTools访问该文件夹
3. Network面板右键JS → Save for overrides
4. 修改本地文件，刷新生效

### Snippets 代码片段
```javascript
// Sources → Snippets → New snippet
// Hook XMLHttpRequest
(function() {
    const _open = XMLHttpRequest.prototype.open;
    const _send = XMLHttpRequest.prototype.send;
    
    XMLHttpRequest.prototype.open = function(method, url) {
        this._url = url;
        return _open.apply(this, arguments);
    };
    
    XMLHttpRequest.prototype.send = function(body) {
        console.log('XHR:', this._url, body);
        return _send.apply(this, arguments);
    };
})();
```

## Fiddler

### AutoResponder 规则
```
# 精确匹配
EXACT:https://example.com/api/v1/encrypt.js

# 正则匹配
regex:(?insx).+/encrypt\.js.*

# 响应: Find a file → 选择本地JS文件
```

### FiddlerScript
```csharp
static function OnBeforeResponse(oSession: Session) {
    if (oSession.uriContains("encrypt.js")) {
        oSession.utilDecodeResponse();
        var body = oSession.GetResponseBodyAsString();
        body = body.replace(/debugger/g, '');
        oSession.utilSetResponseBody(body);
    }
}
```

## Charles

### Map Local
右键请求 → Map Local → 选择本地文件

### Rewrite 规则
```
Location: Body
Match: debugger;?
Replace: (留空)
勾选 Regex
```

## mitmproxy

```python
# modify.py
from mitmproxy import http

def response(flow: http.HTTPFlow):
    if "encrypt.js" in flow.request.url:
        flow.response.text = flow.response.text.replace("debugger", "")
```

```bash
mitmdump -s modify.py -p 8080
```

## AST处理

### Babel本地使用
```bash
npm install @babel/core @babel/parser @babel/generator @babel/traverse
```

```javascript
const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const generator = require('@babel/generator').default;
const t = require('@babel/types');
const fs = require('fs');

const code = fs.readFileSync('obfuscated.js', 'utf-8');
const ast = parser.parse(code);

traverse(ast, {
    CallExpression(path) {
        // 字符串解密还原
    },
    IfStatement(path) {
        // 删除死代码
        if (path.node.test.type === 'BooleanLiteral') {
            if (path.node.test.value) {
                path.replaceWithMultiple(path.node.consequent.body);
            } else {
                path.remove();
            }
        }
    }
});

fs.writeFileSync('deobfuscated.js', generator(ast).code);
```

## Puppeteer

```javascript
const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    
    // 页面加载前注入Hook
    await page.evaluateOnNewDocument(() => {
        const _fetch = fetch;
        window.fetch = async function() {
            console.log('fetch:', arguments);
            return _fetch.apply(this, arguments);
        };
    });
    
    await page.goto('https://example.com');
    
    // 执行并获取加密结果
    const result = await page.evaluate(() => {
        return window.encrypt('test');
    });
    console.log('Result:', result);
})();
```

## Node.js环境复现

```javascript
// env.js
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>', {
    url: 'https://example.com',
});

global.window = dom.window;
global.document = dom.window.document;
global.navigator = dom.window.navigator;
global.location = dom.window.location;
global.atob = (str) => Buffer.from(str, 'base64').toString('binary');
global.btoa = (str) => Buffer.from(str, 'binary').toString('base64');

require('./target.js');
console.log(window.encrypt('test'));
```
