const Sequelize = require('sequelize')// fazendo o require do modulo so sequelize
//abaixo esta sendo iniciado o squelize na constante sequelize passando informações em ordem
//params informations: name bank's, user, password.
//after the {has pass the host and the language in the dialect secsion}
const sequelize = new Sequelize('bancoinex','root','Saopauloep2308',{
    host: "localhost",
    dialect :"mysql"
})
//here we are building a function(sequelize.authenticate) that show us if the bank are conected(.then(function{})) with the js arquive or no(.catch(function{})) 
//
sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso!")
}).catch(function(erro){
    console.log("Falha ao se conectar:" +erro)
})
//down bellow my version updated usind arrow functions and template strings 

/*const Sequelize  = require ('sequelize')
const sequelize = new Sequelize('teste', 'root', 'Saopauloep2308',{
    host:'localhost',
    dialect:"mysql"
})
sequelize.authenticate().then(()=>{
    console.log("Você está conectado !!")
}).catch((erro)=>{
    console.log(`Erro ao se concetar : ${erro}`)
})*/