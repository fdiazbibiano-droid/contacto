@echo off
echo ============================================================
echo  NW Point Construction - Strapi CMS Setup
echo ============================================================

:: Buscar MySQL en Laragon
set MYSQL_BIN=C:\laragon\bin\mysql\mysql-8.4.3-winx64\bin\mysql.exe

if not exist "%MYSQL_BIN%" (
    echo ERROR: No se encontro MySQL en %MYSQL_BIN%
    echo Verifica la version instalada en C:\laragon\bin\mysql\
    pause
    exit /b 1
)

echo MySQL encontrado: %MYSQL_BIN%

echo.
echo [1/4] Creando base de datos MySQL...
"%MYSQL_BIN%" -u root < database\setup.sql
if %errorlevel% neq 0 (
    echo ERROR: No se pudo conectar a MySQL. Verifica que Laragon este corriendo.
    pause
    exit /b 1
)

echo.
echo [2/4] Copiando archivo de configuracion...
if not exist .env (
    copy .env.example .env
    echo Archivo .env creado.
) else (
    echo .env ya existe, se omite la copia.
)

echo.
echo [3/4] Instalando dependencias...
npm install
if %errorlevel% neq 0 (
    echo ERROR al instalar dependencias.
    pause
    exit /b 1
)

echo.
echo [4/4] Iniciando Strapi en modo desarrollo...
echo Strapi abrira en http://localhost:1337/admin
echo Crea el primer usuario administrador en esa pantalla.
npm run develop
