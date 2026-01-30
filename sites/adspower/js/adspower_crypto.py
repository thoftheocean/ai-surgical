# -*- coding: utf-8 -*-
"""
AdsPower API 加密解密工具
还原 random-fingerprint-v2 接口的加密解密逻辑
"""
import time
import base64
import json
import hashlib
import random
from tkinter import N
from typing import Dict, Any, Optional
from Crypto.Cipher import AES
from Crypto.Util.Padding import pad, unpad
import requests
from urllib.parse import quote


class AdsPowerCrypto:
    """AdsPower API 加密解密类"""
    
    # 固定的 DH 素数（经过 Vh 解码后的值）
    SRC_P = "B1f3cquQPIb6vI4kvIOpvtPiGFzQP6micFN2c6zSPq3pBRPDvthXc1v8P6TkB1PDBIvkcU73v1hDPUb6cqzXG6mSc6cUGFOicqOiGFmFcUPpPqhDcqc2P6vqGI78BIG9cF42P1Gjct3jGt78vIm9c6bjPtG9vqPXvqv2cUcqct8qPROjGUfkPto6GFcqcU72PIzXc1biBRzFvt43PUOpcIPjcRmic6mQcROQG62qPtGXGqmjctziGUbjPRGDvUbFcFmFPROiPFPFv1lUctuQctckcFOjBtf3ct8kB1vUGt43GIc8vRf8vquDvquivIGQc688v122Pt3iPqOjvIv8G639cqhScI4qcRGpctoFP6TUPt3iPtlqGqbpB1oQv123cROXv1h9ctGDcqOFP6cUBIP9PtoQvq3QG6oFcFP6G6OjctN2GFbiPFbFPqPic1mSGUmjP6PSB1hivIOicqNqcF7kBROFGUmXPI7kPqPpBIf3PF72c6PivUOSc6c2vqz6GIbFP122vI4qBtu6Bt3SvqmSGINUPtP9cUm9P6v8vRf2BtT3GIN3B139Pt22PtGiB1uDBIN3P6hXctG6vUz6BtG6Pt3iGtbpPIbpP6hDPRmDc1l3vqopGUzFP1zXv12kGIN2PU42GF4Uctc2c6uXcF43G6bFv1GFcIP9cqbjP1P"
    
    # 自定义 Base64 字符表
    BASE64_STD = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
    BASE64_CUSTOM = "hTy1bfRJz4nLPcBCO7WtmNIaGvVeul5Zo8kq32UxrYw_-0gsjp96SDFXQiEMKdHA"
    
    def __init__(self, base_url: str = "https://api.adspower.com/"):
        """
        初始化加密工具
        
        Args:
            base_url: API 基础 URL
        """
        self.base_url = base_url.rstrip('/') + '/'
        self.web_uuid = ""
        self.server_pub = ""
        self.shared_secret = ""
        self.client_private = None
        self.client_public = None
        self._p = None
        
    def _vh_decode(self, encoded_str: str) -> str:
        """
        自定义 Base64 解码函数（对应 JS 中的 Vh 函数）
        
        Args:
            encoded_str: 编码后的字符串
            
        Returns:
            解码后的 UTF-8 字符串
        """
        if not encoded_str:
            return ""
        
        std_table = self.BASE64_STD
        custom_table = self.BASE64_CUSTOM
        
        decoded = ""
        for char in encoded_str:
            idx = custom_table.find(char)
            if idx < 0:
                decoded += char
            else:
                decoded += std_table[idx]
        
        # 标准 Base64 解码，然后按 UTF-8 还原字符串
        # 对应 JS: CryptoJS.enc.Base64.parse(s).toString(CryptoJS.enc.Utf8)
        try:
            decoded_bytes = base64.b64decode(decoded)
            return decoded_bytes.decode("utf-8")
        except Exception:
            return decoded
    
    def _generate_random_hex(self, length: int) -> str:
        """
        生成随机十六进制字符串
        
        Args:
            length: 长度（字节数）
            
        Returns:
            十六进制字符串
        """
        # 对齐 JS：
        # window.crypto.getRandomValues(Uint8Array(length))
        # Array.from(t).map(b => b.toString(16).padStart(2, "1")).join("")
        import os
        bs = os.urandom(length)
        out = []
        for b in bs:
            h = format(b, "x")
            if len(h) < 2:
                h = "1" + h  # padStart(2, "1")
            out.append(h)
        return "".join(out)
    
    def _bigint_mod_pow(self, base: int, exp: int, mod: int) -> int:
        """
        大整数模幂运算 (base^exp mod mod)
        
        Args:
            base: 底数
            exp: 指数
            mod: 模数
            
        Returns:
            结果
        """
        return pow(base, exp, mod)
    
    def _hex_to_int(self, hex_str: str) -> int:
        """十六进制字符串转整数"""
        return int(hex_str, 16)
    
    def _int_to_hex(self, num: int, pad_length: int = 0) -> str:
        """整数转十六进制字符串"""
        hex_str = hex(num)[2:]
        if pad_length > 0:
            hex_str = hex_str.zfill(pad_length)
        return hex_str
    
    def init_dh_params(self):
        """初始化 DH 参数"""
        # 解码素数 P
        p_hex_str = self._vh_decode(self.SRC_P)
        self._p = int(p_hex_str, 16)
        
        # 生成客户端私钥（对齐 JS：generateRandomNumber(256) -> 256 bytes -> 512 hex chars）
        private_hex = self._generate_random_hex(256)
        self.client_private = int(private_hex, 16)
        
        # 计算客户端公钥: pub = 2^private mod p
        base = 2
        self.client_public = self._bigint_mod_pow(base, self.client_private, self._p)
    
    def get_client_public_hex(self) -> str:
        """
        获取客户端公钥（十六进制，512位）
        
        Returns:
            512位十六进制字符串
        """
        if self.client_public is None:
            self.init_dh_params()
        return self._int_to_hex(self.client_public, 512)
    
    def generate_shared_secret(self, server_public_hex: str):
        """
        生成共享密钥
        
        Args:
            server_public_hex: 服务器公钥（十六进制字符串）
        """
        if self._p is None or self.client_private is None:
            self.init_dh_params()
        
        server_pub = int(server_public_hex, 16)
        
        # 计算共享值（十六进制字符串，固定 512 chars）
        shared = self._bigint_mod_pow(server_pub, self.client_private, self._p)
        shared_hex = self._int_to_hex(shared, 512)[:512]
        
        # 对齐 JS：CryptoJS.SHA256(shared_hex_string).toString(enc.Hex)
        # 重要：这里 SHA256 的输入是“字符串的 UTF-8 字节”，不是 hex-decode 后的 bytes
        self.shared_secret = hashlib.sha256(shared_hex.encode("utf-8")).hexdigest()
        self.server_pub = server_public_hex
    
    def encrypt(self, data: Any) -> str:
        """
        加密数据（对应 JS 中的 encrypto 方法）
        
        JavaScript 代码：
        async encrypto(e) {
            let t = this.getSharedKey();
            let a = Sg.default.enc.Utf8.parse(t.slice(0, 16))
            let o = Sg.default.enc.Utf8.parse(JSON.stringify(e))
            return Sg.default.AES.encrypt(o, a, {
                iv: a,
                mode: Sg.default.mode.CBC,
                padding: Sg.default.pad.Pkcs7
            }).toString()
        }
        
        Args:
            data: 要加密的数据（字符串或字典）
            
        Returns:
            Base64 编码的加密字符串
        """
        if not self.shared_secret:
            raise ValueError("共享密钥未初始化，请先调用 generate_shared_secret")
        
        # JavaScript: t.slice(0, 16)
        # getSharedKey() 返回十六进制字符串（64个字符）
        # slice(0, 16) 取前16个字符（十六进制字符串）
        # Sg.default.enc.Utf8.parse() 将这16个字符作为 UTF-8 字符串解析为字节
        key_str = self.shared_secret[:16]  # 取前16个字符（十六进制字符串）
        key = key_str.encode('utf-8')  # 作为 UTF-8 字符串编码为字节
        iv = key  # IV 与密钥相同
        
        # 准备明文
        if isinstance(data, dict):
            plaintext = json.dumps(data, ensure_ascii=False).encode('utf-8')
        else:
            plaintext = str(data).encode('utf-8')
        
        # AES-CBC 加密
        cipher = AES.new(key, AES.MODE_CBC, iv)
        padded_data = pad(plaintext, AES.block_size)
        ciphertext = cipher.encrypt(padded_data)
        
        # Base64 编码
        return base64.b64encode(ciphertext).decode('utf-8')
    
    def decrypt(self, encrypted_data: str) -> str:
        """
        解密数据（对应 JS 中的 decrypto 方法）
        
        JavaScript 代码：
        decrypto(e) {
            let t = Sg.default.enc.Utf8.parse(this.getSharedKey().slice(-16));
            return Sg.default.AES.decrypt(e, t, {
                iv: t,
                mode: Sg.default.mode.CBC,
                padding: Sg.default.pad.Pkcs7
            }).toString(Sg.default.enc.Utf8)
        }
        
        Args:
            encrypted_data: Base64 编码的加密字符串
            
        Returns:
            解密后的 JSON 字符串
        """
        if not self.shared_secret:
            raise ValueError("共享密钥未初始化，请先调用 generate_shared_secret")
        
        # JavaScript: this.getSharedKey().slice(-16)
        # getSharedKey() 返回十六进制字符串（64个字符）
        # slice(-16) 取最后16个字符（十六进制字符串）
        # Sg.default.enc.Utf8.parse() 将这16个字符作为 UTF-8 字符串解析为字节
        key_str = self.shared_secret[-16:]  # 取最后16个字符（十六进制字符串）
        key = key_str.encode('utf-8')  # 作为 UTF-8 字符串编码为字节
        iv = key  # IV 与密钥相同
        
        # Base64 解码
        ciphertext = base64.b64decode(encrypted_data)
        
        # AES-CBC 解密
        cipher = AES.new(key, AES.MODE_CBC, iv)
        decrypted = unpad(cipher.decrypt(ciphertext), AES.block_size)
        
        return decrypted.decode('utf-8')
    
    def get_server_config(self) -> Dict[str, Any]:
        """
        从服务器获取配置（包含 webUuid 和服务器公钥）
        
        Returns:
            配置字典，包含 'a' (webUuid) 和服务器公钥
        """
        url = f"{self.base_url}sys/config/fe/config"
        try:
            response = requests.get(url, timeout=10)
            if response.status_code == 200:
                data = response.json()
                if data.get('code') == 0:
                    config_data = data.get('data', {})
                    self.web_uuid = config_data.get('b', '')
                    server_pub = config_data.get('a', '')
                    if server_pub:
                        self.generate_shared_secret(server_pub)
                    return {
                        'a': self.web_uuid,
                        'server_pub': server_pub
                    }
        except Exception as e:
            print(f"获取服务器配置失败: {e}")
        return {}
    
    def create_request_params(self, data: Dict[str, Any], save_key: bool = True) -> Dict[str, str]:
        """
        创建加密请求参数
        
        Args:
            data: 要发送的原始数据
            save_key: 是否打印共享密钥（用于后续解密）
            
        Returns:
            包含 a, b, c 参数的字典
        """
        # 确保已初始化
        if not self.web_uuid:
            self.get_server_config()
        
        if not self.shared_secret:
            raise ValueError("无法生成共享密钥，请检查服务器配置")
        
        # 参数 a: webUuid
        param_a = self.web_uuid
        
        # 参数 b: 客户端公钥
        if not self.server_pub:
            self.get_server_config()
        param_b = self.server_pub
        
        # 参数 c: 加密后的数据
        param_c = self.encrypt(data)
        
        # 保存共享密钥（重要：用于后续解密响应）
        if save_key:
            print(f"\n{'='*80}")
            print("重要：请保存此共享密钥用于解密响应！")
            print(f"{'='*80}")
            print(f"共享密钥: {self.shared_secret}")
            print(f"共享密钥长度: {len(self.shared_secret)} 字符")
            print(f"{'='*80}\n")
        
        return {
            'a': param_a,
            'b': param_b,
            'c': param_c
        }
    
    def decrypt_response(self, response_data: Dict[str, Any]) -> Dict[str, Any]:
        """
        解密响应数据
        
        Args:
            response_data: 响应字典，包含 'd' 字段
            
        Returns:
            解密后的数据字典
        """
        if 'd' not in response_data:
            return response_data
        
        encrypted = response_data['d']
        decrypted_str = self.decrypt(encrypted)
        return json.loads(decrypted_str)


