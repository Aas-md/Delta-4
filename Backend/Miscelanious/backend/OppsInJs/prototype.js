//ham apna prootype bana sakte hain but yaha ham array kaa prototype dekhte hain.

let arr = [1,2,3,4];

arr.__proto__.push = (n)=>{
    console.log("push function",n);
}

arr.push(5);//new function defination.