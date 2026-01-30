# -*- coding: utf-8 -*-
from __future__ import annotations

from pathlib import Path
import sys


def _safe_ver(s: str) -> str:
    # 文件名中尽量只保留数字和点
    s = (s or "").strip()
    return "".join(ch for ch in s if ch.isdigit() or ch == ".") or "0.0.0"


def main(argv: list[str]) -> int:
    base = Path(__file__).resolve().parent
    dist = base / "dist"
    src = dist / "EmailInboxReader.exe"
    ver = _safe_ver(argv[0]) if argv else ""
    name = (argv[1] if len(argv) >= 2 else "代理邮箱工具") or "代理邮箱工具"
    suffix = f"_v{ver}" if ver else ""
    dst = dist / f"{name}{suffix}.exe"

    if not src.exists():
        print(f"[rename] 源文件不存在：{src}")
        return 2

    try:
        if dst.exists():
            dst.unlink()
        src.replace(dst)  # 原子替换/重命名
        print(f"[rename] OK: {dst}")
        return 0
    except Exception as e:
        print(f"[rename] 失败：{e}")
        return 1


if __name__ == "__main__":
    raise SystemExit(main(sys.argv[1:]))

