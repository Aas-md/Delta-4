// have you ever think about that when we use math.min function then we can give unlimited number of arguments or even array as well .so will javascript create n number of variabls to store these arguments then the answer No.js internally declare an array called argument and store all the given arguments in this argument array.

// function min(a,b,c,d,e,f,g,h,i,j,k){

//     // let mn = a ;
//     // if(b < mn)mn = b;
//     // if(c < mn)mn = c;
//     // if(d < mn)mn = d;
//     // and so one we have to write all if stament for every agr.
//     //so to avoid this js will make an array called argument internally like 
//     let mn = 1000000;
//     for(let i = 0;i<arguments.length;i++){

//         if(arguments[i] < mn)mn = arguments[i];
//     }
//     return mn;
// }
// console.log(min(1,2,3,4,5,6,7,8,9,10,-1));//but this is a very lengthy way and do not recomented way as well.

// we can do same thing like
function min(...args){

    let ans = 10000;
    for(let i =0;i<args.length;i++){

        if(args[i] < ans)ans= args[i];


    }
    console.log(ans);
}
min(1,2,3,4,5);// we can also give an array as an input