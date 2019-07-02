const chalk = require('chalk')
const getNotes = require('./notas.js')

const command = process.argv[2]

console.log(process.argv)

if(command === 'add'){
    console.log('Adicionando as notas! ')
} else if (command === 'remover'){
    console.log('Removendo a nota! ')
}
