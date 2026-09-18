
const express = require("express");
const cors = require("cors");
const app = express();
const librosRoutes = require ("./routes/librosRoutes");
app.use(cors());
app.use (express.json());
app.use("/api/libros", librosRoutes);

app.get("/", (req, res) => {
res.send("Servidor funcionando correctamente");
});

app.listen(3000, () => {
console.log("Servidor iniciado en puerto 3000");
});

