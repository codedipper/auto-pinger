@echo off
node index.js

if NOT ["%errorlevel%"]==["0"] (
  pause
  exit /b %errorlevel%
)