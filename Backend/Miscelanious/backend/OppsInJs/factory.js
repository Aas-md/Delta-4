function studentFactory(name,age){

    const student = {

        name : name,
        age : age,
        talk : function(){
            
            console.log("student",name,"is talking");
        }
    }

    return student
}

console.log(studentFactory("Aas Mohammad",25));//copy
console.log(studentFactory("student2",30));//copy


let s1 = studentFactory("Aas Mohammad",25)//copy
let s2 = studentFactory("student2",30);//copy
s1.talk();
console.log(s1.talk == s2.talk);//false

//this is better aproach of creating objects but not the best optimized solution to make iobjects because it takes memory every time  as many time as facotry function called.


