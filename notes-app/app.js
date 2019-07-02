const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notas.js')

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
    handler(argv){
        notes.addNote(argv.title, argv.body)
    }
})
// Criando um comando para remoção
yargs.command({
    command: 'remove',
    describe: 'Remove uma nota',
    builder:{
        title:{
            describe: 'Título da nota',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})
//Criando um comando para listar
yargs.command({
    command:'list',
    describe: 'lista suas notas',
    handler() {
        notes.listNotes()
    }
})
//Criando comando para leitura
yargs.command({
    command:'read',
    describe:'Modo de leitura',
    builder:{
        title:{
            describe: 'Título da nota ',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title)
    }
})

//adicionar, remover, ler e listar
yargs.parse()
