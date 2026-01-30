# JS逆向进阶技术

## OB混淆还原

### 特征识别
```javascript
// 典型OB混淆结构
var _0x1234 = ['base64str1', 'base64str2', ...]; // 大字符串数组
(function(_0x5678, _0x9abc) {
    // 数组移位函数
})(_0x1234, 0x123);
var _0xdef = function(_0x111, _0x222) {
    // 解密函数
    return _0x1234[_0x111 - 0x100];
};
```

### AST还原步骤
1. **提取字符串数组**: 找到大数组声明
2. **执行移位函数**: 在本地还原数组顺序
3. **内联解密调用**: 将 `_0xdef(0x123)` 替换为实际字符串
4. **重命名变量**: 根据上下文推断有意义的名称

### Babel插件示例
```javascript
module.exports = function(babel) {
    const { types: t } = babel;
    return {
        visitor: {
            CallExpression(path) {
                if (path.node.callee.name === '_0xdef') {
                    const idx = path.node.arguments[0].value;
                    const str = decryptedArray[idx];
                    path.replaceWith(t.stringLiteral(str));
                }
            }
        }
    };
};
```

## Webpack逆向

### 结构分析
```javascript
// webpack打包结构
(function(modules) {
    function __webpack_require__(moduleId) {
        // 模块加载器
    }
    return __webpack_require__(0); // 入口模块
})([
    /* 0 */ function(module, exports, __webpack_require__) { /* 入口 */ },
    /* 1 */ function(module, exports) { /* 模块1 */ },
]);
```

### 提取技巧
```javascript
// 在Console中提取所有模块
const modules = [];
webpackJsonp.push([[],{
    'extract': (m,e,r) => {
        for(let id in r.m) modules.push({id, code: r.m[id].toString()});
    }
},['extract']]);
console.log(modules);
```

### 定位加密模块
1. 搜索 `exports.encrypt` 或 `module.exports`
2. 查看 `__webpack_require__(xxx)` 的依赖
3. 递归提取所有依赖模块

## 反调试绕过

### 常见反调试手段
```javascript
// 1. debugger语句
setInterval(() => { debugger; }, 100);

// 2. 检测DevTools
if (window.outerHeight - window.innerHeight > 200) { /* detected */ }

// 3. 检测console
const img = new Image();
Object.defineProperty(img, 'id', { get: () => { /* detected */ } });
console.log(img);
```

### 绕过方案
```javascript
// 1. Fiddler替换 debugger 为空

// 2. Hook检测函数
Object.defineProperty(window, 'outerHeight', {
    get: () => window.innerHeight
});

// 3. 重写setInterval
const _setInterval = setInterval;
setInterval = function(fn, delay) {
    if (fn.toString().includes('debugger')) return;
    return _setInterval(fn, delay);
};
```

## 加密算法复现

### AES (Python)
```python
from Crypto.Cipher import AES
from Crypto.Util.Padding import pad, unpad
import base64

def aes_encrypt(text, key, iv):
    cipher = AES.new(key.encode(), AES.MODE_CBC, iv.encode())
    padded = pad(text.encode(), AES.block_size)
    return base64.b64encode(cipher.encrypt(padded)).decode()
```

### RSA (Python)
```python
from Crypto.PublicKey import RSA
from Crypto.Cipher import PKCS1_v1_5
import base64

def rsa_encrypt(text, public_key_pem):
    key = RSA.import_key(public_key_pem)
    cipher = PKCS1_v1_5.new(key)
    return base64.b64encode(cipher.encrypt(text.encode())).decode()
```

### 签名算法
```python
import hashlib
import hmac

def generate_sign(params, secret):
    sorted_params = sorted(params.items())
    param_str = '&'.join(f'{k}={v}' for k, v in sorted_params)
    sign_str = param_str + secret
    return hashlib.md5(sign_str.encode()).hexdigest()
```
