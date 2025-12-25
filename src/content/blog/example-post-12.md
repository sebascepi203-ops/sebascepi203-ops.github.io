---
title: 'Semana 13'
description: 'Desarrollo Backend con Python, Flask y Apache'
pubDate: '2025-12-9'
heroImage: '../../assets/images/example-blog-hero8.jpg'
tags: ['astro']
---


# 🐍 **Resumen Vistoso – Desarrollo Backend con Python, Flask y Apache**

## 🌐 1. Servidor Web: Apache HTTP Server

**Apache HTTP Server** es el servidor web de código abierto más utilizado a nivel mundial. Su función principal es **recibir solicitudes web y devolver contenido al navegador**.

🔁 **Proceso de funcionamiento**:

1. El navegador envía una solicitud HTTP/HTTPS.
2. Apache recibe el request.
3. Busca el recurso solicitado (HTML, imágenes, PDFs, etc.).
4. Envía la respuesta al cliente.

### 🪟 Apache Lounge (Windows)

Apache Lounge proporciona **versiones compiladas de Apache para Windows**, permitiendo una instalación **portable** sin registrarlo como servicio.

📦 Pasos clave:

* Descargar versión ZIP.
* Extraer en una ruta local.
* Configurar `httpd.conf` (`Listen`, `ServerName`, `SRVROOT`).
* Ejecutar `httpd.exe`.
* Verificar desde el navegador.



## 🔗 2. Integración Python–Apache con mod_wsgi

**mod_wsgi** es un módulo que permite ejecutar **aplicaciones Python dentro de Apache** mediante el estándar **WSGI (Web Server Gateway Interface)**.

### ⚙️ Instalación y configuración:

* Instalar Python y agregarlo al PATH.
* Instalar mod_wsgi con `pip install mod_wsgi`.
* Definir la variable `MOD_WSGI_APACHE_ROOTDIR`.
* Obtener configuración con:

  ```
  mod_wsgi-express module-config
  ```
* Agregar `LoadFile`, `LoadModule` y `WSGIScriptAlias` en `httpd.conf`.

🎯 Esto permite ejecutar frameworks como **Flask o Django** directamente en Apache.


## 🧠 3. Introducción al Lenguaje Python

**Python** es un lenguaje interpretado, multiparadigma y de tipado dinámico, caracterizado por su **simplicidad y legibilidad**.

### 🕰️ Evolución de Python:

* **Python 1.x:** bases del lenguaje y programación funcional.
* **Python 2.x:** mejoras importantes, pero con problemas de compatibilidad.
* **Python 3.x:** versión moderna con Unicode por defecto, f-strings, data classes, pattern matching, entre otros avances.



## 🌍 4. Ámbitos de Uso de Python

Python se utiliza ampliamente en distintos campos:

* 🎓 **Educación:** ideal para aprender programación.
* 📊 **Ciencia de datos e IA:** NumPy, Pandas, TensorFlow, Scikit-learn.
* 🧩 **Desarrollo de software:** aplicaciones de escritorio, APIs y pruebas.
* 🌐 **Desarrollo web:** Flask, Django, FastAPI.
* ⚙️ **Automatización, IoT y scripting:** control de hardware, tareas repetitivas y DevOps.

📚 Recursos oficiales:

* Sitio web: python.org
* Documentación: docs.python.org



## 💻 5. Instalación y Ejecución de Python

### 🛠️ Instalación en Windows:

1. Descargar desde python.org.
2. Ejecutar instalador.
3. Marcar **Add Python to PATH**.
4. Verificar con:

   ```
   python --version
   ```

### ▶️ Primer programa:

```python
print("¡Hola, mundo!")
```



## 📦 6. Gestión de Dependencias con PIP

**PIP** es el gestor oficial de paquetes de Python.

🔧 Funcionalidades:

* Instalar librerías (`pip install paquete`)
* Listar paquetes (`pip list`)
* Actualizar dependencias
* Instalar desde `requirements.txt`



## 📐 7. Estándares de Código: PEP 8

**PEP 8** define buenas prácticas para escribir código Python legible y mantenible.

📌 Reglas clave:

* Usar **4 espacios** para indentación.
* Máximo **79 caracteres** por línea.
* Variables y funciones en **snake_case**.
* Clases en **PascalCase**.
* Organización clara de imports.



## ✍️ 8. Sintaxis Básica de Python

Incluye:

* Comentarios (`#`, `""" """`)
* Variables sin tipo explícito
* Condicionales (`if`, `elif`, `else`)
* Bucles (`for`, `while`)
* Funciones (`def`)
* Manejo de archivos
* Importación de módulos
* Programación Orientada a Objetos (clases, herencia, métodos)



## 🌱 9. Flask Framework

**Flask** es un **microframework web en Python**, ligero y flexible.

✨ Características:

* Implementa el patrón MVC.
* Definición de rutas con `@app.route`.
* Servidor de desarrollo integrado.
* Extensible con librerías adicionales.
* Compatible con WSGI.

📘 Conceptos clave:

* Request y Response
* Render_template
* Jinja2
* Blueprint
* Session
* Extensiones como Flask-SQLAlchemy y Flask-Login



## 🚀 10. Primera Aplicación Web en Flask

Pasos básicos:

1. Instalar Flask.
2. Crear archivo `app.py`.
3. Definir rutas.
4. Ejecutar con `python app.py`.
5. Acceder desde `http://127.0.0.1:5000`.



## 🎨 11. Jinja2 – Motor de Plantillas

**Jinja2** permite generar HTML dinámico y separar la lógica del backend de la presentación.

🧩 Funcionalidades:

* Variables `{{ }}`
* Condicionales `{% if %}`
* Bucles `{% for %}`
* Herencia de plantillas
* Filtros (`|upper`)
* Comentarios y macros

📁 Estructura típica:

```
templates/
 ├── base.html
 └── index.html
```



