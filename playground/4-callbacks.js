// setTimeout(() => {
//     console.log('os 2 segundos acabaram')
// }, 2000)

// const names =['Marcelo', 'Fabiana', 'Oswaldo']
// const shortNames = names.filter((name)=> {
//     return name.length <= 4
// })

// const geocode = (adress, callback) =>{
//     setTimeout(()=>{
//         const data = {
//             latitude: 0,
//             longitude: 0
//         }
    
//         callback(data)
//     }, 2000)
// }

// geocode('Florianopolis', (data) => {
//     console.log(data)
// })

const add = (a, b,(callback) => {
    setTimeout(() => {
        callback(a + b)
    },2000)  
})

add(1, 4, (sum)=>{
    console.log(sum)
})