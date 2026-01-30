# -*- coding: utf-8 -*-
"""
AdsPower API 逆向分析工具
分析 random-fingerprint-v2 接口的加密解密逻辑
"""

import base64
import json
import urllib.parse
from typing import Dict, Any, Optional
import hashlib
import hmac
from Crypto.Cipher import AES
from Crypto.Util.Padding import unpad, pad
import binascii
import requests
from adspower_crypto import AdsPowerCrypto

# 从 curl 请求中提取的数据
REQUEST_DATA = {
    "a": "92772196e3862e8b81e62185e82c9abd",
    "b": "2c163ba0554744a74d73ae36d7091ac5d7c2cd66f4f4f39f1abbeec2076474f47082eb17421eb26fb18110704078131f81421a0366a5311f2819dcadc83ae942c5b8321bec70e9cbf641b65cd07d9376de911eb659fb07b8cb790717b74e4d64e285d1b2e23098f10cff820039838b3db4bbb360ad87699179d77e8188f943d137a6389a93f44decb803097f286b5185a48697babd5576a9127a34dd4f8e6e623b4c314f32a882d94170047c250f41bf95ce1e5e56b093039edaa0248e07f4c6a88cab235594146fcf9be5a49d61feca3df601b0212ab430990e1048dd7a1806248bc8f7fb860dd35e98fee979bdf767ea98e63d1b4846162f09a1eb7392392a",
    "c": "p6x7yAeeBlfIMEWKSxErqngGAB0oGTQQeoeyxoSQJ7f2mc22Yc4HQcp%2BHJ2BtKuctlFWnlf%2FDP7jcZlPMH6diZT%2BJzxLfjOhDveSWAKhFZSq715nTpVqWPY3oldC%2BhFbU8pAmAqH5%2FpmBNUl5wUskRa8fn5Pg%2BIhmolY%2BDM2uR33KCO%2FueSi284Wuko9OhMTC8l6OyjQbyPPptLFsd8wYHorDcbzHqahvwY6X8lUSoHmO0BbuEyv1CZ4HmxE4eZaDDQGKcg0BGrzJIztKYhZZF%2F8w2l6G9OT9TrmvB6oD2%2BdQYvJgCklatRn%2FzjvzEkNoSGbS%2FXcEoxPBcGXHN3Scn%2FD%2FaknIFMtzADZsTtWY2XyV1eo%2FvHlejA%2BgMB4Brc6rwjioJU%2FWhhOG1S%2FwKqpo1wpaXf7cctyzhg7tOf%2FG8tCShaQ90FqvQsDGiqUzEcH7WlkAg9SZM%2BAU284i%2F6xa1pQNRZue4Ati%2Fz77q81%2FJ9PvHkE8%2BlEGVgCO1N11KNwMyow4UimGeUv7U5jWrKCuDIMFn3Bg5%2Fwcan2b4Wlvzs8OeYJho1zfipbnLR0VFsfd%2Bnr5%2B5HjVfVu9i9hpj7iXEu71O5sIuOUFx2mbnHd0StqJpZCqDdEdAyFLTqE7qbk%2BQKIGAPl6pi3FffMJ6%2FtPqDncvzAibSdkmSBpfgx1o%3D"
}

RESPONSE_DATA = {
    "d": "MQDi8G0sX9bNYoC13RHD/kx60+NRgppbFTaepgcQSSUqKtiFzjqHzade1cN4aXq7JmbasuGXpP/GfzuDNf61/AivQYvc41UnpvUzb0L53cFZtQ8R6fRIVb4L0m1UipDC2M/syTgN/6ewtz6VynoiddaNzUzHxENfV3VB0J01lwZyfIN5Z07RGUAKRY2Xdb1YTd+3wvBAvBQ3mE9AEaNd/ZY42DMeJZECRpFmyp78P8tL9cL4+ojOiVgMsz0bwuS/ngcEP8SQPjXhIORE3wCHCTCEpjJV3Argf0ODP7RqI51bYHo7MJv3Its6m9/mJrcVpASQt5+YHtvstiIwrwMYBa1QWoONQl2JJmGwLBkGk+hDb3iYWz0F9FVStsVn5EcByKiwTBhILuLTnyFdztxWud4ijNooFL1gld5OWpnb7IhjI5pQbxdlVgy2tKg1LrvARm6dqVKxBveGTKI32qdrgm/s/4avfgsOBYJHQplPpaZyGOFr2XbDE6/5xRZPIiOS"
}


