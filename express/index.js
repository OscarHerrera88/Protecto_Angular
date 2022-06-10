//console.log('Hola gente')

const { application } = require("express");
const express = require("express");
const conectarBaseDeDatos = require("./config/db")
const cors = require("cors")

const app = express();
conectarBaseDeDatos();
app.use(cors());
app.use(express.json());

app.use("/api",require("./routes/proyecto_rutas"))

app.listen(4000, () =>{
    console.log("el servidor ya se esta ejecutando hoy martes 24 de mayo en la nocheeeee")
}
)