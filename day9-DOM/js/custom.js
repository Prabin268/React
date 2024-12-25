// setTimeout(() => {
//     let box =document.getElementById("box")
//     box.style.backgroundColor = "green"

// },3000);




// let box =document.getElementById("box")
// console.log(box)


// let box =document.getElementsByClassName("box")
// console.log(box)


// let tags = document.getElementsByTagName("h1")
// console.log(tags)

// let byName=document.getElementsByName("email")
// console.log(byName)

// let box = document.querySelectorAll("h1")
// console.log(box)

// let email = document.getElementById("email")

// email.addEventListener("keyup",function(e){
//     document.getElementById("result").innerText ="Hello " + e.target.value
// })


// document.querySelector("#addRecord").addEventListener("click",function(e){
//     e.preventDefault();
//         console.log("Button Clicked")
// });


function addRecord(e){
    e.preventDefault();
    let name  = document.getElementById("username").value;
    if(name==""){
        document.getElementById("nameError").innerHTML="Name is required";
    }
    
}


// let x =document.getElementsByClassName("gender")
// for(let i=0;i<x.length;i++){
//    x[i].addEventListener("click",function(e){
//        console.log(e.target.value)
//    })
// }