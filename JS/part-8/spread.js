// suppose i want min of Math.min(3,2,34,2,4,2,0)//0
// now suppose i have an array [1,2,3,4,5,34,2,-1];
//not i want the minimum number fro this array using math.min fucntion
// then i have to give values to min like Math.min(arr[0],arr[1],arr[2] and so on)
// but i use spread then we also get the same thing using spread .
// let arr = [1,2,3,4,5,6,5,-1];
// let min = Math.min(...arr);
// console.log(min);//-1

// arr.push(-2);
// let min2 = Math.min(...arr);
// console.log(min2);//-2
// // similary we also can print individual array elements using spread
// console.log(...arr);
// // basically it spreads all the values individually

// more examples of spread in array and strings

// let arr = [1,2,3,4,5];
// console.log(...arr);
// let newArr = [...arr];
// console.log(...newArr);
// let charArr = [..."Hello world"];
// console.log(charArr);//array of characters
// let odd = [1,3,5,7];
// let even = [2,4,6,8];
// let nums = [...odd,...even];
// console.log(nums);

// spread on object literals

// const data = {
//     name : "iron man",
//     email:"iron@gmail.com",
//     password : "abcd"
// }
// let copyData = {...data,id : 123,country : "india"}//new values are also added
// console.log(copyData);
// let arr = [1,2,3,4,5];//only values
// let obj = {...arr}//key : value
// console.log(obj);