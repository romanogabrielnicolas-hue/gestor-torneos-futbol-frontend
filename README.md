# ⚽ Gestor de Torneos de Fútbol - Frontend

Aplicación web desarrollada con **React + Vite** como migración del proyecto anterior de gestión de torneos de fútbol.

El proyecto busca organizar la información de equipos, jugadores y partidos mediante una interfaz web moderna y responsive.

## 📋 Descripción

Este proyecto corresponde al **Repositorio N.º 2** del trabajo práctico.

En esta versión se está migrando progresivamente el proyecto desarrollado anteriormente utilizando **React**, **Vite** y **React Bootstrap**.

La aplicación está organizada mediante componentes y páginas independientes para facilitar la organización y mantenimiento del código.

## 🎯 Objetivos

- Migrar el proyecto anterior a React.
- Utilizar Vite como herramienta de desarrollo.
- Implementar React Bootstrap.
- Dividir la interfaz en componentes reutilizables.
- Organizar las diferentes vistas mediante Pages.
- Mantener un diseño responsive.
- Aplicar buenas prácticas de organización del código.

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

## 🧱 Componentes

La interfaz se divide en componentes reutilizables.

Actualmente se cuenta con:

- `Navbar.jsx`
- `Footer.jsx`

Estos componentes permiten evitar repetir elementos comunes de la interfaz.

## 📄 Pages

Las diferentes vistas del proyecto están organizadas dentro de la carpeta `pages`:

- `Inicio.jsx`
- `Equipos.jsx`
- `Jugadores.jsx`
- `Partidos.jsx`

Esta organización permite separar cada sección de la aplicación.

## 📱 Diseño Responsive

El proyecto utiliza **React Bootstrap** y las clases de Bootstrap para adaptar la interfaz a diferentes tamaños de pantalla.

Se utilizan clases como:

- `container`
- `row`
- `col-12`
- `col-md-*`
- `table-responsive`
- `img-fluid`

## 🔎 SEO

Se implementarán buenas prácticas de SEO durante el desarrollo del proyecto.

Entre ellas:

- Títulos descriptivos.
- Meta descripción.
- Meta viewport.
- Uso de etiquetas HTML semánticas.
- Texto alternativo (`alt`) en imágenes.
- Estructura organizada del contenido.

## 🛠️ Tecnologías utilizadas

- React
- Vite
- JavaScript
- React Bootstrap
- Bootstrap
- HTML5
- CSS3
- Git
- GitHub

## 📁 Estructura del proyecto

```text
gestor-torneos-futbol-frontend/
│
├── public/
│   └── img/
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   │
│   ├── pages/
│   │   ├── Inicio.jsx
│   │   ├── Equipos.jsx
│   │   ├── Jugadores.jsx
│   │   └── Partidos.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── package.json
├── vite.config.js
└── README.md
```
