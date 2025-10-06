---
title: 'Semana 2'
description: 'Contenido mostrado en la semana 02'
pubDate: 'Aug 14 2025'
heroImage: '../../assets/images/example-blog-hero2.jpg'
category: 'Showcase'
tags: ['astro', 'ui']
---

Aumentando conocimiento a partir de exposiciones.

## Exposición de los temas

Para aprender sobre los conocimientos basicos para el desarrollo de las aplicaciones web, se dejo que se crearan grupos y que expusieran los temas a ver

## Contenido

🔹Html Básico

🔹Html Avanzado 

🔹CSS Básico 

Cabe recalcar que esta información no fue recopilada por mi, sino por mis compañeros de la universidad, que a su vez les invito a que miren su perfil

# Grupo 1 - HTML Básico y avanzado


<h1 align="center" >UNIVERSIDAD NACIONAL DEL CENTRO DEL PERÚ<h1>
<h1  align="center">
 Facultad de Ingeniería de Sistemas  
 </h1>
<p align="center">
 <img src="https://github.com/user-attachments/assets/af8d9db0-d1be-4c02-891c-5791bc5f07ea">
</p>
 <h1 align=center>HTML: Fundamentos Teóricos y Prácticos del Desarrollo Web</h1>

 <h2> <b>Integrantes : </b></h2>
<h3 >  -Chamorro Ninamango Ricardo Manuel</h3>
<h3 >  -Hinostroza Meza Miguel Angel </h3>
<h3 >  -Huallullo Morales Daysy Johana </h3>
<h3 >  -Ramos Roca Frank  </h3>
 
<h3 align=center > Huancayo – Perú </h3>
<h3 align=center > 2025  </h3>
 
--------------------------------------------------------------------------------------
# ÍNDICE

## HTML BÁSICO 
1. Introducción al HTML y estructura básica de un documento  
2. Etiquetas principales `<html>, <head>, <body>`  
3. Formateo de texto: `<p>, <h1> a <h6>, <strong>, <em>, <br>, <hr>`  
4. Listas: `<ul>, <ol>, <li>`  
5. Imágenes: `<img>` y atributos principales como src y alt  
6. Enlaces: `<a>` y sus atributos como href y target  
7. Tablas: `<table>, <tr>, <td>, <th>` y atributos relacionados  
8. Formularios básicos: `<form>, <input>, <label>`  
9. Comentarios en HTML `<!-- -->`  
10. Estructura semántica básica: `<header>, <footer>, <main>, <section>, <article>`  

---

## HTML AVANZADO
1. Elementos y atributos globales (data-*, id, class, style, title)  
2. Uso de `<template>` y `<slot>` para contenido dinámico  
3. Elementos multimedia: `<audio>, <video>` y atributos principales  
4. Integración de SVG y Canvas para gráficos  
5. Formularios avanzados: validación y tipos de entrada (`email`, `date`, `number`, etc.)  
6. API de HTML5: Drag and Drop, **GeoLocation**, **Web Storage (LocalStorage y SessionStorage)**  
7. Microdatos y marcado semántico avanzado  
8. Integración con JavaScript: eventos y manipulación del DOM  
9. Técnicas de accesibilidad y etiquetado (`aria-*`)  
10. Buenas prácticas de SEO en HTML  


------------------------------------------------------
# *INTRODUCCIÓN*

## Presentación del tema  
El lenguaje *HTML (HyperText Markup Language)* constituye la base para la creación de páginas web, ya que define la estructura y el contenido de los documentos en la World Wide Web. Su importancia radica en que, a pesar de los avances tecnológicos y la aparición de nuevas herramientas, HTML continúa siendo el estándar fundamental que garantiza la interoperabilidad y accesibilidad de la información en internet[1].  

# OBJETIVO GENERAL Y ESPECÍFICOS  
*Objetivo general:*  
Analizar los fundamentos básicos y avanzados del lenguaje HTML, destacando su importancia en el desarrollo de aplicaciones y páginas web modernas.  

*Objetivos específicos:*  
1. Identificar la estructura básica de un documento HTML y sus etiquetas principales.  
2. Describir el uso de elementos avanzados y atributos globales en la construcción de interfaces web.  
3. Explicar la integración de HTML con tecnologías relacionadas como JavaScript, CSS y APIs de HTML5.  

# JUSTIFICACIÓN  
La elección de este tema se justifica porque el dominio de HTML constituye una competencia esencial para estudiantes y profesionales de informática y tecnología. Comprender su estructura, etiquetas y evolución permite desarrollar soluciones web adaptables a distintos contextos y dispositivos. Además, el estudio de HTML favorece la formación académica y profesional, ya que actúa como base para aprender otros lenguajes, marcos y herramientas de programación.  

# METODOLOGÍA
La metodología empleada se basa en la *revisión bibliográfica y documental* de fuentes académicas y técnicas, complementada con la *sistematización de ejemplos prácticos* que permiten ilustrar el uso de HTML en contextos reales de desarrollo web.  

# DESARROLLO 
# HTML BÁSICO 
## 1. Introducción al HTML
###Definición:
- HTML (HyperText Markup Language) es el lenguaje de marcado que define la estructura de una página web[1].
- No es un lenguaje de programación, sino de marcado → organiza contenido en títulos, párrafos, imágenes, etc[2].

---
## 2. Estructura mínima de un archivo HTML y etiquetas principales 
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>

```
- `<!DOCTYPE html>` → Indica que es HTML5.
- `<html>`: Encierra todo el documento.
- `<head>`: Contiene metadatos, título, enlaces a CSS/JS.
```html
**<head>**
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mi primera página</title>
  <link rel="stylesheet" href="estilos.css"> <!-- enlazar CSS -->
  <script src="script.js"></script> <!-- enlazar JS -->
**</head>**

```
- `<body>`: Todo el contenido visible.
```html
<body>
  <h1>Bienvenidos a mi página</h1>
  <p>Este es un párrafo de ejemplo.</p>
  <img src="logo.png" alt="Logo de la página">
  <ul>
    <li>Pan</li>
    <li>Leche</li>
  </ul>
  <form>
    <label for="nombre">Nombre:</label>
    <input type="text" id="nombre">
    <button type="submit">Enviar</button>
  </form>
</body>

```

<img width="350" height="400" alt="image" src="https://github.com/user-attachments/assets/acf7d4fc-b199-4864-a1c1-00a71e9c70d5" />


 ----
## 3. Formateo de texto
- `<p>`: párrafo.
- `<h1>` a `<h6>`: títulos (jerarquía).
- `<strong>`: texto en negrita (con importancia).
- `<em>`: texto en cursiva (énfasis).
- `<br>`: salto de línea.
- `<hr>`: línea horizontal.

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Ejemplo de Formateo de Texto</title>
</head>
<body>

    <h1>3. Formateo de Texto</h1>

    <p>Este es un <b>texto en negrita con &lt;b&gt;</b></p>
    <p>Este es un <strong>texto importante con &lt;strong&gt;</strong></p>
    <p>Este es un <i>texto en cursiva con &lt;i&gt;</i></p>
    <p>Este es un <u>texto subrayado con &lt;u&gt;</u></p>
    <p>Este es un <mark>texto resaltado con &lt;mark&gt;</mark></p>
    <p>Este es un <small>texto pequeño con &lt;small&gt;</small></p>
    <p>Ejemplo de <sub>subíndice (H<sub>2</sub>O)</sub></p>
    <p>Ejemplo de <sup>superíndice (X<sup>2</sup>)</sup></p>
    

</body>
</html>

```
<img width="350" height="400" alt="Captura de pantalla 2025-09-01 075408" src="https://github.com/user-attachments/assets/0db9726d-a101-45d9-8e65-a92acc79fc33" />

---
## 4. Listas 
- No ordenada(`<ul>`):viñetas.
- Ordenada(`<ol>`):números
- `<li>`:cada elemento.
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title> Listas en HTML</title>
</head>
<body>
  <h1>Estructura de un Trabajo de Investigación</h1>

  <h2>Lista ordenada (secciones principales)</h2>
  <ol>
    <li>Portada</li>
    <li>Índice</li>
    <li>Introducción</li>
    <li>Marco teórico
      <ol>
        <li>Antecedentes</li>
        <li>Base teórica</li>
        <li>Definiciones conceptuales</li>
      </ol>
    </li>
    <li>Metodología
      <ol>
        <li>Enfoque de investigación</li>
        <li>Población y muestra</li>
        <li>Técnicas de recolección de datos</li>
      </ol>
    </li>
    <li>Resultados</li>
    <li>Conclusiones y recomendaciones</li>
    <li>Bibliografía</li>
    <li>Anexos</li>
  </ol>

  <h2>Lista no ordenada (fuentes de información utilizadas)</h2>
  <ul>
    <li>Libros académicos</li>
    <li>Artículos científicos</li>
    <li>Tesis universitarias</li>
    <li>Revistas especializadas</li>
    <li>Páginas web confiables</li>
  </ul>
</body>
</html>


```

<img width="437" height="415" alt="Captura de pantalla 2025-09-01 100942" src="https://github.com/user-attachments/assets/3cc9f43a-2af0-44ea-9acd-8dcd1e9004b6" />


## 5. Imagenes
- Se insertan con la etiqueta `<img>`.
- Atributos principales:
 -  src: ruta de la imagen.
 -  alt: texto alternativo (muy importante para accesibilidad y SEO).


```html

<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Ejemplo Imagen</title>
</head>
<body>
  <h1>Mi mascota</h1>
  <img src="https://upload.wikimedia.org/wikipedia/commons/3/3a/Cat03.jpg" 
       alt="Gatito" width="150">
</body>
</html>

```

<img width="183" height="203" alt="Captura de pantalla 2025-09-01 101909" src="https://github.com/user-attachments/assets/d887dab0-9b06-4d3f-aaf2-13ec73039ee7" />

## 6. Enlaces: `<a>`

### Definición técnica
La etiqueta `<a>` crea hipervínculos a documentos, páginas, secciones o archivos[2].  
Atributos principales:  
- **href**: dirección de destino.  
- **target**: modo de apertura (`_blank`, `_self`, `_parent`, `_top`).  
- **title**: muestra información adicional al pasar el cursor.  

### Ejemplos de código
```html
<a href="pagina.html">Ir a otra página</a>
<a href="https://google.com" target="_blank">Abrir Google en nueva pestaña</a>
<a href="#seccion1">Ir a la sección 1</a>
<a href="documentos/manual.pdf" download>Descargar manual</a>
```

### Ejemplo de código completo
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Ejemplo de enlaces</title>
</head>
<body>
  <h1>Enlaces útiles</h1>
  <p><a href="https://www.wikipedia.org" target="_blank">Wikipedia</a></p>
  <p><a href="contacto.html">Ir a la página de contacto</a></p>
  <p><a href="#pie">Ir al pie de página</a></p>

  <footer id="pie">
    <p>© 2025 Ejemplo</p>
  </footer>
</body>
</html>
```
<p><a href="https://www.wikipedia.org" target="_blank">Wikipedia</a></p>

### Más información
- `target="_blank"` requiere atributo `rel="noopener noreferrer"` para seguridad.  
- Se pueden usar enlaces internos para navegación en la misma página.  

---

## 7. Tablas: `<table>`, `<tr>`, `<td>`, `<th>`

### Definición técnica
Las tablas organizan información en filas y columnas[3].  
Etiquetas:  
- **`<table>`**: tabla.  
- **`<tr>`**: fila.  
- **`<td>`**: celda estándar.  
- **`<th>`**: celda de encabezado.  
Atributos: **border**, **rowspan**, **colspan**.  

### Ejemplos de código
```html
<table border="1">
  <tr><th>Nombre</th><th>Edad</th></tr>
  <tr><td>Ana</td><td>22</td></tr>
  <tr><td>Luis</td><td>30</td></tr>
</table>

<table border="1">
  <tr><th>Producto</th><th colspan="2">Detalles</th></tr>
  <tr><td rowspan="2">Laptop</td><td>Marca</td><td>HP</td></tr>
  <tr><td>Precio</td><td>$800</td></tr>
</table>
```

### Ejemplo de código completo
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Ejemplo de tabla</title>
</head>
<body>
  <h1>Lista de estudiantes</h1>
  <table border="1">
    <tr>
      <th>Nombre</th>
      <th>Edad</th>
      <th>Carrera</th>
    </tr>
    <tr>
      <td>María</td>
      <td>25</td>
      <td>Ingeniería</td>
    </tr>
    <tr>
      <td>Carlos</td>
      <td>27</td>
      <td>Medicina</td>
    </tr>
  </table>
</body>
</html>
```

<h1>Lista de estudiantes</h1>
  <table border="1">
    <tr>
      <th>Nombre</th>
      <th>Edad</th>
      <th>Carrera</th>
    </tr>
    <tr>
      <td>María</td>
      <td>25</td>
      <td>Ingeniería</td>
    </tr>
    <tr>
      <td>Carlos</td>
      <td>27</td>
      <td>Medicina</td>
    </tr>
  </table>
### Más información
- Evitar usar `border` directamente, mejor con CSS.  
- Usar `<thead>`, `<tbody>` y `<tfoot>` para mayor semántica.  

---

## 8. Formularios: `<form>`, `<input>`, `<label>`

### Definición técnica
Los formularios permiten al usuario ingresar y enviar datos[1].  
- **`<form>`**: contenedor.  
- **`<input>`**: campo de datos (texto, correo, contraseña, checkbox, radio, submit).  
- **`<label>`**: describe un campo, mejora accesibilidad.  

### Ejemplos de código
```html
<form action="/procesar" method="post">
  <label for="nombre">Nombre:</label>
  <input type="text" id="nombre" name="nombre">
  <input type="submit" value="Enviar">
</form>

<form>
  <input type="email" placeholder="Correo">
  <input type="password" placeholder="Contraseña">
  <input type="checkbox" id="acepto">
  <label for="acepto">Acepto términos</label>
</form>
```

### Ejemplo de código completo
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Ejemplo de formulario</title>
</head>
<body>
  <h1>Registro de usuario</h1>
  <form action="/registro" method="post">
    <label for="usuario">Usuario:</label>
    <input type="text" id="usuario" name="usuario" required><br><br>

    <label for="email">Correo:</label>
    <input type="email" id="email" name="email" required><br><br>

    <label for="clave">Contraseña:</label>
    <input type="password" id="clave" name="clave"><br><br>

    <input type="submit" value="Registrar">
  </form>
</body>
</html>
```

  
### Más información
- Usar `required`, `placeholder`, `pattern` para validación.  
- Se pueden incluir botones, selectores, áreas de texto.  

---

## 9. Comentarios en HTML

### Definición técnica
Los comentarios permiten documentar el código sin que aparezca en la página[3].  
Sintaxis: `<!-- comentario -->`  

### Ejemplos de código
```html
<!-- Este es un comentario -->
<p>Texto visible</p>

<!-- Comentario de
     varias líneas -->
```

### Ejemplo de código completo
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Ejemplo de comentarios</title>
</head>
<body>
  <!-- Encabezado principal -->
  <h1>Página de prueba</h1>

  <p>Contenido visible</p>

  <!-- Este es el pie de página -->
  <footer>© 2025</footer>
</body>
</html>
```

### Más información
- Útiles para explicar secciones del código.  
- No deben usarse para ocultar datos sensibles.  

---

## 10. Estructura semántica básica

### Definición técnica
HTML5 introdujo etiquetas semánticas para dar significado al contenido:  
- **`<header>`**: encabezado.  
- **`<footer>`**: pie de página.  
- **`<main>`**: contenido principal.  
- **`<section>`**: agrupación de contenido.  
- **`<article>`**: bloque independiente.  

### Ejemplos de código
```html
<header><h1>Mi Sitio</h1></header>
<main>
  <section>
    <article>
      <h2>Artículo 1</h2>
      <p>Contenido...</p>
    </article>
  </section>
