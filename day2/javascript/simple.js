//let n="kodi";
//console.log(n)
/*const b=document.getElementById("body")
const btn=document.getElementById("color");
btn.addEventListener("click",function(){
    b.style.backgroundColor="yellow"
})*/



// let n="dhanushkodi"
// let age=21
// let iskodi=true

// console.log("name:",n)
// console.log("age",age)
// console.log("iskodi:",iskodi)

// function my (name,age,status){
//     console.log("NAME",name)
//     console.log("age",age)
//     console.log("alive",status)
// }
// my(n,age,iskodi)

// function bill(n,p1n,price){
//     console.log("customer name",n)
//     console.log("product name",p1n)
//     console.log("product price",price)
//     let dis=(price*25/100)
//     let total=price-dis
//     console.log('discount price%',dis)
//     console.log('total amount to pay',total)
// }
// bill("ashwin","dell laptop",50000);

// const body=document.getElementById("body")
// body.innerHTML="kodi ajj"
function add(){
    const task=document.getElementById("t1").value;
    console.log(task);
    if (task){
    const li=document.createElement("li");
    li.textContent=task;
    document.getElementById("t2").appendChild(li)
    document.getElementById("t1").value="";
    
    li.onclick=function(){
        this.parentNode.removeChild(this);
    }
}
 
}
