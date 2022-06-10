const mongoose= require("mongoose");

const contactoSchema = mongoose.Schema({
    correo:{
        type: String,
        require: true
    },
    nombre: {
        type: String,
        require: true
    },
    celular: {
        type: Number,
        require: true
    }, 
    mensaje:{
        type: String,
        require: true

    }, 
    fec_cre:{ 
        type: Date,
        default:Date.now()
    }
})

module.exports =mongoose.model("contacto", contactoSchema)