def analyze_request_params():
    """分析请求参数的结构"""
    print("=" * 80)
    print("请求参数分析")
    print("=" * 80)
    
    # 参数 a
    a = REQUEST_DATA["a"]
    print(f"\n参数 a (长度: {len(a)}):")
    print(f"  值: {a}")
    print(f"  类型: 可能是 MD5 哈希 (32 个十六进制字符)")
    
    # 参数 b
    b = REQUEST_DATA["b"]
    print(f"\n参数 b (长度: {len(b)}):")
    print(f"  值: {b[:100]}...")
    print(f"  类型: 可能是 SHA-512 哈希 (512 位 = 128 个十六进制字符)")
    print(f"  实际长度: {len(b)} 个字符")
    
    # 参数 c (URL 编码)
    c_encoded = REQUEST_DATA["c"]
    c_decoded = urllib.parse.unquote(c_encoded)
    print(f"\n参数 c (URL 编码后长度: {len(c_encoded)}):")
    print(f"  URL 编码值: {c_encoded[:100]}...")
    print(f"  解码后长度: {len(c_decoded)}")
    print(f"  解码后值 (前100字符): {c_decoded[:100]}...")
    
    # 尝试 base64 解码
    try:
        c_base64_decoded = base64.b64decode(c_decoded)
        print(f"  Base64 解码后长度: {len(c_base64_decoded)} 字节")
        print(f"  Base64 解码后 (hex 前64字符): {binascii.hexlify(c_base64_decoded[:32]).decode()}")
        
        # 检查是否是 AES 加密数据
        if len(c_base64_decoded) % 16 == 0:
            print(f"  ✓ 长度是 16 的倍数，可能是 AES 加密数据")
        else:
            print(f"  ✗ 长度不是 16 的倍数，可能不是标准 AES")
    except Exception as e:
        print(f"  Base64 解码失败: {e}")
    
    return {
        "a": a,
        "b": b,
        "c_encoded": c_encoded,
        "c_decoded": c_decoded
    }


def analyze_response_data():
    """分析响应数据"""
    print("\n" + "=" * 80)
    print("响应数据分析")
    print("=" * 80)
    
    d = RESPONSE_DATA["d"]
    print(f"\n响应字段 d (长度: {len(d)}):")
    print(f"  值: {d[:100]}...")
    
    # 尝试 base64 解码
    try:
        d_decoded = base64.b64decode(d)
        print(f"  Base64 解码后长度: {len(d_decoded)} 字节")
        print(f"  Base64 解码后 (hex 前64字符): {binascii.hexlify(d_decoded[:32]).decode()}")
        
        # 检查是否是 AES 加密数据
        if len(d_decoded) % 16 == 0:
            print(f"  ✓ 长度是 16 的倍数，可能是 AES 加密数据")
        else:
            print(f"  ✗ 长度不是 16 的倍数，可能不是标准 AES")
            
        return d_decoded
    except Exception as e:
        print(f"  Base64 解码失败: {e}")
        return None


def try_decrypt_aes(ciphertext: bytes, key: bytes, iv: Optional[bytes] = None, mode: str = "CBC"):
    """尝试使用 AES 解密"""
    try:
        if mode == "CBC":
            if iv is None:
                # 尝试使用前 16 字节作为 IV
                if len(ciphertext) >= 16:
                    iv = ciphertext[:16]
                    ciphertext = ciphertext[16:]
                else:
                    return None, "数据太短，无法提取 IV"
            
            cipher = AES.new(key, AES.MODE_CBC, iv)
            decrypted = unpad(cipher.decrypt(ciphertext), AES.block_size)
            return decrypted, None
        elif mode == "ECB":
            cipher = AES.new(key, AES.MODE_ECB)
            decrypted = unpad(cipher.decrypt(ciphertext), AES.block_size)
            return decrypted, None
    except Exception as e:
        return None, str(e)
    return None, "未知模式"


