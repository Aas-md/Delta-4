// functions in js

// function printName(){

//     console.log("Aas Mohammad");
// }

// printName();

// question -2

// function diesRoller(){

//     console.log(Math.floor(Math.random()*6 + 1));
// }
// diesRoller();

// function with argument

// function printName(name,age){

//     console.log(`name is ${name} and age is ${age}`);
// }
// printName("Aas Mohammad",23);
// printName(1000,"this is age");
// printName("Hamza");//age will be undefined

// Q-2 average of 3 numbers

// function averageOf3Numbers(a,b,c){

//     let ave = (a+b+c)/3;
//     return ave;
// }
// console.log(averageOf3Numbers(2,3,4));

// Q-3 table of a number

// function table(num){

//     for(let i = 1;i <= 10;i++)
//     console.log(num*i);
// }
// table(3);

// Q-4 return sum of nums from 1 to n

// function numSum(n){

//     let sum =0;
//     for(let i =1 ;i<=n;i++){

//         sum += i;
//     }
//     return sum;
// }
// console.log(numSum(10));

// Q-5 return concatenate of all array elements into a single string

// function concatenate(arr){

//     let str = "";
//     for(a of arr){

//         str += a;
//     }
//     return str;
// }

// let arr = ["aas","mohd","khan","hamza","junaid","fazan"];

// console.log(concatenate(arr));

// scope in js

// function calSum(a,b){

//     let sum = a+b;
//     console.log(sum);
// }
// console.log(sum);//sum is not defined error


// global scop and block scope

// let age = 23;

// {

//     // console.log(age);//giving error because we are using age which will declare after this line
//     let age = 50;
//     console.log(age);//age will be 50
// }
// console.log(age);//age will be 23

// lexical scope or nested functions or nested scope

// function outer(){

//     let myName = "Aas";
//     function inner(){

//         console.log(myName);
//         let yourName = "Hamza";
//         console.log(yourName);
//     }
//     inner();
//     console.log(myName);//Aas
//     // console.log(yourName);//error
// }

// outer();
// // inner();// error inner is not definde;


// function expressions


// let name = "Aas";
// let sum = function(a,b){
//     return a+b;
// }
// console.log(sum(1,2));
// sum = "changed";//we can also change the variable name
// console.log(sum);

// higher order functions

// function multipleGreet(func,count){// higher order functions

//     for(let i=1;i<=count;i++){

//         func();
//     }
// }

// let greet = function(){

//     console.log("hello");
// }

// multipleGreet(greet,10);

// multipleGreet(function{console.log("this second function")},5);// giving error



// higher order functions with returning a function


// function oddEvenTest(request){

//     if(request == "odd"){

//         return function(n){

//             console.log(n%2 != 0);
//         }
//     }else if(request == "even"){

//         return function(n){

//             console.log(n%2 == 0);
//         }
//     }else{

//         console.log("wrong request");
//     }
// }

// let odd = oddEvenTest("odd");
// odd(5);//true
// let even = oddEvenTest("even");
// even(9);//false
// let wrong = oddEvenTest("any req");// do not have any value in case of wrong request(undefined)



// methods in js

// basically when we use our functions inside an object then these functions will known as methods

// const calculator = {

//     num : 55,
//     add : function(a,b){return a+b},
//     sub : function(a,b){return a-b},
//     mul : function(a,b){return a*b},


// }

// short hand of using this

const calculator = {

    num : 55,
    add(a,b){return a+b},
    sub(a,b){return a-b},
    mul(a,b){return a*b},


}

console.log(`this is a number ${calculator.num}`);
console.log(`this is add method ${calculator.add(2,3)}`);
console.log(`this is sub method ${calculator.sub(10,5)}`);
console.log(`this is mul method ${calculator.mul(2,3)}`);

