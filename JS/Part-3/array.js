// let arr = ["aas","hamza","rahat","asif","farzan"];
// console.log(arr);

// creating arrays

// let arr = ["aas","hamza",23,17,20,false,true];
// console.log(arr);

// arrays are mutable in js(can change)

// let arr = ["banana","apple","mango"];
// console.log(arr);
// arr[0] = "orange";
// console.log(arr);
// arr[100] = "papaya";// we can also do this and it will create an empty space 
// console.log(arr);

// array methods

// let arr = ["banana","apple","mango"];
// console.log("simple arra :",arr);
// arr.push("papaya");
// console.log("after push opration :",arr);
// arr.pop();
// console.log("after pop opration :",arr);
// arr.unshift("start")//add into the start
// console.log("after unshift opration :",arr);
// arr.shift();
// console.log("after shift opration :",arr);

// question -1

// arr = ["january","july","march","August"];
// // convert it intp [july june march agust]

// arr.shift();
// arr.shift();
// arr.unshift("june");
// arr.unshift("july");
// console.log(arr);

// array references in js

// let a = [1,2,3,4,5];
// let b = [1,2,3,4,5];
// if(a == b)
// console.log("yes a and b are equal",a,b);
// else console.log("no a and b are not equal"); // No
// if(a[0] == b[0])
// console.log("yes a[0] and b[0] are eual" ,a[0],b[0]); // yes
// else console.log("yes a[0] and b[0] are eual" ,a[0],b[0]);



// const array

// const arr = [1,2,3,4,5,6];
// arr[1] = 20;// we can change the values even for const array
// console.log(arr);
// arr = [5,6,7,8];//giving error at run time
// console.log(arr);

// nested arrays

// let arr = [[1,2,3],[1,2],[3,4],[5,6],[7,8,9,10]];
// console.log(arr);
// console.log(arr[0][2]);//3


// q-2 create a 2D array to create a tic tac toe game state

let a = [['x',null,'o'],[null,'x',null],['o',null,'x']]
console.log(a);