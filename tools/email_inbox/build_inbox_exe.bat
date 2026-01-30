@echo off
chcp 65001 >nul
cd /d "%~dp0"
set "APP_NAME=代理邮箱工具"
set "APP_VERSION=1"
echo Building %APP_NAME% v%APP_VERSION% ...
python -m pip install pyinstaller PySocks openpyxl -q 2>nul
python gen_version_file.py %APP_VERSION% "%APP_NAME%"
python -m PyInstaller --noconfirm --onefile --windowed --clean --name EmailInboxReader --version-file version_info.txt --hidden-import=socks --hidden-import=openpyxl --copy-metadata PySocks email_inbox_reader_app.py
echo.
if exist "dist\EmailInboxReader.exe" (
  echo OK: dist\EmailInboxReader.exe
  python rename_exe.py %APP_VERSION% "%APP_NAME%"
) else (
  echo Build failed. Check PyInstaller output above.
)
pause
