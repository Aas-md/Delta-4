let gameSeq = [];
let userSeq = [];
let btns = ["div1","div2","div3","div4"];
let started = false;
let level =0;
let h2 = document.querySelector('h2');
document.addEventListener("keypress",function(){

    if(started == false){
        console.log("game started");
        started = true;
        levelUp();
    }
})

function btnFlash(currentBtn){

    currentBtn.classList.add("flash");
    setTimeout(function(){
        currentBtn.classList.remove("flash");
    },250);

}

function levelUp(){
   userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
    let randomIdx= Math.floor(Math.random() * 3);
    randomColor = btns[randomIdx];
    gameSeq.push(randomColor);
    console.log(gameSeq);
    let currentBtn = document.querySelector(`.${randomColor}`);
    btnFlash(currentBtn);
   
}

function checkAns(idx){

    // let idx = level-1;
    if(gameSeq[idx] === userSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        
        h2.innerHTML = `Game over!<b> Your Score Was ${level} </b> <br> press any key to start`;
        document.querySelector('body').style.backgroundColor = "red";
        setTimeout(function(){
        document.querySelector('body').style.backgroundColor = "";

        },150);
        reset();
       
    }
}

function btnPressed(){
    let btn = this;//rfer to its parent which is button because it wa called from the below code
    let classNames = btn.className;
    let classArray = classNames.split(" ");
    let secondClass = classArray[0];
    userSeq.push(secondClass);
    checkAns(userSeq.length-1);
    btnFlash(btn);
}

let allBtns = document.querySelectorAll('.btn');
for(btn of allBtns){

    btn.addEventListener("click",btnPressed);
}

function reset(){
    gameSeq = [];
    userSeq = [];
    started = false;
    level =0;
}
