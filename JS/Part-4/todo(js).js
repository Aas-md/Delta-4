let todo = [];
let req = prompt("please enter your request or quit");

while(true){

    if(req == "quit"){

        console.log("you are quit!");
        break;
    }else if(req == "list"){

        console.log("-------------");
        for(let i=0;i<todo.length;i++){

            console.log(i,todo[i]);
        }
        console.log("-------------");

    }else if(req == "add"){
        let task = prompt("please enter your task here!");
        todo.push(task);
        console.log("task is added!");
    }else if(req == "delete"){

        let index = prompt("please enter the index which you want to delete!");
        todo.splice(index,1);
        console.log("task has been deleted!");
    }else{

        console.log("you entered a wrong request!");
    }

    req = prompt("please neter your request again!");
}