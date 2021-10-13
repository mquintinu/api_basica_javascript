/* >>> Dependências: 
 npm init -y
 npm install express
 npm install nodemon
 > No arquivo package.json, colocar: 
    "scripts": { "start": "nodemon src/index.js"},
 npm start
*/


// Importa o express, que é uma biblioteca para criar um server
const express = require('express')
// Instanciando o objeto do express em uma variável
const app = express();
// Ler json
app.use(express.json());
// Ouvir uma porta no seu localhost
app.listen(8000);

let vnTeste;

function fnTeste(request, response, next){

    const {nome, idade} = request.body;
    return response.status(201).send("Nome = " + nome + "; Idade = " + idade + "; Passei pela função");
    return next();
}

// Método GET, chamar no navegador por exemplo assim: http://localhost:8000/[cod_produto]
app.get("/:get_seqproduto,:get_name", (request, response) => {

    const {get_seqproduto} = request.params;
    const {get_name} = request.params;
    return response.send("seqproduto = " + get_seqproduto + " Nome: " + get_name);    
})

//Método POST, enviar no Postman por exemplo com o seguinte Json: { "nome": "Mateus Quintino", "idade": "26"}
app.post("/teste", (request, response) => {

    const {nome, idade} = request.body;
    console.log(request.body);    

    return response.status(201).send("Nome = " + nome + " Idade = " + idade + "; Não passei pela função");
})

// POST, chamando uma função:
app.post("/teste", fnTeste, (request, response) => {

    const {nome, idade} = request.body;
    console.log(request.body);    

    return response.status(201).send("Nome = " + nome + " Idade = " + idade);
})

