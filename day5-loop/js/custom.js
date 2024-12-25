// what is loop?
// loop is a repeating section of code that is executed a
//  certain number of times or until a certain condition is met.

// types of loop
// for,while,do while,for in,for of

// let num=5;
// for(let i=1;i<=10;i++){
//     let result =`${num} x ${i} = ${num*i}`;
//     console.log(result)
// }

// 1-10 total numbers =?

// let total=0;
// for(let i=1;i<=10;i++){
//     total+=i;
// }
// console.log(total);
// only even numbers

// for(let i=1;i<=10;i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }



// let x=1

// while(x<=){
//     console.log(x);
//     x++;
// }

// let x=1;

// do{
//     console.log(x);
//     x++;
// }while(x<=10);


// let x=1

// while(x<=10){
//     console.log(x);
    
// }

// let students=['ram','shyam','hari','gita','sita'];
// let outPut='';
// for(let i=0;i<5;i++){
//     outPut+=`<h1>My name is ${students[i]} </h1>`;
// }
// document.write(outPut);



// let students=['ram','shyam','hari','gita','sita'];

// for(let i=0;i<students.length;i++){
//     console.log(students[i]);
// }


// let numbers=[
//     [23,55,76,55,44],
//     [25,54,[[[900]],800],50,90],
// ]

// console.log(numbers[1][2][1]);

// console.log(numbers[1][2][0][0][0]);


let numbers=[
    [23,55,76,55,44],
    [25,54,900,800,50],
]

for(let i=0;i<numbers.length;i++){
    for(let j=0;j<numbers[i].length;j++){
        console.log(numbers[i][j]);
    }
}