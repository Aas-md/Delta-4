let btn = document.querySelector('button');
let input = document.querySelector('input');
let ul = document.querySelector('ul');
btn.addEventListener("click",function(){

    let value = input.value;
    if(value.length == 0){

        alert("your input is empty");
    }else{

        input.value = "";
      let li = document.createElement("li");
      let dltbtn = document.createElement('button');
        dltbtn.innerText = "delete";
        dltbtn.classList.add('delete');
       li.innerText = value;
       li.appendChild(dltbtn);

        ul.appendChild(li);
    }
})

let dltBtns = document.querySelectorAll('.delete');
// for(dltBtn of dltBtns){

//     dltBtn.addEventListener("click",function(){

//         let li = this.parentNode;
//         li.remove();// but it will not remove newly added nodes or list items
//    })
// }

// event deligation 

// so the above method is not used to delete the newly added elements .
//so we use the concept of event deligation which is based on even bubling.

ul.addEventListener("click",function(event){

   if(event.target.nodeName == "BUTTON"){

    let li = event.target.parentNode;
    li.remove();
   }
}

)
