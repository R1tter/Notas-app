const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notas.js')

//Personaliza versão yargs
yargs.version('1.1.0')

//Criando o comando de adicionar
yargs.command({
    command: 'add',
    describe: 'Adiciona uma nova nota.',
    builder: {
        title: { // add pelo título
            describe: 'Titulo da nota',
            demandOption: true, //obriga a ter essa opção na insersão
            type: 'string'
        },
        body:{
            describe: 'Corpo da nota',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        console.log('Título: ' + argv.title)
        console.log('Corpo: '+ argv.body)
    }
})
// Criando um comando para remoção
yargs.command({
    command: 'remove',
    describe: 'Remove uma nota',
    handler: function(){
        console.log('Removendo uma nota!')
    }
})
//Criando um comando para listar
yargs.command({
    command:'list',
    describe: 'lista suas notas',
    handler: function(){
        console.log('listando todas suas notas')
    }
})
//Criando comando para leitura
yargs.command({
    command:'read',
    describe:'Modo de leitura',
    handler:function(){
        console.log('Modo de leitura ativado!')
    }
})

//adicionar, remover, ler e listar
yargs.parse()
