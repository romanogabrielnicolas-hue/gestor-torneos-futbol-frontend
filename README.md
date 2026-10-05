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

</div>

---

## 📋 Descripción

Este proyecto es la versión frontend de un gestor de torneos de fútbol, desarrollado utilizando **React** y **Vite**.

Corresponde al **Repositorio N.º 2** y consiste en la migración progresiva del proyecto anterior a React, incorporando componentes reutilizables, React Bootstrap, Bootstrap Icons, React Router y estilos personalizados.

La aplicación permite administrar **equipos, jugadores y partidos** mediante una interfaz visual y responsive.

---

## 📝 Tabla de Contenido

- [⚽ Proyecto](#-proyecto)
- [✨ Características](#-características)
- [🧩 Componentes](#-componentes)
- [🧠 JavaScript y React](#-javascript-y-react)
- [📦 Props](#-props)
- [🧭 Navegación](#-navegación)
- [🎨 Diseño](#-diseño)
- [📱 Diseño Responsive](#-diseño-responsive)
- [🛠️ Tecnologías Utilizadas](#️-tecnologías-utilizadas)
- [🗄️ Base de Datos](#️-base-de-datos)
- [🚀 Instalación](#-instalación)
- [💻 Uso](#-uso)
- [📁 Estructura del Proyecto](#-estructura-del-proyecto)
- [🔎 SEO](#-seo)
- [🌐 Deploy](#-deploy)
- [🔗 Enlaces Importantes](#-enlaces-importantes)

---

## ⚽ Proyecto

Este proyecto corresponde al **Repositorio N.º 2** del trabajo práctico.

Se realizó una migración del proyecto anterior, desarrollado con HTML, CSS y JavaScript, hacia una aplicación utilizando **React + Vite**.

Durante la migración se mantuvo el diseño general del proyecto y se incorporaron nuevas funcionalidades y componentes reutilizables.

---

## ✨ Características

### 🏠 Inicio

Página principal del sistema con acceso visual a las diferentes funcionalidades del gestor.

Desde esta sección se puede acceder a:

- Gestión de Equipos.
- Gestión de Jugadores.
- Gestión de Partidos.

### ⚽ Equipos

- Registrar equipos.
- Seleccionar el color del equipo.
- Visualizar los equipos registrados.
- Editar equipos.
- Eliminar equipos.
- Botón para volver al inicio.

### 👤 Jugadores

- Registrar jugadores.
- Asociar jugadores a un equipo.
- Visualizar los jugadores registrados.
- Editar jugadores.
- Eliminar jugadores.
- Botón para volver al inicio.

### 📅 Partidos

- Registrar partidos.
- Seleccionar equipo local y visitante.
- Registrar fecha, hora y cancha.
- Visualizar los partidos registrados.
- Editar partidos.
- Eliminar partidos.
- Botón para volver al inicio.

---

## 🧩 Componentes

El proyecto utiliza componentes reutilizables para organizar mejor la aplicación.

Entre los componentes desarrollados se encuentran:

- `Navbar`
- `Footer`
- `BotonAgregar`
- `BotonEditar`
- `BotonEliminar`
- `LogoTexto`

Los componentes de botones permiten reutilizar diferentes estilos y acciones dentro de las páginas de gestión.

Los componentes también utilizan **props** para recibir información y funciones desde los componentes padres.

También se utiliza `styled-components` para algunos componentes personalizados.

---

## 🧠 JavaScript y React

Para manejar la información de la aplicación se utiliza **React Hooks**, principalmente `useState`.

Se implementaron funcionalidades para:

- Agregar registros.
- Editar registros.
- Eliminar registros.
- Actualizar información.
- Controlar formularios.
- Manejar la navegación entre páginas.
- Mostrar dinámicamente los datos registrados.

Para trabajar con los datos se utilizan métodos de JavaScript como:

- `map()`
- `filter()`

El método `map()` permite recorrer las listas y generar dinámicamente los elementos de las tablas.

---

## 📦 Props

El proyecto utiliza **props** para enviar información y funciones entre componentes.

Por ejemplo, `BotonAgregar` recibe las props:

- `texto`
- `onClick`

Mientras que `BotonEditar` y `BotonEliminar` reciben:

- `onClick`

Ejemplo:

```jsx
<BotonEliminar onClick={() => eliminarEquipo(equipo.id)} />
```

Esto permite que los componentes de botones sean reutilizables y que cada página pueda indicar qué acción debe realizarse.

---

## 🧭 Navegación

La aplicación cuenta con una barra de navegación que permite acceder a las diferentes secciones:

- Inicio
- Equipos
- Jugadores
- Partidos

También se incorporó el botón **"Volver a Inicio"** en las páginas de gestión.

La navegación se realiza utilizando **React Router**, permitiendo cambiar entre las diferentes páginas sin recargar completamente la aplicación.

### Rutas principales

| Ruta         | Página    |
| ------------ | --------- |
| `/`          | Inicio    |
| `/equipos`   | Equipos   |
| `/jugadores` | Jugadores |
| `/partidos`  | Partidos  |

Las rutas se encuentran organizadas en:

```text
src/routes/AppRoutes.jsx
```

Se utilizan componentes `Link` para realizar la navegación entre las diferentes páginas.

---

## 🎨 Diseño

Se mantuvo parte del diseño visual del proyecto anterior y se adaptó a React.

Se incorporaron:

- Fondos personalizados.
- Logo del proyecto.
- Imágenes para cada sección.
- Tarjetas.
- Botones personalizados.
- Bootstrap Icons.
- Efectos visuales.
- Estilos CSS personalizados.
- Componentes de React Bootstrap.

El diseño responsive se realiza principalmente utilizando las clases de **Bootstrap**.

También se utiliza **React Bootstrap** mediante componentes como `Button`.

---

## 📱 Diseño Responsive

Se utilizan clases de Bootstrap para adaptar la interfaz a diferentes tamaños de pantalla.

Algunas de las clases utilizadas son:

- `col-12`
- `col-md-4`
- `navbar-expand-lg`
- `navbar-toggler`
- `table-responsive`
- `img-fluid`

De esta manera, la aplicación puede adaptarse a computadoras, tablets y dispositivos móviles.

---

## 🛠️ Tecnologías Utilizadas

- **React**
- **Vite**
- **JavaScript**
- **React Bootstrap**
- **Bootstrap**
- **Bootstrap Icons**
- **React Router**
- **CSS3**
- **styled-components**
- **MySQL / MariaDB**
- **Git**
- **GitHub**
- **Vercel**

---

## 🗄️ Base de Datos

Se preparó una base de datos utilizando **MySQL / MariaDB** para almacenar la información del gestor de torneos.

La base de datos se llama:

```text
gestor_torneos
```

Cuenta con las siguientes tablas:

- `equipos`
- `jugadores`
- `partidos`

Las tablas se encuentran relacionadas mediante claves foráneas.

La estructura de la base de datos se encuentra en:

```text
base-datos/gestor_torneos.sql
```

La base de datos contiene datos de ejemplo para mostrar la estructura y las relaciones entre las tablas.

Actualmente la base de datos se encuentra preparada, pero **todavía no está conectada con la aplicación React**.

---

## 🚀 Instalación

Para ejecutar el proyecto localmente se deben seguir los siguientes pasos.

### 1. Clonar el repositorio

```bash
git clone https://github.com/romanogabrielnicolas-hue/gestor-torneos-futbol-frontend.git
```

Luego ingresar a la carpeta:

```bash
cd gestor-torneos-futbol-frontend
```

### 2. Instalar las dependencias

```bash
npm install
```

### 3. Iniciar el servidor de desarrollo

```bash
npm run dev
```

El proyecto se ejecutará en la dirección indicada por Vite, normalmente:

```text
http://localhost:5173
```

---

## 💻 Uso

La aplicación permite gestionar diferentes elementos de un torneo de fútbol.

### Navegación

Desde la barra de navegación se puede acceder a:

- **Inicio:** página principal.
- **Equipos:** administración de equipos.
- **Jugadores:** administración de jugadores.
- **Partidos:** administración de partidos.

### Gestión de datos

En cada sección se dispone de un formulario para agregar información y una tabla para visualizar los registros.

También se pueden realizar acciones como:

- Editar.
- Eliminar.
- Volver al inicio.

### Ejemplo

Para agregar un equipo:

1. Ingresar a **Equipos**.
2. Escribir el nombre del equipo.
3. Seleccionar un color.
4. Presionar **Agregar equipo**.

Para modificarlo se utiliza el botón **Editar** y para eliminarlo el botón **Eliminar**.

---

## 📁 Estructura del Proyecto

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
│       ├── inicio.png
│       ├── equipos.png
│       ├── jugadores.png
│       └── partidos.png
│
├── base-datos/
│   └── gestor_torneos.sql
│
├── src/
│   ├── components/
│   │   ├── navbar.jsx
│   │   ├── footer.jsx
│   │   ├── BotonAgregar.jsx
│   │   ├── BotonEditar.jsx
│   │   ├── BotonEliminar.jsx
│   │   ├── FooterCard.jsx
│   │   └── LogoTexto.jsx
│   │
│   ├── pages/
│   │   ├── Inicio.jsx
│   │   ├── Equipos.jsx
│   │   ├── Jugadores.jsx
│   │   └── Partidos.jsx
│   │
│   ├── routes/
│   │   └── AppRoutes.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
│
├── .oxlintrc.json
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

---

## 🔎 SEO

Se mantienen estrategias de SEO On-Page utilizadas en el proyecto anterior.

Entre ellas:

- Títulos descriptivos.
- Meta descripción.
- Meta viewport.
- Atributos `alt` en las imágenes.
- Uso de etiquetas semánticas.
- Estructura organizada del contenido.
- Diseño responsive.

---

## 🌐 Deploy

El proyecto fue preparado para realizar el deploy utilizando **Vercel**.

También se realizaron pruebas de compilación utilizando:

```bash
npm run build
```

---

## 🔗 Enlaces Importantes

- **Repositorio en GitHub:**  
  https://github.com/romanogabrielnicolas-hue/gestor-torneos-futbol-frontend

- **Proyecto desplegado:**  
  https://gestor-torneos-futbol-frontend.vercel.app/

---

<div align="center">

Creado con ❤️ por **Romano Gabriel Nicolas**

</div>
