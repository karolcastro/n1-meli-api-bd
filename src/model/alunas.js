const mongoose = require('mongoose');


const alunasSchema = new mongoose.Schema({
    nome: { type: String },
    dateOfBirth: { type: String },
    nasceuEmSp: { type: String },
    id: { type: Number },
    livros: [{
        titulo: String,
        leu: String,
    }]
})

const Alunas = mongoose.model('Alunas', alunasSchema);// chama o schema com parametros

module.exports = Alunas; //chama o modulo
