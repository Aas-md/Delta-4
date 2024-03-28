// let div = document.querySelector('div');
// let p = document.querySelector('p');

// p.addEventListener('mouseenter',()=>{
//     console.log("mouse entered in the paragraph");
// })

// div.addEventListener('click',()=>{

//     console.log("div is cliecked");
// })

// this keyword in events -> this refers to its calling object like if we use this inside a button event lister then this refer the button and if you use this inside some other element than this refer to that object.




// onow if we eant to execute some thing in all these three elements then we have to make 3 click events and then we will have to execute all the redundant code like given below.

// let div = document.querySelector('div');
// let p = document.querySelector('p');
// let btn = document.querySelector('button');

// function changeColor(){
//     console.dir(this);
//     this.style.backgroundColor = 'blue';
// }

// // div.addEventListener('click',function() {
// //     console.dir(this); // `this` refers to the clicked <div> element
// //     this.style.backgroundColor = 'blue';
// // });

// // p.addEventListener('click',function() {
// //     console.dir(this); // `this` refers to the clicked <p> element
// //     this.style.backgroundColor = 'blue';
// // });
// // btn.addEventListener('click',function() {
// //     console.dir(this); // `this` refers to the clicked <btn> element
// //     this.style.backgroundColor = 'blue';
// // });

// // we can avoid this redundant code using this keyword

// div.addEventListener('click',changeColor);
// p.addEventListener('click',changeColor);
// btn.addEventListener('click',changeColor);


// keyboard events 


let input = document.querySelector('input');
// input.addEventListener('keydown',function(event){

//     console.log(event);//event has many properties which we wil use for more.
//     console.log("key is = ",event.key);
//     console.log("code is =", event.code);
//     console.log('key is pressed');

// });

input.addEventListener('keyup',function(event){
    console.log(event.key);
    console.log(event.code);
    console.log('key is pressed');
})

