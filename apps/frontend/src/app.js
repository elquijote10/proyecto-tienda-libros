

console.log("JavaScript cargado con éxito");

// Prueba Javascript
const contenedorLibrosDinamicos = document.querySelector('.libros-dinamicos');
const catalogo = document.querySelector('.catalogo');

    // Guardamos el contenido HTML inicial (las portadas)
const contenidoOriginalCatalogo = catalogo.innerHTML;

// Buscamos el enlace "Catálogo" del menú superior
const enlaceCatalogo = document.querySelector('a[href="#catalogo"]') || Array.from(document.querySelectorAll('nav a')).find(a => a.textContent.trim() === 'Catálogo');

// Al hacer clic en "Catálogo", restauramos las portadas
if (enlaceCatalogo) {
  enlaceCatalogo.addEventListener("click", (e) => {
    e.preventDefault();
    catalogo.innerHTML = contenidoOriginalCatalogo;
  });
}

contenedorLibrosDinamicos.addEventListener("click", async () => {
        console.log("Event click funcionando");
        const listaLibros = [
            {
                titulo: "Sangre en el Diván",
                autor: "Ibéyisse Pacheco",
                anio: 2010,
                genero: "Biografía",
                editorial: "Grijalbo",
                resumen: "Crónica periodística sobre el caso del psiquiatra Edmundo Chirinos y su impacto mediático."
            },
            {
                titulo: "La Sabiduría de los Psicópatas",
                autor: "Kevin Dutton",
                anio: 2013,
                genero: "Autoyuda",
                editorial: "Ariel",
                resumen: "Un análisis sobre cómo ciertos rasgos psicopáticos pueden resultar útiles en la vida cotidiana."
            },
              {
                titulo: "Sapiens",
                autor: "Yuval Noah Harari",
                anio: 2014,
                genero: "Historia",
                editorial: "Debate",
                resumen: "Un recorrido fascinante por la historia de la humanidad desde la Edad de Piedra hasta la era moderna"
            },
            {
                titulo: "Donde el Viento da la Vuelta",
                autor: "Jordi Sierra",
                anio: 2020,
                genero: "Narrativa",
                editorial: "Edebe",
                resumen: "Una conmovedora historia ambientada en Guatemala sobre la superación y los derechos de la infancia."
            },
        ];
// se limpia el contenido anterior 
catalogo.innerHTML = "";

// 1Recorremos el arreglo de libros uno por uno
    for (let libro of listaLibros) {
      
//Creamos una etiqueta <article> para estructurar la tarjeta del libro
    const tarjeta = document.createElement("article");
      
//Le asignamos la clase CSS "tarjeta-libro" para heredar sus estilos
    tarjeta.classList.add("tarjeta-libro");

//Inyectamos la estructura HTML interna con el título, datos y botón
    tarjeta.innerHTML = `
        <h3>${libro.titulo}</h3>
        <p><strong>Autor:</strong> ${libro.autor} (${libro.anio})</p>
        <p><strong>Género:</strong> ${libro.genero}
        <p><strong>Editorial:</strong> ${libro.editorial}</p>
        <p class="resumen">${libro.resumen}</p>
        <button>Adquirir Membresia</button>
      `;

//Insertamos la tarjeta completada dentro del catálogo principal
      catalogo.appendChild(tarjeta);
    }
});