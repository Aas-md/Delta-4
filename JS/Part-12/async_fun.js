// async funtions are just like suspended funtion in kotlin.means async funtion will only return a promise even we do ot return any promise then also it return a romise.

async function greet(){

    // Abstract.abd();for generateing the error
    return "this is a result";
}

greet()
.then((result)=>{

    console.log("success : successfuy excuted");
    console.log("resuylt : ",result);
})
.catch((error)=>{

    console.log("failure : something went wrong");
    console.log("error : ",error);
})