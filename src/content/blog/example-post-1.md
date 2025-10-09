---
title: 'Semana 4'
description: 'Temas desarrollados en la semana 4.'
pubDate: '2025-09-16'
heroImage: '../../assets/images/example-blog-hero1.jpg'
category: 'Showcase'
tags: ['template', 'demo']
---

Aumentando conocimiento a partir de exposiciones.

## Exposición de los temas

Para aprender sobre los conocimientos basicos para el desarrollo de las aplicaciones web, se dejo que se crearan grupos y que expusieran los temas a ver:


En esta semana se siguito la exposición de los grupos, las cuales fueron los siguientes temas

🔹JavaScript Básico

🔹JavaScript Avanzado 

A continuación se explicará los conceptos basicos de los temas.


## 🔹 **JavaScript Básico**

**JavaScript (JS)** es el lenguaje que da **interactividad y lógica** a las páginas web.
Con HTML estructuras, con CSS diseñas, y con JS haces que **el sitio cobre vida**.

---

###  **1. Qué es y cómo se usa**

Se ejecuta en el navegador (del lado del cliente).
Puedes incluirlo en tu HTML así:

```html
<script>
  alert("Hola Mundo!");
</script>
```

O desde un archivo externo:

```html
<script src="app.js"></script>
```

---

###  **2. Variables**

Sirven para almacenar datos.

```javascript
let nombre = "Sebastián"; // variable que puede cambiar
const edad = 25;          // constante, no cambia
var ciudad = "Lima";      // forma antigua (no se recomienda)
```

---

###  **3. Tipos de datos**

* **Primitivos:** string, number, boolean, null, undefined, symbol.
* **Compuestos:** object, array, function.

Ejemplo:

```javascript
let texto = "Hola";
let numero = 10;
let activo = true;
let frutas = ["manzana", "pera"];
let persona = { nombre: "Luis", edad: 20 };
```

---

###  **4. Operadores**

Matemáticos (`+ - * / %`), de comparación (`== === != > <`), lógicos (`&& || !`).

```javascript
let x = 5;
let y = 10;
console.log(x < y && y > 0); // true
```

---

###  **5. Estructuras de control**

* **Condicionales:**

  ```javascript
  if (edad >= 18) {
    console.log("Mayor de edad");
  } else {
    console.log("Menor de edad");
  }
  ```

* **Bucles:**

  ```javascript
  for (let i = 0; i < 3; i++) {
    console.log(i);
  }

  let j = 0;
  while (j < 3) {
    console.log(j);
    j++;
  }
  ```

---

###  **6. Funciones**

Bloques de código reutilizables.

```javascript
function saludar(nombre) {
  return "Hola, " + nombre;
}

console.log(saludar("Carlos"));
```

O como **función flecha**:

```javascript
const sumar = (a, b) => a + b;
```

---

###  **7. Manipulación del DOM**

Permite **interactuar con el HTML**.

```html
<h1 id="titulo">Hola</h1>
<script>
  document.getElementById("titulo").innerText = "Hola Mundo con JS";
</script>
```

Otros métodos útiles:

* `querySelector()`
* `addEventListener()`
* `createElement()`

Ejemplo:

```javascript
document.querySelector("button").addEventListener("click", () => {
  alert("¡Botón presionado!");
});
```

---

###  **8. Eventos del navegador**

* `onclick`
* `onmouseover`
* `onkeydown`
* `onchange`
* `onsubmit`

Permiten reaccionar a acciones del usuario.

---

###  **9. Interacción básica con el usuario**

```javascript
let nombre = prompt("¿Cómo te llamas?");
alert("Hola " + nombre);
```

---

## 🔹 **JavaScript Avanzado**

Aquí se incorporan los conceptos modernos y potentes del lenguaje: **funciones de orden superior, asincronía, clases, módulos y más.**

---

###  **1. Funciones avanzadas**

* **Funciones como valores:**

  ```javascript
  const operar = (a, b, operacion) => operacion(a, b);
  console.log(operar(5, 3, (x, y) => x + y)); // 8
  ```

* **Funciones anónimas y callbacks:** funciones que se pasan como argumento a otras.

---

###  **2. Arrays avanzados**

Métodos poderosos para manipular datos:

```javascript
const numeros = [1, 2, 3, 4, 5];

numeros.forEach(n => console.log(n));       // recorrer
const dobles = numeros.map(n => n * 2);     // nuevo array
const pares = numeros.filter(n => n % 2==0);// filtrar
const suma = numeros.reduce((a,b)=>a+b,0);  // acumular
```

---

###  **3. Objetos y desestructuración**

```javascript
const persona = { nombre: "Ana", edad: 22 };
const { nombre, edad } = persona; // desestructuración
```

---

###  **4. Programación Orientada a Objetos (POO)**

```javascript
class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar() {
    console.log(`Hola, soy ${this.nombre}`);
  }
}

const p1 = new Persona("Luis", 30);
p1.saludar();
```

---

###  **5. Asincronía y Promesas**

Permiten manejar tareas que tardan (como cargar datos de un servidor).

```javascript
fetch("https://api.example.com/datos")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error("Error:", error));
```

O con **async/await**:

```javascript
async function obtenerDatos() {
  try {
    const res = await fetch("https://api.example.com/datos");
    const data = await res.json();
    console.log(data);
  } catch (e) {
    console.error("Error:", e);
  }
}
```

---

###  **6. Módulos**

Permiten dividir el código en varios archivos:

```javascript
// archivo: funciones.js
export function saludar() {
  console.log("Hola desde módulo");
}

// archivo principal:
import { saludar } from './funciones.js';
saludar();
```

---

###  **7. Manipulación avanzada del DOM**

Crear, modificar y eliminar elementos dinámicamente:

```javascript
const div = document.createElement("div");
div.textContent = "Elemento dinámico";
document.body.appendChild(div);
```

También se pueden crear **animaciones** o **modificar estilos** desde JS.

---

###  **8. JSON y almacenamiento local**

```javascript
const usuario = { nombre: "Pedro", edad: 28 };
localStorage.setItem("usuario", JSON.stringify(usuario));

const data = JSON.parse(localStorage.getItem("usuario"));
console.log(data.nombre);
```

---

###  **9. Buenas prácticas**

* Usar `const` y `let` (evitar `var`).
* Nombrar variables descriptivamente.
* Evitar anidar muchas funciones.
* Modularizar el código.
* Usar `===` en lugar de `==`.

---