</main>
<footer>© 2025</footer>
```

### Ejemplo de código completo
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Ejemplo de estructura semántica</title>
</head>
<body>
  <header>
    <h1>Blog de tecnología</h1>
  </header>

  <main>
    <section>
      <article>
        <h2>Noticia 1</h2>
        <p>Detalles de la noticia...</p>
      </article>
      <article>
        <h2>Noticia 2</h2>
        <p>Detalles de la segunda noticia...</p>
      </article>
    </section>
  </main>

  <footer>
    <p>© 2025 BlogTech</p>
  </footer>
</body>
</html>
```

### Más información
- Ayuda a la accesibilidad y SEO.  
- Reemplaza estructuras antiguas con `<div>` genéricos.  

------------------------------------------------------------------------------------
# HTML Avanzado – Desarrollo Web

## 1. Elementos y Atributos Globales
Los atributos globales pueden aplicarse a la mayoría de elementos HTML[1].  
Algunos de los más importantes son:

- **id**: identificador único para un elemento.  
- **class**: agrupa elementos con un mismo estilo o comportamiento.  
- **style**: añade estilos CSS en línea.  
- **title**: muestra información al pasar el cursor.  
- **data-***: permite almacenar datos personalizados.  

**Ejemplo:**
```html
<p id="parrafo1" class="texto" style="color:blue;" title="Información extra" data-info="dato">
  Hola Mundo
</p>
```
## 2. Uso de `<template>` y `<slot>` para Contenido Dinámico
Los elementos `<template>` y `<slot>` permiten manejar contenido dinámico en HTML.  

- **template**: define un fragmento de contenido HTML que no se renderiza de inmediato en la página, sino que puede ser activado o clonado mediante JavaScript.  
- **slot**: se utiliza dentro de componentes web (Web Components) para permitir la inserción de contenido dinámico desde el exterior hacia el interior del componente.  

**Ejemplo con `<template>`:**
```html
<template id="miTemplate">
  <p>Texto desde el template</p>
</template>
```
## 3. Elementos Multimedia

HTML incluye soporte nativo para reproducir contenido multimedia como **audio** y **video**[3].  
Estos elementos ofrecen atributos que permiten controlar su comportamiento:

- **controls**: muestra botones de control como reproducir, pausar o volumen.  
- **autoplay**: inicia la reproducción automáticamente al cargar la página (con restricciones en navegadores).  
- **loop**: repite el contenido indefinidamente.  
- **muted**: comienza la reproducción en silencio.  

#### Ejemplo:

```html
<video controls>
  <source src="video.mp4" type="video/mp4">
</video>
```
## 4. Integración de SVG y Canvas

HTML proporciona dos formas principales de trabajar con gráficos:

- **SVG (Scalable Vector Graphics)**:  
  Es un lenguaje basado en **XML** que permite definir gráficos vectoriales escalables, ideales para logotipos, iconos e ilustraciones.

- **Canvas**:  
  Es un lienzo en el que se pueden dibujar gráficos dinámicos mediante **JavaScript**, útil para animaciones, videojuegos o visualización de datos.

#### Ejemplo con SVG:

```html
<svg width="100" height="100">
  <circle cx="50" cy="50" r="40" stroke="blue" stroke-width="2" fill="lightblue" />
</svg>
```
##  5. Formularios Avanzados

Con **HTML5**, los formularios se volvieron más potentes gracias a nuevos tipos de entrada y validaciones integradas.  
Esto mejora la experiencia del usuario y reduce la necesidad de validaciones complejas con **JavaScript**[1].

## Características principales

- **email**: valida automáticamente que el valor ingresado tenga formato de correo.  
- **number**: permite introducir solo números, con límites opcionales de mínimo y máximo.  
- **date**: muestra un calendario para elegir una fecha.  
- **required**: marca un campo como obligatorio antes de enviar el formulario.  
- **pattern**: permite usar expresiones regulares para validar datos específicos.  

## Ejemplo 5:

```html
<form>
  <label for="correo">Correo electrónico:</label>
  <input type="email" id="correo" required>

  <label for="edad">Edad:</label>
  <input type="number" id="edad" min="18" max="99">

  <label for="fecha">Fecha de cita:</label>
  <input type="date" id="fecha" required>

  <button type="submit">Enviar</button>
</form>
```
## 6. API de HTML5: Drag and Drop, GeoLocation, Web Storage (LocalStorage ySessionStorage).:
### API
Una **API** en programación significa **Application Programming Interface** (Interfaz de Programación de Aplicaciones)[1].

En palabras simples, es un **conjunto de reglas, funciones y protocolos** que permiten que diferentes programas, aplicaciones o sistemas se comuniquen entre sí[2].

---
### Definición técnica:

Una API define **cómo un software puede interactuar con otro** especificando qué operaciones están disponibles, qué parámetros deben usarse y qué resultados se esperan. Es como un contrato que indica qué puede hacer un programa con otro, sin necesidad de conocer su funcionamiento interno[1].

![image.png](image.png)

![image.png](image%201.png)

## API Drag and Drop en HTML5

La **API de Arrastrar y Soltar (Drag and Drop)** permite a los usuarios mover elementos dentro de la interfaz de una página web.

Se basa en tres pilares:

1. **El atributo `draggable`** → Indica si un elemento puede arrastrarse.
2. **El objeto `DataTransfer`** → Transporta los datos del elemento arrastrado.
3. **Eventos de arrastre y soltado** → Controlan el ciclo de interacción.

![image.png](image%202.png)

---

## 1. Hacer un elemento arrastrable (`draggable`)

- Por defecto, **imágenes, enlaces y texto seleccionado** son arrastrables.
- Para otros elementos (como `<div>`, `<p>`, `<span>`), se debe añadir `draggable="true"`.

### Ejemplo

```html
<p id="dragItem" draggable="true" style="cursor: grab;">
  Arrástrame con el mouse
</p>
```

## 2. Eventos principales del ciclo de arrastre

La API define **eventos** en dos fases:

### En el elemento arrastrado

- `dragstart` → Cuando comienza el arrastre (aquí se configuran los datos con `DataTransfer`).
- `drag` → Mientras el objeto se arrastra.
- `dragend` → Cuando termina el arrastre (soltado exitoso o no).

### En el elemento destino

- `dragenter` → Cuando el objeto entra al área destino.
- `dragover` → Mientras está sobre el área destino ( necesario para permitir el `drop`).
- `dragleave` → Cuando sale del área destino.
- `drop` → Cuando se suelta el objeto en el área destino.

---

## 3. Objeto `DataTransfer`

- `setData(format, data)` → Guarda información (ejemplo: `"text/plain"`).
- `getData(format)` → Recupera la información en el `drop`.
- `effectAllowed` → Tipo de acción permitida (`copy`, `move`, `link`, `all`).
- `dropEffect` → Define la acción real que se realizará en el `drop`.

---

## 4. Ejemplo completo (explicado paso a paso)

Aquí integramos todo: un elemento arrastrable, una zona de soltado, eventos, estilos dinámicos y uso de `DataTransfer`.

### Código HTML + JS:

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Ejemplo Drag and Drop</title>
  <style>
    #dragItem {
      width: 100px;
      padding: 10px;
      background: #88c;
      color: white;
      text-align: center;
      cursor: grab;
      border-radius: 5px;
    }
    #dropZone {
      width: 200px;
      height: 150px;
      border: 2px dashed #555;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 20px;
      transition: 0.3s;
    }
  </style>
</head>
<body>
  <h2>API Drag and Drop en HTML5</h2>

  <p id="dragItem" draggable="true">
    Arrástrame
  </p>

  <div id="dropZone">
    Zona de Drop
  </div>

  <script>
    const dragItem = document.getElementById("dragItem");
    const dropZone = document.getElementById("dropZone");

 
    dragItem.addEventListener("dragstart", (e) => {
  
      e.dataTransfer.setData("text/plain", e.target.id);
      e.dataTransfer.effectAllowed = "move"; 
      e.target.style.opacity = "0.5"; 
    });

    dragItem.addEventListener("dragend", (e) => {
      e.target.style.opacity = "1"; 
    });

   
    dropZone.addEventListener("dragover", (e) => {
      e.preventDefault();
      e.dataTransfer.dropEffect = "move"; 
      dropZone.style.background = "#dfd"; 
    });

    dropZone.addEventListener("dragenter", () => {
      dropZone.style.borderColor = "green";
    });

    dropZone.addEventListener("dragleave", () => {
      dropZone.style.background = "";
      dropZone.style.borderColor = "#555";
    });

    dropZone.addEventListener("drop", (e) => {
      e.preventDefault();
      const id = e.dataTransfer.getData("text"); 
      const draggedElement = document.getElementById(id);
      dropZone.appendChild(draggedElement); 
      dropZone.style.background = "";
      dropZone.style.borderColor = "#555";
    });
  </script>
</body>
</html>

```

## API de Geolocalización en HTML5

La **Geolocation API** permite a las aplicaciones web obtener la **ubicación geográfica del usuario** (latitud, longitud, altitud, velocidad, etc.) siempre que el usuario otorgue permiso[1].

Características clave:

1. Se accede a través de **`navigator.geolocation`**.
2. Solo funciona en **contextos seguros (HTTPS o localhost)**.
3. Requiere **consentimiento del usuario** (por motivos de privacidad).
4. Métodos principales:
    - `getCurrentPosition()` → Obtiene la posición actual una vez.
    - `watchPosition()` → Rastrea la posición continuamente (ej. apps de delivery).
    - `clearWatch()` → Detiene un rastreo iniciado con `watchPosition()`.

---

## 1. Métodos principales

### `getCurrentPosition(success, error, options)`

- Recupera la ubicación **una sola vez**.
- Parámetros:
    - `success` → Función ejecutada si se obtiene la posición.
    - `error` → Función ejecutada si ocurre un error (opcional).
    - `options` → Configuración extra (ej. `enableHighAccuracy`, `timeout`, `maximumAge`).

### `watchPosition(success, error, options)`

- Recupera la ubicación **de manera continua**.
- Devuelve un **ID numérico** que se puede usar en `clearWatch(id)`.

### `clearWatch(id)`

- Cancela un seguimiento iniciado con `watchPosition()`.

---

## 2. Objeto `Position`

Cuando se obtiene la posición, se devuelve un objeto con:

- `coords.latitude` → Latitud.
- `coords.longitude` → Longitud.
- `coords.accuracy` → Precisión en metros.
- `coords.altitude` → Altitud (si está disponible).
- `coords.speed` → Velocidad en m/s (si está disponible).
- `timestamp` → Marca de tiempo de la medición.

---

## 3. Ejemplo completo funcional

Aquí te dejo un ejemplo con **HTML + JS**, mostrando la posición en pantalla y en consola.

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Ejemplo Geolocalización</title>
</head>
<body>
  <h2>📍 API de Geolocalización en HTML5</h2>
  <button id="btnUbicacion">Obtener mi ubicación</button>
  <p id="salida"></p>

  <script>
    const salida = document.getElementById("salida");
    const boton = document.getElementById("btnUbicacion");

    function mostrarUbicacion(position) {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      const precision = position.coords.accuracy;

      salida.textContent = `Latitud: ${lat}, Longitud: ${lon} (Precisión: ${precision}m)`;
      console.log("Ubicación obtenida:", position);
    }

    function mostrarError(error) {
      switch(error.code) {
        case error.PERMISSION_DENIED:
          salida.textContent = "El usuario denegó el permiso de geolocalización.";
          break;
        case error.POSITION_UNAVAILABLE:
          salida.textContent = "La información de ubicación no está disponible.";
          break;
        case error.TIMEOUT:
          salida.textContent = "La solicitud de ubicación expiró.";
          break;
        default:
          salida.textContent = "Ocurrió un error desconocido.";
          break;
      }
      console.error("Error de geolocalización:", error.message);
    }

    boton.addEventListener("click", () => {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          mostrarUbicacion,  
          mostrarError,     
          { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 } // opciones
        );
      } else {
        salida.textContent = "La geolocalización no es soportada en este navegador.";
      }
    });
  </script>
</body>
</html>

```

---

## 🔹 4. Ejemplo con seguimiento en tiempo real (`watchPosition`)

```html
<button id="btnSeguir">Seguir mi ubicación</button>
<button id="btnDetener">Detener seguimiento</button>
<p id="seguimiento"></p>

<script>
  const salidaSeguimiento = document.getElementById("seguimiento");
  const btnSeguir = document.getElementById("btnSeguir");
  const btnDetener = document.getElementById("btnDetener");
  let watchId; 

  btnSeguir.addEventListener("click", () => {
    if ("geolocation" in navigator) {
      watchId = navigator.geolocation.watchPosition(
        pos => {
          salidaSeguimiento.textContent =
            `Lat: ${pos.coords.latitude}, Lon: ${pos.coords.longitude}`;
        },
        err => {
          salidaSeguimiento.textContent = "Error: " + err.message;
        },
        { enableHighAccuracy: true }
      );
    } else {
      salidaSeguimiento.textContent = "Geolocalización no soportada.";
    }
  });

  btnDetener.addEventListener("click", () => {
    if (watchId) {
      navigator.geolocation.clearWatch(watchId);
      salidaSeguimiento.textContent = "Seguimiento detenido.";
    }
  });
</script>

```

# Almacenamiento Web (Web Storage API)

La **Web Storage API** proporciona un mecanismo para que las aplicaciones web almacenen datos de forma estructurada en el navegador mediante **pares clave/valor**. A diferencia de las cookies, no se envían automáticamente en cada petición HTTP, lo que reduce sobrecarga en el tráfico y mejora el rendimiento de la aplicación [1].

Existen dos mecanismos principales de almacenamiento:

- **localStorage** → datos persistentes.
- **sessionStorage** → datos temporales por sesión/pestaña.

Ambos exponen un objeto del tipo `Storage` accesible desde `window.localStorage` y `window.sessionStorage`. Estos objetos ofrecen métodos estándar:

| Método | Descripción |
| --- | --- |
| `setItem(clave, valor)` | Almacena un par clave/valor. |
| `getItem(clave)` | Devuelve el valor asociado a la clave. |
| `removeItem(clave)` | Elimina un par clave/valor. |
| `clear()` | Elimina **todos** los datos del almacenamiento. |
| `key(index)` | Retorna la clave en la posición indicada. |
| `length` | Devuelve el número de elementos almacenados. |

> Los valores se almacenan como cadenas de texto. Para guardar objetos u otros tipos de datos, es necesario usar JSON.stringify al guardar y JSON.parse al recuperar.
> 

---

## LocalStorage

El objeto **localStorage** mantiene los datos **sin fecha de expiración**. Esto significa que la información persiste incluso si el navegador se cierra y se vuelve a abrir, siempre y cuando no se eliminen manualmente o con `localStorage.clear()`.

Características clave:

- Persistente por **origen** (protocolo + host + puerto).
- Accesible por **todas las pestañas** o ventanas del mismo origen.
- Útil para configuraciones del usuario, historial o cacheo de datos de la aplicación.

