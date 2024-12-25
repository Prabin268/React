// function message(){
//     console.log("Hello World");
// }

// message();

// message();


// function with parameters

// function message(name){
//     console.log("Hello " + name);
// }

// message('ram')
// message('shyam')


// function add(x,y){
//     console.log(x + y);
// }

// add(56,78)

// function return value

// function  add(x,y){
//     return x + y;
// }

// // console.log(add(56,78))

// let total =add
// console.log(total(56,78))



// function addSub(x,y){
//     let sum = x + y;
//     let sub = x - y;
//     return [sum,sub];
// }
// console.log(addSub(56,78))


// function students(name,age=0){
//     console.log("Name: " + name);
//     console.log("Age: " + age);
// }

// students('ram')


// function colleges(n1,...names){
//     console.log(n1);
//     console.log(names);
// }

// colleges('ram','shyam','hari','gita')


// function add(x,y){
//     return x+y
// }

// function total(a,b,cb){
//    console.log(cb(a,b))
// }

// total(56,78,add)

// let total =function(x,y){
//     return x + y;
// }

// console.log(total(56,78))


// let total =(x,y)=>{
//     return x + y;
// }

// console.log(total(56,78))


// setTimeout(function(){

//     alert("Hello World");
// },3000);


// setInterval(function(){

//     alert("Hello World");
// },3000);

// function fac(n){
//     // if(n==1){
//     //     return 1;
//     // }
//     // return n * fac(n-1);
// }

// console.log(fac(5))


// function addSub(a,b){
//     let total = a + b;
//     let sub = a - b;
//     return total
//     return sub
// }


// function *message(){
//     yield 'Hello';
//     yield 'javascript';
//     yield 'world';
// }

// let result =message()
// console.log(result.next())
// console.log(result.next())
// console.log(result.next())
// console.log(result.next())



function getName(){
    let name = document.getElementById('name').value;
    console.log(name);
 }