def try_decrypt_with_key_derivation():
    """尝试使用不同的密钥派生方法解密响应数据"""
    print("\n" + "=" * 80)
    print("尝试解密响应数据")
    print("=" * 80)
    
    d_decoded = analyze_response_data()
    if d_decoded is None:
        return
    
    params = analyze_request_params()
    
    # 尝试不同的密钥派生方法
    key_candidates = []
    
    # 1. 直接使用参数 a 作为密钥（MD5 长度 = 16 字节）
    a_bytes = bytes.fromhex(params["a"])
    key_candidates.append(("参数 a (MD5)", a_bytes))
    
    # 2. 使用参数 b 的前 16/24/32 字节作为密钥
    b_bytes = bytes.fromhex(params["b"])
    if len(b_bytes) >= 16:
        key_candidates.append(("参数 b 前16字节", b_bytes[:16]))
    if len(b_bytes) >= 24:
        key_candidates.append(("参数 b 前24字节", b_bytes[:24]))
    if len(b_bytes) >= 32:
        key_candidates.append(("参数 b 前32字节", b_bytes[:32]))
    
    # 3. 使用参数 a 和 b 的组合
    if len(b_bytes) >= 16:
        combined = a_bytes + b_bytes[:16]
        key_candidates.append(("参数 a + b前16字节", combined[:32]))
    
    # 4. 使用 HMAC 派生密钥
    try:
        hmac_key = hmac.new(a_bytes, params["b"].encode(), hashlib.sha256).digest()
        key_candidates.append(("HMAC-SHA256(a, b)", hmac_key))
    except:
        pass
    
    # 尝试解密
    for key_name, key in key_candidates:
        print(f"\n尝试密钥: {key_name} (长度: {len(key)} 字节)")
        
        # 尝试 CBC 模式
        if len(key) in [16, 24, 32]:  # AES 密钥长度
            # 尝试不同的 IV 提取方式
            iv_candidates = []
            if len(d_decoded) >= 16:
                iv_candidates.append(("前16字节作为IV", d_decoded[:16], d_decoded[16:]))
            if len(d_decoded) >= 32:
                iv_candidates.append(("16-32字节作为IV", d_decoded[16:32], d_decoded[32:]))
            
            # 也尝试零 IV
            iv_candidates.append(("零IV", b'\x00' * 16, d_decoded))
            
            for iv_name, iv, ct in iv_candidates:
                result, error = try_decrypt_aes(ct, key, iv, "CBC")
                if result:
                    try:
                        decrypted_text = result.decode('utf-8')
                        print(f"  ✓ 成功解密 (CBC, {iv_name})!")
                        print(f"  解密结果: {decrypted_text[:200]}...")
                        try:
                            json_data = json.loads(decrypted_text)
                            print(f"  ✓ 是有效的 JSON:")
                            print(f"  {json.dumps(json_data, indent=2, ensure_ascii=False)}")
                        except:
                            pass
                        return result
                    except UnicodeDecodeError:
                        print(f"  ✗ 解密结果不是 UTF-8 文本")
                else:
                    if iv_name == "零IV":  # 只显示零IV的错误
                        pass  # 不显示错误，避免输出过多
            
            # 尝试 ECB 模式
            result, error = try_decrypt_aes(d_decoded, key, None, "ECB")
            if result:
                try:
                    decrypted_text = result.decode('utf-8')
                    print(f"  ✓ 成功解密 (ECB)!")
                    print(f"  解密结果: {decrypted_text[:200]}...")
                    try:
                        json_data = json.loads(decrypted_text)
                        print(f"  ✓ 是有效的 JSON:")
                        print(f"  {json.dumps(json_data, indent=2, ensure_ascii=False)}")
                    except:
                        pass
                    return result
                except UnicodeDecodeError:
                    print(f"  ✗ 解密结果不是 UTF-8 文本")


def analyze_cookie_tokens():
    """分析 Cookie 中的 token，可能包含密钥信息"""
    print("\n" + "=" * 80)
    print("Cookie Token 分析")
    print("=" * 80)
    
    cookies = {
        "mix_auth_token": "df694bd7f0ab75ba42544ebbd127776ea2ed9d89f10e481bc28ab72782780794a%3A2%3A%7Bi%3A0%3Bs%3A14%3A%22mix_auth_token%22%3Bi%3A1%3Bs%3A112%3A%22eyJpZCI6IjQ3Mzc1MDEiLCJjb21wYW55X2lkIjoiMzg0MzY2OCIsInRva2VuIjoiMDdiMzY0OTZiYjgzOWFkM2IwZTM5ZTQ0YWI1ZmZkOTEifQ%3D%3D%22%3B%7D",
        "LOCAL_KEY_IN_WEBSITE": "f8d3b4feebb163c118728d23ae42da39003aa6544ec93dff",
        "mix_sys_token": "b350daa85e9c5506ac728b8bf3d7bb830ed148dcff228306a13d834b3e6b50bca%3A2%3A%7Bi%3A0%3Bs%3A13%3A%22mix_sys_token%22%3Bi%3A1%3Bs%3A592%3A%22eyJhIjoiZFJYNWNtS0ROSFpxVzIrdXk2R0hGWnRacHhkbEE5M3RremdoZ1ltbjUrR0NJYzMyUWdLYk1TVkNhS3k5RGpKQ2xFdWNwd0kxZ1RDbVVOYUd5VzNDWUhQWWRLUDhTMWx1WUgxOGZvOVBQTWRFUHFyTmVpSGpCM3RiOGV5Y0NHKzJQNnl1dTZFOTB4amlFTTNJWFoyRkkvVlFocy9ZYlFldWFtNEo1TlR3OUJzPSIsImIiOiJGRmYrSTE0bXRZcCt0RDU2Z0JnSlJQYSthMUFZOFBPbUVpUnVEZ2xwakU4T1pyZU5nVzBOSUtBT3dobVVpUmNXU0hvYkdQRnhVeSthSW13aGJKNjI4TUkyVWNiQ0NkRk90Q0RvUG1MdUlra0FHUlc2dmN5V044NmdoTEFSZGU4OFJnekpDUkxGT05RZlcrSGg1eStETjBpd0lwVE03cVhTWUlOc1V2NkltaUI2SS9SVktBNUs5MUo1UWUxN1BzUTZIZS80OEpVVDAzSC9UdWZNcjBoWFlEZWttWWZkQTRTcjBwelhFb3pENTlNVWR4SWdYZnk4Z1Y5NzQzblM0c2JpIn0%3D%22%3B%7D"
    }
    
    print("\nLOCAL_KEY_IN_WEBSITE (可能是本地密钥):")
    local_key = cookies["LOCAL_KEY_IN_WEBSITE"]
    print(f"  值: {local_key}")
    print(f"  长度: {len(local_key)}")
    
    # 尝试从 LOCAL_KEY 派生密钥
    try:
        key_bytes = bytes.fromhex(local_key)
        print(f"  作为十六进制解析: {len(key_bytes)} 字节")
        if len(key_bytes) in [16, 24, 32]:
            print(f"  ✓ 长度符合 AES 密钥要求")
    except:
        try:
            key_bytes = local_key.encode('utf-8')
            print(f"  作为 UTF-8 字符串: {len(key_bytes)} 字节")
        except:
            pass


