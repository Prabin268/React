let users=['ram',34,'ktm','nepal']
let name =users[0]
let age =users[1]
let address =users[2]

let  [name,age,...address]=users

console.log(name)
console.log(age)
console.log(address)



console.log(users)

let users={
    name:'ram',
    age:34,
    address:'ktm',
    contact:{
        phone:9845454545,
        email:'ram@gmail.com'
    }
}
Object.freeze(users)
console.log(users)
users.name ='laxmi'
console.log(users.name)



users.country = 'Nepal'

users.country = function(){
    return 'Nepal'
}

console.log(users.country())

console.log(users.contact.email)

console.log(Object.keys(users))



let users={
    name:'ram',
    age:34,
    address:'ktm',
    contact:{
        phone:9845454545,
        email:'ram@gmail.com'
    }
}

let {name,age,address,contact:{phone,email}}=users
console.log(name)
console.log(age)
console.log(address)
console.log(phone)


let products=[
        {id:1,name:'laptop',price:1000},
        {id:2,name:'mobile',price:500},
        {id:3,name:'watch',price:100},
]

console.log(products[0].name)

let product ={
    id:1,
    name:'laptop',
    price:1000,
    quantity:2,
    total:function(){
        return products.price*this.quantity
    },
    brand:function(name){
        return name
    }
}


// console.log(products.total())
console.log(products.brand('dell'))