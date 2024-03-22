// Q-1


// let arr = [5,9,4,6,7,3,2];

// let square = arr.map((ele)=>{

//     return ele*ele;
// });
// let sum = arr.reduce((sum,ele)=>{
//     return sum+ele;
// });

// let ave = sum/arr.length;
// console.log(square);
// console.log(sum);
// console.log(ave);

// Q-2 element plus 5


// let arr = [5,9,4,6,7,3,2];
// let newArr = arr.map((ele)=>{
//     return ele+5;
// })
// console.log(...newArr);

// Q-3

// let arr = ["adam","maxwell","kohli","du pleasis","siraj"];
// let upperArr = arr.map((ele)=>{
//     return ele.toUpperCase();
// }) 
// console.log(upperArr);

// Q-4

// function doubleAndReturnArg(argument,arr){

//     let ans = [argument*2];
//     for(let i=0;i<arr.length;i++){

//         ans.push(arr[i]*2);
//     }
//     return ans;
// }
// let arr = [1,2,3,4,5];
// console.log(doubleAndReturnArg(5,arr));

let merge = (obj1,obj2)=>{

    return {...obj1,...obj2};
}
const student ={
    name : "Aas Mohammad",
    age : 23
};
const parent ={
    name : "rahat ali",
    height: 5.5
};
console.log(merge(student,parent));