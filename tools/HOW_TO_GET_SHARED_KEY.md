# 如何获取正确的共享密钥

## 问题说明

解密失败 "Padding is incorrect" 通常表示：
1. **密钥不正确**（最可能）
2. 密钥提取方式错误
3. 密文格式错误

## 为什么测试密钥会失败？

每次请求都会生成新的 DH 密钥对，因此：
- 每次请求的共享密钥都不同
- 旧的响应无法用新的密钥解密
- 要解密响应，必须使用**对应请求时生成的共享密钥**

## 获取共享密钥的方法

### 方法 1：从浏览器开发者工具获取

1. **打开浏览器开发者工具**（F12）
2. **切换到 Network 标签**
3. **发送请求**到 `random-fingerprint-v2` 接口
4. **在请求中查看参数**：
   - 参数 `a`: webUuid
   - 参数 `b`: 客户端公钥
   - 参数 `c`: 加密的请求数据

5. **在 Console 中执行以下代码**来获取共享密钥：

```javascript
// 在浏览器 Console 中执行
// 需要先找到 qg 对象（AdsPower 的加密工具实例）

// 方法1: 如果 qg 对象在全局作用域
if (typeof qg !== 'undefined') {
    console.log('共享密钥:', qg.getSharedKey());
}

// 方法2: 在请求拦截器中添加日志
// 在 fa536.js 的 dhCrypto 方法中添加：
// console.log('共享密钥:', qg.getSharedKey());
```

### 方法 2：使用 Python 工具生成并保存

修改 `adspower_crypto.py`，在生成请求时保存共享密钥：

```python
from adspower_crypto import AdsPowerCrypto
import json

crypto = AdsPowerCrypto()
config = crypto.get_server_config()

# 准备请求数据
data = {
    "ua": "Mozilla/5.0 ...",
    "client_hints": "",
    "fingerprint_list": "",
    "webgl_config": ""
}

# 生成加密参数
params = crypto.create_request_params(data)

# 保存共享密钥（重要！）
shared_key = crypto.shared_secret
print(f"共享密钥: {shared_key}")

# 保存到文件
with open('shared_key.json', 'w') as f:
    json.dump({
        'shared_key': shared_key,
        'params': params,
        'timestamp': time.time()
    }, f, indent=2)

# 发送请求
import requests
response = requests.post(
    "https://api.adspower.com/fbcc/user/random-fingerprint-v2",
    data=params,
    cookies={...}
)

# 使用保存的共享密钥解密响应
crypto.shared_secret = shared_key
decrypted = crypto.decrypt_response(response.json())
print(decrypted)
```

### 方法 3：在 JavaScript 代码中设置断点

1. **打开浏览器开发者工具**
2. **切换到 Sources 标签**
3. **找到 `fa536.js` 文件**
4. **在第 17827 行设置断点**（`decrypto` 方法）
5. **发送请求并等待响应**
6. **在断点处查看 `this.getSharedKey()` 的返回值**

## 验证密钥是否正确

使用以下代码验证密钥：

```python
from test_decrypt import decrypt_response

# 你的共享密钥
shared_key = "你的64位十六进制共享密钥"

# 响应数据
cipher_text = "MQDi8G0sX9bNYoC13RHD/kx60+NRgppbFTaepgcQSSUqKtiFzjqHzade1cN4aXq7JmbasuGXpP/GfzuDNf61/AivQYvc41UnpvUzb0L53cFZtQ8R6fRIVb4L0m1UipDC2M/syTgN/6ewtz6VynoiddaNzUzHxENfV3VB0J01lwZyfIN5Z07RGUAKRY2Xdb1YTd+3wvBAvBQ3mE9AEaNd/ZY42DMeJZECRpFmyp78P8tL9cL4+ojOiVgMsz0bwuS/ngcEP8SQPjXhIORE3wCHCTCEpjJV3Argf0ODP7RqI51bYHo7MJv3Its6m9/mJrcVpASQt5+YHtvstiIwrwMYBa1QWoONQl2JJmGwLBkGk+hDb3iYWz0F9FVStsVn5EcByKiwTBhILuLTnyFdztxWud4ijNooFL1gld5OWpnb7IhjI5pQbxdlVgy2tKg1LrvARm6dqVKxBveGTKI32qdrgm/s/4avfgsOBYJHQplPpaZyGOFr2XbDE6/5xRZPIiOS"

result = decrypt_response(cipher_text, shared_key)

if "解密失败" in result:
    print("✗ 密钥不正确或格式错误")
else:
    print("✓ 解密成功！")
    print(result)
```

## 密钥格式要求

- **长度**：64个十六进制字符（32字节的 SHA256 哈希）
- **格式**：纯十六进制字符串，例如：`"84499a8f5f82673f5fa4ecf5ab6ac9e1f247e8a62bc223ce1e780c53a7bdbfd6"`
- **提取**：解密时使用最后16个字符作为密钥和 IV
- **转换**：这16个字符作为 UTF-8 字符串编码为字节（不是十六进制转字节）

## 常见问题

### Q: 为什么测试密钥 `84499a8f5f82673f5fa4ecf5ab6ac9e1f247e8a62bc223ce1e780c53a7bdbfd6` 不能解密？

A: 因为这个密钥不是对应这个响应生成的。每次请求都会生成新的密钥对，所以必须使用对应请求时的共享密钥。

### Q: 如何确保使用正确的密钥？

A: 在发送请求时立即保存共享密钥，然后在解密响应时使用这个保存的密钥。

### Q: 能否从请求参数中推导出共享密钥？

A: 不能。共享密钥是通过 DH 密钥交换生成的，需要：
- 客户端私钥（随机生成，不发送给服务器）
- 服务器公钥（从服务器获取）
- 固定的素数 P

只有知道客户端私钥才能计算共享密钥，而私钥在请求后通常不会保存。

## 最佳实践

1. **在生成请求时保存共享密钥**
2. **将共享密钥与请求参数一起保存**
3. **在收到响应时使用对应的共享密钥解密**
4. **不要使用旧的或测试密钥解密新的响应**
