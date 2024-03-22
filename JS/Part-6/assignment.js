// Q-1 write a funciton that return all elements of an array that are klarger than a given number



// function largeElements(arr,num){

//     let ans = [];
//     for(a of arr){
//         if(a > num)
//         ans.push(a);
//     }
//     return ans;
// }

// let arr = [4,5,6,7,54,3,5,56,34,5,43];
// let num = 6;
// console.log(largeElements(arr,num));

// Q-3 return unique chars

// function unique(str){

//     let ans = "";
//     for(ele of str){

//         if(ans.includes(ele) == false){
//            ans += ele;
     
//         }
      
    
//     }
//     return ans;
// }

// str = "abcdabcdefgggh";
// console.log(unique(str));

// Q-3 return the largest strng in the array

// function largestStr(arr){

//     let ans = "";
//     for(str of arr){

//         if(str.length > ans.length)
//         ans = str;
//     }
//     return ans;
// }

// let arr = ["Australia","germany","south africa","united s","india"];
// console.log(largestStr(arr));


// Q-4 return the count of vovels in the string

// function vovelCount(str){

//     let ans = 0;
//     for(ele of str){

//         if(ele == 'a' || ele == 'e' || ele == 'i' || ele == 'o' || ele == 'u')
//         ans++;
//     }
//     return ans;
// }
// let str = "abcdefghigklmnopaqrio";

// console.log(vovelCount(str));

// Q-5 generate random num,ber from start to end

randomNum = function (start,end){ return Math.floor(Math.random()*(end - start +1)+start); };
console.log(randomNum(10,12));