### Ejemplo práctico

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Ejemplo LocalStorage</title>
</head>
<body>
  <h2>Ejemplo con localStorage</h2>
  <input id="nombre" placeholder="Escribe tu nombre">
  <button onclick="guardarNombre()">Guardar en localStorage</button>
  <button onclick="mostrarNombre()">Mostrar nombre</button>
  <button onclick="borrarNombre()">Borrar nombre</button>
  
  <p id="resultado"></p>

  <script>
    function guardarNombre() {
      const nombre = document.getElementById("nombre").value;
      localStorage.setItem("usuario", nombre);
      alert("Nombre guardado en localStorage");
    }

    function mostrarNombre() {
      const nombre = localStorage.getItem("usuario");
      document.getElementById("resultado").textContent = 
        nombre ? `Nombre guardado: ${nombre}` : "No hay datos en localStorage";
    }

    function borrarNombre() {
      localStorage.removeItem("usuario");
      alert("Nombre eliminado de localStorage");
    }
  </script>
</body>
</html>

```

---

## SessionStorage

El objeto **sessionStorage** guarda datos **únicamente mientras dure la sesión del navegador**. Cuando se cierra la pestaña o ventana, toda la información almacenada se elimina automáticamente[2].

Características clave:

- Se mantiene **solo en la pestaña actual**.
- Cada pestaña/ventana tiene su propio `sessionStorage`.
- Útil para información temporal como: estado de formularios, pasos de un proceso o indicadores de sesión.

### Ejemplo práctico

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Ejemplo SessionStorage</title>
</head>
<body>
  <h2>Ejemplo con sessionStorage</h2>
  <input id="color" placeholder="Escribe tu color favorito">
  <button onclick="guardarColor()">Guardar en sessionStorage</button>
  <button onclick="mostrarColor()">Mostrar color</button>
  <button onclick="borrarColor()">Borrar color</button>
  
  <p id="resultado"></p>

  <script>
    function guardarColor() {
      const color = document.getElementById("color").value;
      sessionStorage.setItem("colorFavorito", color);
      alert("Color guardado en sessionStorage");
    }

    function mostrarColor() {
      const color = sessionStorage.getItem("colorFavorito");
      document.getElementById("resultado").textContent = 
        color ? `Color guardado en esta pestaña: ${color}` : "No hay datos en sessionStorage";
    }

    function borrarColor() {
      sessionStorage.removeItem("colorFavorito");
      alert("Color eliminado de sessionStorage");
    }
  </script>
</body>
</html>

```

---

## Comparativa LocalStorage vs SessionStorage

| Característica | localStorage | sessionStorage |
| --- | --- | --- |
| Persistencia | Permanente hasta ser borrado | Solo durante la sesión/pestaña |
| Alcance | Todas las pestañas del mismo origen | Solo la pestaña actual |
| Capacidad aprox. | 5-10 MB (dependiendo navegador) | 5 MB aprox. |
| Uso recomendado | Preferencias, configuraciones, datos cacheados | Estados temporales, sesiones ligeras |

---

# 7. Microdatos y marcado semántico avanzado

## ¿Qué son los **Microdatos**?

Los **microdatos** son un estándar de HTML que permite incrustar **metadatos legibles por máquinas** directamente en el marcado[1].

