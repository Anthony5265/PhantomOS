@echo off
echo Installing PhantomOS...
mkdir %USERPROFILE%\PhantomOS
xcopy * %USERPROFILE%\PhantomOS /E /H /Y
echo Installation complete. Run index.html in your browser.
pause