def try_decrypt_with_server_config():
    """尝试从服务器获取配置并解密响应"""
    print("\n" + "=" * 80)
    print("尝试从服务器获取配置并解密")
    print("=" * 80)
    
    # 已有请求参数
    existing_a = REQUEST_DATA["a"]  # webUuid
    existing_b = REQUEST_DATA["b"]   # 客户端公钥
    
    # 创建加密工具
    crypto = AdsPowerCrypto()
    
    # 获取服务器配置
    print("\n正在从服务器获取配置...")
    try:
        config = crypto.get_server_config()
        if config and config.get('server_pub'):
            print(f"✓ 获取成功")
            print(f"  当前 webUuid: {config.get('a', '')[:50]}...")
            print(f"  服务器公钥: {config.get('server_pub', '')[:50]}...")
            
            # 注意：由于每次请求都会生成新的密钥对，我们无法使用旧的客户端私钥
            # 但我们可以使用新的密钥对来测试加密解密流程
            print("\n注意：由于 DH 密钥交换的特性，每次请求都会生成新的密钥对。")
            print("要解密已有的响应，需要知道对应的客户端私钥，这在请求后已丢失。")
            print("但我们可以使用新的密钥对来创建新的请求。")
            
            # 测试加密
            test_data = {
                "ua": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
                "client_hints": "",
                "fingerprint_list": "",
                "webgl_config": ""
            }
            
            print("\n测试加密功能...")
            params = crypto.create_request_params(test_data)
            print(f"  参数 a: {params['a'][:50]}...")
            print(f"  参数 b: {params['b'][:50]}...")
            print(f"  参数 c: {params['c'][:50]}...")
            
            # 测试解密（使用模拟数据）
            print("\n测试解密功能...")
            test_encrypted = params['c']
            try:
                decrypted = crypto.decrypt(test_encrypted)
                print(f"  ✓ 解密成功")
                print(f"  解密结果: {decrypted[:200]}...")
            except Exception as e:
                print(f"  ✗ 解密失败: {e}")
        else:
            print("✗ 获取服务器配置失败")
    except Exception as e:
        print(f"✗ 错误: {e}")


def main():
    """主函数"""
    print("AdsPower API 逆向分析工具")
    print("=" * 80)
    
    # 分析请求参数
    params = analyze_request_params()
    
    # 分析响应数据
    d_decoded = analyze_response_data()
    
    # 分析 Cookie tokens
    analyze_cookie_tokens()
    
    # 尝试使用传统方法解密
    try_decrypt_with_key_derivation()
    
    # 尝试使用服务器配置解密
    try_decrypt_with_server_config()
    
    print("\n" + "=" * 80)
    print("分析完成")
    print("=" * 80)
    print("\n总结：")
    print("1. 请求参数 a = webUuid（从服务器获取）")
    print("2. 请求参数 b = 客户端公钥（512位十六进制）")
    print("3. 请求参数 c = AES-CBC 加密的数据（Base64）")
    print("4. 响应参数 d = AES-CBC 加密的数据（Base64）")
    print("5. 加密使用共享密钥的前16字节，解密使用后16字节")
    print("6. 共享密钥通过 DH 密钥交换生成")


if __name__ == "__main__":
    main()
