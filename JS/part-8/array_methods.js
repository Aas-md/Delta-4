// for eatch method

// let arr = [1,2,3,4,5,6];

// arr.forEach((ele)=>{
//     console.log(`insie for each arrow function : ${ele}`);

// })

// arr.forEach(function(ele){

//     console.log(`insie for each normal function : ${ele}`);
// })

// let print = function(ele){

//     console.log(ele);
// }

// arr.forEach(print);

// for each funtion for array of objects

// let arr = [{
//     name:"Aas Mohammad",
//     age :23
// },{ 
//     name:"junaid",
//     age :22},{
//     name:"ankit sharma",
//     age :25
// }]

// arr.forEach((student)=>{
//     console.log(student);
//     console.log(student.age);
// })


// map function

// map function is very similar to forEach function but in this map fucntion return a value ad stored in another array. lets say i want to create an array wch return me another array of squares of each element .

// let arr = [1,2,3,4,5,6];

// let square = arr.map((ele)=>{

//     return ele*ele;
// })
// console.log(square);// array of squares

// using map method in objects

// let arr = [{
//     name : "Aas Mohammad",
//     marks : 85
// },{
//     name : "Junaid ahmed",
//     marks : 70 
// },{
//     name : "Ankit Sharma",
//     marks : 66
// }];

// let cgpa = arr.map((student)=>{// new array of objects containing name and cgpa

//     student.cgpa = student.marks/10;
//     return student;
// });

// cgpa.forEach((student)=>{

//     console.log("name is",student.name ,"cgpa is",student.cgpa);
// })

//filter fucntion

// let arr = [1,3,4,5,6,67,11,33,4,5,6,7,8,9];
// let even = arr.filter((ele)=>{

//     return ele % 2 ==0;//nly even numbers
// })
// console.log(even);

// every and some function

// evry and some only contans two values either tru or false .
// every-> when every call back element reurn true then it will be true other wise it will be false 
// some-> when some element return true it will be true and if every element reurn false return false just like || or operator

// let arr = [0,2,8,1,6];// for every return false since there is one odd number 

// let every = arr.every((ele)=>{

//     return ele % 2 == 0;//false since there is one odd umber which is 1
// })

// let some = arr.some((ele)=>{

//     return ele % 2 == 0;//true since there are multiple even elements
// })

// console.log(every);
// console.log(some);

// reduce function

// let arr = [1,2,3,4,5,6,7,8,9,10];
// let finalValue = arr.reduce((res,ele)=>{
//     return res+ele;
// })
// console.log(finalValue);

// Question on reduce function find the maximum number in the array

// let arr = [4,5,32,5,23,5,,34,3,6,4];

// let max = arr.reduce((res,ele)=>{
//     console.log(res);
//     if(ele > res )res = ele;
//     return res;
// })

// console.log(max);

// Q-1 -> check all the number in an array are multiple of 10 or not

// let arr = [10,20,30,40,50];
// let ans = arr.every((ele)=>{

//     return ele % 10 == 0;
// })
// console.log(ans);

// Q-2 find the minimum number in an arary

let arr = [6,5,4,56,34,56,4,5,3,7,8];

let ans = arr.reduce((mn,ele)=>{
    if(ele < mn)return ele;
    return mn;
})
console.log(ans);