// dom events

let btn = document.querySelector('button');
// btn.onclick = function(){
//     console.log("button is clicked and function is called using js");
// }

// // on mouse enter

// btn.onmouseenter = enter;

// function enter(){
//     console.log("hello i am mouse");
// }

// in only events properties we can not set more than 1 value at a time. means an event can only execute a single function at a time.so to avoid this we use eventListers which can execute multiple functions on the same event.

// btn.onclick = firstFun;
// btn.onclick = secondFunc;//will only execute the last function whcih is the seco nd fun in this case

btn.addEventListener("click", firstFun);
btn.addEventListener("click", secondFunc);
btn.addEventListener("dblclick",function(){
    console.log("i am double click event");
})

function firstFun(){
    console.log("i am first func");
}
function secondFunc(){
    console.log("i am the second func");
}
