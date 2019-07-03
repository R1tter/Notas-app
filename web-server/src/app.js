const path = require('path')
const express = require('express')

const app = express()
const publicDiretoryPath = path.join(__dirname, '../public')

app.set('view engine', 'hbs')
app.use(express.static(publicDiretoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Tempo app',
        name: 'Marcelo Ritter'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title:'Sobre mim',
        nome:'Marcelo Soares Ritter'
    })
})

app.get('/help', (req ,res)=>{
    res.render('help',{
        title:'Como podemos ajudar?',
        helpText:'Deu ruim parceiro? Vem tranquilo que vai dar certo!'
    })
})
app.get('/clima', (req,res)=>{
    res.send({
        clima: 27,
        localidade: 'florianopolis'
    })
})

app.listen(3000, () => {
    console.log('Servidor está up na porta 3000!')
})