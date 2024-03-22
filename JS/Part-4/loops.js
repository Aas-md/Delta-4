
// for loops

// for(let i=0;i<=10;i++){

//     console.log(i);

// }

// nested loops

// for(let i =1;i<=5;i++){

//         console.log("outer loop :",i);
//     for(let j = 1;j<=5;j++){

//         console.log(j);
//     }
// }

// while loops

// let i=1;
// while(i <= 20){
//     console.log(i);
//     i++;
// }

// Q-1

// const favLang = "java";
// let lang;
// while(lang != favLang){

//     lang = prompt();
//     if(lang == "quite")
//     break;

// }

// loops with array

// let arr = ["java","c++","c","python","kotlin","javascript","xml","c#"];

// for(let i =0;i<arr.length;i++){

//     console.log(i,arr[i]);
// }


// loops with nested arrays


// let arr = [["java","c","c++","kotlin","js"],["mango","apple","banana"],[1,2,3,4,5],[true,false,true]];

// for(let i=0;i<arr.length;i++){

//     console.log(i);
//     for(let j=0;j<arr[i].length;j++){

//         console.log(arr[i][j]);
//     }
// }



// for of loop

// let langs = ["java","c++","c","python","kotlin","javascript","xml","c#"];

// for(i of langs){

//     console.log(i);
// }

// let str = "Aas Mohammad khan he is very good player against"
// for(s of str){

//     console.log(s);
// }


// nested for of loop


 let twoDArray = [["java","c","c++","kotlin","js"],["mango","apple","banana"],[1,2,3,4,5],[true,false,true]];

 for(array of twoDArray){

    for(items of array){

        console.log(items);
    }
 }