// call stack 

// function one(){
//     return 1;
// }
// function two(){
    
//     return one() + one();
// }
// function three(){

//     let ans =  two() + one();
//     console.log(ans);
// }

// three();

// break points.
// tyo check the execution of your code you can keep track the funcions calls.
// go to browser then go to console then go to source then add break point at any line
//  by clicking on the line.then click the array in the bottom of your source .
// which will simply adds the functons in the call stack .we see this process 
// in the above example.


// js is single threaded.->
// means js ek time par sirf ek hi kaam kar sakta hai.mtl ye code ko line by line execute kar sakta hai. mtl ham esa nahi kar sakte hai ki ek kaam ab kara lo and ek kaam kuchh samay baad execute ho.then is case js sirf wait hi karta rahega.lekin ham jante hain ki js mai to setTimeOut jese functions bhi hote hain jo kuchh time baad execute hote hain.to kiya js wait karne kaa bhi kaam karta hai.to esa bilkul nahi hai .kiyuki js single threaded hai to ye yaa to wait hi kar sakta hai yaa fir kuchh code execute kar sakta hai .but dono kaam ek sath nahi kar sakta.to ye jo wait karne kaa kaam hota hai ye browser karta hai kiyuki browser kisi multithreaded language mi likhe gaye hote hain.jese c++ or java.to browser wait karta hai and jab given time complete ho jata hai to fir ye us funtion ko call stack mai add kar deta hai and js use execute karta hai.aur wo konsa funtion call stack mai add karta hai wo weh funtion hota hai jo ham as a call back passkarte hain.yaani jese setTime out funtuion mai bhi to ham ek call back funtion pass karte hain.

console.log("immidtea");
setTimeout(function(){
    console.log("it will execute after 2 seconds");
},2000);
console.log("js will execute this");

