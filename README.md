<h1 align="center">Proyecto MERN 🚀</h1>

![Demo App](/frontend/public/mockup.png)

Este es un proyecto basado en la arquitectura MERN (MongoDB, Express, React, Node.js).

## Estructura del Proyecto

```bash
mern/
├── .env
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   └── product.controller.js
│   ├── models/
│   │   └── product.model.js
│   ├── routes/
│   │   └── product.route.js
│   └── server.js
├── frontend/
│   ├── .gitignore
│   ├── eslint.config.js
│   ├── index.html
│   ├── package.json
│   ├── postcss.config.js
│   ├── public/
│   ├── README.md
│   ├── src/
│   │   ├── App.jsx
│   │   ├── components/
│   │   │   ├── Modal.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── ProductCard.jsx
│   │   │   └── Toast.jsx
│   │   ├── index.css
│   │   ├── main.jsx
│   │   ├── pages/
│   │   │   ├── CreatePage.jsx
│   │   │   └── HomePage.jsx
│   │   └── store/
│   │       └── product.js
│   ├── tailwind.config.js
│   └── vite.config.js
├── package.json
```


## Instalación

### Setup .env file

```shell
MONGO_URI=your_mongo_uri
PORT=5000
```

### Run this app locally

```shell
npm run build
```

### Start the app

```shell
npm run start
```

## Estructura de Carpetas

- **backend/config**: Configuración de la base de datos.
- **backend/controllers**: Controladores de la API.
- **backend/models**: Modelos de la base de datos.
- **backend/routes**: Rutas de la API.
- **frontend/src/components**: Componentes reutilizables de React.
- **frontend/src/pages**: Páginas de la aplicación.
- **frontend/src/store**: Estado global de la aplicación.