@echo off
npm install eris@0.13.2

if NOT ["%errorlevel%"]==["0"] (
  pause
  exit /b %errorlevel%
)