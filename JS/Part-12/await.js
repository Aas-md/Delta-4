// await keyword ko ham ek async funtion mai hi use kar sakte hain.why we use await keyword.to jab ham chahte hain ki mere is code par execution  pause ho jaye means ek kaam khatam hone ke baad mai hi dusra kaam start ho then ham await keyword kaa use karte hain.arre just like ham use kar rahe then ko ki is then ke finish hone ke baad mai hi agla wala the execute ho.to usi cheez ko achha karke await keyword ki help se likh sakte hain.

function getNum(){

    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
            let num = Math.floor(Math.random()*10)+1;
            console.log(num);
            resolve();
        },1000)
    })
}

async function demo(){

    await getNum();
  
    await getNum();
    await getNum();

}

let h1 = document.querySelector("h1");

function changeColor(color,delay){

  return new Promise((resolve,reject)=>{

        setTimeout(()=>{
            h1.style.color = color;
            resolve("success : color is changed");
        },delay)
  })
}

async function changecolorMain(){

    await changeColor("green",1000);
    await changeColor("red",1000);
    await changeColor("yellow",1000);
    await changeColor("purple",1000);

    // console.log("after in await");

}

changecolorMain();

demo();