def get_webgl_info(webgl_config):
    headers = {
        "accept": "application/json, text/plain, */*",
        "accept-language": "en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7,ja;q=0.6",
        "cache-control": "no-cache",
        "content-type": "application/x-www-form-urlencoded",
        "cpl": "f8d3b4feebb163c118728d23ae42da39003aa6544ec93dff",
        "dnt": "1",
        "origin": "https://app.adspower.com",
        "pragma": "no-cache",
        "priority": "u=1, i",
        "referer": "https://app.adspower.com/",
        "sec-ch-ua": "\"Not(A:Brand\";v=\"8\", \"Chromium\";v=\"144\", \"Google Chrome\";v=\"144\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-site",
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36"
    }
    cookies = {
        "__SYS_ID": "e3cb638c93921aeb9fd55562c63ac3a6",
        "_ga": "GA1.1.327972040.1767593038",
        "_ga_9K1P99FT9H": "GS2.1.s1767771791$o1$g1$t1767772335$j58$l0$h0",
        "_clck": "1ms6nxh%5E2%5Eg32%5E0%5E2196",
        "mix_auth_token": "df694bd7f0ab75ba42544ebbd127776ea2ed9d89f10e481bc28ab72782780794a%3A2%3A%7Bi%3A0%3Bs%3A14%3A%22mix_auth_token%22%3Bi%3A1%3Bs%3A112%3A%22eyJpZCI6IjQ3Mzc1MDEiLCJjb21wYW55X2lkIjoiMzg0MzY2OCIsInRva2VuIjoiMDdiMzY0OTZiYjgzOWFkM2IwZTM5ZTQ0YWI1ZmZkOTEifQ%3D%3D%22%3B%7D",
        "LOCAL_KEY_IN_WEBSITE": "f8d3b4feebb163c118728d23ae42da39003aa6544ec93dff",
        "_ga_K2YHW9SEB6": "GS2.1.s1769491961$o5$g0$t1769491962$j59$l0$h0",
        "_ga_VWWBJMDHVS": "GS2.1.s1769491963$o2$g0$t1769491963$j60$l0$h0",
        "_gcl_au": "1.1.1953775957.1767593038.721502081.1769491969.1769491968",
        "_rdt_uuid": "1767593038183.58cc632c-8bde-40a0-abf8-a1984c5baef5",
        "_uetsid": "01a21430fb2711f0b5a21dce4807e87b",
        "_uetvid": "532b3540e9fc11f080fc4d3a16daa71a",
        "_ga_GYSTDEWK7R": "GS2.1.s1769491961$o7$g1$t1769494333$j60$l0$h0",
        "_ga_L7VGNTG1DW": "GS2.1.s1769491967$o3$g1$t1769494333$j60$l0$h0",
        "mix_sys_token": "e5442b657fc94621709b1f23655243d998f809ff607ef0d3599d2586a9f6d2d2a%3A2%3A%7Bi%3A0%3Bs%3A13%3A%22mix_sys_token%22%3Bi%3A1%3Bs%3A592%3A%22eyJhIjoibWRkQmltNk1TWjlpdlE4bTNzTUxzK3pLdHo0R1dndkZld1U2dUo2OVQ5dDRjYlg0aHc1TWdqZzVpdVRibnNNUU9mY084YU5Lbjdvek5XaGYrZm5wSXd4MG5tbHlBdnpUV1ZmNSt5MmRGKzU4eUFvRFZ0TytlQzdtWFZYdTJ5YVFLMzRNdlI4R0FScURpc3A3L2kvYzIvb29qeExFVTRjajFuQms2K1NSWjkwPSIsImIiOiJDUURGMjRSTEdnK3FNSVBYZmhUM3VDTUJwd21UeWRINzU3QWFNNFNLUm9uRkVFYXM1TGg5WDhtV2JEQzJQZ0prTmNBMEMyMmNOQTFWQXNvVXVpNVlaY2c2STRaL1V5Q0gyR2RFWkMrdThtREZSMWx2aVRiMEJncVJ0RS9ocUZtKzlvWmw0RjR5TGNBajlWSDJ4ZGRPZGJITnA4enV3YnpFSHRqWkhhVW90SVh1eHlwNy9WTGRlOXZLZkluaEkrdkY0SVVGVCt0QUVNd1NHUDE1UWxpZDFNU2RHcjFEdDhiRFR2L2VraS9oQ1kweCswdW9iWWJmVjBEYTV1L2xaa3NGIn0%3D%22%3B%7D",
        "_clsk": "1mu56v1%5E1769494335623%5E1%5E1%5Ea.clarity.ms%2Fcollect",
        "_rdt_pn": ":300~fc977ab83ae46e04fdd00650f4eb9978061ee6844e44fcd59473c722be268682|300~befe145c529d100e3b388130ab415e38d837f89d95a2842f93503bb142d78301|300~1af9474af392ed25848365a90a69b77d7e3f6b8415aec241c01142bc172a8620|300~6a827fcf066fbd41fbd3624aab1bdd736895dc5d1aa093ddd3856279b131c983|300~6f1d3c6e1e03edb7025365e76c5b15df10fa3a17ce940b87928b9a20e63bb9c2",
        "_rdt_em": ":da214509e318d6484cee314b427545a3bc4944136b647df4ec4f604e87aec90a,da214509e318d6484cee314b427545a3bc4944136b647df4ec4f604e87aec90a,da214509e318d6484cee314b427545a3bc4944136b647df4ec4f604e87aec90a,d4a287beec39bc1972766f8036963867206934e4aac75618a4ced84d9104b3f0"
    }
    url = "https://api.adspower.com/fbcc/user/random-fingerprint-v2"
    
    print(f"✓ 获取成功")
    print(f"  webUuid (a): {config.get('a', '')[:50]}...")
    print(f"  服务器公钥: {config.get('server_pub', '')[:50]}...")
    
    # 创建测试请求数据
    test_data = {
        "ua": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
        "client_hints": "",
        "fingerprint_list": "",
        "webgl_config": ""
    }
    test_data = {
    "system_version": "Windows",
    "version": "",
    "browser": "chrome",
    "ua": "",
    "kernel_version": "ua_auto"
    }
    test_data = {
    "ua": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/142.0.7444.134 Safari/537.36",
    "client_hints": "{\"model\":\"\",\"wow64\":\"\",\"mobile\":\"\",\"bitness\":\"64\",\"platform\":\"Windows\",\"architecture\":\"x86\",\"ua_full_version\":\"142.0.7444.134\",\"platform_version\":\"10.0.0\"}",
    "fingerprint_list": "kernel_version,webgl,mac_address,device_name,audio_id,client_rects_id",
    "webgl_config": webgl_config
}
    # 生成加密参数
    params = crypto.create_request_params(test_data)
    print(f"参数 a: {params['a']}")
    print(f"参数 b: {params['b'][:100]}...")
    print(f"参数 c: {params['c'][:100]}...")
    try:
        response = requests.post(url, headers=headers, cookies=cookies, data=params)
        response_data = response.json()['data']
        print(response.json())
        # response_data=get_ua_data()
        # response_data = {
        #     "d": "wk0C2smjeC+HN1QwnobcsoQV/rmBsWvJA5rTQtMNXBztzLn6dy2kDwc8DRR8vumrCIDODpA2qZesczgs5vMgRMN9/tnH751pNhT/MnTwH/mJT7jpU7IXAeqhMMHc3py61s2aMQ0an8VeR9woAttp40hkdCmDSmy1IBgrTr6iKGbDPJiXSqu9KSqkAUB/ctTJznZmSbfuAwH+im9qB46sItNjHwn9Z4adbNNWGYTpkiuBIZnuclr7CMis21cPXuC7WzIzsVEYClgVFsvFszOgvucHTryQF30ju+fwYKd4CcZr0gI5lVayZNRvEndYWc582B7xwdS051Pr0w46esu8Q69QSanq0aBf0+1n9ECCbnfOyL6ySj0bgtZ8y1DO3N2eUKQVzyll2IT1WUgQmmtUGnADE1YSIk/v5YBhCNjIJeZPjFNnFsr2QKYp5o5IOVp9bxEkRCoxeF8+DAntPTo/OS/vT/ATHiqSc/xOLpiXyR8eNVr34GQE+EI8MT5WRj9KH6ZajhIfRaRE/8EBdhZExiF7l0SaJ/nC+nf4f1ZDKBo="
        # }
        if response_data:
            result = crypto.decrypt(response_data['d'])
            print(result)
            return result
    except Exception as e:
        print(e)
        time.sleep(random.uniform(0.5,1))
    return {}

