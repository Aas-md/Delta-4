

let h1 = document.querySelector("h1");

function changeColor(color,delay){

  return new Promise((resolve,reject)=>{

        setTimeout(()=>{
            let num = Math.floor(Math.random()*5) + 1;
            if( num > 3)reject("num is greater than 3");
            h1.style.color = color;
            console.log("changed color is ",color);
            resolve("success : color is changed");
        },delay)
  })
}

async function changecolorMain(){

    try{
    await changeColor("green",1000);
    await changeColor("red",1000);
    await changeColor("yellow",1000);
    await changeColor("purple",1000);
    }catch(error){
        console.log("error : ",error);
    }
    console.log("another kind of work whateven we want to do after try and catch block")

    // console.log("after in await");

}

changecolorMain();


let student = {
    name : "Aas ",
    age : 23,
    studentId : undefined
}