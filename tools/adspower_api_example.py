# -*- coding: utf-8 -*-
"""
AdsPower API 使用示例
演示如何创建加密请求和解密响应
"""

import json
import requests
from adspower_crypto import AdsPowerCrypto


def create_random_fingerprint_request(ua: str = None, fingerprint_list: str = "", 
                                     client_hints: str = "", webgl_config: str = ""):
    """
    创建 random-fingerprint-v2 请求
    
    Args:
        ua: User-Agent 字符串
        fingerprint_list: 指纹列表
        client_hints: 客户端提示
        webgl_config: WebGL 配置
        
    Returns:
        加密后的请求参数字典
    """
    # 创建加密工具
    crypto = AdsPowerCrypto()
    
    # 获取服务器配置（包含 webUuid 和服务器公钥）
    print("正在获取服务器配置...")
    config = crypto.get_server_config()
    
    if not config or not config.get('server_pub'):
        raise Exception("无法获取服务器配置")
    
    print(f"✓ 获取成功，webUuid: {config['a'][:50]}...")
    
    # 准备请求数据
    if not ua:
        ua = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36"
    
    request_data = {
        "ua": ua,
        "client_hints": client_hints if isinstance(client_hints, str) else json.dumps(client_hints),
        "fingerprint_list": fingerprint_list,
        "webgl_config": webgl_config if isinstance(webgl_config, str) else json.dumps(webgl_config)
    }
    
    # 生成加密参数
    print("\n正在加密请求数据...")
    params = crypto.create_request_params(request_data)
    
    print(f"✓ 加密完成")
    print(f"  参数 a (webUuid): {params['a']}")
    print(f"  参数 b (客户端公钥): {params['b'][:50]}...")
    print(f"  参数 c (加密数据): {params['c'][:50]}...")
    
    return params, crypto


def send_request(params: dict, cookies: dict = None, headers: dict = None):
    """
    发送请求到 random-fingerprint-v2 接口
    
    Args:
        params: 请求参数 (a, b, c)
        cookies: Cookie 字典
        headers: 请求头字典
        
    Returns:
        响应数据
    """
    url = "https://api.adspower.com/fbcc/user/random-fingerprint-v2"
    
    # 准备请求头
    if not headers:
        headers = {
            'accept': 'application/json, text/plain, */*',
            'accept-language': 'en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7',
            'content-type': 'application/x-www-form-urlencoded',
            'origin': 'https://app.adspower.com',
            'referer': 'https://app.adspower.com/',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        }
    
    # 准备数据
    data = {
        'a': params['a'],
        'b': params['b'],
        'c': params['c']
    }
    
    print(f"\n正在发送请求到 {url}...")
    response = requests.post(url, data=data, cookies=cookies, headers=headers, timeout=30)
    
    print(f"响应状态码: {response.status_code}")
    
    if response.status_code == 200:
        return response.json()
    else:
        print(f"请求失败: {response.text}")
        return None


def decrypt_response(response_data: dict, crypto: AdsPowerCrypto):
    """
    解密响应数据
    
    Args:
        response_data: 响应数据字典（包含 'd' 字段）
        crypto: AdsPowerCrypto 实例
        
    Returns:
        解密后的数据字典
    """
    if 'd' not in response_data:
        print("响应中没有 'd' 字段，可能未加密")
        return response_data
    
    print("\n正在解密响应数据...")
    try:
        decrypted = crypto.decrypt_response(response_data)
        print("✓ 解密成功")
        return decrypted
    except Exception as e:
        print(f"✗ 解密失败: {e}")
        return None


def main():
    """主函数 - 完整示例"""
    print("=" * 80)
    print("AdsPower API 完整使用示例")
    print("=" * 80)
    
    try:
        # 1. 创建加密请求
        params, crypto = create_random_fingerprint_request(
            ua="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36",
            fingerprint_list="",
            client_hints="",
            webgl_config=""
        )
        
        # 2. 发送请求（需要有效的 Cookie）
        print("\n" + "=" * 80)
        print("发送请求")
        print("=" * 80)
        print("\n注意：发送请求需要有效的 Cookie。")
        print("如果需要发送实际请求，请提供 Cookie：")
        print("  cookies = {'mix_auth_token': '...', 'LOCAL_KEY_IN_WEBSITE': '...', ...}")
        print("\n示例代码：")
        print("  cookies = {...}  # 你的 Cookie")
        print("  response = send_request(params, cookies=cookies)")
        print("  if response:")
        print("      decrypted = decrypt_response(response, crypto)")
        print("      print(json.dumps(decrypted, indent=2, ensure_ascii=False))")
        
        # 3. 演示解密已有响应
        print("\n" + "=" * 80)
        print("解密已有响应示例")
        print("=" * 80)
        
        # 已有的响应数据
        existing_response = {
            "d": "MQDi8G0sX9bNYoC13RHD/kx60+NRgppbFTaepgcQSSUqKtiFzjqHzade1cN4aXq7JmbasuGXpP/GfzuDNf61/AivQYvc41UnpvUzb0L53cFZtQ8R6fRIVb4L0m1UipDC2M/syTgN/6ewtz6VynoiddaNzUzHxENfV3VB0J01lwZyfIN5Z07RGUAKRY2Xdb1YTd+3wvBAvBQ3mE9AEaNd/ZY42DMeJZECRpFmyp78P8tL9cL4+ojOiVgMsz0bwuS/ngcEP8SQPjXhIORE3wCHCTCEpjJV3Argf0ODP7RqI51bYHo7MJv3Its6m9/mJrcVpASQt5+YHtvstiIwrwMYBa1QWoONQl2JJmGwLBkGk+hDb3iYWz0F9FVStsVn5EcByKiwTBhILuLTnyFdztxWud4ijNooFL1gld5OWpnb7IhjI5pQbxdlVgy2tKg1LrvARm6dqVKxBveGTKI32qdrgm/s/4avfgsOBYJHQplPpaZyGOFr2XbDE6/5xRZPIiOS"
        }
        
        print("\n注意：要解密已有的响应，需要知道对应的客户端私钥。")
        print("由于 DH 密钥交换的特性，每次请求都会生成新的密钥对，")
        print("旧的响应无法用新的密钥对解密。")
        print("\n要解密已有响应，需要：")
        print("1. 保存请求时的客户端私钥")
        print("2. 使用相同的私钥和服务器公钥重新计算共享密钥")
        print("3. 使用共享密钥的后16字节解密响应")
        
    except Exception as e:
        print(f"\n✗ 错误: {e}")
        import traceback
        traceback.print_exc()


if __name__ == "__main__":
    main()
