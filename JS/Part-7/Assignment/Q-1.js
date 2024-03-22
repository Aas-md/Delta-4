//Q-1 write an arrow funtion that accepst an array and return the average of array elements

// const ave = (arr)=>{
//     let sum =0;
//     for(a of arr)sum += a;
//     return sum/arr.length;
// }

// let arr = [1,2,3,4,5,6,7,8,9];
// console.log(ave(arr));

// Q-2 even or odd

const isEven = (n)=>{

    if(n % 2 == 0)return true;
    return false;
}

console.log(isEven(3));//false
console.log(isEven(4))//true