// user will gues a number which was generated radmly 
// ,if the number will be right then we stop or else
//  user type quit then we stop.or we will some hint to the
//  user that please enter a larger numbher or please enter a 
//  smaller number if the entered number is large

let num = prompt("please enter  a  maximum number");

const random = Math.floor(Math.random()*num);

let gues = prompt("please gues a number");
while(true){

    if(gues == "quit"){

        console.log("user quit the game!");
        break;
    }

    if(gues == random){

        console.log("congrats ! you entered the right numer",random);
        break;
    }else if(gues > random){

        gues = prompt("oops , you entered a large number, pleae enter smaller number")
    }else if(gues < random){

        gues = prompt("oops , you entered a small number, pleae enter bigger number")


    }
   

}