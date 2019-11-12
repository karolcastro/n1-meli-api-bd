const express = require("express")
const mongoose = require("mongoose")// faz o require do mongoose
const app = express()

mongoose.connect('mongodb://localhost:27017/reprograma', {useNewUrlParser: true});// para chamar a conexao

//chama o mongo
let db = mongoose.connection;
db.on('error', console.log.bind(console, 'connection error:'))// tenta fazer a conexao e fica de olho caso haja algo errado
db.once('open', function (){ // faz a conexao e se nao mostra o erro
  console.log('conexão feita com sucesso.')// se der certo aparece esta mensagem
})

//rotas
const index = require("./routes/index")
const alunas = require("./routes/alunasRoute")
const professoras = require("./routes/professorasRoute")

app.use(express.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  )
  next()
})

app.use("/", index)
app.use("/alunas", alunas)
app.use("/professoras", professoras)

module.exports = app
