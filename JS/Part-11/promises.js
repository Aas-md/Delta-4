// // pehle ham ek example dekhte hain ki javb ham api calling karte hain yaa fir db ke sath oprations perform karte hain to kese callback hell ban jata.

// function saveToDb(data,success,failure){
//     let internnetSpeed = Math.floor(Math.random()*10)+1;
    
//     if(internnetSpeed >= 5){

//         success();// these are funtions
//     }else{
//         failure();
//     }
// }

// saveToDb(
//     5,
//     ()=>{

//     console.log("success1 : your data is saved");
//     // if your first data successfully stored in the db then we want to store another data.
//     saveToDb(
//         10,
//         ()=>{

//         console.log("success2 : your data is saved");
//         // if this data will save to yhe db then we again store another data so we can make the callback hell .
//         saveToDb(
//             20,
//             ()=>{

//         console.log("success3 : your data is saved");
//         },
//         ()=>{
//             console.log("failure3 : weak connection");
//         })
//     },
//     ()=>{
//     console.log("failure2 : weak connection");
    
//     })
// },
// ()=>{
//     console.log("failure1 : weak connection");
// })

// promise 

// lets try to use prpomises in the above code.
// prmise has 3 states pending completed and rejected.
// resoleve = success
// reject = failure

function saveToDb(data){
   
    return new Promise((resoleve,reject)=>{

        let internnetSpeed = Math.floor(Math.random()*10)+1;
        if(internnetSpeed > 5){
            resoleve("success : data was saved to db");
        }else{
            reject("failure : weak connection");
        }
    });
    
}

// let p = saveToDb("Aas Mohammad");// return an instance of promise

// console.log(p);

// catch and then methods
// jab promise resolve ho jata hai tab to theek hai lekin agar promise reject ho jata hai to ye ek run time error deta hai tum ise browser mai bhi dekh sakte ho.so is cheez se bachne ke liye ham then and catch methods kaa use karte hai joki promise ke hi methods hain.
//then-> jab promise resolve ho jati hai.
//catch-> jab promise reject ho jati hai to ye block execute hota hai.

// let request = saveToDb("Aas Mohammad");//req = promise
// request.then(()=>{
//     console.log("promise is resolved");
//     console.log(request);
// })
// .catch(()=>{
//     console.log("promise is rejected");
//     console.log(request);

// })


// promise chaining 

// optimizing call back hell using promise using the above callback hell funtion example.

// saveToDb(10)
// .then(()=>{
//     console.log("data1 saved");
//     return saveToDb(20);//returnign another promise and again then function will handle it
// })
// .then(()=>{
//     console.log("data2 saved");
//     return saveToDb(30);
// })
// .then(()=>{
//     console.log("data3 saved");
// })
// .catch(()=>{
//     console.log("promise rejected");
// })

// result and errors 

saveToDb(10)
.then((result)=>{
    console.log("data1 saved");
    console.log("result : ",result);
    return saveToDb(20);
})
.then((result)=>{
    console.log("data2 saved");
    console.log("result : ",result);

    return saveToDb(30);
})
.then((result)=>{
    console.log("data3 saved");
    console.log("result : ",result);

})
.catch((error)=>{
    console.log("promise rejected");
    console.log("error : ",error);
})