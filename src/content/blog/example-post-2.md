---
title: 'Semana 2'
description: 'Contenido mostrado en la semana 02'
pubDate: '2025-09-2'
heroImage: '../../assets/images/example-blog-hero2.jpg'
category: 'Showcase'
tags: ['astro', 'ui']
---

Aumentando conocimiento a partir de exposiciones.

## Exposición de los temas

Para aprender sobre los conocimientos basicos para el desarrollo de las aplicaciones web, se dejo que se crearan grupos y que expusieran los temas a ver:

## Contenido

🔹Html Básico

🔹Html Avanzado 

🔹CSS Básico 

🔹CSS Avanzado

🔹CSS con Bootstrap

🔹CSS con Tailwind

Gracias a las exposiciones de mis compañeros se pudo entender mejor algunos temas.

A continuación se explicará los conceptos basicos de los temas 

---

## 🔹 **HTML Básico**

**HTML (HyperText Markup Language)** es el lenguaje que estructura el contenido de una página web.
Su función es definir **qué se muestra** (texto, imágenes, enlaces, formularios, etc.).

###  Conceptos principales:

* **Etiquetas:** delimitan los elementos (`<etiqueta> contenido </etiqueta>`).
* **Estructura básica de un documento:**

  ```html
  <!DOCTYPE html>
  <html lang="es">
    <head>
      <meta charset="UTF-8">
      <title>Mi primera página</title>
    </head>
    <body>
      <h1>Hola Mundo</h1>
      <p>Este es un párrafo.</p>
    </body>
  </html>
  ```
* **Etiquetas comunes:**

  * `<h1>`–`<h6>` → títulos.
  * `<p>` → párrafos.
  * `<a href="">` → enlaces.
  * `<img src="">` → imágenes.
  * `<ul>`, `<ol>`, `<li>` → listas.
  * `<div>` y `<span>` → contenedores genéricos.

###  Atributos:

Aportan información extra a las etiquetas.
Ejemplo:

```html
<a href="https://openai.com" target="_blank">Ir a OpenAI</a>
```

---

## 🔹 **HTML Avanzado**

Amplía las capacidades básicas para crear **sitios interactivos, accesibles y estructurados semánticamente**.

###  Temas clave:

* **Etiquetas semánticas:** `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>` — mejoran la estructura y SEO.
* **Formularios avanzados:**

  ```html
  <form>
    <label for="email">Correo:</label>
    <input type="email" id="email" required>
    <input type="submit" value="Enviar">
  </form>
  ```
* **Multimedia:**
  `<audio controls>` y `<video controls>` para medios integrados.
* **Tablas avanzadas:** uso de `<thead>`, `<tbody>`, `<tfoot>`.
* **Metadatos y SEO básico:** etiquetas `<meta>`, `alt`, `title`.
* **HTML5 API:** geolocalización, almacenamiento local (`localStorage`), arrastrar y soltar (drag & drop), etc.

---

## 🔹 **CSS Básico**

**CSS (Cascading Style Sheets)** se usa para **dar estilo** al HTML (colores, tamaños, márgenes, fuentes, etc.).

###  Sintaxis básica:

```css
selector {
  propiedad: valor;
}
```

###  Ejemplo:

```css
body {
  background-color: #f0f0f0;
  font-family: Arial, sans-serif;
}

h1 {
  color: blue;
  text-align: center;
}
```

###  Conceptos clave:

* **Selectores:** por etiqueta (`h1`), clase (`.clase`), ID (`#id`).
* **Modelo de caja:** `margin`, `border`, `padding`, `content`.
* **Colores:** por nombre, RGB, HEX, o HSL.
* **Unidades:** px, em, rem, %, vh, vw.
* **Posicionamiento:** `static`, `relative`, `absolute`, `fixed`.

---

## 🔹 **CSS Avanzado**

Permite crear **diseños responsivos, animaciones y efectos complejos**.

###  Conceptos importantes:

* **Flexbox:** diseño flexible en una dimensión.

  ```css
  .contenedor {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  ```
* **Grid:** diseño bidimensional.

  ```css
  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  }
  ```
* **Media Queries (Diseño responsivo):**

  ```css
  @media (max-width: 768px) {
    body {
      background: lightgray;
    }
  }
  ```
* **Transiciones y animaciones:**

  ```css
  button:hover {
    background-color: red;
    transition: background 0.3s ease;
  }
  ```
* **Variables CSS:**

  ```css
  :root {
    --color-principal: #007bff;
  }
  h1 { color: var(--color-principal); }
  ```

---

## 🔹 **CSS con Bootstrap**

**Bootstrap** es un **framework CSS** que facilita el diseño rápido y responsivo con clases predefinidas.

### Características:

* Basado en **Flexbox y Grid**.
* Incluye **componentes listos**: botones, cards, modales, barras de navegación, etc.
* Responsivo por defecto.

### Ejemplo:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">

<div class="container text-center">
  <h1 class="text-primary">Bienvenido</h1>
  <button class="btn btn-success">Aceptar</button>
</div>
```

### Ventajas:

* Rápido desarrollo.
* Diseño uniforme y profesional.
* Ideal para prototipos o aplicaciones administrativas.

---

## **CSS con Tailwind**

**Tailwind CSS** es un framework de **utilidades**: en lugar de usar clases predefinidas de componentes, aplicas pequeñas clases directamente en el HTML.

###  Ejemplo:

```html
<div class="flex justify-center items-center h-screen bg-gray-100">
  <h1 class="text-3xl font-bold text-blue-600">Hola Mundo</h1>
</div>
```

### Características:

* 100% personalizable (configuración en `tailwind.config.js`).
* Compatible con React, Vue, Next.js, etc.
* Ideal para diseños **a medida** sin escribir CSS adicional.

### Ventajas:

* Mayor control visual sin archivos CSS separados.
* Diseño rápido y coherente.
* Integración con **Dark Mode** y **animaciones**.

---



