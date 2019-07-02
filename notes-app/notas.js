const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {
    return 'minhas notas...'
}

const addNote = (title, body) =>{
    const notes = loadNotes() 
    const duplicateNote =notes.find((note)=> note.title === title)
    
    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('Nova nota adicionada!'))
    } else {
        console.log(chalk.red.inverse('Título já existente!'))
    }
 
}

const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note)=> note.title !== title)

    if (notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse('Nota removida!'))
        saveNotes(notesToKeep)
    } else {
        console.log(chalk.red.inverse('Nota não encontrada!'))
    }

    
}
const listNotes = () => {
    const notes = loadNotes()

    console.log(chalk.inverse('Suas notas '))
    
    notes.forEach((note) => {
        console.log(note.title)
    })
}
const readNote = (title) =>{
    const notes = loadNotes()
    const note = notes.find((note)=> note.title === title)

    if (note) {
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    } else {
        console.log(chalk.red.inverse('Nota não encontrada'))
    }

}

const saveNotes = (notes) =>{
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)

}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (error) {
        return []
    } 
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}
