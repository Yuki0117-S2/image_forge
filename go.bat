@echo off
cd /d E:\005_ETC\Node\Imageforge
if not exist node_modules (
  echo [FORGE] 첫 실행 - 의존성 설치 중...
  call npm install
  echo.
  echo [FORGE] 설치 완료. 앱을 실행합니다.
  echo.
)
npm start
