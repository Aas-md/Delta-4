// let cities = ["Rampur","Delhi","Noida","hydrabad","abc","pune","mumbai","mohali"];
// // let city = cities[0];
// // let currentCity = cities[1];
// //short way of above code.
// let [city,currentCity,...others] = cities;
// console.log(city);//remember city and current city will a varieble not array
// console.log(currentCity);
// console.log(others);//but other is an array since it is declared using rest


// destructering for objects literals

const student = {

    name : "Aas Mohammad",
    age : 23,
    marks :85,
    subjects:["java","c","c++","kotlin","android dev"],
    username:"aasmohd@gmail.com",
    password:"abcs"

}

// let username = student.username;
// let password = student.password;

//can also do in short

let {username,password,name} = student;//remember the name should be same as key name because it finds on key 
// but if we want to assign some other names of the above variables then we can do that like .
let {username:user,password :secrat,name:studentName} = student
console.log(username,password,name,user,secrat,studentName);