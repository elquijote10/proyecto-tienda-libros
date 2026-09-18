
Aplicación web desarrollada como proyecto académico que permite visualizar un catálogo de libros desde una interfaz web y gestionar la información mediante una API REST construida con Node.js y Express.

🚀 Tecnologías utilizadas
Frontend
HTML5
CSS3
JavaScript
Backend
Node.js
Express
CORS

Estructura del proyecto
proyecto-tienda-libros/
│
├── frontend/
│   ├── index.html
│   ├── styles.css
│   └── app.js
│
├── backend/
│   ├── app.js
│   ├── controllers/
│   │   └── librosController.js
│   └── routes/
│       └── librosRoutes.js
│
└── README.md
🎯 Funcionalidades
Frontend
Página principal de la tienda.
Visualización de libros mediante tarjetas.
Navegación entre secciones.
Carga dinámica de información usando JavaScript.
Diseño responsive utilizando Flexbox.
Backend
Implementación de una API REST para la gestión de libros.

Operaciones disponibles:

Obtener todos los libros.
Obtener un libro por ID.
Crear un nuevo libro.
Actualizar un libro existente.
Eliminar un libro.
⚙️ Instalación
Clonar el repositorio:

git clone https://github.com/elquijote10/proyecto-tienda-libros.git
Entrar en la carpeta del backend:

cd proyecto-tienda-libros/apps/backend
Instalar dependencias:

npm install
▶️ Ejecución
Iniciar el servidor:

node app.js
Si todo funciona correctamente se mostrará:

Servidor iniciado en puerto 3000
🔗 Endpoints disponibles
Obtener todos los libros
GET /api/libros
Obtener libro por ID
GET /api/libros/:id
Crear libro
POST /api/libros
Actualizar libro
PUT /api/libros/:id
Eliminar libro
DELETE /api/libros/:id
📖 Libros incluidos
Sangre en el Diván
La Sabiduría de los Psicópatas
Sapiens
Donde el Viento da la Vuelta
Autores Wilson López y Cristián Puig

🔗 Repositorio
Agregar aquí el enlace público de GitHub:

https://github.com/elquijote10/proyecto-tienda-libros