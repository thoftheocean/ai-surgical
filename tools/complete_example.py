# -*- coding: utf-8 -*-
"""
完整示例：创建请求、发送请求、解密响应
演示如何正确保存和使用共享密钥
"""

import json
import time
import requests
from adspower_crypto import AdsPowerCrypto


def save_request_info(params: dict, shared_key: str, filename: str = None):
    """保存请求信息和共享密钥"""
    if filename is None:
        filename = f"request_{int(time.time())}.json"
    
    data = {
        'shared_key': shared_key,
        'params': params,
        'timestamp': time.time(),
        'note': '请使用此共享密钥解密对应的响应'
    }
    
    with open(filename, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
    
    print(f"✓ 请求信息已保存到: {filename}")
    return filename


def main():
    """完整示例"""
    print("=" * 80)
    print("AdsPower API 完整使用示例")
    print("=" * 80)
    
    # 1. 创建加密工具
    print("\n步骤 1: 创建加密工具并获取服务器配置...")
    crypto = AdsPowerCrypto()
    config = crypto.get_server_config()
    
    if not config:
        print("✗ 无法获取服务器配置，请检查网络连接")
        return
    
    print(f"✓ 获取成功")
    print(f"  webUuid: {config.get('a', '')[:50]}...")
    
    # 2. 准备请求数据
    print("\n步骤 2: 准备请求数据...")
    request_data = {
        "ua": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36",
        "client_hints": "",
        "fingerprint_list": "",
        "webgl_config": ""
    }
    print(f"✓ 请求数据准备完成")
    
    # 3. 生成加密参数（会自动显示共享密钥）
    print("\n步骤 3: 生成加密请求参数...")
    params = crypto.create_request_params(request_data, save_key=True)
    
    # 保存请求信息和共享密钥
    shared_key = crypto.shared_secret
    save_request_info(params, shared_key)
    
    print(f"\n请求参数:")
    print(f"  参数 a (webUuid): {params['a']}")
    print(f"  参数 b (客户端公钥): {params['b'][:50]}...")
    print(f"  参数 c (加密数据): {params['c'][:50]}...")
    
    # 4. 发送请求（需要有效的 Cookie）
    print("\n步骤 4: 发送请求...")
    print("注意：需要有效的 Cookie 才能发送实际请求")
    print("\n示例代码：")
    print("""
    cookies = {
        'mix_auth_token': '你的token',
        'LOCAL_KEY_IN_WEBSITE': '你的key',
        # ... 其他 Cookie
    }
    
    response = requests.post(
        'https://api.adspower.com/fbcc/user/random-fingerprint-v2',
        data=params,
        cookies=cookies
    )
    """)
    
    # 模拟响应（实际使用时替换为真实响应）
    print("\n" + "=" * 80)
    print("步骤 5: 解密响应（示例）")
    print("=" * 80)
    
    # 示例：如果有响应数据
    example_response = {
        "d": "MQDi8G0sX9bNYoC13RHD/kx60+NRgppbFTaepgcQSSUqKtiFzjqHzade1cN4aXq7JmbasuGXpP/GfzuDNf61/AivQYvc41UnpvUzb0L53cFZtQ8R6fRIVb4L0m1UipDC2M/syTgN/6ewtz6VynoiddaNzUzHxENfV3VB0J01lwZyfIN5Z07RGUAKRY2Xdb1YTd+3wvBAvBQ3mE9AEaNd/ZY42DMeJZECRpFmyp78P8tL9cL4+ojOiVgMsz0bwuS/ngcEP8SQPjXhIORE3wCHCTCEpjJV3Argf0ODP7RqI51bYHo7MJv3Its6m9/mJrcVpASQt5+YHtvstiIwrwMYBa1QWoONQl2JJmGwLBkGk+hDb3iYWz0F9FVStsVn5EcByKiwTBhILuLTnyFdztxWud4ijNooFL1gld5OWpnb7IhjI5pQbxdlVgy2tKg1LrvARm6dqVKxBveGTKI32qdrgm/s/4avfgsOBYJHQplPpaZyGOFr2XbDE6/5xRZPIiOS"
    }
    
    print("\n要解密响应，使用保存的共享密钥：")
    print(f"""
    from adspower_crypto import AdsPowerCrypto
    from test_decrypt import decrypt_response
    
    # 使用保存的共享密钥
    shared_key = "{shared_key}"
    
    # 解密响应
    response_data = {{"d": "你的响应数据"}}
    result = decrypt_response(response_data['d'], shared_key)
    print(result)
    """)
    
    print("\n" + "=" * 80)
    print("重要提示")
    print("=" * 80)
    print("\n1. 每次请求都会生成新的共享密钥")
    print("2. 必须使用对应请求时生成的共享密钥解密响应")
    print("3. 已自动保存请求信息和共享密钥到 JSON 文件")
    print("4. 解密时从保存的文件中读取共享密钥")


if __name__ == "__main__":
    main()