def out_webgl_json(iterations_per_vendor: int = 100) -> dict:
    """
    批量获取 webgl_info，并按 unmasked_vendor 分组输出、去重。

    输出格式示例：
    {
      "ARM": [
        {"unmasked_renderer": "...", "unmasked_vendor": "ARM", "system": "Android"}
      ],
      "Google Inc. (Intel)": [
        {"unmasked_renderer": "...", "unmasked_vendor": "Google Inc. (Intel)", "system": "Windows"}
      ]
    }
    """
    webgl_configs = {
        "ARM": "{\"system\":\"Android\",\"unmasked_vendor\":\"ARM\"}",
        "Qualcomm": "{\"system\":\"Android\",\"unmasked_vendor\":\"Qualcomm\"}",
        "Apple Inc.": "{\"system\":\"iOS\",\"unmasked_vendor\":\"Apple Inc.\"}",
        "Google Inc. (AMD)-Linux": "{\"system\":\"Linux\",\"unmasked_vendor\":\"Google Inc. (AMD)\"}",
        "Google Inc. (Intel)-Linux": "{\"system\":\"Linux\",\"unmasked_vendor\":\"Google Inc. (Intel)\"}",
        "Google Inc. (Apple)-Mac": "{\"system\":\"Mac OS X\",\"unmasked_vendor\":\"Google Inc. (Apple)\"}",
        "Google Inc. (ATI Technologies Inc.)-Mac": "{\"system\":\"Mac OS X\",\"unmasked_vendor\":\"Google Inc. (ATI Technologies Inc.)\"}",
        "Google Inc. (Intel Inc.)-Mac": "{\"system\":\"Mac OS X\",\"unmasked_vendor\":\"Google Inc. (Intel Inc.)\"}",
        "Google Inc. (AMD)-Win": "{\"system\":\"Windows\",\"unmasked_vendor\":\"Google Inc. (AMD)\"}",
        "Google Inc. (Intel)-Win": "{\"system\":\"Windows\",\"unmasked_vendor\":\"Google Inc. (Intel)\"}",
        "Google Inc. (NVIDIA)-Win": "{\"system\":\"Windows\",\"unmasked_vendor\":\"Google Inc. (NVIDIA)\"}",
    }

    out: dict[str, list[dict]] = {}
    seen: dict[str, set[tuple[str, str, str]]] = {}

    def _safe_str(v) -> str:
        return "" if v is None else str(v)

    for _name, webgl_config in webgl_configs.items():
        # 兜底：从配置里拿 system / vendor（当接口没返回时用）
        cfg_system = ""
        cfg_vendor = ""
        try:
            cfg = json.loads(webgl_config) if isinstance(webgl_config, str) else {}
            if isinstance(cfg, dict):
                cfg_system = _safe_str(cfg.get("system"))
                cfg_vendor = _safe_str(cfg.get("unmasked_vendor"))
        except Exception:
            pass

        for _ in range(max(1, int(iterations_per_vendor))):
            raw = get_webgl_info(webgl_config)
            if not raw:
                continue

            # get_webgl_info 可能返回 str(JSON) 或 dict
            data: dict = {}
            if isinstance(raw, str):
                try:
                    data = json.loads(raw)
                except Exception:
                    continue
            elif isinstance(raw, dict):
                data = raw
            else:
                continue

            webgl = data.get("webgl")
            if not isinstance(webgl, dict):
                webgl = data if isinstance(data, dict) else {}

            unmasked_renderer = _safe_str(webgl.get("unmasked_renderer"))
            unmasked_vendor = _safe_str(webgl.get("unmasked_vendor")) or cfg_vendor
            system = _safe_str(webgl.get("system")) or cfg_system

            # 只保留这 3 个字段
            item = {
                "unmasked_renderer": unmasked_renderer,
                "unmasked_vendor": unmasked_vendor,
                "system": system,
            }

            vendor_key = unmasked_vendor or "UNKNOWN"
            sig = (item["unmasked_renderer"], item["unmasked_vendor"], item["system"])
            if sig in seen.setdefault(vendor_key, set()):
                continue
            seen[vendor_key].add(sig)

            out.setdefault(vendor_key, []).append(item)
            time.sleep(random.uniform(0.5,1))
        print(out)
    # 可选：稳定排序（方便 diff/持久化）
    for vendor_key in out:
        out[vendor_key].sort(key=lambda x: (x.get("system", ""), x.get("unmasked_renderer", "")))
    
    with open('webgl_info.json', 'w') as f:
        json.dump(out, f)
    return out

