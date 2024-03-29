// event bubling -> jab elemetns ki nesting hoti hai and ham us par event listners lagate hain ,to jese suppose click kaa event lagate hain sare nested elements par .to jab ham parent par karenge to sirf wahi click hoga means partent .and jab ham kisi child par karenge to uske sath sath uske sare parents bhi click honge.isi phinomena ko ham event bubling kehte hain and ise hamprevent kar sakte hain event ke ek function se .like below


let div = document.querySelector('div');
let ul = document.querySelector('ul');
let lis = document.querySelectorAll('li');

div.addEventListener("click" ,function(){

    console.log("div was clicked");// only div is clicked in this case 
})

ul.addEventListener("click" ,function(event){
    event.stopPropagation();//to aboid this we can use this func
    console.log("ul was clicked");// div and ul both will clicked 
})

for(li of lis){

    li.addEventListener("click" ,function(event){
        event.stopPropagation();//to aboid this we can use this func
    
        console.log("li was clicked");//li ,ul and div all of these will clciked
    })

}
