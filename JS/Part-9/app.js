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

// let h = document.querySelector('h1');
// console.log(h.style);//object of stye having all css properties.
// h.style.backgroundColor = 'purple';
// h.style.color = '#00ff00';
// let a = document.querySelectorAll(".box a");//collction of objects
// // a[0].style.color = 'yellow';
// for(let i =0;i < a.length;i++)
// a[i].style.color = 'yellow';


// classList methods.

// since agr ham js se kuchh styling change karte hain to wo inline style consider hoti hai mtl agr hamare pass koi styling thi css file mai to ab wo apply nahi hogi because hamesha priority inline style ko hi milti hai.is cheez se bachne ke like ham classList kaa use karte hain.mtl agr mujhe kisi element ki koi property set yaa unset karni hai to ab mai uske liye style property kaa use nahi karunga balki apni css file mai ek class ke uski styling define kardunga and fir us tag mai us styling class ko add kar dunga classList.add funtion ki help se.similarly ham remove bhi kar sakte hian and baki function bhi dekhte hain.



// let heading = document.querySelector('h1');
// heading.classList.add('green');//text color will become green
// heading.classList.add('underline');//underline will be added .
// // heading.classList.remove('green');
// // heading.classList.remove('underline');
// console.log(heading.classList.contains('green'));//true or false


// navigation in js.
// means jese ham html mai parent aur child ki reltaion dekhte hain same usi tareeke se ham js ki help se bhi parent child relation dekh sakte hain.mtl ham kisi parent ki help se uske childen ko access kar sakte hain.and similary ham kisi children ki help se uska parent nikal sakte hai jo ki ek single element hoga.hamne html ma sibling relation ko bhi dekha similarly ham siblings ko bhi access kar sakte hain .mtl ek sibling se immdiete after one or immidiate before wale sibling ko access kar sakte hain ,and uska baad us par ham multiple operations laga sakte hain.

// let heading  = document.querySelector('h4');
// console.log(heading.parentElement);//.box class div is the parent
// console.log(heading.nextSibling);//un list in this case is the next sibling
// let box = document.querySelector('.box');
// console.log(box.children);//document having all childrens
// console.log(box.childElementCount);//give count of children


// add elements using js.
// ham js ki help se bhi elements ko add kar sakte hain .to uske liye hame pehle apna element create karna hota hai js ke andar .and iske baad hame usko batana hota hai ki kis parent ke andar jakar set hona hai .jese

// let newP = document.createElement('p');
// console.log(newP);//newP is completely empty now
// newP.innerText = "hello ia m newP which created by js";
// console.log(newP);
// // // now lets append in the body tag
// // let body = document.querySelector('body');
// // body.appendChild(newP);// newP will be added in the last of the body
// // another example

// let btn = document.createElement('button');
// btn.innerText = 'new Button';
// let box = document.querySelector(".box");
// box.appendChild(newP);
// box.appendChild(btn);

// // append fucntion. append is used to add the elemtnt as well as content lik strings in the end.
// newP.append("i ahve been appended");
// newP.append(btn);

// // prepand -> used to add in the beging

// insertAdjecent element.

// let btn = document.createElement('button');
// btn.innerText = 'new Button';
// let p = document.querySelector('p');//first paragraph
// p.insertAdjacentElement("beforebegin",btn);
// p.insertAdjacentElement("afterbegin",btn);


// removing elements

// let p = document.querySelector('p');
// let box = document.querySelector('.box');
// p.remove();
// box.remove();
// let body = document.querySelector('body');
// body.remove();

// Q practice question

let heading = document.querySelector('h1');
let p = document.createElement('p');
p.innerText = "hey i am red";
p.style.color = 'red';
heading.insertAdjacentElement("beforebegin",p);
let h = document.createElement('h3');
h.innerText = "i am a blue heading 3";
h.style.color = "blue";
heading.insertAdjacentElement("beforebegin",h);
let d = document.createElement('div');
let h1 = document.createElement('h1');
let newP = document.createElement('newP');
h1.innerText = "i am in a div";
newP.innerText = "ME TOO!";
d.style.backgroundColor = "pink";
d.style.border = "solid";
d.style.borderColor = "black";
d.appendChild(h1);
d.appendChild(newP);
heading.insertAdjacentElement("beforebegin",d);