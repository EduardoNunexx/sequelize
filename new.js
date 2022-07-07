//iniciando o sequelize e conectando ao bd testing que eu criei
require("dotenv").config()
const Sequelize = require("sequelize")
const sequelize = new Sequelize(process.env.DATABASE,process.env.DATABASE_USER,process.env.DATABASE_PASSWORD,{
    host:process.env.DATABASE_HOST,
    dialect:process.env.DATABASE_DIALECT
})
//verificando se a conexao foi feita 
sequelize.authenticate().then(()=>{
    console.log("y")
}).catch(()=>{
    console.log("F")
})
//criando uma tabela chamada motorista no banco de dados
//colunas de nome idade e viagem com tipos ja especificados
const motoristas = sequelize.define("motoristas",{
    name: Sequelize.STRING,
    age: Sequelize.INTEGER,
    travel: Sequelize.STRING
})
//criando a tabela

//motoristas.sync() (apaguei depois de criar)

//alimentando a tabela 

motoristas.create({
    name:'joao',
    age:19,
    travel:'madalena-taua'
})
motoristas.create({
    name:'jose',
    age:33,
    travel:'taua-arneiroz'
})
motoristas.create({
    name:'davi',
    age:22,
    travel:'limoeiro-caninde'
})