def get_user_agent(system_version="Windows"):
    headers = {
        "accept": "application/json, text/plain, */*",
        "accept-language": "en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7,ja;q=0.6",
        "cache-control": "no-cache",
        "content-type": "application/x-www-form-urlencoded",
        "cpl": "f8d3b4feebb163c118728d23ae42da39003aa6544ec93dff",
        "dnt": "1",
        "origin": "https://app.adspower.com",
        "pragma": "no-cache",
        "priority": "u=1, i",
        "referer": "https://app.adspower.com/",
        "sec-ch-ua": "\"Not(A:Brand\";v=\"8\", \"Chromium\";v=\"144\", \"Google Chrome\";v=\"144\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-site",
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36"
    }
    cookies = {
        "__SYS_ID": "e3cb638c93921aeb9fd55562c63ac3a6",
        "_ga": "GA1.1.327972040.1767593038",
        "_ga_9K1P99FT9H": "GS2.1.s1767771791$o1$g1$t1767772335$j58$l0$h0",
        "_clck": "1ms6nxh%5E2%5Eg32%5E0%5E2196",
        "mix_auth_token": "df694bd7f0ab75ba42544ebbd127776ea2ed9d89f10e481bc28ab72782780794a%3A2%3A%7Bi%3A0%3Bs%3A14%3A%22mix_auth_token%22%3Bi%3A1%3Bs%3A112%3A%22eyJpZCI6IjQ3Mzc1MDEiLCJjb21wYW55X2lkIjoiMzg0MzY2OCIsInRva2VuIjoiMDdiMzY0OTZiYjgzOWFkM2IwZTM5ZTQ0YWI1ZmZkOTEifQ%3D%3D%22%3B%7D",
        "LOCAL_KEY_IN_WEBSITE": "f8d3b4feebb163c118728d23ae42da39003aa6544ec93dff",
        "_ga_K2YHW9SEB6": "GS2.1.s1769491961$o5$g0$t1769491962$j59$l0$h0",
        "_ga_VWWBJMDHVS": "GS2.1.s1769491963$o2$g0$t1769491963$j60$l0$h0",
        "_gcl_au": "1.1.1953775957.1767593038.721502081.1769491969.1769491968",
        "_rdt_uuid": "1767593038183.58cc632c-8bde-40a0-abf8-a1984c5baef5",
        "_uetsid": "01a21430fb2711f0b5a21dce4807e87b",
        "_uetvid": "532b3540e9fc11f080fc4d3a16daa71a",
        "_ga_GYSTDEWK7R": "GS2.1.s1769491961$o7$g1$t1769494333$j60$l0$h0",
        "_ga_L7VGNTG1DW": "GS2.1.s1769491967$o3$g1$t1769494333$j60$l0$h0",
        "mix_sys_token": "e5442b657fc94621709b1f23655243d998f809ff607ef0d3599d2586a9f6d2d2a%3A2%3A%7Bi%3A0%3Bs%3A13%3A%22mix_sys_token%22%3Bi%3A1%3Bs%3A592%3A%22eyJhIjoibWRkQmltNk1TWjlpdlE4bTNzTUxzK3pLdHo0R1dndkZld1U2dUo2OVQ5dDRjYlg0aHc1TWdqZzVpdVRibnNNUU9mY084YU5Lbjdvek5XaGYrZm5wSXd4MG5tbHlBdnpUV1ZmNSt5MmRGKzU4eUFvRFZ0TytlQzdtWFZYdTJ5YVFLMzRNdlI4R0FScURpc3A3L2kvYzIvb29qeExFVTRjajFuQms2K1NSWjkwPSIsImIiOiJDUURGMjRSTEdnK3FNSVBYZmhUM3VDTUJwd21UeWRINzU3QWFNNFNLUm9uRkVFYXM1TGg5WDhtV2JEQzJQZ0prTmNBMEMyMmNOQTFWQXNvVXVpNVlaY2c2STRaL1V5Q0gyR2RFWkMrdThtREZSMWx2aVRiMEJncVJ0RS9ocUZtKzlvWmw0RjR5TGNBajlWSDJ4ZGRPZGJITnA4enV3YnpFSHRqWkhhVW90SVh1eHlwNy9WTGRlOXZLZkluaEkrdkY0SVVGVCt0QUVNd1NHUDE1UWxpZDFNU2RHcjFEdDhiRFR2L2VraS9oQ1kweCswdW9iWWJmVjBEYTV1L2xaa3NGIn0%3D%22%3B%7D",
        "_clsk": "1mu56v1%5E1769494335623%5E1%5E1%5Ea.clarity.ms%2Fcollect",
        "_rdt_pn": ":300~fc977ab83ae46e04fdd00650f4eb9978061ee6844e44fcd59473c722be268682|300~befe145c529d100e3b388130ab415e38d837f89d95a2842f93503bb142d78301|300~1af9474af392ed25848365a90a69b77d7e3f6b8415aec241c01142bc172a8620|300~6a827fcf066fbd41fbd3624aab1bdd736895dc5d1aa093ddd3856279b131c983|300~6f1d3c6e1e03edb7025365e76c5b15df10fa3a17ce940b87928b9a20e63bb9c2",
        "_rdt_em": ":da214509e318d6484cee314b427545a3bc4944136b647df4ec4f604e87aec90a,da214509e318d6484cee314b427545a3bc4944136b647df4ec4f604e87aec90a,da214509e318d6484cee314b427545a3bc4944136b647df4ec4f604e87aec90a,d4a287beec39bc1972766f8036963867206934e4aac75618a4ced84d9104b3f0"
    }
    url = "https://api.adspower.com/fbcc/user/rand-get-user-agent-v2"
    
    print(f"✓ 获取成功")
    print(f"  webUuid (a): {config.get('a', '')[:50]}...")
    print(f"  服务器公钥: {config.get('server_pub', '')[:50]}...")
    
    # 创建测试请求数据
    test_data = {
        "ua": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
        "client_hints": "",
        "fingerprint_list": "",
        "webgl_config": ""
    }
    test_data = {
    "system_version": system_version,
    "version": "",
    "browser": "chrome",
    "ua": "",
    "kernel_version": "ua_auto"
    }

    # 生成加密参数
    params = crypto.create_request_params(test_data)
    print(f"参数 a: {params['a']}")
    print(f"参数 b: {params['b'][:100]}...")
    print(f"参数 c: {params['c'][:100]}...")
    try:
        response = requests.post(url, headers=headers, cookies=cookies, data=params)
        response_data = response.json()['data']
        print(response.json())
        # response_data=get_ua_data()
        # response_data = {
        #     "d": "wk0C2smjeC+HN1QwnobcsoQV/rmBsWvJA5rTQtMNXBztzLn6dy2kDwc8DRR8vumrCIDODpA2qZesczgs5vMgRMN9/tnH751pNhT/MnTwH/mJT7jpU7IXAeqhMMHc3py61s2aMQ0an8VeR9woAttp40hkdCmDSmy1IBgrTr6iKGbDPJiXSqu9KSqkAUB/ctTJznZmSbfuAwH+im9qB46sItNjHwn9Z4adbNNWGYTpkiuBIZnuclr7CMis21cPXuC7WzIzsVEYClgVFsvFszOgvucHTryQF30ju+fwYKd4CcZr0gI5lVayZNRvEndYWc582B7xwdS051Pr0w46esu8Q69QSanq0aBf0+1n9ECCbnfOyL6ySj0bgtZ8y1DO3N2eUKQVzyll2IT1WUgQmmtUGnADE1YSIk/v5YBhCNjIJeZPjFNnFsr2QKYp5o5IOVp9bxEkRCoxeF8+DAntPTo/OS/vT/ATHiqSc/xOLpiXyR8eNVr34GQE+EI8MT5WRj9KH6ZajhIfRaRE/8EBdhZExiF7l0SaJ/nC+nf4f1ZDKBo="
        # }
        if response_data:
            result = crypto.decrypt(response_data['d'])
            print(result)
            return result
    except Exception as e:
        print(e)
        time.sleep(random.uniform(0.5,1))
    return {}


