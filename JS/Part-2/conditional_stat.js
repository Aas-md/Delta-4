
// if statement

// let age = 24;
// if(age >= 18){

//     console.log(`you can vote since your age is ${age}`)
// }

// else if statement

let age = 100;
if(age >= 18 && age <= 60){

    console.log(`you can vote since your ${age}`);
}else  if(age >= 60){
    console.log(`you can not vote because you are too old to vote ${age}`);
}else{
    console.log(`you can not vote because your age is less 18`);
}

// logical oprator 

//  question on logical oprator 
//Q-> if a string start with a and length greater than 3 than its a good string
// write a propgram to find a string good or not 

let str = "aas mohammad";

if(str[0] == 'a' && str.length > 3){

    console.log(`yes string ${str} is good `);
}else{
    console.log(`no string ${str} is not good`)
}