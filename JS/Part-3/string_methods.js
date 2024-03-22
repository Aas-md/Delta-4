// let str = "  trim method will remove spaces from the beginning and at the end of the string but not midle of the string     ";
// console.log(str.trim());
// let name = prompt();
// console.log(name.trim());


// lower case and upper case methods

// let name = "Aas Mohammad";
// let courceName = "apna college";
// console.log(name.toLowerCase());
// console.log(courceName.toUpperCase());

// methods with arguiments

// let str = "i love codding";
// console.log(str.indexOf("love"));
// console.log(str.indexOf("o"));// give first occurence
// console.log(str.indexOf("j"));// give -1 since str is not present


// method chaining 

// let str = "    hello  ";
// let newStr = str.trim();
// console.log("after to trim :", newStr)
//  newStr = newStr.toUpperCase();
//  console.log("after to uppercase :", newStr)

// doing in a sinlge line

// let newStr = str.trim().toUpperCase();
// console.log(newStr);

// slice method

// let msg = "ApnaCollege";
// let newMsg =msg.slice(2,6);//ending index is exclusive 
// console.log("from 0 to 5 :",newMsg );
// newMsg = msg.slice(4);//it will give me the whole string from index 5
// console.log("last part of the string :",newMsg);


// replace method

// let msg = "Apna College";
// let newMsg = msg.replace("na","nahi");
// console.log("newMsg :",newMsg);
// msg = "konhaiapnaapnaapnaapna";
// newMsg = msg.replace("apna","college");// only first occurenece will replace
// console.log(newMsg);

// repeat method

// let msg = " i love coding";
// let newMsg = msg.repeat(3);
// console.log(newMsg);

// Q-1 -> msg = "  help!" trim and convert to uppercase
let str = "  help!";
let ans = str.trim().toUpperCase();
console.log(ans);