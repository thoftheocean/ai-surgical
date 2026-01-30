# -*- coding: utf-8 -*-
from __future__ import annotations

from pathlib import Path
import re
import sys


def _parse_version(s: str) -> tuple[int, int, int, int]:
    s = (s or "").strip()
    # 支持: 1 / 1.2 / 1.2.3 / 1.2.3.4（缺失位补 0）
    m = re.fullmatch(r"(\d+)(?:\.(\d+))?(?:\.(\d+))?(?:\.(\d+))?", s)
    if not m:
        raise ValueError("版本号格式需为 1 / 1.2 / 1.2.3 / 1.2.3.4")
    a = int(m.group(1))
    b = int(m.group(2) or 0)
    c = int(m.group(3) or 0)
    d = int(m.group(4) or 0)
    return a, b, c, d


def main(argv: list[str]) -> int:
    if len(argv) < 2:
        print("用法: python gen_version_file.py <version> <product_name>")
        print("示例: python gen_version_file.py 1.0.0 \"代理邮箱工具\"")
        return 2

    version_str = argv[0]
    product_name = argv[1] or "代理邮箱工具"
    fv = _parse_version(version_str)
    original_filename = f"{product_name}_v{version_str}.exe"

    out = Path(__file__).resolve().parent / "version_info.txt"
    # PyInstaller --version-file 需要的是 Python 语法的 VSVersionInfo 定义
    content = f"""# UTF-8
VSVersionInfo(
  ffi=FixedFileInfo(
    filevers={fv},
    prodvers={fv},
    mask=0x3f,
    flags=0x0,
    OS=0x4,
    fileType=0x1,
    subtype=0x0,
    date=(0, 0)
  ),
  kids=[
    StringFileInfo([
      StringTable(
        '040904B0',
        [
          StringStruct('CompanyName', '{product_name}'),
          StringStruct('FileDescription', '{product_name}'),
          StringStruct('FileVersion', '{version_str}'),
          StringStruct('InternalName', 'EmailInboxReader'),
          StringStruct('OriginalFilename', '{original_filename}'),
          StringStruct('ProductName', '{product_name}'),
          StringStruct('ProductVersion', '{version_str}')
        ]
      )
    ]),
    VarFileInfo([VarStruct('Translation', [1033, 1200])])
  ]
)
"""
    out.write_text(content, encoding="utf-8")
    print(f"[version] 写入: {out}  (v{version_str})")
    return 0


if __name__ == "__main__":
    raise SystemExit(main(sys.argv[1:]))

