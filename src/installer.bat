@echo off
npm install

if NOT ["%errorlevel%"]==["0"] (
  pause
  exit /b %errorlevel%
)
