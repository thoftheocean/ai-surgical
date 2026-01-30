# AdsPower API 响应解密使用说明

## 解密方法说明

对应 JavaScript 代码（`fa536.js` 第 17826-17833 行）：

```javascript
decrypto(e) {
    let t = Sg.default.enc.Utf8.parse(this.getSharedKey().slice(-16));
    return Sg.default.AES.decrypt(e, t, {
        iv: t,
        mode: Sg.default.mode.CBC,
        padding: Sg.default.pad.Pkcs7
    }).toString(Sg.default.enc.Utf8)
}
```

## 关键点

1. **共享密钥格式**：
   - `getSharedKey()` 返回的是十六进制字符串（64个字符）
   - 这是 SHA256 哈希的结果（32字节 = 64个十六进制字符）

2. **密钥提取**：
   - `.slice(-16)` 取最后16个字符（十六进制字符串）
   - 例如：`"84499a8f5f82673f5fa4ecf5ab6ac9e1f247e8a62bc223ce1e780c53a7bdbfd6"` 的最后16个字符是 `"1e780c53a7bdbfd6"`

3. **密钥转换**：
   - `Sg.default.enc.Utf8.parse()` 将这16个字符作为 **UTF-8 字符串**解析为字节
   - **重要**：这里不是将十六进制转换为字节，而是将字符串作为 UTF-8 编码
   - 例如：`"1e780c53a7bdbfd6"` 作为 UTF-8 字符串编码为 16 字节

4. **解密参数**：
   - 密钥：共享密钥的最后16个字符（作为 UTF-8 字符串编码）
   - IV：与密钥相同
   - 模式：AES-CBC
   - 填充：PKCS7

## Python 实现

### 方法 1：使用 `adspower_crypto.py`

```python
from adspower_crypto import AdsPowerCrypto

# 创建加密工具
crypto = AdsPowerCrypto()

# 获取服务器配置并生成共享密钥
config = crypto.get_server_config()

# 解密响应
response_data = {"d": "MQDi8G0sX9bNYoC13RHD/kx60+NRgppbFTaepgcQSSUqKtiFzjqHzade1cN4aXq7JmbasuGXpP/GfzuDNf61/AivQYvc41UnpvUzb0L53cFZtQ8R6fRIVb4L0m1UipDC2M/syTgN/6ewtz6VynoiddaNzUzHxENfV3VB0J01lwZyfIN5Z07RGUAKRY2Xdb1YTd+3wvBAvBQ3mE9AEaNd/ZY42DMeJZECRpFmyp78P8tL9cL4+ojOiVgMsz0bwuS/ngcEP8SQPjXhIORE3wCHCTCEpjJV3Argf0ODP7RqI51bYHo7MJv3Its6m9/mJrcVpASQt5+YHtvstiIwrwMYBa1QWoONQl2JJmGwLBkGk+hDb3iYWz0F9FVStsVn5EcByKiwTBhILuLTnyFdztxWud4ijNooFL1gld5OWpnb7IhjI5pQbxdlVgy2tKg1LrvARm6dqVKxBveGTKI32qdrgm/s/4avfgsOBYJHQplPpaZyGOFr2XbDE6/5xRZPIiOS"}

decrypted = crypto.decrypt_response(response_data)
print(decrypted)
```

### 方法 2：直接使用解密函数

```python
from Crypto.Cipher import AES
from Crypto.Util.Padding import unpad
import base64

def decrypt_response(ciphertext_b64: str, shared_key_hex: str) -> str:
    """
    解密响应数据
    
    Args:
        ciphertext_b64: Base64 编码的密文
        shared_key_hex: 共享密钥（64个十六进制字符的字符串）
        
    Returns:
        解密后的字符串
    """
    # 1. 取共享密钥的最后16个字符（十六进制字符串）
    key_str = shared_key_hex[-16:]
    
    # 2. 将这16个字符作为 UTF-8 字符串编码为字节
    key = key_str.encode('utf-8')
    iv = key  # IV 与密钥相同
    
    # 3. Base64 解码密文
    ciphertext = base64.b64decode(ciphertext_b64)
    
    # 4. AES-CBC 解密
    cipher = AES.new(key, AES.MODE_CBC, iv)
    decrypted = unpad(cipher.decrypt(ciphertext), AES.block_size)
    
    return decrypted.decode('utf-8')

# 使用示例
cipher_text = "MQDi8G0sX9bNYoC13RHD/kx60+NRgppbFTaepgcQSSUqKtiFzjqHzade1cN4aXq7JmbasuGXpP/GfzuDNf61/AivQYvc41UnpvUzb0L53cFZtQ8R6fRIVb4L0m1UipDC2M/syTgN/6ewtz6VynoiddaNzUzHxENfV3VB0J01lwZyfIN5Z07RGUAKRY2Xdb1YTd+3wvBAvBQ3mE9AEaNd/ZY42DMeJZECRpFmyp78P8tL9cL4+ojOiVgMsz0bwuS/ngcEP8SQPjXhIORE3wCHCTCEpjJV3Argf0ODP7RqI51bYHo7MJv3Its6m9/mJrcVpASQt5+YHtvstiIwrwMYBa1QWoONQl2JJmGwLBkGk+hDb3iYWz0F9FVStsVn5EcByKiwTBhILuLTnyFdztxWud4ijNooFL1gld5OWpnb7IhjI5pQbxdlVgy2tKg1LrvARm6dqVKxBveGTKI32qdrgm/s/4avfgsOBYJHQplPpaZyGOFr2XbDE6/5xRZPIiOS"
shared_key = "84499a8f5f82673f5fa4ecf5ab6ac9e1f247e8a62bc223ce1e780c53a7bdbfd6"

result = decrypt_response(cipher_text, shared_key)
print(result)
```

## 重要提示

1. **共享密钥的获取**：
   - 共享密钥是通过 DH 密钥交换生成的
   - 每次请求都会生成新的密钥对，因此共享密钥也不同
   - 要解密响应，必须使用对应请求时生成的共享密钥

2. **密钥格式**：
   - 共享密钥是 64 个十六进制字符的字符串
   - 解密时使用最后 16 个字符
   - 这 16 个字符是作为 UTF-8 字符串编码为字节，**不是**十六进制转字节

3. **常见错误**：
   - ❌ 错误：`bytes.fromhex(key_str)` - 这是将十六进制转换为字节
   - ✅ 正确：`key_str.encode('utf-8')` - 这是将字符串作为 UTF-8 编码

## 测试

运行测试脚本：

```bash
python test_decrypt_complete.py
```

## 文件清单

- `adspower_crypto.py` - 完整的加密解密类（已修复）
- `test_decrypt_complete.py` - 解密测试脚本
- `adspower.py` - 简化的解密函数（在 `sites/adspower/js/` 目录）
