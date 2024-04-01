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

function changeColor(color,delay,changeNextColor){
    setTimeout(function(){
        heading.style.color = color;
        changeNextColor();
},delay);


}

changeColor("pink",1000,()=>{
    changeColor("blue",1000,()=>{
        changeColor("red",1000,()=>{
            changeColor("green",1000);
        });
    })
})

// callbacks nesting = callback hell 
