---
title: 'Semana 12'
description: 'Desarrollo Backend con PHP y Laravel'
pubDate: '2025-12-2'
heroImage: '../../assets/images/example-blog-hero8.jpg'
tags: ['astro']
---


# 🐘 **Desarrollo Backend con PHP y Laravel**

## 🌐 1. Apache HTTP Server

**Apache HTTP Server** es el **servidor web de código abierto más utilizado en el mundo**. Su función principal es **recibir solicitudes web y devolver contenido al navegador**.

🔁 **Flujo de trabajo**:

1. El navegador envía una solicitud HTTP/HTTPS.
2. Apache recibe el request.
3. Busca el recurso solicitado (HTML, imágenes, PHP, PDF, etc.).
4. Envía la respuesta al navegador.



## 🪟 2. Apache Lounge (Windows)

**Apache Lounge** ofrece versiones compiladas de Apache para **Windows**, facilitando su uso sin instalación tradicional.

### 🧩 Instalación portable:

* Descarga versión ZIP.
* Extrae en una carpeta local (ej. `D:\Server\Apache24`).
* Configura `httpd.conf`:

  * `Listen 8080`
  * `ServerName localhost:8080`
  * `Define SRVROOT`
* Ejecuta `httpd.exe`.
* Accede desde el navegador para verificar funcionamiento.


## 🧠 3. ¿Qué es PHP?

**PHP (Hypertext Preprocessor)** es un lenguaje de programación **del lado del servidor**, especializado en desarrollo web dinámico.

✨ Características principales:

* Código abierto
* Muy usado en la web
* Integración sencilla con bases de datos
* Genera HTML dinámico

🔄 **Cómo funciona PHP**:

* El servidor envía el código PHP al intérprete.
* PHP procesa lógica, datos y consultas.
* Devuelve solo HTML/CSS/JS al navegador.
* El usuario **nunca ve el código PHP**.



## ⚙️ 4. Instalación de PHP en Windows

📦 Se instala desde un archivo ZIP:

1. Descargar desde `windows.php.net`.
2. Extraer en una carpeta local.
3. Configurar `php.ini`:

   * Habilitar extensiones (`mysqli`, `curl`, etc.).
4. Agregar PHP al **PATH del sistema**.
5. Verificar instalación con:

   ```bash
   php -v
   ```



## 🧾 5. Archivo `httpd.conf`

Es el **archivo central de configuración de Apache**.

📌 Directivas importantes:

* `ServerRoot` → ruta base del servidor
* `Listen` → puerto de escucha
* `ServerName` → nombre del servidor
* `DocumentRoot` → carpeta pública
* `DirectoryIndex` → archivo por defecto
* `ErrorLog` y `LogLevel` → manejo de errores
* `LoadModule` → carga de módulos



## 📦 6. Composer: Gestor de Dependencias

**Composer** es el gestor de dependencias estándar para PHP.

🔧 Permite:

* Instalar librerías por proyecto
* Controlar versiones
* Automatizar dependencias

📥 Instalación:

* Requiere PHP configurado.
* Descargar instalador.
* Verificar con:

  ```bash
  composer -V
  ```



## 🧩 7. Fundamentos de PHP

### 🏷️ Sintaxis básica:

```php
<?php
  echo "Hola mundo";
?>
```

### 🔹 Conceptos clave:

* **Variables:** `$nombre`, `$edad`
* **Comentarios:** `//`, `#`, `/* */`
* **Salida:** `echo`, `print`

### 🔁 Control de flujo:

* Condicionales: `if`, `else`, `switch`
* Bucles: `for`, `while`, `do...while`, `foreach`

### 📂 Inclusión de archivos:

* `include`, `require`
* Versiones `_once` para evitar duplicados

### 🧠 Funciones:

* Permiten reutilizar código
* Devuelven valores con `return`



## 🌱 8. Laravel Framework

**Laravel** es un framework PHP moderno, enfocado en **simplicidad, elegancia y productividad**.

🏗️ Se basa en el patrón **MVC (Modelo–Vista–Controlador)**.

### 🧱 Componentes principales:

* **Rutas:** Definen URLs
* **Controladores:** Manejan lógica
* **Vistas (Blade):** Interfaz de usuario
* **Eloquent ORM:** Acceso a base de datos
* **Middleware:** Seguridad y filtros
* **Artisan:** Línea de comandos
* **Migraciones y Seeds:** Gestión de base de datos



## ⚙️ 9. Instalación de Laravel

### 📋 Requisitos:

* PHP 8.1+
* Composer
* (Opcional) Node.js y NPM

### 🚀 Métodos de instalación:

* Con Composer:

  ```bash
  composer create-project laravel/laravel proyecto
  ```
* Con Laravel Installer:

  ```bash
  laravel new proyecto
  ```

▶️ Ejecutar servidor:

```bash
php artisan serve
```



## 📁 10. Estructura de Directorios Laravel

Laravel organiza el proyecto de forma clara:

* `app/` → lógica del negocio
* `routes/` → definición de rutas
* `resources/` → vistas y assets
* `database/` → migraciones y seeds
* `public/` → punto de entrada web
* `config/` → configuraciones
* `storage/` → logs y caché
* `tests/` → pruebas
* `vendor/` → dependencias (Composer)



