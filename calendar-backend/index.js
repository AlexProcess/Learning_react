const express = require("express");
require("dotenv").config();
const cors = require("cors");
const { dbConnection } = require("./db/config");
//Crear el servidor de express

const app = express();
dbConnection();

//DATABASE

//Directorio publico
app.use(express.static("public"));

//lectura y parseo del body

app.use(express.json());

//RUTAS
app.use("/api/auth", require("./routes/auth"));
app.use("/api/events", require("./routes/events"));
//TODO: CRUD: EVENTOS

//Escuchar peticiones
app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});
