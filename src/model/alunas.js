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