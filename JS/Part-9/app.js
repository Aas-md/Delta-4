// console.dir(document);

// let obj1 = document.getElementById("mainImg");
// console.dir(obj1);//dive us an object of image
// let src = obj1.src;
// console.log("this is the source",src);

// get element by class

// let smallImg = document.getElementsByClassName("oldImg");
// for(let i=0;i<smallImg.length;i++){

//     // console.log(smallImg[i].src);
//     // lets chanbge the source for every image
//     smallImg[i].src = "assets/spiderman_img.png";
// }

// get element by tagName

// let allPara = document.getElementsByTagName("p");
// console.dir(allPara);
// allPara[0].innerText = "inner text changed now";

// quesry selector -> it is very similar to css selectors like if we want to style an id then we use #id similarly for class we use in css .myId similarly we use here in quesry selector in js

// console.dir(document.querySelector("p"));//give single paragpraph which come first
// console.dir(document.querySelector("h1"));// give first heading
// console.dir(document.querySelector("#mainImg"));//give selector with id
// console.dir(document.querySelector(".oldImg"));//give first element with having class name as oldImg.because it returns only an object not a collection of objects

// // for collection using quesry selctor then we use.

// console.dir(document.querySelectorAll("p"));
// console.dir(document.querySelectorAll("h1"));
// console.dir(document.querySelectorAll("#mainImg"));
// console.dir(document.querySelectorAll(".oldImg"));


// setting the content using dom.
// innerText vs TextContent vs httmlText
// innerText-> show only the text showing on the screen.
//TextContent->show all the text even which is hidden on the screen but present in the html tag
//htmlText->shows all the things like text,markup like bold or italic etc
// let p = document.querySelector("p");//get th efirst paragraph.
// p.innerHTML = "he i am Aas Mohammad";
// p.innerHTML = "he i am <b> Aas Mohammad<b>";
// let h = document.querySelector("h1");
// // h.innerHTML = "<u>Spider Man</u>";
// //or
// h.innerHTML = `<u> ${h.innerText}</u>`;



// manupulating attributes

// let obj = document.querySelector("img");
// console.log(obj.getAttribute('src'));//give you src attribute
// obj.setAttribute('src','assets/creation_1.png');
// console.log(obj.getAttribute('src'));
// obj.setAttribute('class','images');
// console.log(obj.getAttribute('class'));



// manupulating style.

let h = document.querySelector('h1');
console.log(h.style);//object of stye having all css properties.
h.style.backgroundColor = 'purple';
h.style.color = '#00ff00';
let a = document.querySelectorAll(".box a");//collction of objects
// a[0].style.color = 'yellow';
for(let i =0;i < a.length;i++)
a[i].style.color = 'yellow';


