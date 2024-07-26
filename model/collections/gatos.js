const mongoose = require('mongoose')
 
const gatoSchema = new mongoose.Schema(
    {
        //estructura del objeto, propiedades y tipos de datos
        id:{
            type: mongoose.Types.ObjectId
        },
        name: {
            type: String
        },
        url: {
            type: String
        }
    },
    {
        //marcas de tiempo
        timestamps: true,
        versionKey: false
    }
)
 
module.exports = mongoose.model('gatos', gatoSchema)
