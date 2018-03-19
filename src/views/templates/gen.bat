echo off
set arg1=%1

md %arg1%
echo.>%arg1%"\"%arg1%".htm"

echo.
echo.
echo     =================================================
echo     	%arg1%  Generated Successfully
echo     =================================================
echo.
echo.