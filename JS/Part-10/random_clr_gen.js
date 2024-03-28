


let div = document.querySelector('.outer div');
let heading = document.querySelector('h1');
let btn = document.querySelector('button');

btn.addEventListener('click',function(){
    let colorr = generateRandomNum();
    div.style.backgroundColor =colorr;
    heading.innerText = colorr;
  

})  



let  generateRandomNum = function(){

    let red  = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
  let color = 'rgb(' + red + ',' + green + ',' + blue + ')';
  return color;

}