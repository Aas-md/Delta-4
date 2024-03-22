// const student = {

//     name : "Aas Mohammad",
//     age : 23,
//     physics :79,
//     chemistry:50,
//     math:33,

//      getAverageMarks(){

//         console.log((this.physics + this.chemistry + this.math)/3);
//         console.log(this)//wil print the current object in this case student

//     }
 
// }

// console.log(this)//will print window object 


// try and catch block

// console.log("hello");
// console.log("hello");

// try{
//     console.log(a);
// }catch(e){

//     console.log("error occur while excuting variable a",e);
// }

// console.log("hello2");
// console.log("hello2");
// console.log("hello2");


// arrow function

// const sum = (a,b)=>{

//     console.log(a+b);
// }

// const greet = ()=>{

//     console.log("this is greeting");
// }

// sum(10,20);
// greet();

// implicit return of arrow funcitons

// const mul = (a,b)=>(a*b);
// const sub = (a,b) =>{
//     return a-b;
// }


// set time out function

// console.log("hi their!");


// setTimeout(()=>{// this statement will execute after 4 seconds but our program will run execute another peice of code or the code after it like in the example
//     console.log("Apna college");
// },4000);

// console.log("weolcome to");
// console.log("weolcome to");
// console.log("weolcome to");


// set inteval fucntion

// its similar to setTimeout function but the main difference is it execute the statement after a the given time in  a loop like shown in the below example and when want to stop it then we call clearInterval(id) id is unique for each set interval function.and generate at the time of function declaration


// const id = setInterval(()=>{
//     console.log("this is ine will print in a loop");
// },3000);

// const id2 = setInterval(()=>{
//     console.log("hello world");
// },1000);

// // clearInterval(id);
// // clearInterval(id2);// the function not execute since we stop it immediately after the interval function

// console.log(id);
// console.log(id2);


// this keyword in arrow function

// actually there is a huge difference btn this is keyword when we use it inside a normal fucntion and inside a arrow funciton.actually the differnce is given blow
// nsinde ormal function -> this will take refrence from its parent who even the prant of the function like an object or  globally.
// inside arrow function -> this is will take refrence from its parent of parent context.means the parent of the arrow function.


// const  student={

//     name:"Aas Mohammad",
//     marks:85,
//     prop:this, // it will take the refrence of the parent of student means global(window)

//     getName: function(){// normal function so this will take refrence from its parent which is student in this case

//         console.log("name is ",this.name);
//         console.log(this);//student object
//     },

//     getMarks : ()=>{// arrow function so the parent of this function is student so it will take reference from the prant of parent which is global or window

//         console.log("marks are :",this.marks);//undefined
//         console.log(this);//window , since the prant of this function is student and the parent of student is window or global

//     },

//     // advangates of this keyword inside an arrow function.
//     // when we use multiple or nested functions so in this case normal function take refrence from its parent function using this keyword which will be another function since we are using nested funcntions.
//     // but we can get values from arrow functions.since arrow functions get value of this from parent's parent.
    
//     getInfo1 : function(){

//         setTimeout(function(){
//             console.log(this)//give window,since the parent of this nested function is a setTime out function and set time out fruntion come from window,because we are using this function inside the setTime function
//         },1000)
       
//     },

//     getInfo2 : function(){

//         setTimeout(()=>{
//             console.log(this)// this will give student,since it will call parent'parent whcih is student
//         },2000)
//     }
    
// }

// Q-1 write an arrow function that return square of a number n.

// const square = (n)=>(n*n);
// or
// const square = (n)=>{
//     return n*n;
// }
// console.log(square(4));

// Q-2 => write a function that prints hellow world 5 times at interval of 2 seconds.

// let count = 0;
// const id  = setInterval(()=>{
//     console.log("hello world");
//     count++;
//     if(count == 5)clearInterval(id);
// },2000);

// or we also can do this 

let id  = setInterval(()=>{
    console.log("hello world");

},2000);

setTimeout(()=>{
    clearInterval(id);
},10000)




