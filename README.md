<div align="center">

<img src="./public/img/logoMejorado.png" width="180">

# ⚽ Gestor de Torneos de Fútbol - Frontend

### React + Vite + React Bootstrap

Aplicación web desarrollada como migración del proyecto anterior de gestión de torneos de fútbol.

<br>

![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

</div>

---

## 📋 Descripción

Este proyecto corresponde al **Repositorio N.º 2** del trabajo práctico.

En esta versión se está migrando progresivamente el proyecto desarrollado anteriormente utilizando **React**, **Vite** y **React Bootstrap**.

La aplicación está organizada mediante componentes y páginas independientes para facilitar la organización y mantenimiento del código.

---

## 🎯 Objetivos

- 🔄 Migrar el proyecto anterior a React.
- ⚡ Utilizar Vite como herramienta de desarrollo.
- 🎨 Implementar React Bootstrap.
- 🧩 Dividir la interfaz en componentes reutilizables.
- 📄 Organizar las diferentes vistas mediante Pages.
- 📱 Mantener un diseño responsive.
- 🧹 Aplicar buenas prácticas de organización del código.

---

## 🧩 Funcionalidades

Actualmente el proyecto cuenta con las siguientes secciones:

### 🏠 Inicio

Página principal del sistema con acceso visual a las diferentes funcionalidades.

### ⚽ Equipos

Página destinada a la gestión de los equipos del torneo.

Incluye:

- Formulario para registrar equipos.
- Selección de color.
- Tabla para mostrar equipos.
- Botones de editar y eliminar.

### 👤 Jugadores

Página destinada a la gestión de jugadores.

Incluye:

- Formulario para registrar jugadores.
- Selección de equipo.
- Tabla de jugadores.
- Botones de editar y eliminar.

### 📅 Partidos

Página destinada a la gestión de partidos.

Incluye:

- Selección de equipo local.
- Selección de equipo visitante.
- Fecha.
- Hora.
- Tabla de partidos.
- Botones de editar y eliminar.

---

## 🧱 Componentes

La interfaz se divide en componentes reutilizables.

Actualmente se cuenta con:

- `navbar.jsx`
- `footer.jsx`

Estos componentes permiten evitar repetir elementos comunes de la interfaz.

---

## 📄 Pages

Las diferentes vistas del proyecto están organizadas dentro de la carpeta `pages`:

- `Inicio.jsx`
- `Equipos.jsx`
- `Jugadores.jsx`
- `Partidos.jsx`

Esta organización permite separar cada sección de la aplicación.

---

## 📱 Diseño Responsive

El proyecto utiliza **React Bootstrap** y las clases de Bootstrap para adaptar la interfaz a diferentes tamaños de pantalla.

Se utilizan clases como:

- `container`
- `row`
- `col-12`
- `col-md-*`
- `table-responsive`
- `img-fluid`

---

## 🔎 SEO

Se implementarán buenas prácticas de SEO durante el desarrollo del proyecto.

Entre ellas:

- Títulos descriptivos.
- Meta descripción.
- Meta viewport.
- Uso de etiquetas HTML semánticas.
- Texto alternativo (`alt`) en imágenes.
- Estructura organizada del contenido.

---

## 🛠️ Tecnologías utilizadas

| Tecnología         | Uso                             |
| ------------------ | ------------------------------- |
| ⚛️ React           | Desarrollo de la interfaz       |
| ⚡ Vite            | Herramienta de desarrollo       |
| 🟨 JavaScript      | Lógica de la aplicación         |
| 🎨 React Bootstrap | Componentes y diseño responsive |
| 🟣 Bootstrap       | Estilos y responsive            |
| 🌐 HTML5           | Estructura                      |
| 🎨 CSS3            | Personalización visual          |
| 🔧 Git             | Control de versiones            |
| 🐙 GitHub          | Repositorio                     |

---

## 📁 Estructura del proyecto

```text
gestor-torneos-futbol-frontend/
│
├── public/
│   └── img/
│
├── src/
│   ├── components/
│   │   ├── navbar.jsx
│   │   └── footer.jsx
│   │
│   ├── pages/
│   │   ├── Inicio.jsx
│   │   ├── Equipos.jsx
│   │   ├── Jugadores.jsx
│   │   └── Partidos.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
│
├── package.json
├── vite.config.js
└── README.md
```
