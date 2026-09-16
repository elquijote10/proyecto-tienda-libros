

console.log("JavaScript cargado con éxito");


const proyecto = document.getElementById("proyecto");

proyecto.addEventListener("click", () => {
    proyecto.style.color = "white";
    proyecto.textContent = "Este es un proyecto del curso de Fundamentos de la Programación y Desarrollo Web de CODEX, realizado por W. López y C. Puig - Septiembre 2026";
});

// Prueba Javascript
const contenedorLibrosDinamicos = document.querySelector('.libros-dinamicos');
    contenedorLibrosDinamicos.addEventListener("click", async () => {
        console.log("Event click funcionando");
        const listaLibros = [
            {
                titulo: "Sangre en el Diván",
                autor: "Ibéyisse Pacheco",
                anio: 2010,
                genero: "Biografía",
                editorial: "Grijalbo"
            },
            {
                titulo: "La Sabiduría de los Psicópatas",
                autor: "Kevin Dutton",
                anio: 2013,
                genero: "Autoyuda",
                editorial: "Ariel"
            }
        ];
// se limpia el contenido anterior 
contenedorLibrosDinamicos.textContent = " ";
// se recorre el arreglo
for (let libro of listaLibros) {
    const elementoLibro = document.createElement ("p");
    elementoLibro.textContent = `Titulo: ${libro.titulo} - Autor: ${libro.autor} - Año: ${libro.anio} - Género: ${libro.genero} - Editorial: ${libro.editorial}`;
    contenedorLibrosDinamicos.appendChild(elementoLibro);
}
});


/*
// Seleccionamos el elemento mediante su CLASE usando el punto (.)
const contenedorLibrosDinamicos = document.querySelector('.libros-dinamicos');
    contenedorLibrosDinamicos.addEventListener("click", async () => {
    contenedorLibrosDinamicos.textContent = "Cargando lista de libros...";

    try {
    const respuesta = await fetch ("https://jsonplaceholder.typicode.com/users");
    const listaLibros = await respuesta.json ();
    contenedorLibrosDinamicos.textContent = "¡Lista de libros creada!";
    
    for (let libro of listaLibros){
        const elementoLibro = document.createElement ("p");
        elementoLibro.textContent = `Titulo: ${libro.titulo} - Autor: ${libro.autor} - Año: ${libro.anio} - Género: ${libro.genero} - Editorial: ${libro.editorial}`;
        contenedorLibrosDinamicos.appendChild(elementoLibro);
    }
    } catch (error) {
      console.error("Error al obtener lista de libros", error);
      contenedorLibrosDinamicos.textContent = "Error al cargar datos";
    }
    });
*/


