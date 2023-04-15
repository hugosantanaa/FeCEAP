const express = require("express")
const server = express()

const nunjucks = require("nunjucks")
nunjucks.configure("views",{express: server,noCache: true})

//Configurando o servidor express para que ele "enxergue" arquivos estáticos da nossa página
server.use(express.static("public"))

//Criar acesso à raiz do nosso sistema
//A isso daqui chamaremos de: ROTA
//Portanto estamos configurando agora a rota padrão do nosso site:
server.get("/", function(req, res){
    const h1 = "Oi do backend"
    res.render("index.html", {title: h1})
    // res.sendFile(__dirname+"/index.html")
    console.log("Hello do Frontende!!!!")
})

server.get("/projects", function(req, res){
    res.sendFile(__dirname+"/projects.html")
})

server.listen(3000)

//Criar uma rota para a página projects.html


// BACKEND???
// parte de tras do sistema, usuário n tem acesso
// Responsabilidades do backend
// 1 - Receber requisições do usuário (frontend)
// 2 - Devolver respostas ao cliente
// 3 - REGRAS DE NEGÓCIO (lógica de funcionamento do sistema)
// 4 - Dados (tratamento, persistência)

//#1: npm init -y
//#2: npm install 
//#3: npm install nodemon
//#4: npm install nunjucks
