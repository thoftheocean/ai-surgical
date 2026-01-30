# -*- coding: utf-8 -*-
"""
完整解密测试
使用已有的共享密钥测试解密响应
"""

from Crypto.Cipher import AES
from Crypto.Util.Padding import unpad
import base64
import json

def decrypt_response(ciphertext_b64: str, shared_key_hex: str) -> str:
    """
    解密响应数据
    
    对应 JavaScript 代码（fa536.js 第 17826-17833 行）：
    decrypto(e) {
        let t = Sg.default.enc.Utf8.parse(this.getSharedKey().slice(-16));
        return Sg.default.AES.decrypt(e, t, {
            iv: t,
            mode: Sg.default.mode.CBC,
            padding: Sg.default.pad.Pkcs7
        }).toString(Sg.default.enc.Utf8)
    }
    
    关键点：
    1. getSharedKey() 返回十六进制字符串（64个字符，SHA256 哈希）
    2. slice(-16) 取最后16个字符（十六进制字符串）
    3. Utf8.parse() 将这16个字符作为 UTF-8 字符串解析为字节（不是十六进制转字节！）
    
    Args:
        ciphertext_b64: Base64 编码的密文
        shared_key_hex: 共享密钥（64个十六进制字符的字符串）
        
    Returns:
        解密后的字符串
    """
    # 1. 取共享密钥的最后16个字符（十六进制字符串）
    key_str = shared_key_hex[-16:]
    
    # 2. 将这16个字符作为 UTF-8 字符串编码为字节
    # 注意：这里不是将十六进制转换为字节，而是将字符串作为 UTF-8 编码
    key = key_str.encode('utf-8')
    iv = key  # IV 与密钥相同
    
    # 3. Base64 解码密文
    try:
        ciphertext = base64.b64decode(ciphertext_b64)
    except Exception as e:
        return f"Base64 解码失败: {e}"
    
    # 4. AES-CBC 解密
    try:
        cipher = AES.new(key, AES.MODE_CBC, iv)
        decrypted = unpad(cipher.decrypt(ciphertext), AES.block_size)
        return decrypted.decode('utf-8')
    except ValueError as e:
        return f"解密失败 (Padding 错误): {e}"
    except Exception as e:
        return f"解密失败: {e}"


def main():
    """主函数"""
    print("=" * 80)
    print("AdsPower API 响应解密测试")
    print("=" * 80)
    
    # 已有的响应数据
    cipher_text = "MQDi8G0sX9bNYoC13RHD/kx60+NRgppbFTaepgcQSSUqKtiFzjqHzade1cN4aXq7JmbasuGXpP/GfzuDNf61/AivQYvc41UnpvUzb0L53cFZtQ8R6fRIVb4L0m1UipDC2M/syTgN/6ewtz6VynoiddaNzUzHxENfV3VB0J01lwZyfIN5Z07RGUAKRY2Xdb1YTd+3wvBAvBQ3mE9AEaNd/ZY42DMeJZECRpFmyp78P8tL9cL4+ojOiVgMsz0bwuS/ngcEP8SQPjXhIORE3wCHCTCEpjJV3Argf0ODP7RqI51bYHo7MJv3Its6m9/mJrcVpASQt5+YHtvstiIwrwMYBa1QWoONQl2JJmGwLBkGk+hDb3iYWz0F9FVStsVn5EcByKiwTBhILuLTnyFdztxWud4ijNooFL1gld5OWpnb7IhjI5pQbxdlVgy2tKg1LrvARm6dqVKxBveGTKI32qdrgm/s/4avfgsOBYJHQplPpaZyGOFr2XbDE6/5xRZPIiOS"
    
    print("\n响应密文（Base64）:")
    print(f"  {cipher_text[:100]}...")
    
    print("\n" + "=" * 80)
    print("使用方法")
    print("=" * 80)
    print("\n要解密响应，需要知道对应的共享密钥（64个十六进制字符）。")
    print("共享密钥是通过 DH 密钥交换生成的，每次请求都会不同。")
    print("\n如果你有对应的共享密钥，可以这样使用：")
    print("\n  from test_decrypt_complete import decrypt_response")
    print("  shared_key = '你的64位十六进制共享密钥'")
    print("  result = decrypt_response(cipher_text, shared_key)")
    print("  print(result)")
    print("\n共享密钥格式示例：")
    print("  '84499a8f5f82673f5fa4ecf5ab6ac9e1f247e8a62bc223ce1e780c53a7bdbfd6'")
    print("\n注意：")
    print("  1. 共享密钥是64个十六进制字符（32字节的 SHA256 哈希）")
    print("  2. 解密使用共享密钥的最后16个字符作为密钥和 IV")
    print("  3. 这16个字符是作为 UTF-8 字符串编码为字节，不是十六进制转字节")
    
    # 如果有测试密钥，可以尝试解密
    test_secret = "84499a8f5f82673f5fa4ecf5ab6ac9e1f247e8a62bc223ce1e780c53a7bdbfd6"
    print("\n" + "=" * 80)
    print("测试解密（使用示例密钥）")
    print("=" * 80)
    print(f"\n使用测试密钥: {test_secret}")
    result = decrypt_response(cipher_text, test_secret)
    
    if "解密失败" in result or "Base64 解码失败" in result:
        print(f"\n✗ {result}")
        print("\n这表示测试密钥不是正确的密钥。")
        print("要解密实际的响应，需要使用对应请求时生成的共享密钥。")
    else:
        print(f"\n✓ 解密成功！")
        print(f"\n解密结果:")
        try:
            # 尝试解析为 JSON
            json_data = json.loads(result)
            print(json.dumps(json_data, indent=2, ensure_ascii=False))
        except:
            print(result)


if __name__ == "__main__":
    main()
