// const square = function(x){
//     return x * x
// }

// const square = (x) => {
//     return x * x
// }

// const square = (x) => x * x

// console.log(square(2))

const event = {
    name: 'Festa de aniversário',
    guestList: ['Marcelo','Fabiana', 'Oswaldo'],
    printGuestList() {
        console.log('Lista de convidados para ' + this.name)

        this.guestList.forEach((guest) => {
            console.log(guest + ' está confirmado para ' + this.name)
        })
    }

}

event.printGuestList()