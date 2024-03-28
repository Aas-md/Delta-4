// // Q-1

// // mouseout

// let heading = document.querySelector('h1');


// heading.addEventListener("mouseout",function(){

//     this.style.color = "purple";
//     setTimeout(()=>{

//         this.style.color = "";
//     },1000);
// });

// // keypress

// let input = document.querySelector('input');
// input.addEventListener("keypress",function(){

//     console.log("key has pressed");
// })

// scroll event 

// const div = document.querySelector("div#scroll-box");
// const output = document.querySelector("p#output");

// div.addEventListener("scroll",function(){

//     output.innerText = "Scroll event fired!"

//     setTimeout(()=>{
//         output.innerText = "waiting for scroll event!";
//     },1000);
// })

const log = document.querySelector(".event-log-contents");
const reload = document.querySelector("#reload");

reload.addEventListener("click", () => {
  log.textContent = "";
  setTimeout(() => {
    window.location.reload(true);
  }, 200);
});



window.addEventListener("load", (event) => {
    log.textContent += "load\n";
  });
  
  document.addEventListener("readystatechange", (event) => {
    log.textContent += `readystate: ${document.readyState}\n`;
  });
  
  document.addEventListener("DOMContentLoaded", (event) => {
    log.textContent += `DOMContentLoaded\n`;
  });