// objeto property shorthand

const name = 'Andrew'
const userAge = 27

const user = {
    name: name,
    age: userAge,
    location: 'Philadelphia'
}

console.log(user)

//desestruturando o objeto

const product ={
    label: 'notebook vermelho',
    price: 3,
    stock: 201,
    salePrice: undefined
}

// const label = product.label
// const stock = product.stock

// const {label:etiqueta, stock, rating = 5} = product
// console.log(etiqueta)
// console.log(stock)
// console.log(rating)

const transaction = (type, { label, stock })=>{
    console.log(type, label, stock)
}

transaction('order', product)