// Q-1

// let arr = [1,2,3,4,5,6,2,3];
// let num = 2;
// for(let i =0;i<arr.length;i++){

//     if(arr[i] == num){

//         arr.splice(i,1);
//     }
// }

// console.log(arr);

// Q-2

// let num = 287152;
// let digits = 0;
// while(num){

//     num = Math.floor(num/10);
   
//     digits++;


// }
// console.log(digits);

// Q-3

// let num = 287152;
// let sum =0;
// while(num){

//     let n = num%10;
//     num = Math.floor(num/10);
   
//     sum += n;


// }
// console.log(sum);

// Q-4

// let num = 5;
// let fac = 1;
// for(let i=num;i>=1;i--){

//     fac = fac*i;
// }

// console.log(fac);


// Q-5

let arr = [4,5,23,4,4,3,55,23,5,23,5,-200,-22,22,-29];
let num = -100000;
for(ele of arr){

    if(ele > num)
    num = ele;
}
console.log(num);