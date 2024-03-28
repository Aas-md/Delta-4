let heading = document.querySelector('h1');
let input = document.querySelector('input');

input.addEventListener("input",function(event){

    let value = input.value;
    // if (/^[a-zA-Z]+$/.test(value)) {
    //     heading.innerText = value;
    // } else {
    //     heading.innerText = ""; // Clear the heading if the input value is not alphabetic
    // }

    if (!/^[a-zA-Z]*$/.test(value)) {
        input.value = input.value.slice(0, -1); // Prevent non-alphabetic characters from being entered
    } else {
        heading.innerText = value;
    }
})