class Student{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    talk(){
        console.log(`studnet ${this.name} is talking`);
    }
}

let s1 = new Student("Aas",25);
let s2 = new Student("bob",30);
console.log(typeof s1);//object
console.log(s1);//{name : Aas},age: 25
s1.talk();//Aas talking
console.log(s1.talk === s2.talk)//true
