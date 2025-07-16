// in js to make a constructor we need to define a function with capital letter and it does not return any thing

function Student(name,age){
    this.name = name;
    this.age = age;

}

Student.prototype.talk = ()=>{
    console.log("Person is talking");
}

let s1 = new Student("Aas",25);//instance
let s2 = new Student("adam",20);
console.log(s1.talk === s2.talk)//true since it is using prototype.


//but this is also not a good approach. infect the aproach is good but the way we are writing the code is not good so that we use the better syntex which is called classes.