Se usan junto con vocabularios como [**schema.org**](https://schema.org/?utm_source=chatgpt.com), que definen tipos (`Product`, `Person`, `Event`, `Article`, etc.) y sus propiedades[3].

Los atributos principales son:

- **`itemscope`** → indica que un elemento es un “ítem”.
- **`itemtype`** → especifica el tipo de ítem (ej. `https://schema.org/Product`).
- **`itemprop`** → define propiedades de ese ítem (ej. `name`, `description`, `price`).

Beneficios:

- Mejoran el **SEO**: los buscadores entienden mejor el contenido.
- Permiten **rich snippets** en resultados de Google (ej. reseñas, precios, eventos).
- Hacen que la información sea más **accesible y estructurada**.

---

## ¿Qué es el **marcado semántico avanzado**?

El **HTML semántico** significa usar etiquetas que **describen el propósito del contenido**, no solo su apariencia[1].

Ejemplos de etiquetas semánticas en HTML5:

- **`<header>`** → Encabezado de una página o sección.
- **`<nav>`** → Menú de navegación.
- **`<main>`** → Contenido principal del documento.
- **`<article>`** → Un contenido independiente (ej. noticia, post).
- **`<section>`** → Agrupa un tema dentro de un artículo o página.
- **`<aside>`** → Contenido complementario (ej. barra lateral, publicidad).
- **`<footer>`** → Pie de página.

Beneficios:

- Mejora la **accesibilidad** (lectores de pantalla reconocen mejor el contenido).
- Favorece el **SEO** porque los buscadores entienden mejor la jerarquía.
- Aporta un código más **legible y mantenible**.

---

# Ejemplos

## 1. Ejemplo con **Microdatos (Producto en una tienda online)**

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Ejemplo Microdatos</title>
</head>
<body>
  <div itemscope itemtype="https://schema.org/Product">
   
    <h2 itemprop="name">Camisa Clásica</h2>

    <p itemprop="description">
      Camisa de algodón 100% de alta calidad, ideal para uso diario.
    </p>

    <p>Marca: <span itemprop="brand">ModaPlus</span></p>

    <div itemprop="offers" itemscope itemtype="https://schema.org/Offer">
      <p>
        Precio: $<span itemprop="price">29.99</span>
        <meta itemprop="priceCurrency" content="USD" />
      </p>
      <p>Disponibilidad:
        <link itemprop="availability" href="https://schema.org/InStock" />
        En stock
      </p>
    </div>
  </div>
</body>
</html>

```

## 2. Ejemplo con **Estructura semántica avanzada (Blog de noticias)**

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Ejemplo Semántico</title>
</head>
<body>
  
  <header>
    <h1>Mi Blog de Tecnología</h1>
   
    <nav>
      <ul>
        <li><a href="#articulos">Artículos</a></li>
        <li><a href="#about">Sobre mí</a></li>
        <li><a href="#contacto">Contacto</a></li>
      </ul>
    </nav>
  </header>

  
  <main>
   
    <article>
      <header>
        <h2>La inteligencia artificial en 2025</h2>
        <p><time datetime="2025-08-31">31 de agosto de 2025</time></p>
      </header>

      <section>
        <p>
          La IA ha avanzado de forma sorprendente, impactando en medicina, educación y transporte.
        </p>
      </section>

      <footer>
        <p>Escrito por <strong>Juan Pérez</strong></p>
      </footer>
    </article>

  
    <article>
      <header>
        <h2>Las energías renovables en el futuro</h2>
        <p><time datetime="2025-07-15">15 de julio de 2025</time></p>
      </header>

      <section>
        <p>
          La energía solar y eólica están en auge y se espera que lideren la transición energética.
        </p>
      </section>

      <footer>
        <p>Escrito por <strong>Ana Gómez</strong></p>
      </footer>
    </article>
  </main>

 
  <aside>
    <h3>Publicidad</h3>
    <p>Compra los mejores gadgets aquí.</p>
  </aside>

  <footer>
    <p>&copy; 2025 Mi Blog - Todos los derechos reservados.</p>
  </footer>
</body>
</html>

```

Este ejemplo usa **estructura semántica completa**:

- `<header>` con logo y navegación.
- `<main>` con varios `<article>`.
- `<aside>` con información complementaria.
- `<footer>` con derechos de autor.

# 8.  Eventos y Manipulación del DOM con JavaScript

En el desarrollo web, **JavaScript** es la pieza clave para dotar a una página de **interactividad**[1].

Esto se logra principalmente mediante:

1. **Eventos** → permiten responder a las acciones del usuario (clics, teclas, envíos de formularios, etc.).
2. **Manipulación del DOM (Document Object Model)** → permite modificar la estructura, contenido y estilos de la página en tiempo real.

---

## ¿Qué es un evento?

Un **evento** es una señal que el navegador genera cuando ocurre algo en la página[3].

Ejemplos de eventos:

- **Ratón:** `click`, `dblclick`, `mouseover`, `mouseout`.
- **Teclado:** `keydown`, `keyup`.
- **Formulario:** `submit`, `change`, `input`.
- **Documento/ventana:** `load`, `resize`, `scroll`.

Para manejar eventos se usa:

```jsx
element.addEventListener("nombreEvento", funcionManejadora);

```

## Ejemplo

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Ejemplo Eventos</title>
</head>
<body>
  <button id="btn">Haz clic</button>
  <div id="msg">Texto inicial</div>

  <script>
    const btn = document.getElementById('btn');
    const msg = document.getElementById('msg');

    btn.addEventListener('click', () => {
      msg.textContent = '¡Texto actualizado con JavaScript!';
    });
  </script>
</body>
</html>

```

Explicación:

- Se seleccionan elementos con `getElementById`.
- Al hacer clic, se ejecuta la función que cambia el contenido del `<div>`.

---

## Manipulación del DOM

El **DOM** es la estructura en memoria que representa el HTML[1].

JavaScript puede:

- **Leer** elementos: `querySelector()`, `getElementById()`.
- **Crear** nodos: `createElement()`.
- **Modificar** contenido: `textContent`, `innerHTML`.
- **Cambiar** estilos: `element.style`.
- **Eliminar** nodos: `removeChild()`.

---

## Ejemplo 2: Crear y eliminar elementos dinámicamente

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Manipulación DOM</title>
</head>
<body>
  <button id="add">Agregar párrafo</button>
  <button id="remove">Eliminar último párrafo</button>
  <div id="container"></div>

  <script>
    const container = document.getElementById('container');
    const addBtn = document.getElementById('add');
    const removeBtn = document.getElementById('remove');

    
    addBtn.addEventListener('click', () => {
      const p = document.createElement('p');
      p.textContent = 'Soy un párrafo agregado dinámicamente.';
      container.appendChild(p);
    });

  
    removeBtn.addEventListener('click', () => {
      if (container.lastChild) {
        container.removeChild(container.lastChild);
      }
    });
  </script>
</body>
</html>

```

Explicación:

- `createElement()` genera un nuevo nodo `<p>`.
- `appendChild()` lo inserta en el contenedor.
- `removeChild()` elimina el último nodo hijo.

---

## Ejemplo 3: Manipulación de estilos con eventos

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Estilos dinámicos</title>
</head>
<body>
  <button id="colorBtn">Cambiar color</button>
  <div id="caja" style="width:150px; height:150px; background:lightblue; margin-top:10px;"></div>

  <script>
    const caja = document.getElementById('caja');
    const colorBtn = document.getElementById('colorBtn');

    colorBtn.addEventListener('click', () => {
      caja.style.backgroundColor = caja.style.backgroundColor === 'lightblue' ? 'tomato' : 'lightblue';
    });
  </script>
</body>
</html>

```

Explicación:

- Se accede a la propiedad `style` del elemento.
- Se alterna el color de fondo cada vez que se hace clic en el botón.

# 9. Accesibilidad Web: ARIA y Etiquetado

La accesibilidad web busca que todas las personas, incluidas aquellas con **discapacidad visual, auditiva, cognitiva o motora**, puedan **navegar, entender e interactuar** con las aplicaciones web. Dentro de este campo, las **WAI-ARIA (Accessible Rich Internet Applications)** son un conjunto de **atributos HTML** que permiten describir **roles, estados y propiedades** de elementos de la interfaz, especialmente en aplicaciones dinámicas y ricas en interacción[3].

## ¿Qué es ARIA y por qué se usa?

- ARIA extiende la semántica de HTML, agregando información adicional que los **lectores de pantalla** y otras tecnologías asistivas pueden interpretar[2].
- Su objetivo principal es **complementar** a HTML, no reemplazarlo. La recomendación siempre es:
    
    👉 *“Primero usa etiquetas semánticas nativas, y solo si no existen, aplica ARIA”*.
    

Ejemplo:

- Un `<button>` ya es reconocido como botón por un lector de pantalla → **NO necesita `role="button"`**.
- Un `<div>` que actúa como botón → requiere `role="button"` y atributos adicionales (`tabindex="0"`, `aria-pressed="true/false"`, etc.) para ser accesible.

---

## Principales categorías de ARIA

1. **Roles**
    
    Indican la función de un elemento. Ejemplo:
    
    - `role="navigation"` → zona de navegación.
    - `role="dialog"` → ventana modal.
    - `role="progressbar"` → barra de progreso.
2. **Propiedades (atributos `aria-`)**
    
    Definen características adicionales del elemento:
    
    - `aria-label="Cerrar"` → etiqueta textual invisible para lectores de pantalla.
    - `aria-labelledby="idEtiqueta"` → referencia a otro elemento como etiqueta.
    - `aria-describedby="idDescripcion"` → agrega información descriptiva adicional.
3. **Estados dinámicos**
    
    Expresan cambios en la interfaz que deben ser anunciados:
    
    - `aria-expanded="true/false"` → indica si un menú está desplegado.
    - `aria-checked="true/false/mixed"` → estado de un checkbox.
    - `aria-hidden="true/false"` → controla si un elemento debe ser ignorado por lectores de pantalla.

---

## Reglas de oro en el uso de ARIA

Usar **HTML semántico nativo** antes que ARIA (`<button>`, `<nav>`, `<main>`, `<form>`).

Asegurar que los elementos interactivos sean **alcanzables por teclado** (`tabindex`, eventos de teclado).

Probar en **lectores de pantalla** (NVDA, JAWS, VoiceOver) y navegadores.

Evitar la **duplicación de roles** en elementos con semántica implícita.

ARIA **no agrega interactividad por sí sola**: si marcas un `<div role="button">`, debes programar también la interacción con teclado y mouse en JavaScript.

---

## Ejemplo funcional: Barra de progreso accesible

```html
<div role="progressbar"
     aria-valuemin="0"
     aria-valuemax="100"
     aria-valuenow="60"
     aria-label="Carga de archivo">
  60% completado
</div>

```

## Ejemplo funcional: Botón con solo ícono

```html
<button aria-label="Cerrar ventana">
  ❌
</button>

```

## Ejemplo funcional: Menú expandible

```html
<button aria-expanded="false" aria-controls="submenu" id="btnMenu">
  Opciones
</button>
<ul id="submenu" hidden>
  <li><a href="#">Perfil</a></li>
  <li><a href="#">Configuración</a></li>
</ul>

<script>
  const btn = document.getElementById("btnMenu");
  const submenu = document.getElementById("submenu");

  btn.addEventListener("click", () => {
    const abierto = btn.getAttribute("aria-expanded") === "true";
    btn.setAttribute("aria-expanded", !abierto);
    submenu.hidden = abierto;
  });
</script>

```

- `aria-expanded` comunica al lector de pantalla si el menú está abierto o cerrado.
- `aria-controls="submenu"` indica qué elemento controla el botón.
- El script asegura que los estados cambien dinámicamente.

# 10. Buenas prácticas de SEO en HTML

El SEO (*Search Engine Optimization*) en HTML consiste en aplicar técnicas de marcado que permitan a los buscadores **entender, indexar y mostrar mejor el contenido de una página web**[3].

### Puntos clave para un HTML optimizado para SEO:

1. **Título (`<title>`) y meta descripción (`<meta name="description">`)**
    - El `<title>` define el tema de la página y aparece como enlace en los resultados de búsqueda.
    - La `<meta description>` no influye en el ranking, pero sí en el CTR (*click-through rate*), ya que suele mostrarse como el resumen en Google.
2. **Estructura semántica y encabezados jerárquicos**
    - Un solo `<h1>` por página, representando el tema principal.
    - Subtemas con `<h2>`, `<h3>`, etc.
    - Uso de elementos semánticos como `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`.
3. **Accesibilidad y atributos importantes**
    - Imágenes con `alt` descriptivo → mejora accesibilidad y SEO de imágenes.
    - Atributo `lang` en `<html>` → indica idioma del documento.
4. **URLs limpias y etiquetas meta**
    - `<link rel="canonical">` para evitar problemas con contenido duplicado.
    - `<meta name="viewport">` para adaptar la web a móviles.
5. **Buenas prácticas extra**
    - HTML válido (W3C/Lighthouse).
    - Carga rápida y diseño responsivo.
    - Uso de listas `<ul>`, `<ol>`, enlaces con texto significativo y no genérico como “clic aquí”.

---

# Ejemplo práctico – HTML con buenas prácticas SEO

Este código integra todo lo anterior y se puede abrir en el navegador para ver cómo funciona en la práctica.

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Zapatos deportivos para correr - Tienda Online</title>
  <meta name="description" content="Compra zapatos deportivos para correr de alta calidad. Envíos rápidos, ofertas exclusivas y asesoría para elegir el calzado ideal.">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="canonical" href="https://www.ejemplo.com/productos/zapatos-deportivos">
</head>
<body>
  <header>
    <h1>Zapatos deportivos para correr</h1>
    <nav>
      <ul>
        <li><a href="index.html">Inicio</a></li>
        <li><a href="productos.html">Productos</a></li>
        <li><a href="contacto.html">Contacto</a></li>
      </ul>
    </nav>
  </header>

  <main>
   
    <article>
      <h2>Características de nuestros zapatos deportivos</h2>
      <p>En nuestra tienda encontrarás zapatos diseñados para maximizar el confort, con suelas ligeras y transpirables, ideales para corredores profesionales y aficionados.</p>

      
      <figure>
        <img src="imagenes/zapatos-correr.jpg" alt="Zapatos deportivos de color azul para correr">
        <figcaption>Zapatos deportivos para correr modelo 2025.</figcaption>
      </figure>

      <section>
        <h3>Beneficios principales</h3>
        <ul>
          <li>Ligereza y comodidad en cada pisada</li>
          <li>Diseño ergonómico adaptado a tu pie</li>
          <li>Materiales resistentes y transpirables</li>
        </ul>
      </section>
    </article>

  
    <section>
      <h2>Opiniones de nuestros clientes</h2>
      <blockquote>
        “Los mejores zapatos que he comprado, perfectos para entrenar a diario.” – <cite>Laura G.</cite>
      </blockquote>
    </section>
  </main>

  <footer>
    <p>&copy; 2025 Tienda de Zapatos Deportivos | <a href="politica-privacidad.html">Política de privacidad</a></p>
  </footer>
</body>
</html>

```
# CONCLUSIÓN 
 - El análisis realizado permite comprender que *HTML es el pilar fundamental del desarrollo web*, pues establece la estructura lógica de las páginas y facilita la integración con otras tecnologías como CSS y JavaScript. 

- Se identificó la relevancia de las etiquetas semánticas para la accesibilidad y el posicionamiento en buscadores, así como la utilidad de los formularios, tablas y listas en la organización del contenido. Además, se destacó la importancia de las APIs de HTML5 para extender la funcionalidad de las aplicaciones web modernas y la necesidad de aplicar buenas prácticas de accesibilidad y SEO en el diseño de interfaces digitales.  

<div style="border: 2px solid black; padding: 40px; margin: 20px auto; width: 21cm; height: 29.7cm; box-sizing: border-box; position: relative;">

# *Referencias bibliográficas*

A continuación, se presentan las fuentes consultadas empleando el formato de citación IEEE:

[1] “HTML: HyperText Markup Language,” MDN Web Docs, último acceso: 2025-09-01. [En línea]. Disponible en: https://developer.mozilla.org/en-US/docs/Web/HTML

[2] WHATWG, “HTML Standard (Living Standard),” WHATWG HTML Spec, última actualización: 5 agosto 2025. [En línea]. Disponible en: https://html.spec.whatwg.org/multipage/

[3] W3C, “HTML5 – W3C Recommendation 28 October 2014,” World Wide Web Consortium, 2014. [En línea]. Disponible en: https://www.w3.org/TR/2014/REC-html5-20141028/

</div>

#CSS Básico

<h1 align="center">UNIVERSIDAD NACIONAL DEL CENTRO DEL PERÚ</h1>

<div align="center">   
    <img width="400" height="350" src="https://upload.wikimedia.org/wikipedia/commons/9/92/Escudo_UNCP.png" />
</div>

<h2 align="center">
    <p>FACULTAD DE INGENIERÍA DE SISTEMAS</p>
    <p>DESARROLLO DE APLICACIONES WEB</p>
</h2>
<h2 align="center">
     Estudio de los Conceptos Fundamentales de CSS para el Desarrollo Web
</h2>

<h2 align="center">
     
</h2>

*PRESENTADO POR:*

◼️Castro Huaman Maria

◼️Nuñez Delzo Gianfranco

◼️Mallqui Cosme Lesly

◼️Solano Ceras Marks

◼️Chocca Aroni Saraid

◼️Inga Cotera Joseph

<h2 align="center">
    <p>HUANCAYO -- PERÚ</p>
    <p>2025</p>
</h2>

---
# ÍNDICE


[ÍNDICE]

[INTRODUCCIÓN]

[CAPITULO 1 - Selectores simples y compuestos y Especificidad]

[CAPITULO 2 - Propiedades de Texto y Fuentes]

[CAPITULO 3 - Modelo de Caja (Box Model)]

[CAPITULO 4 -Colores y Fondos]

[CAPITULO 5 -Unidades de Medida (px, %, em, rem, vh, vw]

[CAPITULO 6 - Posicionamiento (static, relative, absolute, fixed, sticky)]

[CAPITULO 7 - Flexbox (Diseño flexible)]

[CAPITULO 8] - Grid Layout (Diseño de cuadrícula)

[CAPITULO 9] - Pseudo-clases y Pseudo-elementos

[CAPITULO 10 - Transiciones y Animaciones básicas]

[CONCLUSIÓN]

[REFERENCIA BIBLIOGRÁFICA]
## Introducción 
En la actualidad, el diseño web constituye un componente esencial en el desarrollo de aplicaciones y sitios en Internet, ya que permite estructurar la información de manera visualmente atractiva, funcional y accesible para los usuarios. Dentro de este contexto, Cascading Style Sheets (CSS) se ha convertido en una de las herramientas más importantes, pues otorga a los desarrolladores la capacidad de controlar la apariencia y el formato de los elementos HTML (MDN Web Docs, 2024).
El presente trabajo monográfico aborda los conceptos fundamentales de CSS Básico, entre los cuales se incluyen los selectores simples y compuestos, la especificidad, las propiedades de texto y fuentes, el modelo de caja, los colores y fondos, las unidades de medida, los sistemas de posicionamiento, Flexbox, Grid Layout, así como las pseudo-clases y pseudo-elementos. Estos temas permiten comprender cómo se construyen y organizan las interfaces gráficas, fomentando el diseño adaptable y coherente en el entorno web (W3C, 2023).
Con esta revisión, se busca proporcionar una visión integral sobre los principios que rigen CSS, sus principales propiedades y métodos de aplicación, a fin de consolidar las bases necesarias para un diseño web moderno, responsivo y eficiente (Duckett, 2014).
## Objetivos
### Objetivo general
Analizar los fundamentos de CSS Básico para comprender el uso de sus selectores, propiedades y técnicas de diseño aplicadas en el desarrollo de páginas web.
## Justificación
El aprendizaje y dominio de CSS (Cascading Style Sheets) resulta indispensable en la formación de todo estudiante y profesional relacionado con el desarrollo web, ya que constituye la base para el diseño, organización y personalización de la interfaz de los sitios en Internet. A través de CSS es posible transformar una estructura HTML simple en un entorno visual atractivo, accesible y adaptable a diferentes dispositivos (Freeman & Robson, 2014).
La presente monografía se justifica en la necesidad de comprender los fundamentos de CSS Básico, pues estos representan los cimientos para avanzar hacia niveles más complejos del diseño web. Temas como los selectores, la especificidad, el modelo de caja, el manejo de fuentes y colores, las unidades de medida, el posicionamiento, Flexbox, Grid Layout y las pseudo-clases y pseudo-elementos proporcionan al estudiante un marco conceptual y práctico que facilita la creación de páginas modernas y funcionales (MDN Web Docs, 2024).
Asimismo, el estudio de CSS permite fortalecer competencias en el área de la ingeniería de sistemas y la informática, contribuyendo al desarrollo de habilidades en programación web, usabilidad y diseño responsivo. De esta manera, el trabajo no solo tiene valor académico, sino también práctico y profesional, al sentar las bases para la construcción de interfaces que respondan a las demandas actuales del entorno digital (W3C, 2023).
 # CSS BÁSICO
## Definición de CSS básico
CSS (Cascading Style Sheets) es el lenguaje que permite dar estilo y presentación a las páginas web. Define cómo se ven los textos, colores, fondos y la forma en que se acomodan los elementos en la pantalla, separando el contenido del diseño para hacerlo más claro y atractivo (**Kaluvakuri & Vadiyala, 2016, p. 96**).

-----
## Tipos de uso de CSS
1. **Inline (en línea)**
   - El estilo se coloca directamente dentro de la etiqueta HTML usando el atributo `style`.
   - Ejemplo: `<p style="color: blue;">Este es un párrafo azul</p>`.
   - Es rápido y sencillo, pero difícil de mantener si la página tiene mucho contenido (**Kaluvakuri & Vadiyala, 2016, p. 96**).
1. **Interno (internal)**
   - Se escribe dentro de la etiqueta `<style>` en el mismo archivo HTML, normalmente en la sección `<head>`.
   - Sirve para dar estilo a una página específica.
   - Es útil en documentos pequeños, pero poco práctico para sitios grandes con varias páginas (**Kaluvakuri & Vadiyala, 2016, p. 97**).
1. **Externo (external)**
   - Los estilos se guardan en un archivo separado con extensión `.css`.
   - Ese archivo se vincula al HTML con la etiqueta `<link>`.
   - Es la forma más recomendada porque permite aplicar los mismos estilos a muchas páginas, asegurando consistencia y fácil mantenimiento (**Kaluvakuri & Vadiyala, 2016, p. 97**).
-----
## Evolución del CSS según el texto
1. **CSS1 (1996)**
   - Nació para resolver las limitaciones de HTML en cuanto al estilo, ya que antes el diseño estaba incrustado en las etiquetas HTML, lo que hacía el código desordenado.
   - Con CSS1 se introdujo una forma estructurada y eficiente de separar el contenido del diseño, permitiendo controlar colores, fuentes y espaciado sin afectar el contenido.
   - Fue un punto de partida para dar más control a los diseñadores web (**Kaluvakuri & Vadiyala, 2016, p. 99**).
1. **CSS2 (1998)**
   - Construyó sobre las bases de CSS1 y trajo más funciones.
   - Permitió diseños más complejos, con nuevas propiedades para el posicionamiento y estilo de los elementos en la página.
   - Introdujo los *media-specific styles*, lo que permitió adaptar los diseños a diferentes pantallas y dispositivos (**Kaluvakuri & Vadiyala, 2016, p. 99**).
1. **CSS3**
   - Fue un gran salto en el diseño web.
   - Se dividió en módulos, lo que facilitó su actualización e incorporación de nuevas funciones.
   - Introdujo efectos visuales avanzados como:
     - Bordes redondeados.
     - Sombras y gradientes.
     - Transformaciones y transiciones.
     - Animaciones que permiten dar movimiento a los elementos sin usar JavaScript.
   - Permitió la llegada del diseño responsivo gracias a *media queries*, que hacen posible que un sitio se adapte a diferentes dispositivos (computadoras, tablets, celulares).
   - Dio origen a la web moderna y dinámica que hoy conocemos (**Kaluvakuri & Vadiyala, 2016, pp. 100-101**).
-----
## Importancia del CSS en el diseño web
Según el documento, CSS es fundamental porque:

- Mantiene la **consistencia** en todas las páginas de un sitio (mismos colores, letras y estilos).
- Facilita la creación de **diseños responsivos**, que se adaptan a celulares, tablets y computadoras.
- Mejora la **velocidad de carga**, ya que los navegadores pueden guardar las hojas de estilo.
- Favorece la **accesibilidad** y la experiencia del usuario.
- Permite la **creatividad y flexibilidad** en los diseños, desde lo más simple hasta animaciones y efectos\
  (**Kaluvakuri & Vadiyala, 2016, pp. 101-102**).
-----
# 1\. FUNDAMENTOS Y ESTILO BÁSICO
## 1\.1 Selectores
Un selector CSS es el patrón que indica al navegador qué elementos HTML deben recibir los estilos definidos en una regla, estos pueden ser simples o compuestos. Además cuando múltiples reglas coinciden con un mismo elemento la especificidad define qué regla va a prevalecer.
### 1\.1\.1 Selectores simples
Los selectores simples son la unidad más básica de selección en CSS. Según la especificación oficial del W3C (Selectors Level 3, 2018), un selector simple describe una condición única que un elemento debe cumplir para ser seleccionado.

De acuerdo con Grant (2017), los selectores simples se dividen en:
- #### *Selectores de tipo*
También denominado selector de etiqueta o elemento, ya que aplica estilos a todos los elementos de un mismo tipo (párrafos, títulos, divs, etc.). *Ejemplo.* Si se desea que todos los párrafos tengan el mismo color de texto y tamaño de letra, se usaría:
~~~ css
p {
  color: blue;
  font-size: 16px;
}
~~~
- #### *Selectores de clase*
Sirve para aplicar estilos a uno o varios elementos HTML que tengan el mismo atributo class, comienza con un punto (.) *Ejemplo.* Se implementan 3 clases, "importante" tiene definido el texto en rojo y negrita, "nota" texto en azul e inclinado, "advertencia" texto con fondo amarillo.
~~~ css
 .importante {
  color: red;
  font-weight: bold;
 }
 .nota {
  color: blue;
  font-style: italic;
}
 .advertencia {
  background-color: yellow;
  color: black;
  padding: 5px;
}
~~~
- #### *Selectores de ID*
El selector de ID en CSS se escribe con "#" seguido del nombre del identificador. A diferencia del selector de clase, un ID es único y solo puede asignarse a un elemento dentro de la página, lo que permite seleccionarlo y aplicarle estilos específicos de forma exclusiva. *Ejemplo* Se dan 2 tipo de ID, "titulo-principal" y "parrafo-destacado", cada uno con sus especificaciones.
~~~ css
   #titulo-principal {
  color: darkgreen;
  font-size: 32px;
  text-align: center;
}
#parrafo-destacado {
  background-color: lightyellow;
  border: 2px solid orange;
  padding: 10px;
}
~~~
- #### *Selector universal*
Se indica con un asterisco (\*). Selecciona todo el contenido del documento. *Ejemplo*
~~~ css
 * {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
color: greenyellow;
}
~~~
- #### *Selector de atributo*
Selecciona elementos que tienen un atributo específico, con la opción de filtrar por valor. *Ejemplo*
~~~ css
/* Todos los enlaces que terminan en .pdf */
a[href$=".pdf"] {
 color: red;
 font-weight: bold;
}

/* Todos los enlaces externos (que empiezan con https) */
a[href^="https"] {
 color: green;
}
~~~
### 1\.1\.2 Selectores compuestos
Los selectores compuestos en CSS surgen de la combinación de dos o más selectores simples que se aplican sobre un mismo elemento. Según Haverbeke (2018) , estos selectores permiten aumentar la especificidad.

Según W3C (2018) y Grant (2017), los selectores compuestos pueden tomar varias formas:

- Elemento + Clase
~~~ css
p.intro {
  font-size: 18px;
  color: darkblue;
}
~~~

- Elemento + ID
~~~ css
h1#titulo {
  text-align: center;
  color: crimson;
}
~~~

