let form = document.querySelector('form');

// // form has a default nature that submit the form into the given url .like in this case the /action is the given url in the html.but if we want to prevent this default nature than we can use the given code

form.addEventListener("submit",function(event){
    event.preventDefault();
    // console.log("form is submited");
})


// extracting form data 

// let form = document.querySelector('form');

// form.addEventListener("submit",function(event){

//     event.preventDefault();
//     // let username = document.querySelector('#username');
//     // let password = document.querySelector("#password");
//     // console.log(username.value);
//     // console.log(password.value);

//     // we can also use another of extractinmg the forms elements data

//     console.dir(form);
//     console.log(this.elements[0].value);
//     console.log(this.elements[1].value);//this == form

// })


// more events 

// change -> change is type of event and give the value after the test is cheaged by the user. like if user type something in the input tag then give the final value because the state will change in it.

    // let username = document.querySelector('#username');
    // let password = document.querySelector("#password");

    // username.addEventListener("change",function(event){

    //     event.preventDefault();
    //     let inputValue = username.value;
    //     console.log("the final value after change is = ",inputValue);
    // })


// input event->input is also an event type .it is occur every time when the input is chsnged .means change is give the final value.mtl jab ham pura change karte hain and fir kahin aur click karte hain to hamne change ki help se final changed value milti hai.but input bina kahi click kiye hue hi hame changed value deta hai ,like mai agr a press karun to ye hame a dega then mai b press karun to ye hame b dega and so on.

    // username.addEventListener("input",function(event){

    //     event.preventDefault();
    //     let inputValue = username.value;
    //     console.log("value  = ",inputValue);
    // })


    // activity

    
    let username = document.querySelector('#username');



    let p = document.querySelector("#paragraph");

      username.addEventListener("input",function(event){


        let inputValue = username.value;
       p.innerText = inputValue;
    })
