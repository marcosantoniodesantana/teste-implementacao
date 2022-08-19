//Importa o express do node_modules
const express = require("express")
const bodyParser = require("body-parser")

//A variavél app recebe a variavél express
const app = express()

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//Essa linha usa o express para acessar a static e usar o dirname para renderizar uma página no mesmo nível do da página
app.use(express.static(__dirname + '/publico'))

//Essa função define a rota principal e 
app.get('/', function(req, res){
    res.sendFile(__dirname + "/index.html")
})

app.post("/pg", function(req, res){

    
let nome = req.body.nome
    //res.sendFile(__dirname + "/publico/pagina/pagina.html")
    res.send("Seu nome é: " + nome)
})

//app.listen(8080)