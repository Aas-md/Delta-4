// const student = {

//     name :"Aas Mohammad",
//     age :23,
//     cgpa:8.5,
//     skills : ["c++","java","python","kotlin","web dev","Andrid dev"],
//     isPass : true

// };

// console.log(student);

// creati a post of twiter/thread using object literals

// const post = {
//     userName : "aas@gmail.com",
//     content : ["photos","videos","tweets"],
//     likes : 106,
//     reposts : 12,
//     tags : ["devin","AI","SDE","Jobs"]
// }

// console.log(post);

// // get values

// console.log(post.userName);
// console.log(post.content);
// console.log(post.likes);
// console.log(post.reposts);
// console.log(post.tags);

// // set values

// post.userName = "@shradha";
// post.likes = 120;
// console.log(post.userName);
// console.log(post.likes);

//  conversion keys to string

// const obj = {

//     1 :"Aas",
//     2:"2 will be converted to string",
//     3:"3 will be converted to string",
//     null:"null will converted into string",
//     undefined : "undefined will be converted to string",
//     true:"true will be converted to string"
// };

// console.log(obj);
// // console.log(obj.1)// giving erro
// console.log(obj[1]);
// console.log(obj[2]);
// console.log(obj.null);
// console.log(obj.true);


// adding a new value and delete a value and key in the object

// const student = {

//     name :"Aas Mohammad",
//     age :23,
//     cgpa:8.5,
//     skills : ["c++","java","python","kotlin","web dev","Andrid dev"],
//     isPass : true,
//     city:"Rampur"

// };

// console.log("without adding",student);
// student.gender = "male";//new value added
// console.log("gender is added",student);
// delete student.skills;
// console.log("skills have been deleted",student);


// nested objects

// const studentInfo = {

//     Aas : {
//         grade : "A+",
//         city : "Delhi"
//     },
//     Aman : {
//         grade : "B+",
//         city:"Pune"
//     },
//     Junaid :{
//         grade : "O",
//         city:"Noida",
//         gender:"female"
//     }
// };

// console.log(studentInfo);
// console.log(studentInfo.Aas);
// console.log(studentInfo.Junaid.city);
//  delete studentInfo.Junaid.gender
//  console.log(studentInfo.Junaid);


// array of objects


// const studentInfo = [

//     {   name:"Aas",
//         grade : "A+",
//         city : "Delhi"
//     },
//     {   name : "Aman", 
//         grade : "B+",
//         city:"Pune"
//     },
//     {   name : "junaid",
//         grade : "O",
//         city:"Noida",
//         gender:"female"
//     }
// ];

// console.log(studentInfo);
// console.log(studentInfo[0]);
// console.log(studentInfo[2].city);
//  delete studentInfo[2].gender
//  console.log(studentInfo[2]);


// Math object in js

// console.log(Math);
// console.log(Math.PI);
// console.log(Math.abs(-12));//give positive value only
// console.log(Math.pow(2,4));
// console.log(Math.floor(5.878786));// give 5
// console.log(Math.ceil(5.8786867));// give 6
// console.log(Math.random());//give random numvber from 0 to 1(exclusive never give 1)
// console.log(Math.floor(-5.55555));//-6 because give smaller floor value


// generating random integers numbers


console.log(Math.floor(Math.random()*10));//0 to 10
console.log(Math.floor(Math.random()*100));//0 to 100
console.log(Math.floor(Math.random()*1000));//0 to 1000
console.log(Math.floor(Math.random()*10000));//0 to 10000
console.log(Math.floor(Math.random()*1000000));//0 to 1000000
