const Sequelize = require("sequelize")
const sequelize = new Sequelize('teste','root','Saopauloep2308',{
    host:'localhost',
    dialect:'mysql'
})
//criando uma tabela('nometabela') dentro do banco que voce especificou em cima('teste') e colocando a representação dela dentro de uma constante ('postagens') 
const postagens = sequelize.define('nometabela', {
    //adcionando colunas na tabela e especificando o tipo delas
    titulo:{
        type: Sequelize.STRING
        //string é o mesmo que varchar
    },
    conteudo:{
        //text é como se fosse uma string com tamanho maior 
        type: Sequelize.TEXT
    }
})
//mandando criar a tabela 
//o json({force:true}) força a criação da tabela

//postagens.sync({force:true})

//depois de criado uma vez voce pode comentar o comando 

const usuarios = sequelize.define('Usuarios',{
    nome: Sequelize.STRING,
    idade: Sequelize.INTEGER,
    email: Sequelize.STRING
})

//usuarios.sync({force:true})

//inserindo dados 

usuarios.create({
    nome:"john",
    idade:19,
    email:'jh@hot.com'
})
//da pra colocar apenas um parametroo da tabela tipo:apenas o nome o resto vai ficar null automaticamente 
const newtable = sequelize.define('newtable',{
    age: Sequelize.INTEGER,
    name: Sequelize.STRING
})
//newtable.sync({force:true})