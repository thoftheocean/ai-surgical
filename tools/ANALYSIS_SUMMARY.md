# AdsPower API 逆向分析总结

## 已完成的工作

### 1. 加密流程分析

通过分析 JavaScript 代码（`sites/adspower/js/fa536.js`），完整还原了加密解密流程：

#### 请求加密流程

1. **DH 密钥交换**：
   - 使用固定的素数 `SRC_P`（经过自定义 Base64 解码）
   - 生成客户端私钥 `pvt`（256位随机数）
   - 计算客户端公钥 `pub = 2^pvt mod p`
   - 从服务器获取 `webUuid` 和服务器公钥
   - 计算共享密钥：`sharedKey = SHA256(serverPub^pvt mod p)`

2. **请求参数生成**：
   - `a`: `webUuid`（从服务器 `/sys/config/fe/config` 获取）
   - `b`: 客户端公钥（512位十六进制字符串）
   - `c`: AES-CBC 加密的数据（Base64 编码）
     - 密钥：共享密钥的前16字节
     - IV：与密钥相同
     - 模式：CBC
     - 填充：PKCS7

#### 响应解密流程

- 响应字段 `d`: AES-CBC 加密的数据（Base64 编码）
  - 密钥：共享密钥的后16字节
  - IV：与密钥相同
  - 模式：CBC
  - 填充：PKCS7

### 2. Python 实现

创建了完整的 Python 实现：

#### `adspower_crypto.py`
核心加密解密类，包含：
- `AdsPowerCrypto` 类
- DH 密钥交换实现
- AES 加密/解密实现
- 自定义 Base64 解码（Vh 函数）
- 服务器配置获取
- 请求参数生成
- 响应解密

#### `adspower_api_analyzer.py`
分析工具，用于：
- 分析已有请求参数
- 分析响应数据
- 尝试不同的解密方法
- 从服务器获取配置

#### `adspower_api_example.py`
完整使用示例，演示：
- 如何创建加密请求
- 如何发送请求
- 如何解密响应

### 3. 关键发现

1. **加密算法**：AES-128-CBC
2. **密钥派生**：DH 密钥交换 + SHA256
3. **IV 使用**：加密用共享密钥前16字节，解密用后16字节
4. **自定义编码**：使用自定义 Base64 字符表编码素数 P

### 4. 代码位置

在 JavaScript 代码中的关键位置：

- **DH 密钥交换类**：`fa536.js` 第 17750-17834 行（`Og` 类）
- **请求拦截器**：`fa536.js` 第 15273-15332 行（`dhCrypto` 方法）
- **响应拦截器**：`fa536.js` 第 15333-15347 行（`dhDecrypto` 方法）
- **自定义 Base64**：`fa536.js` 第 15054-15068 行（`Vh` 函数）
- **API 调用**：`fa536.js` 第 12550-12559 行（`random-fingerprint-v2`）

## 使用方法

### 安装依赖

```bash
pip install -r requirements_adspower.txt
```

### 基本使用

```python
from adspower_crypto import AdsPowerCrypto

# 创建加密工具
crypto = AdsPowerCrypto()

# 获取服务器配置
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

# 发送请求（需要 Cookie）
import requests
response = requests.post(
    "https://api.adspower.com/fbcc/user/random-fingerprint-v2",
    data=params,
    cookies={...}
)

# 解密响应
decrypted = crypto.decrypt_response(response.json())
```

## 限制说明

1. **无法解密已有响应**：
   - 由于 DH 密钥交换的特性，每次请求都会生成新的密钥对
   - 要解密已有响应，需要保存对应的客户端私钥
   - 旧的响应无法用新的密钥对解密

2. **需要有效 Cookie**：
   - 发送实际请求需要有效的 Cookie
   - 包括 `mix_auth_token`、`LOCAL_KEY_IN_WEBSITE` 等

3. **服务器配置**：
   - 首次使用需要从服务器获取配置
   - 配置可能变化

## 文件清单

- `adspower_crypto.py` - 核心加密解密类
- `adspower_api_analyzer.py` - 分析工具
- `adspower_api_example.py` - 使用示例
- `requirements_adspower.txt` - 依赖列表
- `README_adspower.md` - 详细文档
- `ANALYSIS_SUMMARY.md` - 本文件

## 技术细节

### DH 密钥交换参数

- **素数 P**：512 位素数（经过自定义 Base64 编码）
- **生成器**：2
- **客户端私钥**：256 位随机数
- **共享密钥计算**：`SHA256(serverPub^clientPrivate mod P)`

### AES 加密参数

- **算法**：AES-128-CBC
- **密钥长度**：16 字节
- **IV**：与密钥相同（加密用前16字节，解密用后16字节）
- **填充**：PKCS7

### 自定义 Base64

- **标准表**：`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/`
- **自定义表**：`hTy1bfRJz4nLPcBCO7WtmNIaGvVeul5Zo8kq32UxrYw_-0gsjp96SDFXQiEMKdHA`

## 下一步

如果需要解密已有的响应数据，需要：

1. 保存请求时的客户端私钥
2. 保存服务器返回的公钥
3. 使用相同的参数重新计算共享密钥
4. 使用共享密钥解密响应

或者：

1. 使用新的密钥对创建新的请求
2. 获取新的响应
3. 使用对应的密钥对解密

## 总结

已成功逆向分析了 AdsPower API 的加密解密逻辑，并实现了完整的 Python 版本。工具可以：

- ✅ 生成加密请求参数
- ✅ 从服务器获取配置
- ✅ 执行 DH 密钥交换
- ✅ 加密请求数据
- ✅ 解密响应数据（需要对应的密钥对）

工具已准备就绪，可以用于创建新的加密请求和解密对应的响应。
