// arreglo de libros
const libros = [
    {
        id: 0,
        titulo: "Sangre en el Diván",
        autor: "Ibéyisse Pacheco",
        anio: 2010,
        genero: "Biografía",
        editorial: "Grijalbo",
        precio: 25,
    },
    {
        id: 1,
        titulo: "La Sabiduría de los Psicópatas",
        autor: "Kevin Dutton",
        anio: 2013,
        genero: "Autoyuda",
        editorial: "Ariel",
        precio: 30,
    },
    {
        id: 2,
        titulo: "Sapiens",
        autor: "Yuval Noah Harari",
        anio: 2011,
        genero: "No ficción",
        editorial: "Debate",
        precio: 30,
    },
    {
        id: 3,
        titulo: "Donde el Viento da la Vuelta",
        autor: "Jordi Sierra i Fabra",
        anio: 2005,
        genero: "Literatura juvenil",
        editorial: "Edebé",
        precio: 15,
    }
];

// 1. Obtiene y retorna la lista completa de libros
// Corresponde a la ruta GET /api/libros
const obtenerLibros = (req,res) => {
    res.json(libros);
}

//2. Obtiene un solo libro por su ID
// GET /api/libros/:id
const obtenerLibroPorId = (req,res) => {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
        return res.status(400).json({error: "ID inválido"});
    }
    const libro = libros.find((c) => c.id === id);
    if (libro){
        res.json(libro);
    } else {
        res.status(404).json({error: "Libro no encontrado"});
    }
};

//3. Crea un nuevo libro y lo agrega al arreglo en memoria 
// Corresponde a la ruta POST /api/libros
const crearLibro = (req,res) => {
    const {titulo, autor, anio, genero, editorial, precio} = req.body;

    // Validar que titulo sea un texto y que no esté vacío 
    if (typeof titulo !== "string" || titulo.trim()===""){
        return res.status(400).json({
            error: "El título del libro es obligatorio y debe ser un texto"
        });
    }
    // Validar que autor sea un texto y no esté vacío 
    if (typeof autor !== "string" || autor.trim()===""){
        return res.status(400).json({
            error: "El autor del libro es obligatorio y debe ser un texto"
        });
    }
    // Validar que anio sea un número
    if (typeof anio !== "number" || anio < 1900) {
        return res.status(400).json ({
            error: "El año debe ser un número mayor o igual a 1900"
        });
    }
    // Validar que genero sea un texto y que no esté vacío 
    if (typeof genero !== "string" || genero.trim()===""){
        return res.status(400).json({
            error: "El nombre del genero es obligatorio y debe ser un texto"
        });
    }
    // Validar que editorial sea un texto y que no esté vacío
    if (typeof editorial !== "string" || editorial.trim()===""){
        return res.status(400).json({
            error: "El nombre de la editorial es obligatorio y debe ser un texto"
        });
    }
    // Validar que precio sea un número
    if (typeof precio !== "number" || precio <= 0) {
         return res.status(400).json ({
            error: "El precio debe ser un número mayor a 0"
        });
    }

    const nuevoId = libros.length > 0 ? libros[libros.length-1].id + 1 : 0;
    const nuevoLibro = {
        id: nuevoId,
        titulo,
        autor,
        anio,
        genero,
        editorial,
        precio,
    };
    libros.push(nuevoLibro);
    res.status(201).json(nuevoLibro);
};

// 4. Actualizar los datos de un libro existente identificandolo por su ID en la URL
// Corresponde a la ruta PUT /api/libros/:id 

const actualizarLibro = (req,res) => {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
        return res.status(400).json({error: "ID inválido"});
    }
    const libro = libros.find((l) => l.id === id);
    if (!libro) {
        return res.status(404).json({
            error: "Libro no encontrado"
        });
    }
    const {titulo, autor, anio, genero, editorial, precio} = req.body;

    // Validar que titulo sea un texto y que no esté vacío 
    if (typeof titulo !== "string" || titulo.trim()===""){
        return res.status(400).json({
            error: "El título del libro es obligatorio y debe ser un texto"
        });
    }
    // Validar que autor sea un texto y no esté vacío 
    if (typeof autor !== "string" || autor.trim()===""){
        return res.status(400).json({
            error: "El autor del libro es obligatorio y debe ser un texto"
        });
    }
    // Validar que anio sea un número
    if (typeof anio !== "number" || anio < 1900) {
        return res.status(400).json ({
            error: "El año debe ser un número mayor o igual a 1900"
        });
    }
    // Validar que genero sea un texto y que no esté vacío 
    if (typeof genero !== "string" || genero.trim()===""){
        return res.status(400).json({
            error: "El nombre del genero es obligatorio y debe ser un texto"
        });
    }
    // Validar que editorial sea un texto y que no esté vacío
    if (typeof editorial !== "string" || editorial.trim()===""){
        return res.status(400).json({
            error: "El nombre de la editorial es obligatorio y debe ser un texto"
        });
    }
    // Validar que precio sea un número
    if (typeof precio !== "number" || precio <= 0) {
         return res.status(400).json ({
            error: "El precio debe ser un número mayor a 0"
        });
    }
libro.titulo = titulo;
libro.autor = autor;
libro.anio = anio;
libro.genero = genero;
libro.editorial = editorial;
libro.precio = precio;
res.json(libro);
}

// 5. Eliminar un libro existente del arreglo por su ID
// Corresponde a la ruta DELETE /api/libros/:id

const eliminarLibro = (req, res) => {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
        return res.status(400).json({error: "ID inválido"});
    }
const indice = libros.findIndex((c) => c.id === id);
if (indice === -1) {
    return res.status(404).json({
        error: "Libro no encontrado"
    });
}
libros.splice(indice,1);
res.status(204).send();
};

module.exports = {
   obtenerLibros,
   obtenerLibroPorId,
   crearLibro,
   actualizarLibro,
   eliminarLibro, 
};

