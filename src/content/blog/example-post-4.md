---
title: 'Semana 06'
description: 'Showcase image layout and card behavior.'
pubDate: '2025-09-30'
heroImage: '../../assets/images/example-blog-hero4.jpg'
category: 'Engineering'
tags: ['template']
---

A continuaciòn se hablará del tema de Componenetes, JSX, TypeScript y Estilos en React


##  1. **Componentes en React**

Los **componentes** son la base de cualquier aplicación en React.
Piensa en ellos como **bloques reutilizables de interfaz** (botones, formularios, menús, etc.) que pueden combinarse para crear una aplicación completa.

### Tipos de componentes

1. **Componentes de función (Function Components)**
   Son los más usados hoy en día. Ejemplo:

   ```jsx
   function Saludo() {
     return <h1>¡Hola, mundo!</h1>;
   }
   export default Saludo;
   ```

   O con **arrow function**:

   ```jsx
   const Saludo = () => <h1>¡Hola, mundo!</h1>;
   ```

2. **Componentes de clase (Class Components)**
   Son una forma más antigua de crear componentes:

   ```jsx
   class Saludo extends React.Component {
     render() {
       return <h1>¡Hola, mundo!</h1>;
     }
   }
   ```

### Props y Estado

* **Props** → datos que recibe el componente (como parámetros de una función).
* **State** → datos internos que cambian con el tiempo dentro del componente.

Ejemplo:

```jsx
const Contador = ({ inicial }) => {
  const [contador, setContador] = React.useState(inicial);
  return (
    <div>
      <p>Valor: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>+</button>
    </div>
  );
};
```

---

##  2. **JSX (JavaScript XML)**

**JSX** es una extensión de JavaScript que permite **escribir HTML dentro del código JS**.
React la usa para describir cómo debe verse la interfaz.

Ejemplo:

```jsx
const Elemento = <h1>Hola, JSX!</h1>;
```

Pero en realidad JSX se **convierte a JavaScript puro**:

```jsx
const Elemento = React.createElement("h1", null, "Hola, JSX!");
```

### Reglas básicas

* Solo puede **devolver un elemento raíz** (usa fragmentos `<>...</>` si hay varios).
* Usa `{}` para **insertar variables o expresiones**.
* Las **clases CSS** se escriben como `className`.
* Los **eventos** usan camelCase: `onClick`, `onChange`, etc.

Ejemplo:

```jsx
function Usuario({ nombre }) {
  return <p>Bienvenido, {nombre}</p>;
}
```

---

## 3. **TypeScript en React**

**TypeScript** agrega **tipado estático** a JavaScript.
Permite detectar errores antes de ejecutar el código y mejora la autocompletación.

### Ejemplo básico

```tsx
type Props = {
  nombre: string;
  edad: number;
};

const Usuario: React.FC<Props> = ({ nombre, edad }) => {
  return <p>{nombre} tiene {edad} años</p>;
};
```

Ventajas:

* Previene errores por tipos de datos incorrectos.
* Mejora la productividad en proyectos grandes.
* Hace más fácil el mantenimiento.

---

##  4. **Estilos en React**

Hay varias formas de aplicar estilos en React, según el enfoque del proyecto:

### a) CSS tradicional

Se importa un archivo `.css`:

```jsx
import './App.css';
```

```css
/* App.css */
h1 {
  color: blue;
}
```

### b) CSS Modules

Permiten evitar conflictos entre clases:

```jsx
import styles from './Boton.module.css';

function Boton() {
  return <button className={styles.primary}>Enviar</button>;
}
```

### c) Inline Styles

Usa objetos de estilo directamente en JSX:

```jsx
const estilo = { color: 'red', backgroundColor: 'yellow' };

function Mensaje() {
  return <p style={estilo}>Texto con estilo inline</p>;
}
```

### d) Librerías CSS

* **Bootstrap**: estilos clásicos y responsive rápidos.

  ```bash
  npm install bootstrap
  ```

  ```jsx
  import 'bootstrap/dist/css/bootstrap.min.css';
  ```

* **Tailwind CSS**: clases utilitarias para diseños modernos y responsivos.

  ```jsx
  <button className="bg-blue-500 text-white px-4 py-2 rounded">Guardar</button>
  ```

* **Styled Components** (CSS-in-JS): define estilos dentro del componente.

  ```jsx
  import styled from 'styled-components';

  const Boton = styled.button`
    background-color: blue;
    color: white;
  `;
  ```


