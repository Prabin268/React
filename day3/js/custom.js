"use strict";

// let x=10;

// console.log(typeof x)

// let x=45.68
// console.log(typeof(x))


// let user_name ='ram'
// console.log(typeof user_name.toUpperCase())

// let x=20456776
// console.log(x.toString(2)) //1100010101100000000001000

// let data =null
// console.log(typeof data)

// array, object

// let data =['ram','sita','gita']
// console.log(typeof data)

// let data = {name:'ram',age:23}
// console.log(typeof data)

// let a = undefined
// console.log(typeof a) //undefined

// let a = NaN
// console.log(typeof a)

// BigInt()
// Symbol()



// opeartors
// +,-,*,/,%,++,--

// =,+=,-=,*=,/=,%=

// logical operators: &&,||,!


// comparison operators: ==,===,!=,!==,>,<,>=,<=

// console.log(10==='10')


// bitwise operators: &,|,^,~,<<,>>


// let x=10
// let y=50
// // console.log(x>y)

// if(x>y){
//     console.log('x is greater')
// }
// else if(x==y){
//     console.log('x is equal to y')
// }
// else{
//     console.log('y is greater')
// }


// let question = prompt('Enter your gender: ')
// if(question=='male'){
//     document.getElementById("red_box").style.display = "block";
// }else if(question=='female'){
//     document.getElementById("green_box").style.display = "block";
// }else{
//    alert('Invalid gender')
// }

// WAP to enter five subject marks and calculate
//  total and percentage and display the grade

// let nep = parseInt(prompt('Enter nepali marks: '))
// let eng = parseInt(prompt('Enter english marks: '))
// let math = parseInt(prompt('Enter math marks: '))
// let sci = parseInt(prompt('Enter science marks: '))
// let soc = parseInt(prompt('Enter social marks: '))

// let total = nep+eng+math+sci+soc
// let pre =total/5
// console.log('Total:',total)

// if(pre>80){
//     console.log('Grade A')
// }else if(pre>60){
//     console.log('Grade B')
// }else if(pre>40){
//     console.log('Grade C')
// }else{
//     console.log('Fail')
// }

// ente your age and check if you are eligible for voting or not
// 18 <
// 40> 


// console.log(Number.MAX_VALUE)


// let pin=12340

// if(pin==1234){
//     let name = prompt('Enter your name: ')
//     if(name==='ram'){
//         console.log('Welcome Ram')
//     }else{
//         console.log('Invalid name')
//     }
// }else{
//     console.log('Invalid pin')
// }


let pip =parseInt(prompt('Enter your pin: '))
if(pip==1234){
    let amount =10000;
    let option =parseInt(prompt("1. For balance\n2. For withdraw"))
    if(option==1){
        alert('Your balance is:'+amount)
    }else if(option==2){
        let new_amount =parseInt(prompt('Enter amount to withdraw: '))
        if(new_amount>amount){
            alert('Insufficient balance')
        }else{
            let rem = amount-new_amount
            alert('Remaining balance is:'+rem)
            alert("Withdrawn amount is:"+new_amount)
        }
    }else{
        alert('Invalid option')
    }
}else{
    alert('Invalid pin')
}