- Varios atributos
~~~ css
input[type="text"][required] {
 border: 2px solid blue;
 background-color: #eef;
}
~~~

- Cadena de clases
~~~ css
.btn.primario.grande {
  background-color: green;
  color: white;
  padding: 10px 20px;
}

/* Botón con clases: btn + secundario + chico */
.btn.secundario.chico {
  background-color: gray;
  color: white;
  padding: 5px 10px;
}
~~~
### 1\.1\.3 Especificidad
La especificidad es el algoritmo que utiliza el navegador para decidir qué valor de propiedad se aplica a un elemento. La especificidad se basa únicamente en las reglas de coincidencia, compuestas por diferentes tipos de selectores CSS (MDN Web Docs, 2024). Es decir, la especificidad es un cálculo que determina qué estilo se aplica cuando varias reglas coinciden sobre el  mismo elemento.
#### 1\.1\.3\.1 Jerarquía de especificidad
Los estilos en línea tienen la mayor especificidad. Además, los ID son más específicos que las clases, los atributos y las pseudoclases, que a su vez son más específicos que los elementos y los pseudoelementos (FreeCodeCamp, 2021).

![Orden de especificidad](https://cms-assets.tutsplus.com/uploads/users/30/posts/34141/image/spec-02.svg "Orden de especificidad")[](https://cms-assets.tutsplus.com/uploads/users/30/posts/34141/image/spec-02.svg "Orden de especificidad")
#### 1\.1\.3\.2 Cómo se calcula
La especificidad se calcula como un valor de cuatro partes (a, b, c, d). Los estilos en línea contribuyen a A, los ID a B, las clases/atributos/pseudoclases a C, y los nombres de elementos/pseudoelementos a D (GeeksforGeeks, 2022).

- Ejemplo
~~~ css
/* Selector de tipo → especificidad (0,0,0,1) */
p {
  color: blue;
}
/* Selector de clase → especificidad (0,0,1,0) */
.aviso {
  color: green;
}
/* Selector de dos clases → especificidad (0,0,2,0) */
.aviso.destacado {
  color: orange;
}
/* Selector de ID + tipo → especificidad (0,1,0,1) */
#contenedor p {
  color: red;
}
~~~
#### 1\.1\.3\.3 Importancia
En (Web Docs, 2024) menciona que comprender la especificidad es crucial para dominar CSS, ya que permite a los desarrolladores predecir cómo los cambios en la hoja de estilo afectarán la representación final de la página.
## 1\.2 Propiedades de texto y fuentes
Las propiedades de texto y tipografía en CSS permiten controlar la presentación, legibilidad y estética del contenido web.
### 1\.2\.1 Propiedades de texto
Las propiedades de texto en CSS abarcan la manipulación de alineación, espaciado, decoración y transformación.

- color: define el color del texto, esencial para el contraste y accesibilidad.
- text-align: controla la alineación del contenido (left, right, center, justify).
- text-decoration: permite aplicar decoraciones como subrayado, tachado o sobrelínea.
- text-transform: gestiona mayúsculas y minúsculas (uppercase, lowercase, capitalize).
- letter-spacing: define la distancia entre caracteres.
- line-height: establece la altura de línea, influyendo en la legibilidad.
- word-spacing: controla la distancia entre palabras. white-space: regula cómo se muestran los espacios y saltos de línea.
~~~ css
.texto1 {
  text-align: center;       
  text-transform: uppercase;
  color: darkblue;     
}

.texto2 {
  text-decoration: underline; 
  letter-spacing: 2px;       
  color: green;
}

.texto3 {
  text-align: justify;   
  line-height: 1.8;      
  color: #555;            
}
~~~
### 1\.2\.2 Propiedades de fuentes
Las propiedades de fuente determinan la tipografía, el tamaño, el grosor y el estilo del texto.

- font-family: establece la tipografía; puede usar fuentes genéricas (serif, sans-serif, monospace) o personalizadas.
- font-size: controla el tamaño de la fuente, puede expresarse en px, em, rem, %.
- font-style: define variantes como normal, italic o oblique.
- font-weight: controla el grosor, desde valores numéricos (100–900) hasta palabras clave (normal, bold).
- font-variant: habilita versalitas (small-caps).
- font: propiedad abreviada que permite definir varias características en una sola línea. Grant (2017) menciona que las  propiedades de las fuentes establecen la base tipográfica de un diseño. La elección del tamaño y el grosor de la fuente es crucial no solo para la imagen de marca, sino también para la legibilidad y la accesibilidad.
~~~ css

.texto1 {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 18px;       
  font-weight: bold;     
}


.texto2 {
  font-family: "Times New Roman", serif; 
  font-size: 1.2em;      
  font-style: italic;    
  font-variant: small-caps; 
}
~~~
# 2\. ESTRUCTURA Y DISEÑO
## 2\.1 Modelo de Cajas
El modelo de cajas es la forma en como el navegador interpreta y organiza todos los elementos de HTML. Segun Eguiluz Javier (2008) "Las cajas de una página se crean automáticamente. Cada vez que se inserta una etiqueta HTML, se crea una nueva caja rectangular que encierra los contenidos de ese elemento." Todo el contenido que presenta una pagina web viene a estar representado mediante cajas rectangulares. La siguiente imagen muestra dos cajas que se crearon a travez de etiquetas de HTML:

