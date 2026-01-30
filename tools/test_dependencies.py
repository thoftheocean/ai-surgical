# -*- coding: utf-8 -*-
"""检查依赖"""

try:
    from Crypto.Cipher import AES
    print("pycryptodome: OK")
except ImportError:
    print("需要安装: pip install pycryptodome")

try:
    import requests
    print("requests: OK")
except ImportError:
    print("需要安装: pip install requests")
