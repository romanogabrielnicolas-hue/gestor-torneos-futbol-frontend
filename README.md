<div align="center">

<img src="./public/img/logoMejorado.png" width="190" alt="Logo Gestor de Torneos">

# Gestor de Torneos de Fútbol Murak

### React + Vite + React Bootstrap + Axios + JSON Server

Aplicación web para administrar equipos, jugadores y partidos de un torneo de fútbol. Esta versión corresponde a la migración progresiva del proyecto anterior a React e incorpora componentes reutilizables, consumo de una API HTTP y diseño adaptable a dispositivos móviles.

<br>

![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Axios](https://img.shields.io/badge/Axios-671DDF?style=for-the-badge&logo=axios&logoColor=white)
![JSON Server](https://img.shields.io/badge/JSON_Server-323330?style=for-the-badge&logo=json&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)

</div>

---

## 📋 Descripción

Este proyecto es una aplicación web para gestionar la información de un torneo de fútbol. Está desarrollado con **React y Vite**, y organiza la interfaz mediante páginas y componentes reutilizables.

La aplicación consume una API HTTP utilizando **Axios**. En el entorno de desarrollo, la API se ejecuta con **JSON Server** y utiliza `db.json` como archivo de datos.

El sistema permite administrar tres recursos principales: **equipos, jugadores y partidos**.

## 🌐 Demo online

- **Aplicación web:** [Gestor de Torneos de Fútbol Murak](https://gestor-torneos-futbol-frontend.vercel.app/)
- **API de equipos:** [Consultar equipos](https://gestor-torneos-futbol-frontend.onrender.com/equipos)
- **API de jugadores:** [Consultar jugadores](https://gestor-torneos-futbol-frontend.onrender.com/jugadores)
- **API de partidos:** [Consultar partidos](https://gestor-torneos-futbol-frontend.onrender.com/partidos)

El frontend está publicado en **Vercel** y la API está publicada en **Render**.

> **Importante:** esta versión está destinada a demostraciones. JSON Server utiliza el archivo `db.json`; en un servicio de alojamiento gratuito, los cambios guardados en el sistema de archivos local pueden perderse cuando la instancia se reinicia o vuelve a desplegarse. No se recomienda utilizar esta configuración para información importante o permanente.

---

## 📝 Tabla de contenido

- [⚽ Proyecto](#-proyecto)
- [✨ Características](#-características)
- [🧩 Componentes](#-componentes)
- [🧠 JavaScript y React](#-javascript-y-react)
- [📦 Props](#-props)
- [🧭 Navegación](#-navegación)
- [🎨 Diseño](#-diseño)
- [📱 Diseño responsive](#-diseño-responsive)
- [🛠️ Tecnologías utilizadas](#️-tecnologías-utilizadas)
- [🗄️ Datos y API](#️-datos-y-api)
- [🚀 Instalación](#-instalación)
- [💻 Uso](#-uso)
- [📁 Estructura del proyecto](#-estructura-del-proyecto)
- [🔎 SEO](#-seo)
- [🌐 Despliegue](#-despliegue)
- [🔗 Enlaces importantes](#-enlaces-importantes)

---

## ⚽ Proyecto

Este proyecto corresponde al **Repositorio N.º 2** del trabajo práctico y consiste en la migración progresiva del gestor anterior, desarrollado con HTML, CSS y JavaScript, hacia **React + Vite**.

Durante la migración se mantuvo el estilo visual general y se incorporaron componentes reutilizables, navegación entre páginas y conexión con una API HTTP.

## ✨ Características

### 🏠 Inicio

- Página principal con acceso a las secciones de Equipos, Jugadores y Partidos.
- Tarjetas e imágenes para acceder a las funciones del gestor.

### ⚽ Equipos

- Registrar equipos y seleccionar su color.
- Consultar, editar y eliminar equipos.
- Validar que no se repitan los nombres, ignorando diferencias entre mayúsculas y minúsculas.
- Consultar la cantidad de jugadores de cada equipo.
- Ver los nombres, números de camiseta y posiciones de sus jugadores.
- Eliminar en cascada: al eliminar un equipo también se eliminan los jugadores asociados y los partidos en los que participa.
- Actualizar las referencias de jugadores y partidos cuando se cambia el nombre del equipo.

### 👤 Jugadores

- Registrar jugadores con nombre, DNI, edad, posición, equipo y número de camiseta.
- Asociar cada jugador con un equipo.
- Consultar, editar y eliminar jugadores.

### 📅 Partidos

- Registrar partidos seleccionando equipo local y equipo visitante.
- Guardar fecha, hora y cancha.
- Consultar, editar y eliminar partidos.
- Validar que el equipo local y el visitante no sean el mismo.

### ✅ Mensajes y validaciones

- Formularios con validación de campos obligatorios.
- Alertas de confirmación, éxito y error con SweetAlert2.
- Manejo de estados de carga y errores en las peticiones a la API.

---

## 🧩 Componentes

La aplicación utiliza componentes reutilizables para organizar la interfaz y reducir la repetición de código. Entre ellos:

- `Navbar`: navegación principal.
- `Footer`: pie de página.
- `FooterCard`: tarjeta visual del footer, con estilos propios.
- `LogoTexto`: texto animado del logotipo.
- `BotonAgregar`: botón reutilizable para agregar registros.
- `BotonEditar`: botón reutilizable para editar registros.
- `BotonEliminar`: botón reutilizable para eliminar registros.

Los componentes reciben información y funciones mediante **props**. Algunos componentes personalizados utilizan `styled-components`.

## 🧠 JavaScript y React

La aplicación utiliza Hooks de React, entre ellos `useState` y `useEffect`, para gestionar estados y cargar información desde la API.

Se utilizan métodos de JavaScript como:

- `map()` para recorrer registros y mostrar filas de las tablas.
- `filter()` para encontrar, filtrar o retirar registros.
- `some()` para comprobar si ya existe un equipo con el mismo nombre.

Las solicitudes HTTP se realizan con Axios usando métodos como `GET`, `POST`, `PUT`, `PATCH` y `DELETE`, según la operación.

## 📦 Props

Los componentes de botones reciben propiedades para personalizar su texto y ejecutar acciones.

Por ejemplo:

```jsx
<BotonEliminar onClick={() => eliminarEquipo(equipo.id)} />
```

En este caso, `onClick` permite que la página indique qué acción se ejecutará al pulsar el botón.

## 🧭 Navegación

La navegación entre páginas se realiza con **React Router**, sin necesidad de recargar completamente la aplicación.

| Ruta         | Página    |
| ------------ | --------- |
| `/`          | Inicio    |
| `/equipos`   | Equipos   |
| `/jugadores` | Jugadores |
| `/partidos`  | Partidos  |
| `/NotFound`  | Error404  |

Las rutas se organizan en `src/routes/AppRoutes.jsx`.

---

## 🎨 Diseño

El diseño combina React Bootstrap, clases de Bootstrap y estilos CSS personalizados. Incluye:

- Fondos e imágenes propios del proyecto.
- Tarjetas para las secciones principales.
- Botones personalizados.
- Iconos de Bootstrap Icons.
- Efectos visuales y una tarjeta animada en el footer.

## 📱 Diseño responsive

Se utilizan clases de Bootstrap para adaptar la interfaz a distintas pantallas, por ejemplo `col-12`, `col-md-*`, `table-responsive` e `img-fluid`.

Se realizaron ajustes para mejorar la visualización en computadoras, tablets y dispositivos móviles.

## 🛠️ Tecnologías utilizadas

| Tecnología        | Uso                                  |
| ----------------- | ------------------------------------ |
| React             | Interfaz y componentes               |
| Vite              | Servidor de desarrollo y compilación |
| JavaScript        | Lógica de la aplicación              |
| Axios             | Peticiones HTTP a la API             |
| JSON Server       | API REST de demostración             |
| `db.json`         | Datos utilizados por JSON Server     |
| React Bootstrap   | Componentes de interfaz              |
| Bootstrap 5       | Estilos y utilidades responsive      |
| Bootstrap Icons   | Iconografía                          |
| React Router      | Navegación entre páginas             |
| SweetAlert2       | Alertas y confirmaciones             |
| styled-components | Estilos encapsulados de componentes  |
| CSS3              | Estilos personalizados               |
| Git y GitHub      | Control de versiones y repositorio   |
| Vercel            | Despliegue del frontend              |
| Render            | Despliegue de la API                 |

---

## 🗄️ Datos y API

La versión actual del gestor utiliza **JSON Server** para exponer una API HTTP. Los datos se encuentran en `db.json` y se agrupan en tres colecciones:

- `equipos`
- `jugadores`
- `partidos`

### Rutas locales

| Recurso   | URL local                         |
| --------- | --------------------------------- |
| Equipos   | `http://localhost:3000/equipos`   |
| Jugadores | `http://localhost:3000/jugadores` |
| Partidos  | `http://localhost:3000/partidos`  |

### Operaciones HTTP

- `GET`: consultar registros.
- `POST`: agregar registros.
- `PUT` o `PATCH`: actualizar registros.
- `DELETE`: eliminar registros.

### Base de datos SQL anterior

El repositorio también conserva el archivo `base-datos/gestor_torneos.sql`, que corresponde a una estructura SQL preparada en una etapa el cual se conecte mediante el backend. **La aplicación actual no se conecta a MySQL/MariaDB**: utiliza JSON Server y `db.json`.

### Variables de entorno locales

Crear un archivo `.env` en la raíz del proyecto con el siguiente contenido:

```env
VITE_EQUIPOS_API_URL=http://localhost:3000/equipos
VITE_JUGADORES_API_URL=http://localhost:3000/jugadores
VITE_PARTIDOS_API_URL=http://localhost:3000/partidos
```

El archivo `.env` no debe subirse al repositorio. Se encuentra excluido por `.gitignore`.

---

## 🚀 Instalación

### Requisitos

- Node.js y npm.
- Git para clonar el repositorio.

### 1. Clonar el repositorio

```bash
git clone https://github.com/romanogabrielnicolas-hue/gestor-torneos-futbol-frontend.git
cd gestor-torneos-futbol-frontend
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Configurar las variables de entorno

Crear el archivo `.env` en la raíz con las tres URL locales indicadas en la sección [Datos y API](#️-datos-y-api).

### 4. Iniciar JSON Server

En una terminal, ejecutar:

```bash
npm run api
```

La API local estará disponible en `http://localhost:3000`.

### 5. Iniciar React con Vite

Abrir una segunda terminal en la carpeta del proyecto y ejecutar:

```bash
npm run dev
```

Vite indicará la URL local de la aplicación, normalmente `http://localhost:5173`.

Para usar el sistema localmente deben permanecer activos tanto Vite como JSON Server.

### 6. Crear la compilación de producción

```bash
npm run build
```

Vite genera los archivos listos para publicar en la carpeta `dist`.

---

## 💻 Uso

Desde la barra de navegación se puede acceder a Inicio, Equipos, Jugadores y Partidos.

### Ejemplo: agregar un equipo

1. Entrar en **Equipos**.
2. Escribir el nombre del equipo.
3. Seleccionar un color.
4. Pulsar **Agregar equipo**.

Después se puede editar el registro, consultar sus jugadores o eliminarlo. La eliminación de un equipo también elimina sus jugadores y partidos asociados.

---

## 📁 Estructura del proyecto

```text
gestor-torneos-futbol-frontend/
├── base-datos/
│   └── gestor_torneos.sql
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
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── FooterCard.jsx
│   │   ├── LogoTexto.jsx
│   │   ├── BotonAgregar.jsx
│   │   ├── BotonEditar.jsx
│   │   └── BotonEliminar.jsx
│   ├── pages/
│   │   ├── Inicio.jsx
│   │   ├── Equipos.jsx
│   │   ├── Jugadores.jsx
│   │   └── Partidos.jsx
│   ├── routes/
│   │   └── AppRoutes.jsx
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── db.json
├── .env                  # Crear localmente; no subir a GitHub
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── vercel.json
├── vite.config.js
└── README.md
```

---

## 🔎 SEO

La página incluye elementos básicos de SEO y accesibilidad, como título de documento, meta viewport, texto alternativo en imágenes y una estructura de contenido organizada. Estos elementos pueden seguir mejorándose según las necesidades del proyecto.

## 🌐 Despliegue

### Frontend en Vercel

El frontend está publicado en:

https://gestor-torneos-futbol-frontend.vercel.app/

En la configuración de Vercel deben definirse estas variables de entorno para producción, usando la URL pública de Render:

```env
VITE_EQUIPOS_API_URL=https://gestor-torneos-futbol-frontend.onrender.com/equipos
VITE_JUGADORES_API_URL=https://gestor-torneos-futbol-frontend.onrender.com/jugadores
VITE_PARTIDOS_API_URL=https://gestor-torneos-futbol-frontend.onrender.com/partidos
```

Después de modificar las variables de entorno, se debe volver a desplegar el frontend para que Vite las incorpore en la compilación.

### API en Render

La API está publicada en:

https://gestor-torneos-futbol-frontend.onrender.com/

Rutas disponibles:

- `/equipos`
- `/jugadores`
- `/partidos`

En el plan gratuito, el servicio puede tardar en responder después de un período de inactividad. Además, JSON Server no sustituye una base de datos persistente: los cambios del archivo local pueden perderse al reiniciar o volver a desplegar el servicio.

La API de demostración no implementa autenticación y es pública. No se deben cargar datos sensibles ni utilizarla como almacenamiento permanente.

---

## ✅ Comprobaciones realizadas

- Compilación de producción con `npm run build`.
- Operaciones CRUD de equipos, jugadores y partidos.
- Validación de nombres de equipos duplicados.
- Actualización de las referencias a equipos al cambiar el nombre.
- Eliminación en cascada de equipos y registros relacionados.
- Consulta de jugadores por equipo.
- Revisión visual del diseño en dispositivos móviles.

---

## 🔗 Enlaces importantes

- **Repositorio en GitHub:** [gestor-torneos-futbol-frontend](https://github.com/romanogabrielnicolas-hue/gestor-torneos-futbol-frontend)
- **Aplicación web:** [Vercel](https://gestor-torneos-futbol-frontend.vercel.app/)
- **API de equipos:** [Render](https://gestor-torneos-futbol-frontend.onrender.com/equipos)
- **API de jugadores:** [Render](https://gestor-torneos-futbol-frontend.onrender.com/jugadores)
- **API de partidos:** [Render](https://gestor-torneos-futbol-frontend.onrender.com/partidos)

---

<div align="center">

Creado con ❤️ por **Romano Gabriel Nicolas**

</div>
