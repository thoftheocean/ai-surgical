# -*- coding: utf-8 -*-
"""
调试解密功能
验证密钥提取和转换是否正确
"""

from Crypto.Cipher import AES
from Crypto.Util.Padding import unpad
import base64

def decrypt_response(ciphertext_b64: str, shared_key_hex: str, debug: bool = True) -> str:
    """
    解密响应数据（带调试信息）
    """
    if debug:
        print(f"\n共享密钥（64字符）: {shared_key_hex}")
        print(f"共享密钥长度: {len(shared_key_hex)}")
    
    # 1. 取共享密钥的最后16个字符
    key_str = shared_key_hex[-16:]
    if debug:
        print(f"\n提取的最后16个字符: {key_str}")
        print(f"字符长度: {len(key_str)}")
    
    # 2. 将这16个字符作为 UTF-8 字符串编码为字节
    key = key_str.encode('utf-8')
    if debug:
        print(f"\n密钥字节: {key}")
        print(f"密钥字节长度: {len(key)}")
        print(f"密钥十六进制: {key.hex()}")
    
    iv = key  # IV 与密钥相同
    if debug:
        print(f"IV 字节: {iv}")
        print(f"IV 十六进制: {iv.hex()}")
    
    # 3. Base64 解码密文
    try:
        ciphertext = base64.b64decode(ciphertext_b64)
        if debug:
            print(f"\n密文长度: {len(ciphertext)} 字节")
            print(f"密文前32字节（hex）: {ciphertext[:32].hex()}")
    except Exception as e:
        return f"Base64 解码失败: {e}"
    
    # 4. AES-CBC 解密
    try:
        cipher = AES.new(key, AES.MODE_CBC, iv)
        decrypted = unpad(cipher.decrypt(ciphertext), AES.block_size)
        if debug:
            print(f"\n✓ 解密成功！")
            print(f"解密后长度: {len(decrypted)} 字节")
        return decrypted.decode('utf-8')
    except ValueError as e:
        if debug:
            print(f"\n✗ 解密失败: {e}")
            # 尝试不解填充看看原始结果
            try:
                raw_decrypted = cipher.decrypt(ciphertext)
                print(f"未去填充的原始结果（前64字节hex）: {raw_decrypted[:64].hex()}")
                print(f"最后16字节（hex）: {raw_decrypted[-16:].hex()}")
            except:
                pass
        return f"解密失败 (Padding 错误): {e}"
    except Exception as e:
        return f"解密失败: {e}"


def test_different_key_formats(cipher_text: str, shared_key_hex: str):
    """测试不同的密钥格式"""
    print("=" * 80)
    print("测试不同的密钥提取方式")
    print("=" * 80)
    
    # 方式1: 最后16个字符作为 UTF-8（当前方式）
    print("\n方式1: 最后16个字符作为 UTF-8 字符串编码")
    result1 = decrypt_response(cipher_text, shared_key_hex, debug=True)
    print(f"结果: {result1[:100] if len(result1) > 100 else result1}")
    
    # 方式2: 最后32个十六进制字符转换为字节（16字节）
    print("\n" + "=" * 80)
    print("方式2: 最后32个十六进制字符转换为字节（16字节）")
    try:
        key_hex = shared_key_hex[-32:]
        key = bytes.fromhex(key_hex)
        iv = key
        ciphertext = base64.b64decode(cipher_text)
        cipher = AES.new(key, AES.MODE_CBC, iv)
        decrypted = unpad(cipher.decrypt(ciphertext), AES.block_size)
        print(f"✓ 解密成功！")
        print(f"结果: {decrypted.decode('utf-8')[:100]}")
    except Exception as e:
        print(f"✗ 失败: {e}")
    
    # 方式3: 整个共享密钥的 SHA256 哈希的后16字节
    print("\n" + "=" * 80)
    print("方式3: 整个共享密钥的 SHA256 哈希的后16字节")
    try:
        import hashlib
        hash_obj = hashlib.sha256(shared_key_hex.encode('utf-8'))
        hash_hex = hash_obj.hexdigest()
        key_str = hash_hex[-16:]
        key = key_str.encode('utf-8')
        iv = key
        ciphertext = base64.b64decode(cipher_text)
        cipher = AES.new(key, AES.MODE_CBC, iv)
        decrypted = unpad(cipher.decrypt(ciphertext), AES.block_size)
        print(f"✓ 解密成功！")
        print(f"结果: {decrypted.decode('utf-8')[:100]}")
    except Exception as e:
        print(f"✗ 失败: {e}")


if __name__ == "__main__":
    cipher_text = "MQDi8G0sX9bNYoC13RHD/kx60+NRgppbFTaepgcQSSUqKtiFzjqHzade1cN4aXq7JmbasuGXpP/GfzuDNf61/AivQYvc41UnpvUzb0L53cFZtQ8R6fRIVb4L0m1UipDC2M/syTgN/6ewtz6VynoiddaNzUzHxENfV3VB0J01lwZyfIN5Z07RGUAKRY2Xdb1YTd+3wvBAvBQ3mE9AEaNd/ZY42DMeJZECRpFmyp78P8tL9cL4+ojOiVgMsz0bwuS/ngcEP8SQPjXhIORE3wCHCTCEpjJV3Argf0ODP7RqI51bYHo7MJv3Its6m9/mJrcVpASQt5+YHtvstiIwrwMYBa1QWoONQl2JJmGwLBkGk+hDb3iYWz0F9FVStsVn5EcByKiwTBhILuLTnyFdztxWud4ijNooFL1gld5OWpnb7IhjI5pQbxdlVgy2tKg1LrvARm6dqVKxBveGTKI32qdrgm/s/4avfgsOBYJHQplPpaZyGOFr2XbDE6/5xRZPIiOS"
    test_secret = "84499a8f5f82673f5fa4ecf5ab6ac9e1f247e8a62bc223ce1e780c53a7bdbfd6"
    
    print("=" * 80)
    print("AdsPower API 解密调试")
    print("=" * 80)
    
    # 测试不同的密钥格式
    test_different_key_formats(cipher_text, test_secret)
    
    print("\n" + "=" * 80)
    print("说明")
    print("=" * 80)
    print("\n如果所有方式都失败，可能的原因：")
    print("1. 测试密钥不是正确的密钥（最可能）")
    print("2. 需要知道对应请求时生成的共享密钥")
    print("3. 共享密钥的格式或提取方式可能不同")
    print("\n要获取正确的共享密钥，需要：")
    print("1. 从浏览器开发者工具中捕获请求")
    print("2. 在 JavaScript 代码中设置断点，查看 getSharedKey() 的返回值")
    print("3. 或者使用完整的加密工具生成新的请求并保存共享密钥")
