//callback hel

let heading = document.querySelector('h1');
// setTimeout(function(){
//     heading.style.color = "pink";
// },1000);

// setTimeout(function(){
//     heading.style.color = "blue";
// },2000);

// setTimeout(function(){
//     heading.style.color = "red";
// },3000);

// better way of doing above thing

// function changeColor(color,delay){
//     setTimeout(function(){
//         heading.style.color = color;
// },delay);


// }

// changeColor("pink",1000);
// changeColor("blue",2000);
// changeColor("red",3000);

// make again better using callback hell

// function changeColor(color,delay,changeNextColor){
//     setTimeout(function(){
//         heading.style.color = color;
//         changeNextColor();
// },delay);


// }


// note
// // callbacks nesting = callback hell 

// changeColor("pink",1000,()=>{
//     changeColor("blue",1000,()=>{
//         changeColor("red",1000,()=>{
//             changeColor("green",1000);
//         });
//     })
// })

function changeColor(color,delay){

    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
            heading.style.color = color;
            resolve("success : inside changeColor funtion ");
        },delay)
       
    })

   
}

changeColor("pink",1000)
.then(()=>{
  return changeColor("red",1000);
})
.then(()=>{
  return changeColor("yellow",1000);
})
.then(()=>{
    return changeColor("green",1000);
})

// doing above code using promises . after learning promises.