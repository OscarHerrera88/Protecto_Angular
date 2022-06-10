const mongoose= require("mongoose")
require("dotenv").config({path:"config.env"})

const conectarBaseDeDatos = async() => {
    try {
        await mongoose.connect(process.env.DB_MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("Base de datos se ha conectado")
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}
    module.exports = conectarBaseDeDatos 