def out_useragent_json(
    system_versions: list[str] | None = None,
    iterations_per_system: int = 100,
    output_path: str | None = None,
) -> dict:
    """
    调用 get_user_agent() 批量采集 UA 信息，提取并按 kernel_version 分组，去重后保存为 JSON。

    get_user_agent() 返回示例（你给的）：
    {
      "ua": "... Chrome/143 ...",
      "client_hints": {"platform":"Windows","ua_full_version":"143.0.7499.41", ...},
      "kernel_version":"143",
      ...
    }

    输出格式：
    {
      "143": [
        {"ua":"...", "platform":"Windows", "ua_full_version":"143.0.7499.41", "kernel_version":"143"}
      ]
    }
    """
    import os
    import re

    if system_versions is None:
        system_versions = ["Windows"]

    def _safe_str(v) -> str:
        return "" if v is None else str(v)

    def _parse_json_maybe(v):
        if isinstance(v, dict):
            return v
        if isinstance(v, str):
            try:
                return json.loads(v)
            except Exception:
                return None
        return None

    out: dict[str, list[dict]] = {}
    seen: dict[str, set[tuple[str, str, str, str]]] = {}

    for system_version in system_versions:
        for _ in range(max(1, int(iterations_per_system))):
            raw = get_user_agent(system_version)
            if not raw:
                continue

            data = _parse_json_maybe(raw)
            if not isinstance(data, dict):
                continue

            ua = _safe_str(data.get("ua"))

            client_hints = data.get("client_hints")
            ch = _parse_json_maybe(client_hints) if client_hints is not None else {}
            if not isinstance(ch, dict):
                ch = {}

            platform = _safe_str(ch.get("platform"))
            ua_full_version = _safe_str(ch.get("ua_full_version"))

            kernel_version = _safe_str(data.get("kernel_version")).strip()
            if not kernel_version:
                # 兜底：从 UA 里提取 Chrome 主版本
                m = re.search(r"Chrome/(\d+)", ua)
                if m:
                    kernel_version = m.group(1)

            group_key = kernel_version or "UNKNOWN"

            item = {
                "ua": ua,
                "platform": platform,
                "ua_full_version": ua_full_version,
                "kernel_version": kernel_version,
            }

            sig = (item["ua"], item["platform"], item["ua_full_version"], item["kernel_version"])
            if sig in seen.setdefault(group_key, set()):
                continue
            seen[group_key].add(sig)

            out.setdefault(group_key, []).append(item)

    if output_path is None:
        output_path = os.path.join(os.path.dirname(__file__), "useragent_info.json")

    # 保存文件时：先读取已有数据、合并后再全量去重（避免多次运行产生重复）
    existing: dict = {}
    if os.path.exists(output_path):
        try:
            with open(output_path, "r", encoding="utf-8") as f:
                existing = json.load(f) or {}
        except Exception:
            existing = {}

    merged: dict[str, list[dict]] = {}
    # 先合并旧数据
    if isinstance(existing, dict):
        for k, v in existing.items():
            if isinstance(k, str) and isinstance(v, list):
                merged.setdefault(k, []).extend([x for x in v if isinstance(x, dict)])
    # 再合并新数据
    for k, v in out.items():
        merged.setdefault(k, []).extend([x for x in v if isinstance(x, dict)])

    # 全量去重（按四字段）
    merged_seen: dict[str, set[tuple[str, str, str, str]]] = {}
    deduped: dict[str, list[dict]] = {}
    for k, items in merged.items():
        for it in items:
            ua = _safe_str(it.get("ua")).strip()
            platform = _safe_str(it.get("platform")).strip()
            ua_full_version = _safe_str(it.get("ua_full_version")).strip()
            kernel_version = _safe_str(it.get("kernel_version")).strip()

            sig = (ua, platform, ua_full_version, kernel_version)
            if sig in merged_seen.setdefault(k, set()):
                continue
            merged_seen[k].add(sig)
            deduped.setdefault(k, []).append({
                "ua": ua,
                "platform": platform,
                "ua_full_version": ua_full_version,
                "kernel_version": kernel_version,
            })

    # 稳定排序，方便 diff
    for k in deduped:
        deduped[k].sort(key=lambda x: (x.get("platform", ""), x.get("ua_full_version", ""), x.get("ua", "")))

    with open(output_path, "w", encoding="utf-8") as f:
        json.dump(deduped, f, ensure_ascii=False, indent=2)

    print(f"[out_useragent_json] saved: {output_path}")
    return deduped


