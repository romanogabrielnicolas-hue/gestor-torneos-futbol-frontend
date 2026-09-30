<div align="center">

<img src="./public/img/logoMejorado.png" width="190" alt="Logo Gestor de Torneos">

# Gestor de Torneos de Fútbol - Frontend

### React + Vite + React Bootstrap

Aplicación web desarrollada con **React + Vite** como migración del proyecto anterior de gestión de torneos de fútbol.

<br>

![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)

## </div>

## 📋 Descripción

Este proyecto es la versión frontend de un gestor de torneos de fútbol, desarrollado utilizando **React** y **Vite**. Se enfoca en la organización y administración de equipos, jugadores y partidos a través de una interfaz de usuario intuitiva y visualmente atractiva, potenciada por **React Bootstrap** y **Bootstrap** para un diseño responsive.

---

## 📝 Tabla de Contenido

- [⚽ Proyecto](#proyecto)
- [✨ Características](#características)
- [🛠️ Tecnologías Utilizadas](#tecnologías-utilizadas)
- [🚀 Instalación](#instalación)
- [💻 Uso](#uso)
- [📁 Estructura del Proyecto](#estructura-del-proyecto)
- [🔗 Enlaces Importantes](#enlaces-importantes)

---

## ⚽ Proyecto

Este proyecto corresponde al **Repositorio N.º 2** del trabajo práctico. Es una migración progresiva de un proyecto anterior, adoptando las tecnologías modernas de React y Vite para una mejor experiencia de desarrollo y rendimiento.

---

## ✨ Características

- **Gestión Integral de Torneos:** Permite administrar equipos, jugadores y partidos de un torneo de fútbol.
- **Interfaz Moderna y Responsive:** Diseñada con React Bootstrap y Bootstrap para adaptarse a cualquier tamaño de pantalla.
- **Componentes Reutilizables:** La arquitectura del proyecto se basa en componentes modulares para facilitar el mantenimiento y la escalabilidad.
- **Navegación Intuitiva:** Fácil acceso a las diferentes secciones (Inicio, Equipos, Jugadores, Partidos) a través de una barra de navegación.
- **Diseño Visualmente Atractivo:** Uso de estilos personalizados y temas de Bootstrap para una experiencia de usuario agradable.
- **Buenas Prácticas de Desarrollo:** Se busca aplicar buenas prácticas en la organización del código y desarrollo frontend.

### 🏠 Inicio

Página principal del sistema con un resumen y acceso visual a las diferentes funcionalidades del gestor.

### ⚽ Equipos

- **Registro de Equipos:** Formulario para añadir nuevos equipos, incluyendo la selección de un color representativo.
- **Visualización de Equipos:** Tabla que muestra los equipos registrados, con opciones para editar o eliminar.

### 👤 Jugadores

- **Registro de Jugadores:** Formulario para añadir jugadores, asociándolos a un equipo específico.
- **Visualización de Jugadores:** Tabla que lista los jugadores, con botones para editar o eliminar.

### 📅 Partidos

- **Registro de Partidos:** Formulario para programar partidos, seleccionando equipos local y visitante, fecha y hora.
- **Visualización de Partidos:** Tabla que muestra los partidos programados, con opciones para editar o eliminar.

---

## 🛠️ Tecnologías Utilizadas

- **Framework Frontend:** React
- **Build Tool:** Vite
- **UI Framework:** React Bootstrap, Bootstrap
- **Lenguaje:** JavaScript (ES6+)
- **CSS:** CSS3 (con estilos personalizados y clases de Bootstrap)
- **Gestión de Estado:** React Hooks (useState)
- **Control de Versiones:** Git, GitHub

---

## 🚀 Instalación

Sigue estos pasos para configurar el proyecto localmente:

1.  **Clonar el Repositorio:**

    ```bash
    git clone https://github.com/romanogabrielnicolas-hue/gestor-torneos-futbol-frontend.git
    cd gestor-torneos-futbol-frontend
    ```

2.  **Instalar Dependencias:**
    Asegúrate de tener Node.js y npm (o yarn) instalados. Luego, ejecuta:

    ```bash
    npm install
    # o si usas yarn:
    # yarn install
    ```

3.  **Iniciar el Servidor de Desarrollo:**
    ```bash
    npm run dev
    # o si usas yarn:
    # yarn dev
    ```

El proyecto se ejecutará en `http://localhost:5173` (o el puerto que Vite asigne por defecto).

---

## 💻 Uso

Esta aplicación frontend está diseñada para gestionar torneos de fútbol. Permite a los usuarios interactuar con las siguientes funcionalidades:

1.  **Navegación:** Utiliza la barra de navegación superior para cambiar entre las secciones:
    - **Inicio:** Vista principal con accesos directos a las demás secciones.
    - **Equipos:** Para agregar, ver, editar y eliminar equipos del torneo.
    - **Jugadores:** Para agregar, ver, editar y eliminar jugadores, asociándolos a un equipo.
    - **Partidos:** Para programar y gestionar los partidos, incluyendo fechas y horas.

2.  **Gestión de Datos:** En cada sección de gestión (Equipos, Jugadores, Partidos), encontrarás formularios para añadir nueva información y tablas para visualizar y administrar los datos existentes.

**Ejemplo de Uso:**

- **Agregar un nuevo equipo:** Navega a la sección 'Equipos', completa el nombre y selecciona un color en el formulario, luego haz clic en 'Agregar equipo'.
- **Programar un partido:** Ve a la sección 'Partidos', selecciona los equipos local y visitante, la fecha y la hora, y haz clic en 'Agregar partido'.

---

## 📁 Estructura del Proyecto

El proyecto sigue una estructura organizada para facilitar la modularidad y el mantenimiento:

```text
gestor-torneos-futbol-frontend/
│
├── public/
│   └── img/
│       ├── fondo-index.png
│       ├── fondoEquipos.png
│       ├── fondoJugadores.png
│       ├── fondoPartidos.png
│       ├── logoMejorado.png
│       ├── equipos.png
│       ├── jugadores.png
│       └── partidos.png
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
├── .oxlintrc.json
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## 🔗 Enlaces Importantes

- **URL del Repositorio:** [https://github.com/romanogabrielnicolas-hue/gestor-torneos-futbol-frontend](https://github.com/romanogabrielnicolas-hue/gestor-torneos-futbol-frontend)

---

<footer>
  <p align="center">
    Creado con ❤️ por <a href="https://github.com/romanogabrielnicolas-hue">romano gabriel nicolas</a>
  </p>
  <p align="center">
    <a href="https://github.com/romanogabrielnicolas-hue/gestor-torneos-futbol-frontend/stargazers"><img src="https://img.shields.io/github/stars/romanogabrielnicolas-hue/gestor-torneos-futbol-frontend?style=social" alt="GitHub Stars"></a>
    <a href="https://github.com/romanogabrielnicolas-hue/gestor-torneos-futbol-frontend/forks"><img src="https://img.shields.io/github/forks/romanogabrielnicolas-hue/gestor-torneos-futbol-frontend?style=social" alt="GitHub Forks"></a>
    <a href="https://github.com/romanogabrielnicolas-hue/gestor-torneos-futbol-frontend/issues"><img src="https://img.shields.io/github/issues/romanogabrielnicolas-hue/gestor-torneos-futbol-frontend?style=social" alt="GitHub Issues"></a>
  </p>
</footer>

---

**<p align="center">Generated by [ReadmeCodeGen](https://www.readmecodegen.com/)</p>**
