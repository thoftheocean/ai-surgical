# AdsPower API 加密解密工具

## 概述

本工具用于逆向分析 AdsPower API 的加密解密逻辑，特别是 `random-fingerprint-v2` 接口。

## 加密流程分析

### 请求加密

1. **DH 密钥交换**：
   - 使用固定的素数 `SRC_P`（经过自定义 Base64 解码）
   - 生成客户端私钥 `pvt`（256位随机数）
   - 计算客户端公钥 `pub = 2^pvt mod p`
   - 从服务器获取 `webUuid` 和服务器公钥
   - 计算共享密钥：`sharedKey = SHA256(serverPub^pvt mod p)`

2. **请求参数**：
   - `a`: `webUuid`（从服务器获取）
   - `b`: 客户端公钥（512位十六进制字符串）
   - `c`: AES-CBC 加密的数据（Base64 编码）
     - 密钥：共享密钥的前16字节
     - IV：与密钥相同
     - 模式：CBC
     - 填充：PKCS7

### 响应解密

- 响应字段 `d`: AES-CBC 加密的数据（Base64 编码）
  - 密钥：共享密钥的后16字节
  - IV：与密钥相同
  - 模式：CBC
  - 填充：PKCS7

## 文件说明

- `adspower_crypto.py`: 核心加密解密类 `AdsPowerCrypto`
- `adspower_api_analyzer.py`: 分析工具，分析已有请求和响应
- `adspower_api_example.py`: 使用示例，演示如何创建请求和解密响应

## 安装依赖

```bash
pip install -r requirements_adspower.txt
```

## 使用方法

### 1. 基本使用

```python
from adspower_crypto import AdsPowerCrypto

# 创建加密工具
crypto = AdsPowerCrypto()

# 获取服务器配置（包含 webUuid 和服务器公钥）
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
# params = {'a': 'webUuid', 'b': '客户端公钥', 'c': '加密数据'}

# 发送请求（需要有效的 Cookie）
import requests
response = requests.post(
    "https://api.adspower.com/fbcc/user/random-fingerprint-v2",
    data=params,
    cookies={...}  # 你的 Cookie
)

# 解密响应
decrypted = crypto.decrypt_response(response.json())
```

### 2. 分析已有请求

```python
python adspower_api_analyzer.py
```

### 3. 完整示例

```python
python adspower_api_example.py
```

## 注意事项

1. **密钥对唯一性**：每次请求都会生成新的 DH 密钥对，因此：
   - 旧的响应无法用新的密钥对解密
   - 要解密已有响应，需要保存对应的客户端私钥

2. **Cookie 要求**：发送实际请求需要有效的 Cookie，包括：
   - `mix_auth_token`
   - `LOCAL_KEY_IN_WEBSITE`
   - `mix_sys_token`
   - 等

3. **服务器配置**：首次使用需要从服务器获取配置：
   - 接口：`/sys/config/fe/config`
   - 返回：`webUuid` (参数 a) 和服务器公钥

## 技术细节

### DH 密钥交换

- 素数 P：固定的 512 位素数（经过自定义 Base64 编码）
- 生成器：2
- 客户端私钥：256 位随机数
- 共享密钥：`SHA256(serverPub^clientPrivate mod P)`

### AES 加密

- 算法：AES-128-CBC
- 密钥长度：16 字节
- IV：与密钥相同（加密用前16字节，解密用后16字节）
- 填充：PKCS7

### 自定义 Base64

使用自定义字符表进行 Base64 编码/解码：
- 标准表：`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/`
- 自定义表：`hTy1bfRJz4nLPcBCO7WtmNIaGvVeul5Zo8kq32UxrYw_-0gsjp96SDFXQiEMKdHA`

## 逆向分析结果

通过分析 JavaScript 代码（`fa536.js`），发现了以下关键函数：

1. **Og 类**（DH 密钥交换）：
   - `init()`: 从服务器获取配置
   - `generatePub()`: 生成客户端公钥
   - `generateSharedKey()`: 计算共享密钥
   - `encrypto()`: 加密数据
   - `decrypto()`: 解密数据

2. **请求拦截器**（`dhCrypto`）：
   - 拦截特定接口的请求
   - 自动加密请求数据
   - 生成参数 a, b, c

3. **响应拦截器**（`dhDecrypto`）：
   - 拦截特定接口的响应
   - 自动解密响应数据

## 限制

- 无法解密已有响应（需要对应的客户端私钥）
- 需要有效的 Cookie 才能发送实际请求
- 服务器配置可能变化

## 许可证

本工具仅用于学习和研究目的。