if __name__ == "__main__":
    crypto = AdsPowerCrypto()
    crypto.shared_secret = "27103b671eb2812e923b7a33441dca062a698a2521063cf39338df4856c0e4c6"

    # 获取服务器配置
    print("\n正在获取服务器配置...")
    # config = crypto.get_server_config()
    config = {
        "a": "53442a456378e44310b9cf4d99db9818d9980b58bec7dbb048bed7c3e636f92f57ea8ab8a1131329398209947b906c1abe6acf9324103234624cd3539342550c3587caf88e6a73ad9887216fdfd4348f0b45c9d24aa5c663e23c71e5c48bf096f0fd6c1173422f0a5a65e1cb501726eb6ab5d5ad7b5146f531ed4d65afe22c1ec44d99d4cca7779df8e564faba07fbb4b6d718bd66042d974851ec5c0205e7c8a3d0786697194e7418988deed2495a215d470772a2765cc1abd464c43ce87ece879b4af791ad31e702e666a21d8d617c65552cb1c5bc5b9f1045ca13b6cc5d1cf3fdd4eb294aedc2a45077110a392165e8ab273aac7ee091981a8982c66e5c5c",
        "b": "4e157abdfeec298f16799603dd979262"
    }
    crypto.web_uuid = config['b']
    crypto.server_pub = "11acce8a2b31957ef5cefc993b94f4d84d0a5b17edc4137735f2612ebd5835288aea8720e21147f9c9ae29889187a2c3b51bc414fc222a3149728ed519e0494ee0b7ef6850e208eb5b350c1e41aff316228eb15af703ef1fd83da3d70f5bbc91e218d49191a55dfc109358ad1d76eba945d2c29c06b25ef8b59b83b8cd8e2184103d7103d3e2ff8a4b82c12fc3402bab80700b09e82614c896ade48dbabbeab1f912c273c7c641cd61c314e428fa87d791e2ee69d8f47e93a382f260c33097137d5a63dce9de8f7568dc4bac3fdbc8d75cf079d363bfcb5bbe6cbfe395b651b10a87c00257d47a66d1b7d8ac72412b75378d08f8750eff6860f517a730ea781c"
    # out_webgl_json()
    out_useragent_json()