![FUENTE: programacionweb1.wordpress* ](https://programacionweb1.wordpress.com/wp-content/uploads/2015/04/ima1.jpg)

*FUENTE: programacionweb1.wordpress*

Si las caracteristcas de una caja se encuentran por default en una pagina web, estas no seran vistas por el usuario porque no posee ningun fondo ni borde. Segun Mozzila (2025) "De forma predeterminada, los elementos dentro de una caja se presentan en flujionormal lo que significa que se comportan como otros elementos". La siguiente imagen muestra la pagina web uncp.edu.pe despues de forzar que todas sus cajas tengan borde.

[enter link description here](imagen03.jpg)

*FUENTE: Captura de pantalla de la pagina uncp.edu.pe*

Se crean cajas automaticamente mediante HTML, pero CSS se encarga de modificar su estilo y visualizacion, la siguiente imagen muestra cuales son las partes de una caja segun la visualizacion del usuario.

![FUENTE: programacionweb1.wordpress](https://programacionweb1.wordpress.com/wp-content/uploads/2015/04/im2.gif)

*FUENTE: programacionweb1.wordpress*

Segun Eguiluz Javier (2008) la caja presenta 6 partes, las cuales son las siguientes:

- **Contenido (content):** Se trata del contenido HTML del elemento (las palabras de un párrafo, una imagen, el texto de una lista de elementos, etc.)
- **Relleno (padding):** Espacio libre opcional entre el contenido y el borde que lo encierra.
- **Borde (border):** Línea que encierra completamente el contenido y su relleno.
- **Imagen de fondo (background image):** Imagen que se muestra por detrás del contenido y el espacio de relleno.
- **Color de fondo (background color):** Color que se muestra por detrás del contenido y el espacio de relleno.
- **Margen (margin):** Espacio libre entre la caja y las posibles cajas adyacentes.
### 2\.1\.1 Ancho y Altura
![enter image description here](https://media.geeksforgeeks.org/wp-content/uploads/abc-2.png)

*FUENTE: GeeksforGeeks-org*

La propiedad CSS que controla la anchura de la caja de los elementos se denomina width.

|Propiedad|width|
| :-: | :-: |
|**Valores**|Unidad de medida, porcentaje, auto, inherit|
|**Se aplica a**|Todos los elementos, salvo los elementos en línea que no sean imágenes, las filas d tabla y los grupos de filas de tabla|
|**Descripcion**|Establece la anchura de un elemento|

    <div id="lateral"> ... </div>

    #lateral { width: 200px; }
La propiedad CSS que controla la altura de los elementos se denomina height.

|Propiedad|height|
| :-: | :-: |
|**Valores**|Unidad de medida, porcentaje, auto, inherit|
|**Se aplica a**|Todos los elementos, salvo los elementos en línea que no sean imágenes, las columnas de tabla y los grupos de columnas de tabla|
|**Descripcion**|Establece la altura de un elemento|

    <div id="cabecera"> ... </div>

    #cabecera { height: 60px; }
### 2\.1\.2 Partes principales
Entre las partes mas resaltantes del modelo de caja W3Schools (2025) menciona que "Existen diferentes partes del modelo de caja desde el mas interno hasta el mas externo, siendo los principales cuatro partes: contenido, relleno, bordes y márgenes."

![FUENTE: laviedegeorge.hashnode.dev](https://cdn.hashnode.com/res/hashnode/image/upload/v1585170444071/P4LgDXOoz.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp)

*FUENTE: laviedegeorge.hashnode.dev*

- **Contenido** : El contenido del cuadro, donde aparecen el texto y las imágenes.
- **Relleno** : Limpia un área alrededor del contenido. El relleno es transparente.
- **Borde** : un borde que rodea el relleno y el contenido.
- **Margen** : Limpia un área fuera del borde. El margen es transparente.
#### 2\.1\.2\.1 Relleno
El área de relleno , delimitada por el borde de relleno, extiende el área de contenido para incluir el relleno del elemento. El grosor del relleno está determinado por cuatro propiedades para controlar cada uno de los espacios de relleno horizontales y verticales de un elemento entre ellas son: propiedades abreviadas padding-top, padding-right, padding-bottom, padding-left y padding.

![FUENTE:contenidos.sucerman.com](https://contenidos.sucerman.com/nivel3/web2/unidad3/img/margenes.gif)

*FUENTE:contenidos.sucerman.com*
#### 2\.1\.2\.2 Borde
CSS permite definir el aspecto de cada uno de los cuatro bordes horizontales y verticales de los elementos. Para cada borde se puede establecer su anchura, su color y su estilo. Si se quiere establecer la misma anchura a todos los bordes, CSS permite la utilización de un atajo mediante una propiedad de tipo "shorthand", que permiten indicar varias propiedades de forma resumida: La propiedad border-width permite indicar entre uno y cuatro valores. El significado de cada caso es el habitual de las propiedades "shorthand":

    p { border-width: thin } 
    p { border-width: thin thick } 
    p { border-width: thin thick medium } 
    p { border-width: thin thick medium thin } 
![FUENTE: Ventics.com](https://ventics.com/wp-content/uploads/2011/02/f0410.gif)

*FUENTE: Ventics.com*

- Si se indica un solo valor, se aplica a los cuatro bordes.
- Si se indican dos valores, el primero se aplica al borde superior e inferior y el segundo valor se aplica al borde izquierdo y derecho.
- Si se indican tres valores, el primero se aplica al borde superior, el segundo se aplica al borde izquierdo y derecho y el tercer valor se aplica al borde inferior.
- Si se indican los cuatro valores, el orden de aplicación es superior, derecho, inferior e izquierdo.
#### 2\.1\.2\.3 Margen
En el modelo de caja CSS, el margen (margin)  es un espacio transparente e invisible que se encuentra fuera del borde de un elemento y sirve para separarlo de otros elementos cercanos en la página. Se puede definir con valores positivos o negativos (para superponer elementos), y se controla usando la propiedad  margin, o de forma individual con margin-top, margin-right, margin-bottom y  margin-left.

![FUENTE: Ventics.com](https://ventics.com/wp-content/uploads/2011/02/f0405.gif)

*FUENTE: Ventics.com*

Además de las cuatro propiedades que controlan cada uno de los márgenes del elemento, CSS define una propiedad que permite establecer los cuatro márgenes de forma directa empleando una única propiedad. Este tipo de propiedades resumidas se denominan propiedades de tipo "shorthand" y CSS define varias propiedades de este tipo, como se verá más adelante. La propiedad que permite definir de forma simultanea los cuatro márgenes se denomina margi.

    div img { margin-top: .5em; 
    		margin-bottom: .5em; 
    	    margin-left: 1em; 
    	    margin-right: .5em; }
El comportamiento de los márgenes verticales es más complejo de lo que se puede imaginar. Cuando se juntan dos o más márgenes verticales, se fusionan de forma automática y la altura del nuevo margen será igual a la altura del margen más alto de los que se han fusionado.

![FUENTE: tutorial.bernatcortina.cat](https://tutorial.bernatcortina.cat/wp-content/uploads/2019/01/1-83.png)

*FUENTE: tutorial.bernatcortina.cat*

De la misma forma, si un elemento está contenido dentro de otro elemento, sus márgenes verticales se fusionan y resultan en un nuevo margen de la misma altura que el mayor margen de los que se han fusionado:

![FUENTE: tutorial.bernatcortina.cat](https://tutorial.bernatcortina.cat/wp-content/uploads/2019/01/1-84.png)

*FUENTE: tutorial.bernatcortina.cat*
## 2\.2 Fondo
El último elemento que forma el box model es el fondo de la caja del elemento. El fondo puede ser un color simple o una imagen. El fondo solamente se visualiza en el área ocupada por el contenido y su relleno, ya que el color de los bordes se controla directamente desde los bordes y las zonas de los márgenes siempre son transparentes. Para establecer un color o imagen de fondo en la página entera, se debe establecer un fondo al elemento <body>. Si se establece un fondo a la página, como el valor inicial del fondo de los elementos es transparente, todos los elementos de la página se visualizan con el mismo fondo a menos que algún elemento especifique su propio fondo.

|background-color|color de fondo|
| :-: | :-: |
|**Valores**|color, transparent, inherit|
|**Se aplica a**|Todos los elementos.|
|**Descripcion**|Establece un color de fondo para los elementos|
~~~
    body {
       background-color: #F5F5F5;
    }
~~~

En ocasiones, es necesario crear un fondo más complejo que un simple color. CSS permite mostrar una imagen como fondo de cualquier elemento:

|background-image|imagen de fondo|
| :-: | :-: |
|**Valores**|<url>, none, inherit|
|**Se aplica a**|Todos los elementos.|
|**Descripcion**|Establece una imagen de fondo para los elementos|

El siguiente ejemplo muestra una imagen como fondo de toda la página:
~~~
  body { background-image: url("imagenes/fondo.png") }
~~~

Las imágenes de fondo se indican a través de su URL, que puede ser absoluta o relativa. Suele ser recomendable crear una carpeta de imágenes que se encuentre en el mismo directorio que los archivos CSS y que almacene todas las imágenes utilizadas en el diseño de las páginas.

Por otra parte, suele ser habitual indicar un color de fondo siempre que se muestra una imagen de fondo. En caso de que la imagen no se pueda mostrar o contenga errores, el navegador mostrará el color indicado (que debería ser, en lo posible, similar a la imagen) y la página no parecerá que contiene errores.

Si la imagen que se quiere mostrar es demasiado grande para el fondo del elemento, solamente se muestra la parte de imagen comprendida en el tamaño del elemento. Si la imagen es más pequeña que el elemento, CSS la repite horizontal y verticalmente hasta llenar el fondo del elemento. Este comportamiento es útil para establecer un fondo complejo a una página web entera. El siguiente ejemplo utiliza una imagen muy pequeña para establecer un fondo complejo a toda una página:

**Imagen original**


**Reglas CSS:**

    Body{

        background-image:url(imagenes/fondo.gif);

        }
**Resultado:**


Con una imagen muy pequeña (y que por tanto, se puede descargar en muy poco tiempo) se consigue cubrir completamente el fondo de la página, con lo que se consigue un gran ahorro de ancho de banda. En ocasiones, no es conveniente que la imagen de fondo se repita horizontal y verticalmente. Para ello, CSS introduce la propiedad background-repeat que permite controlar la forma de repetición de las imágenes de fondo.

|background-repeat|Repetición de la imagen de fondo|
| :-: | :-: |
|**Valores**|repeat, repeat-x, repeat-y, no-repeat, inherit|
|**Se aplica a**|Todos los elementos.|
|**Descripcion**|Controla la forma en la que se repiten las imágenes de fondo|

- El valor repeat indica que la imagen se debe repetir en todas direcciones y por tanto, es el comportamiento por defecto.
- El valor no-repeat muestra una sola vez la imagen y no se repite en ninguna dirección.
- El valor repeat-x repite la imagen sólo horizontalmente.
- El valor repeat-y repite la imagen solamente de forma vertical.
## 2\.3 Colores
En el contexto del diseño web, el color es un atributo de estilo que se aplica a los elementos HTML para mejorar la apariencia, la legibilidad y la experiencia del usuario. Por ejemplo, puedes aplicar un color de fondo a un elemento div y cambiar el color del texto dentro de ese div:
~~~
div {
      background-color: lightblue;
      color: darkblue;
    }
~~~

Oregoom.com (2025) menciona que Existen varios sistemas de colores que se pueden utilizar para especificar colores en CSS. Aquí hay ejemplos de cómo especificar colores utilizando diferentes sistemas de colores en CSS:

- RGB (Red, Green, Blue): Es un modelo de color aditivo en el que los colores se crean mediante la combinación de diferentes intensidades de luz roja, verde y azul. Los valores de RGB van de 0 a 255 para cada componente de color.
~~~

  color: rgb(255, 0, 0);
~~~

- HSL (Hue, Saturation, Lightness): Es un modelo de color que se basa en la percepción humana del color. El matiz (Hue) se representa en grados (0 a 360), la saturación (Saturation) en porcentaje (0% a 100%), y la luminosidad (Lightness) también en porcentaje (0% a 100%).
~~~
  color: hsl(120, 100%, 50%);
~~~

- HEX (Hexadecimal): Es un sistema de color que utiliza valores hexadecimales para representar los colores. Cada color se representa mediante una combinación de seis caracteres (0-9 y A-F) precedidos por un símbolo de hash (#).
- Los primeros dos caracteres representan el componente rojo, los dos siguientes el componente verde y los últimos dos el componente azul.
~~~
  color: #0000FF;
~~~
### 2\.3\.1. Opacidad y transparencia en colores
La opacidad y la transparencia son propiedades que permiten controlar la cantidad de luz que pasa a través de un elemento.

En CSS3, se pueden especificar colores con opacidad variable utilizando las versiones “A” de los modelos de color RGB y HSL (RGBA y HSLA, respectivamente), donde la “A” representa la opacidad (alfa).

La opacidad se expresa como un valor decimal entre 0 (completamente transparente) y 1 (completamente opaco).

**Ejemplos:**

- RGBA: Para especificar un color rojo con una opacidad del 50%, puedes utilizar la siguiente sintaxis:

color: rgba(255, 0, 0, 0.5);

- HSLA: Para especificar un color verde con una opacidad del 75%, puedes utilizar la siguiente sintaxis:

color: hsla(120, 100%, 50%, 0.75);

- Opacidad: También se puede controlar la opacidad de un elemento utilizando la propiedad opacity en CSS3, que afecta a todo el elemento y sus contenidos. Para hacer que un elemento div y su contenido sean semi-transparentes, puedes utilizar la propiedad opacity:
~~~
div {
  background-color: lightblue;
  color: darkblue;
  opacity: 0.5;
}
~~~

En este caso, tanto el color de fondo como el texto dentro del div tendrán una opacidad del 50%.
### 2\.3\.2. Especificación de colores en CSS3
En CSS, hay varias formas de especificar colores para diferentes propiedades. A continuación, exploraremos las diferentes formas de especificar colores y proporcionaremos ejemplos prácticos.

**Colores predefinidos y nombres de colores** CSS3 incluye un conjunto de colores predefinidos a los que se puede hacer referencia mediante nombres. Por ejemplo:
~~~
p {
  color: red;
}
~~~

En este ejemplo, el texto de los párrafos se mostrará en rojo.

# 3\. Medidas y posicionamiento
## 3\.1 Unidades de medida
En CSS, las unidades de medida son esenciales para definir el tamaño y la disposición de los elementos. Las unidades más comunes incluyen píxeles (px), porcentajes (%), em, rem, vw, y vh. Cada una tiene sus aplicaciones y se utiliza en función del contexto en el que se desee lograr la flexibilidad y accesibilidad de la interfaz (MDN Web Docs, s.f.). Para definir el tamaño de un elemento en CSS, es necesario tener en cuenta los diferentes tipos de medidas disponibles. Estas se dividen en dos categorías:
### 3\.1\.1 Medidas absolutas: 
Son aquellas que permanecen constantes y no varían en ningún momento. 

![Fuente: MDN Web Docs, "Unidades y valores en CSS"](1.png)
*Fuente: MDN Web Docs, "Unidades y valores en CSS"*

La mayoría de estos valores resultan ser más prácticos cuando se aplican a una salida en formato impreso en lugar de en la pantalla. Un ejemplo de esto es que, por lo general, no se utilizan centímetros (cm) para la visualización en pantalla. El valor que más se emplea de manera habitual es el de los píxeles (px).

**Ejemplo:**

- **HTML:**
  ```
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Ejemplo de Medidas Absolutas en CSS</title>
        <link rel="stylesheet" href="Ejemplo1.css">
    </head>
    <body>
        <div class="container">
            <h1>Uso de Medidas Absolutas en CSS</h1>
            <p>
                Este ejemplo utiliza diferentes medidas absolutas en CSS para demostrar cómo afectan al diseño de una página web. 
                Observa que algunas medidas están relacionadas con el tamaño físico y no se adaptan a la resolución de la pantalla.
            </p>
            <a href="#">Enlace de ejemplo</a>
            
            <div class="box">
                <p>Caja en milímetros</p>
            </div>
        </div>
    </body>
    </html>
   ```
- **CSS:**
   ```
    body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
        background-color: #f0f0f0;
    }

    .container {
        width: 80%;
        margin: 20px auto;
        background-color: white;
        padding: 30px;
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    }

    /* Título con tamaño en píxeles */
    h1 {
        font-size: 35px; /* Medida absoluta en píxeles */
        color: #333;
    }

    /* Párrafo con tamaño en centímetros */
    p {
        font-size: 1cm; /* Medida absoluta en centímetros */
        color: #555;
        line-height: 1.6;
    }

    /* Un enlace con tamaño en puntos */
    a {
        font-size: 12pt; /* Medida absoluta en puntos */
        color: #007BFF;
        text-decoration: none;
    }

    /* Un div con tamaño en milímetros */
    .box {
        width: 100mm; /* Medida absoluta en milímetros */
        height: 50mm; /* Medida absoluta en milímetros */
        background-color: #4CAF50;
        margin-top: 20px;
    }

    .box p {
        font-size: 2mm; /* Medida absoluta en milímetros */
        text-align: center;
        line-height: 50mm;
        color: white;
    }

   ```
- **Resultado:**

### 3\.1\.2 Medidas relativas:
Son aquellas que dependen de otros elementos y, por lo tanto, pueden cambiar según las circunstancias, por ejemplo: al tamaño de letra del elemento principal o al tamaño de la ventana gráfica. La ventaja de usar unidades relativas es que con una planificación cuidadosa puedes lograr que el tamaño del texto u otros elementos escalen en relación con todo lo demás en la página. En la tabla siguiente se enumeran algunas de las unidades más útiles para el desarrollo web.
*Fuente: MDN Web Docs, "Unidades y valores en CSS"*

**Ejemplo:**

- **HTML:**
  ```
  <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Ejemplo de Medidas Relativas en CSS</title>
        <link rel="stylesheet" href="Ejemplo2.css">
    </head>
    <body>
        <div class="container">
            <h1>Título con Medidas Relativas</h1>
            <p>
                Este ejemplo usa medidas relativas para crear un diseño que se adapta a diferentes tamaños de pantalla.
            </p>
            <div class="box">
                <p>Caja con porcentaje de ancho</p>
            </div>
            <div class="responsive-box">
                <p>Caja con medidas en viewport</p>
            </div>
        </div>
    </body>
    </html>

  ```
  
- **CSS:**
  ```
    /* Estilo general del cuerpo */
    body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
        background-color: #f0f0f0;
    }

    /* Contenedor principal */
    .container {
        width: 80%; /* 80% del ancho de la pantalla */
        margin: 20px auto;
        background-color: white;
        padding: 30px;
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    }

    /* Título con tamaño relativo en rem */
    h1 {
        font-size: 2rem; /* 2 veces el tamaño de la fuente base (16px por defecto) */
        color: #333;
    }

    /* Párrafo con tamaño relativo en em */
    p {
        font-size: 1.2em; /* 1.2 veces el tamaño de fuente del elemento padre */
        color: #555;
        line-height: 1.5;
    }

    /* Caja con tamaño en porcentaje (relativo al contenedor) */
    .box {
        width: 50%; /* 50% del ancho de su contenedor */
        background-color: #4CAF50;
        margin-top: 20px;
        padding: 20px;
        color: white;
        text-align: center;
    }

    /* Caja que usa medidas de viewport (relativas a la ventana del navegador) */
    .responsive-box {
        width: 60vw; /* 60% del ancho de la ventana del navegador */
        height: 30vh; /* 30% de la altura de la ventana del navegador */
        background-color: #2196F3;
        margin-top: 20px;
        color: white;
        text-align: center;
    }

  ```

- **Resultado:**
  
  ![fIGURA4](4.png)

## 3\.2. Posicionamiento
El posicionamiento en CSS permite colocar un elemento de manera específica dentro de su contenedor utilizando distintas técnicas como el posicionamiento estático, relativo, absoluto o fijo (MDN Web Docs, 2024). 

Existen diversas propiedades que permiten modificar la ubicación de los elementos en HTML. Algunas de estas son:

- Static: El elemento permanece en su lugar inicial, y esta es la propiedad predeterminada.
- Absolute: La ubicación del elemento deja de depender del flujo normal de la página, lo que permite que se superponga a otros elementos. Los demás componentes ocuparán el espacio dejado por el elemento con posición absoluta.
- Relative: El elemento se posiciona en relación con su ubicación original, lo que hace que se superponga a otros elementos, aunque no se encuentre en esa posición. Los demás elementos mantienen su ubicación original.
- Fixed: El elemento mantiene su posición fija, sin importar el desplazamiento de la página al hacer scroll.
- Sticky: El elemento se mantiene fijo en su posición cuando el usuario lo encuentra al hacer scroll, pero solo dentro de su contenedor.
  
*Fuente: Ceper. (2022). Manual de HTML y CSS. Universidad de los Andes.*

**Ejemplo:**

- **HTML:**
  ```
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Ejemplo de Posicionamiento en CSS</title>
        <link rel="stylesheet" href="Ejemplo3.css"> <!-- Enlaza con el archivo CSS -->
    </head>
    <body>
        <div class="box" id="one">One</div>
        <div class="box" id="two">Two</div>
        <div class="box" id="three">Three</div>
        <div class="box" id="four">Four</div>
    </body>
    </html> <!-- Cierra la etiqueta html correctamente -->


  ```
- **CSS:**
  ```
    /* Establece que el modelo de caja incluye los bordes y el relleno dentro del tamaño total */
    * {
    box-sizing: border-box;
    }

    /* Estilos generales para las cajas */
    .box {
    display: inline-block; /* Los elementos estarán en una fila */
    width: 100px;
    height: 100px;
    background: rgb(43, 255, 0);
    color: white;
    text-align: center;
    line-height: 100px; /* Centra el texto verticalmente */
    margin: 10px;
    }

    /* Posicionamiento absoluto para el segundo elemento */
    #two {
    position: absolute;
    top: 20px; /* 20px desde la parte superior */
    left: 20px; /* 20px desde la izquierda */
    background: blue;
    }
  ```
- **Resultado:**

# 4\.LAYOUT AVANZADO
## 4\.1 Flexbox Avanzado
### 4\.1\.1 Fundamentos Conceptuales desde una Perspectiva Teórica
Flexbox (Flexible Box Layout) representa un paradigma de diseño CSS que permite crear layouts flexibles y eficientes, proporcionando una metodología sistemática para la distribución del espacio y la alineación de elementos, incluso cuando sus dimensiones son variables o desconocidas (W3C, 2017). Este modelo de diseño encuentra una correspondencia teórica con los principios establecidos por Maslow (1943), quien argumenta que "las necesidades más básicas tienen una mayor 'prepotencia', lo que significa que su influencia como motivadores es más fuerte hasta que son, al menos, parcialmente satisfechas" (p. 375).

En el contexto del diseño web, esta prepotencia se manifiesta en la necesidad de establecer primero una estructura funcional básica antes de implementar características estéticas avanzadas. Como señala Maslow (1943), "cualquier comportamiento tiende a ser determinado por varias o todas las necesidades básicas simultáneamente, más que por una sola" (p. 394), principio que encuentra aplicación directa en la implementación multicapa de propiedades Flexbox.

### 4\.1\.2 Arquitectura del Sistema Flexbox
#### 4\.1\.2\.1 Contenedor Flex y la Jerarquía de Control
El contenedor flex, activado mediante `display: flex` o `display: inline-flex`, establece lo que Maslow (1943) denominaría el nivel de "necesidades fisiológicas" en el diseño web: la capacidad fundamental de organizar contenido. Esta base estructural debe implementarse primero, ya que "sin ellas, es prácticamente imposible concentrarse en cualquier otra cosa" (Maslow, 1943, p. 373).
~~~ css
/* Implementación jerárquica: Nivel base */
.flex-container {
  display: flex;
  /* Configuración mínima viable */
}
~~~

La propiedad `flex-direction` define la orientación del eje principal, estableciendo el fundamento sobre el cual se construirán las interacciones más complejas. Esta decisión arquitectónica inicial corresponde a lo que Maslow (1943) identifica como la necesidad de "un ambiente estable y predecible" (p. 376):
~~~ css
.directional-container {
  display: flex;
  flex-direction: row; /* row | row-reverse | column | column-reverse */
  /* Establece predictibilidad direccional */
}
~~~
#### 4\.1\.2\.2 Propiedades de Alineación: Satisfaciendo Necesidades de Orden
Las propiedades `justify-content` y `align-items` representan el segundo nivel en la jerarquía de implementación, correspondiente a las necesidades de seguridad de Maslow. Estas propiedades crean sistemas de alineación consistentes que reducen la incertidumbre visual del usuario:
~~~ css
.aligned-container {
  display: flex;
  justify-content: center; /* flex-start | flex-end | center | space-between | space-around | space-evenly */
  align-items: center; /* flex-start | flex-end | center | baseline | stretch */
  /* Genera estabilidad visual y predictibilidad */
}
~~~

Como establece Maslow (1943), una vez satisfechas las necesidades básicas, "la siguiente necesidad en el nivel superior se convierte en el principal impulsor de la motivación" (p. 374). En términos de CSS, esto se traduce en la progresión hacia propiedades más sofisticadas como `flex-wrap` y `align-content`:
~~~ css
.advanced-container {
  display: flex;
  flex-wrap: wrap; /* nowrap | wrap | wrap-reverse */
  align-content: space-between; /* Control de líneas múltiples */
  /* Manejo complejo de contenido multi-línea */
}
~~~
#### 4\.1\.2\.3 Propiedades de los Items Flex: Individualización y Crecimiento
Las propiedades aplicadas a los elementos flex individuales (`flex-grow`, `flex-shrink`, `flex-basis`) representan lo que Maslow (1943) conceptualiza como el nivel de "necesidades de crecimiento o B-need" (p. 395). Estas propiedades permiten que cada elemento alcance su potencial óptimo dentro del contenedor:
~~~ css
.growing-item {
  flex-grow: 1; /* Capacidad de expansión */
  flex-shrink: 1; /* Adaptabilidad ante restricciones */
  flex-basis: auto; /* Base para el cálculo de distribución */
}

/* Sintaxis abreviada que refleja el equilibrio entre crecimiento y restricción */
.balanced-item {
  flex: 1 1 auto; /* grow shrink basis */
}
~~~

La propiedad `align-self` permite la "autorrealización" individual de elementos específicos, permitiendo que "un individuo alcance su máximo potencial" (Maslow, 1943, p. 395) dentro del sistema general:
~~~ css
.self-actualized-item {
  align-self: flex-end; /* Alineación individual independiente del container */
}
~~~
### 4\.1\.3 Implementación Práctica: Layout de Tarjetas Responsivas
La siguiente implementación demuestra la aplicación jerárquica de principios, comenzando con funcionalidad básica y progresando hacia características avanzadas:
~~~ css
/* Nivel 1: Funcionalidad básica (Necesidades fisiológicas) */
.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
}

.card {
  flex: 0 1 calc(33.333% - 20px);
  min-height: 150px;
  padding: 20px;
  /* Estructura funcional mínima establecida */
}

/* Nivel 2: Estabilidad visual (Necesidades de seguridad) */
.card {
  background: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  /* Predictibilidad y consistencia visual */
}

/* Nivel 3: Interactividad (Necesidades sociales) */
@media (min-width: 768px) {
  .card:hover {
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    transform: translateY(-2px);
    transition: all 0.3s ease;
    /* Feedback visual que fomenta interacción */
  }
}

/* Nivel 4: Sofisticación estética (Necesidades de estima) */
@media (min-width: 1024px) {
  .card {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    box-shadow: 0 10px 30px rgba(0,0,0,0.2);
    /* Elementos que proyectan calidad y profesionalismo */
  }
}
~~~

-----
## 4\.2 Diseño Responsivo
### 4\.2\.1 Marco Teórico del Diseño Adaptativo
El diseño responsivo constituye una metodología de desarrollo web que permite la adaptación automática de interfaces a diferentes dispositivos y tamaños de pantalla, proporcionando experiencias de usuario optimizadas (Marcotte, 2010). Esta aproximación encuentra resonancia teórica en el concepto de flexibilidad propuesto por Maslow (1943), quien observa que "el orden de las necesidades puede ser flexible y variar según las circunstancias externas o las diferencias individuales" (p. 378).

La implementación de diseño responsivo refleja directamente la comprensión de Maslow sobre la naturaleza dinámica de las necesidades humanas, donde "las personas pueden fluctuar entre los niveles de la jerarquía" (Maslow, 1943, p. 379) dependiendo del contexto. En el diseño web, este contexto está determinado por las capacidades y limitaciones del dispositivo utilizado.

### 4\.2\.2 Media Queries: Implementación Condicional de Necesidades
#### 4\.2\.2\.1 Fundamentos de las Media Queries
Las Media Queries funcionan como mecanismos condicionales que aplican estilos específicos basados en las características del dispositivo, principalmente el ancho de pantalla (W3C, 2012). Esta aproximación condicional refleja la observación de Maslow (1943) de que "eventos de la vida... pueden causar una regresión en la cual las necesidades de un nivel inferior... vuelven a convertirse en las principales motivadoras" (p. 379).
~~~ css
/* Sintaxis fundamental que establece condiciones contextuales */
@media (max-width: 768px) {
  /* Estilos que atienden necesidades básicas en contextos restrictivos */
}
~~~
#### 4\.2\.2\.2 Estratificación por Capacidades de Dispositivo
La implementación de breakpoints refleja la jerarquía de capacidades, donde cada nivel de pantalla permite la satisfacción de necesidades más sofisticadas:
~~~ css
/* Móviles: Necesidades fisiológicas - funcionalidad esencial */
@media (max-width: 480px) {
  .content {
    width: 100%;
    padding: 15px;
    font-size: 16px;
    /* Configuración mínima viable para legibilidad */
  }
}

/* Tablets: Necesidades de seguridad - estructura consistente */
@media (min-width: 481px) and (max-width: 1024px) {
  .content {
    max-width: 750px;
    margin: 0 auto;
    padding: 30px;
    /* Mayor control espacial y predictibilidad */
  }
}

/* Desktop: Necesidades superiores - experiencias enriquecidas */
@media (min-width: 1025px) {
  .content {
    max-width: 1200px;
    padding: 50px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 40px;
    /* Layouts complejos y experiencias optimizadas */
  }
}
~~~
### 4\.2\.3 Mobile-First versus Desktop-First: Perspectivas Jerárquicas
#### 4\.2\.3\.1 Mobile-First como Manifestación de Prepotencia
El enfoque Mobile-First alinea directamente con el principio fundamental de Maslow (1943) de que "las necesidades más básicas tienen una mayor prepotencia" (p. 375). Esta metodología comienza con las restricciones más severas (pantallas pequeñas, conectividad limitada, capacidades reducidas) y progresa hacia capacidades expandidas:
~~~ css
/* Base Mobile-First: Fundamentos esenciales */
.responsive-element {
  width: 100%;
  padding: 1rem;
  font-size: 1rem;
  line-height: 1.5;
  /* Configuración que garantiza legibilidad y accesibilidad básica */
}

/* Expansión progresiva: Tablets */
@media (min-width: 768px) {
  .responsive-element {
    padding: 2rem;
    font-size: 1.125rem;
    max-width: 800px;
    margin: 0 auto;
    /* Mejoras que aprovechan mayor espacio disponible */
  }
}

/* Realización completa: Desktop */
@media (min-width: 1024px) {
  .responsive-element {
    padding: 3rem;
    font-size: 1.25rem;
    max-width: 1200px;
    box-shadow: 0 10px 40px rgba(0,0,0,0.1);
    border-radius: 12px;
    /* Características avanzadas disponibles solo en contextos óptimos */
  }
}
~~~

Como argumenta Maslow (1943), "la búsqueda de la autorrealización es un proceso continuo que, en lugar de reducir la tensión, aumenta el deseo de seguir creciendo" (p. 396). En el diseño responsivo, esto se manifiesta como la expansión progresiva de capacidades conforme aumentan los recursos disponibles.

#### 4\.2\.3\.2 Ventajas del Enfoque Progressive Enhancement
El Mobile-First implementa lo que Maslow denominaría "progressive enhancement" psicológico, donde cada nivel superior enriquece pero no reemplaza las funciones básicas. Las ventajas identificadas incluyen:

1. **Priorización de contenido esencial**: Refleja las "necesidades de deficiencia" que deben satisfacerse primero
1. **Optimización de rendimiento**: Carga solo recursos necesarios para cada contexto
1. **Accesibilidad mejorada**: Garantiza funcionalidad universal antes de añadir mejoras
1. **SEO favorable**: Los motores de búsqueda priorizan la experiencia móvil (Google, 2018)
### 4\.2\.4 Unidades Responsivas: Flexibilidad Adaptativa
#### 4\.2\.4\.1 Viewport Units y Relatividad Contextual
Las unidades viewport (`vw`, `vh`, `vmin`, `vmax`) permiten diseños que responden dinámicamente al contexto de visualización, implementando lo que Maslow (1943) describe como adaptabilidad situacional:
~~~ css
.adaptive-hero {
  height: 100vh; /* Ocupa la totalidad del viewport disponible */
  width: 100vw;
  font-size: 4vw; /* Escala proporcionalmente con el dispositivo */
  /* Adaptación automática que mantiene proporciones óptimas */
}

.flexible-text {
  font-size: clamp(1rem, 4vw, 2.5rem);
  /* Escalado inteligente con límites mínimos y máximos */
}
~~~
#### 4\.2\.4\.2 REM y EM: Sistemas de Escalado Jerárquico
La utilización de unidades relativas (`rem`, `em`) establece sistemas de escalado que reflejan la naturaleza jerárquica de las necesidades:
~~~ css
/* Establecimiento de base fundamental */
html {
  font-size: 16px; /* Base que define todas las relaciones subsecuentes */
}

/* Escalado proporcional que mantiene jerarquía visual */
.heading-primary {
  font-size: 2.5rem; /* 40px - Nivel de importancia máximo */
  line-height: 1.2;
}

.heading-secondary {
  font-size: 2rem; /* 32px - Nivel de importancia secundario */
  line-height: 1.3;
}

.body-text {
  font-size: 1rem; /* 16px - Nivel base de legibilidad */
  line-height: 1.6;
}

.caption-text {
  font-size: 0.875rem; /* 14px - Información complementaria */
  line-height: 1.4;
}
~~~
### 4\.2\.5 Implementación Integral: Sistema Responsivo Completo
La siguiente implementación demuestra la aplicación completa de principios jerárquicos en un sistema responsivo:
~~~ css
/* Nivel 1: Base móvil - Necesidades fisiológicas del diseño */
.integrated-system {
  width: 100%;
  padding: 1rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  line-height: 1.6;
  color: #333;
}

.content-grid {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

/* Nivel 2: Tablet - Necesidades de seguridad y estructura */
@media (min-width: 768px) {
  .integrated-system {
    padding: 2rem;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .content-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }
  
  .content-item {
    padding: 1.5rem;
    background: #f8f9fa;
    border-radius: 8px;
    border: 1px solid #e9ecef;
  }
}

/* Nivel 3: Desktop - Necesidades sociales e interactividad */
@media (min-width: 1024px) {
  .content-item {
    transition: all 0.3s ease;
    cursor: pointer;
  }
  
  .content-item:hover {
    background: #ffffff;
    box-shadow: 0 4px 20px rgba(0,0,0,0.1);
    transform: translateY(-4px);
  }
}

/* Nivel 4: Desktop grande - Necesidades de estima y profesionalismo */
@media (min-width: 1440px) {
  .integrated-system {
    max-width: 1400px;
    padding: 4rem;
  }
  
  .content-item {
    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
    backdrop-filter: blur(10px);
    box-shadow: 0 8px 32px rgba(0,0,0,0.1);
  }
  
  .content-item:hover {
    box-shadow: 0 16px 48px rgba(0,0,0,0.2);
    transform: translateY(-8px) scale(1.02);
  }
}
~~~

Este sistema integral refleja la observación de Maslow (1943) de que "la jerarquía se puede dividir en dos grandes categorías que reflejan la naturaleza de la motivación" (p. 395): las necesidades básicas de funcionalidad y estructura (niveles 1-2) y las necesidades de crecimiento representadas por interactividad y sofisticación estética (niveles 3-4).

Como concluye Maslow (1943), "la verdadero poder no reside en un rígido esquema lineal, sino en su capacidad para ofrecer un punto de partida para el análisis de las motivaciones" (p. 398). De manera similar, estos principios de diseño responsivo proporcionan un framework flexible que puede adaptarse a las necesidades específicas de cada proyecto mientras mantiene una base teórica sólida para la toma de decisiones de implementación.

## 4\.3 Ejemplo Básico de Demostración: Flexbox
~~~ html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Demo Flexbox - Jerarquía de Maslow</title>
    <style>
        /* Nivel 1: Necesidades Fisiológicas - Funcionalidad básica */
        .demo-container {
            display: flex;
            flex-wrap: wrap;
            gap: 15px;
            padding: 20px;
            font-family: Arial, sans-serif;
        }

        .flex-item {
            flex: 1 1 200px;
            padding: 20px;
            min-height: 100px;
            background: #f0f0f0;
            border: 1px solid #ddd;
        }

        /* Nivel 2: Necesidades de Seguridad - Consistencia visual */
        .flex-item {
            border-radius: 8px;
            text-align: center;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        /* Nivel 3: Necesidades Sociales - Interactividad */
        .flex-item:hover {
            background: #e3f2fd;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        /* Nivel 4: Necesidades de Estima - Sofisticación estética */
        .flex-item:hover {
            transform: translateY(-3px);
            box-shadow: 0 6px 20px rgba(0,0,0,0.15);
        }

        .title {
            text-align: center;
            color: #333;
            margin-bottom: 20px;
        }
    </style>
</head>
<body>
    <h1 class="title">Demostración Flexbox - Jerarquía de Maslow</h1>
    <div class="demo-container">
        <div class="flex-item">
            <strong>Funcionalidad</strong><br>
            Estructura básica
        </div>
        <div class="flex-item">
            <strong>Seguridad</strong><br>
            Diseño consistente
        </div>
        <div class="flex-item">
            <strong>Social</strong><br>
            Interactividad
        </div>
        <div class="flex-item">
            <strong>Estima</strong><br>
            Estética avanzada
        </div>
    </div>
</body>
</html>
~~~
## 4\.4 Ejemplo Básico de Demostración: Diseño Responsivo
~~~ html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Demo Responsivo - Mobile First</title>
    <style>
        /* Mobile First: Necesidades Fisiológicas */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, sans-serif;
            line-height: 1.6;
            color: #333;
        }

        .responsive-demo {
            width: 100%;
            padding: 1rem;
            background: #f8f9fa;
        }

        .content-grid {
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }

        .card {
            background: white;
            padding: 1.5rem;
            border-radius: 8px;
            border: 1px solid #e9ecef;
        }

        .device-indicator {
            position: fixed;
            top: 10px;
            right: 10px;
            background: #007bff;
            color: white;
            padding: 5px 10px;
            border-radius: 4px;
            font-size: 12px;
        }

        /* Tablet: Necesidades de Seguridad - Estructura mejorada */
        @media (min-width: 768px) {
            .responsive-demo {
                max-width: 1200px;
                margin: 0 auto;
                padding: 2rem;
            }

            .content-grid {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                gap: 2rem;
            }

            .device-indicator::after {
                content: " - Tablet";
            }
        }

        /* Desktop: Necesidades Superiores - Experiencia enriquecida */
        @media (min-width: 1024px) {
            .responsive-demo {
                padding: 3rem;
            }

            .content-grid {
                grid-template-columns: repeat(3, 1fr);
            }

            .card {
                transition: all 0.3s ease;
            }

            .card:hover {
                transform: translateY(-5px);
                box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            }

            .device-indicator::after {
                content: " - Desktop";
            }
        }

        /* Desktop Grande: Autorrealización - Experiencias premium */
        @media (min-width: 1440px) {
            .content-grid {
                grid-template-columns: repeat(4, 1fr);
            }

            .card {
                background: linear-gradient(135deg, #fff 0%, #f8f9fa 100%);
            }

            .card:hover {
                background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
                transform: translateY(-8px) scale(1.02);
                box-shadow: 0 15px 40px rgba(0,0,0,0.15);
            }

            .device-indicator::after {
                content: " - Desktop XL";
            }
        }
    </style>
</head>
<body>
    <div class="device-indicator">Dispositivo</div>
    
    <div class="responsive-demo">
        <h1 style="text-align: center; margin-bottom: 2rem; color: #495057;">
            Diseño Responsivo - Mobile First
        </h1>
        
        <div class="content-grid">
            <div class="card">
                <h3>Móvil (Base)</h3>
                <p>Funcionalidad esencial. Layout en columna, padding mínimo, tipografía legible.</p>
            </div>
            
            <div class="card">
                <h3>Tablet</h3>
                <p>Estructura mejorada. Grid de 2 columnas, mayor espaciado, mejor organización.</p>
            </div>
            
            <div class="card">
                <h3>Desktop</h3>
                <p>Interactividad añadida. Grid de 3 columnas, efectos hover, transiciones suaves.</p>
            </div>
            
            <div class="card">
                <h3>Desktop XL</h3>
                <p>Experiencia premium. Grid de 4 columnas, gradientes, animaciones avanzadas.</p>
            </div>
        </div>
        
        <div style="margin-top: 2rem; text-align: center; font-size: 0.9em; color: #6c757d;">
            <p><strong>Instrucciones:</strong> Redimensiona la ventana del navegador para ver la progresión jerárquica de Maslow en acción.</p>
        </div>
    </div>
</body>
</html>
~~~

Estos ejemplos demuestran prácticamente la aplicación de los principios teóricos desarrollados, implementando la progresión jerárquica desde funcionalidades básicas hasta experiencias sofisticadas, siguiendo los postulados de Maslow (1943) sobre la satisfacción progresiva de necesidades humanas en el contexto del diseño de interfaces web.

-----
# 5\. INTERACTIVIDAD Y DETALLES FINOS

## 5\.1 ¿Qué son las Pseudo-clases?
Las **pseudo‑clases** son selectores que permiten aplicar estilos a elementos en un **estado específico**, sin necesidad de modificar el HTML directamente. Por ejemplo, se utilizan para reconocer si un elemento está siendo enfocado, su primer hijo o si el cursor pasa sobre él ([developer.mozilla.org](https://developer.mozilla.org/es/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements)).

- Comienzan con un solo dos puntos (`:`), como en `:hover`.
- Facilitan un marcado más limpio y mantenible, simulando la adición de una clase sin tocar el HTML .
### 5\.1\.2 Ejemplos comunes de pseudo-clases:
- `:hover` → Se aplica cuando el cursor pasa por encima del elemento.
- `:active` → Se aplica cuando el elemento está activo (ej. al hacer clic).
- `:focus` → Se aplica cuando el elemento recibe foco (ej. un input seleccionado).
- `:first-child` → Selecciona el primer hijo de un contenedor.
- `:last-child` → Selecciona el último hijo de un contenedor.
- `:nth-child(n)` → Selecciona el elemento en la posición *n* de una lista.
### 5\.1\.3 Código:
~~~ css
.ejemplo1 button:hover {
  background-color: blue;
  color: white;
}
.ejemplo1 input:focus {
  border: 4px solid green;
}
~~~
~~~ html
<div class="ejemplo1">
  <button>Pasa el cursor</button>
  <br><br>
  <input type="text" placeholder="Escribe algo...">
</div>
~~~
### 5\.1\.4 Ejemplo:
<div class="ejemplo1">
  <button>Pasa el cursor</button>
  <br><br>
  <input type="text" placeholder="Escribe algo...">
</div>

<style>
.ejemplo1 button:hover {
  background-color: blue;
  color: white;
}
.ejemplo1 input:focus {
  border: 4px solid green;
}
</style>

-----
## 5\.2 ¿Qué son los Pseudo-elementos?
Los **pseudo‑elementos** funcionan como si insertaran una parte adicional dentro de un elemento HTML, sin modificar el marcado real. Se utilizan para aplicar estilos sobre partes específicas o generar contenido visual extra ([developer.mozilla.org](https://developer.mozilla.org/es/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements)).

- Se representan con **doble dos puntos** `::`, como `::before` o `::after` .
- A pesar de esto, algunos navegadores todavía aceptan la sintaxis con un solo dos puntos (`:before`, `:after`) por compatibilidad retrospectiva .
### 5\.2\.1 Ejemplos comunes de pseudo-elementos:
- `::before` → Inserta contenido antes de un elemento.
- `::after` → Inserta contenido después de un elemento.
- `::first-letter` → Selecciona la primera letra de un texto.
- `::first-line` → Selecciona la primera línea de un texto.
- `::selection` → Cambia el estilo del texto seleccionado.
### 5\.2\.2 Código:
~~~ css
.ejemplo2 p::first-letter {
  font-size: 2em;
  color: red;
}
.ejemplo2 p::after {
  content: " 🔥";
}
.ejemplo2 p::selection {
  background: yellow;
  color: black;
}
~~~
~~~ html
<div class="ejemplo2">
  <p>Este es un párrafo de ejemplo.</p>
</div>
~~~

### 5\.2\.3 Ejemplo:

<div class="ejemplo2">
  <p>Este es un párrafo de ejemplo.</p>
</div>

<style>
.ejemplo2 p::first-letter {
  font-size: 2em;
  color: red;
}
.ejemplo2 p::after {
  content: " 🔥";
}
.ejemplo2 p::selection {
  background: yellow;
  color: black;
}
</style>
---

## 5\.3 Ejemplo combinado Pseudo-clase y Pseudo-elemento
### 5\.3\.1 Código
~~~ html
<button class="btn-pseudo">Haz clic aquí</button>
~~~
~~~ css
.btn-pseudo {
  position: relative;
  padding: 12px 24px;
  background: #6200ea;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  overflow: hidden;
  z-index: 1;
  transition: background 0.3s ease;
}


.btn-pseudo:hover {
  background: #7b1fa2;
}


.btn-pseudo:active {
  transform: scale(0.95);
}


.btn-pseudo:focus {
  outline: 2px dashed #ff9800;
  outline-offset: 4px;
}


.btn-pseudo::before {
  content: "";
  position: absolute;
  top: 0;
  left: -90%;
  width: 100%;
  height: 100%;
  background: rgba(255,255,255,0.2);
  transform: skewX(-25deg);
  transition: left 0.5s ease;
  z-index: -1;
}

.btn-pseudo:hover::before {
  left: 90%;
}

.btn-pseudo::after {
  content: "»";
  position: absolute;
  right: 16px;
  opacity: 0;
  transition: opacity 0.3s ease, right 0.3s ease;
}

.btn-pseudo:hover::after {
  opacity: 1;
  right: 8px;
}
</style>
~~~
### 5\.3\.2 Ejemplo:

<button class="btn-pseudo">Haz clic aquí</button>

<style>
.btn-pseudo {
  position: relative;
  padding: 12px 24px;
  background: #6200ea;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  overflow: hidden;
  z-index: 1;
  transition: background 0.3s ease;
}


.btn-pseudo:hover {
  background: #7b1fa2;
}


.btn-pseudo:active {
  transform: scale(0.95);
}


.btn-pseudo:focus {
  outline: 2px dashed #ff9800;
  outline-offset: 4px;
}


.btn-pseudo::before {
  content: "";
  position: absolute;
  top: 0;
  left: -90%;
  width: 100%;
  height: 100%;
  background: rgba(255,255,255,0.2);
  transform: skewX(-25deg);
  transition: left 0.5s ease;
  z-index: -1;
}

.btn-pseudo:hover::before {
  left: 90%;
}

.btn-pseudo::after {
  content: "»";
  position: absolute;
  right: 16px;
  opacity: 0;
  transition: opacity 0.3s ease, right 0.3s ease;
}

.btn-pseudo:hover::after {
  opacity: 1;
  right: 8px;
}
</style>

---

Para un listado más completo y detallado de todas las pseudo-clases y pseudo-elementos disponibles en CSS, puedes consultar la guía de referencia en ([css-tricks.com](https://css-tricks.com/almanac/pseudo-selectors/#letter-A)), donde encontrarás ejemplos prácticos y explicaciones organizadas alfabéticamente.

-----

## 5\.4 Transiciones en CSS
Las **transiciones** en CSS permiten que los cambios de estilo se realicen de forma **gradual** en lugar de inmediata, cuando un valor de propiedad cambia ([MDN Web Docs](https://developer.mozilla.org/es/docs/Web/CSS/CSS_transitions/Using_CSS_transitions)).
### 5\.4\.1 Propiedades comunes de transición
- `transition-property`: La propiedad CSS que se animará (ej. `background-color`, `width`).
- `transition-duration`: La duración del efecto (ej. `2s`).
- `transition-timing-function`: Define la curva de velocidad (ej. `ease`, `linear`, `ease-in`, `ease-out`).
- `transition-delay`: Retraso antes de que empiece la transición.

La propiedad abreviada `transition` permite configurar fácilmente todos estos valores en una sola línea.\
Como explica [CSS Reference](https://cssreference.io/property/transition/):
### 5\.4\.2 Código:
~~~ css
.ejemplo1 button {
  background-color: lightblue;
  transition: background-color 0.5s ease;
}
.ejemplo1 button:hover {
  background-color: blue;
  color: white;
}
~~~
~~~ html
<div class="ejemplo1">
  <button style="padding:10px; border:none; cursor:pointer;">Pasa el cursor</button>
</div>
~~~

### 5\.4\.3 Ejemplo:

<div class="ejemplo1">
  <button style="padding:10px; border:none; cursor:pointer;">Pasa el cursor</button>
</div>

<style>
.ejemplo1 button {
  background-color: lightblue;
  transition: background-color 0.5s ease;
}
.ejemplo1 button:hover {
  background-color: blue;
  color: white;
}
</style>
-----
## 5\.5 Animaciones en CSS
Las **animaciones** permiten definir una secuencia de cambios más compleja, controlada con **`@keyframes`**, que describe cómo deben evolucionar las propiedades a lo largo del tiempo ([MDN Web Docs](https://developer.mozilla.org/es/docs/Web/CSS/CSS_animations/Using_CSS_animations)).
### 5\.5\.1 Propiedades comunes de animación
- `animation-name`: Nombre de la animación definida con `@keyframes`.
- `animation-duration`: Duración de la animación.
- `animation-timing-function`: Velocidad (ej. `ease`, `linear`).
- `animation-delay`: Retraso antes de comenzar.
- `animation-iteration-count`: Número de repeticiones (`infinite` para bucle infinito).
- `animation-direction`: Dirección (ej. `normal`, `reverse`, `alternate`).

La propiedad abreviada `animation` permite configurar fácilmente todos estos valores en una sola línea de CSS.\
Como explica [CSS Reference](https://cssreference.io/animations/):
### 5\.5\.2 Código:
~~~ css
@keyframes mover {
  0% { transform: translateX(0); }
  50% { transform: translateX(100px); }
  100% { transform: translateX(0); }
}

.ejemplo2 div {
  width: 50px;
  height: 50px;
  background: red;
  animation: mover 3s infinite;
}
~~~
~~~ html
<div class="ejemplo2">
  <div></div>
</div>
~~~
### 5\.5\.3 Ejemplo:
<div class="ejemplo2">
  <div></div>
</div>

<style>
@keyframes mover {
  0% { transform: translateX(0); }
  50% { transform: translateX(100px); }
  100% { transform: translateX(0); }
}

.ejemplo2 div {
  width: 50px;
  height: 50px;
  background: red;
  animation: mover 3s infinite;
}
</style>

-----
## 5\.6 Ejemplo combinado de transición y animación
### 5\.6\.1 Código:
~~~ css
.ejemplo3 {
  width: 150px;
  height: 50px;
  background: linear-gradient(135deg, #2196f3, #21cbf3);
  border-radius: 16px;
  margin: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
  font-family: sans-serif;
  animation: glow 3s infinite;
  transition: transform 0.6s ease, box-shadow 0.6s ease;
}

.ejemplo3:hover {
  transform: scale(1.2) rotate(5deg);
  box-shadow: 0 12px 25px rgba(33, 150, 243, 0.5);
}

@keyframes glow {
  0%   { box-shadow: 0 0 5px #21cbf3; }
  50%  { box-shadow: 0 0 25px #21cbf3, 0 0 50px #2196f3; }
  100% { box-shadow: 0 0 5px #21cbf3; }
}
~~~
~~~ html
<div class="ejemplo3">Hover</div>
~~~
### 5\.6\.2 Ejemplo:
<div class="ejemplo3">Hover</div>

<style>
.ejemplo3 {
  width: 150px;
  height: 50px;
  background: linear-gradient(135deg, #2196f3, #21cbf3);
  border-radius: 16px;
  margin: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
  font-family: sans-serif;
  animation: glow 3s infinite;
  transition: transform 0.6s ease, box-shadow 0.6s ease;
}

.ejemplo3:hover {
  transform: scale(1.2) rotate(5deg);
  box-shadow: 0 12px 25px rgba(33, 150, 243, 0.5);
}

@keyframes glow {
  0%   { box-shadow: 0 0 5px #21cbf3; }
  50%  { box-shadow: 0 0 25px #21cbf3, 0 0 50px #2196f3; }
  100% { box-shadow: 0 0 5px #21cbf3; }
}
</style>

-----
# 6\. Conclusión
En conclusión, CSS es una herramienta clave para transformar una página simple en un sitio atractivo, moderno y fácil de usar.\
Gracias a sus funciones básicas y avanzadas (como selectores, propiedades, animaciones y diseños responsivos), los desarrolladores pueden crear experiencias web visualmente agradables y funcionales en cualquier dispositivo.\
Como resumen del documento: **sin CSS la web sería desordenada y aburrida, pero con CSS se logran sitios dinámicos, claros y coherentes** (**Kaluvakuri & Vadiyala, 2016, p. 109**).

# 7\. Referencia
-	Kaluvakuri, S., & Vadiyala, V. R. (2016). Harnessing the potential of CSS: An exhaustive reference for web styling. Engineering International, 4(2), 95–110. https://doi.org/10.18034/ei.v4i2.682
-	World Wide Web Consortium (W3C), Selectors Level 3. W3C Recommendation, 2018. [Online]. Available: https://www.w3.org/TR/selectors-3/
-	K. J. Grant, CSS in Depth. Shelter Island, NY: Manning Publications, 2017. [Online]. Available: https://www.manning.com/books/css-in-depth
-	M. Haverbeke, Eloquent JavaScript: A Modern Introduction to Programming, 3rd ed. San Francisco, CA: No Starch Press, 2018. [Online]. Available: https://eloquentjavascript.net/
-	MDN Web Docs, Specificity - CSS cascade. Mozilla Developer Network, 2024. [Online]. Available: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_cascade/Specificity
-	FreeCodeCamp, What is CSS Specificity?, 2021. [Online]. Available: https://www.freecodecamp.org/news/what-is-css-specificity/
-	GeeksforGeeks, Explain the concept of specificity in CSS, 2022. [Online]. Available: https://www.geeksforgeeks.org/css/explain-the-concept-of-specificity-in-css/
-	MDN Web Docs, CSS: Unidades de medida. Mozilla Developer Network, s.f. [Online]. Available: https://developer.mozilla.org/es/docs/Web/CSS/length 
-	MDN Web Docs. (2024). Positioning in CSS. Mozilla Developer Network. https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Positioning 
-	Jesusda. (s. f.). Introducción a CSS. Recuperado de https://www.jesusda.com/docs/ebooks/introduccion_css.pdf
-	Ventics. (s. f.). Margen y relleno en CSS. Recuperado de https://ventics.com/margen-y-relleno-en-css/ 
-	W3Schools. (s. f.). Modelo de caja en CSS. W3Schools. Recuperado de https://www-w3schools-com.translate.goog/css/css_boxmodel.asp?_x_tr_sl=en&_x_tr_tl=es&_x_tr_hl=es&_x_tr_pto=tc 
-	George, L. (2020, junio 10). The theory of the box model: Margin and padding explained. Hashnode. Recuperado de https://laviedegeorge.hashnode.dev/the-theory-of-the-box-model-margin-and-padding-explained-ck88j5cgx00067rs1g4b1b6v5 
-	MDN Web Docs. (s. f.). Introduction to the CSS box model. Mozilla. Recuperado de https://developer-mozilla-org.translate.goog/en-US/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model?_x_tr_sl=en&_x_tr_tl=es&_x_tr_hl=es&_x_tr_pto=sge#:~:text=Every%20box%20is%20composed%20of,border%20edge%2C%20and%20margin%20edge 
-	Oregoom. (s. f.). CSS color. Oregoom. Recuperado de https://oregoom.com/css/color/

