class Person {

    constructor(name, age) {

        this.name = name;
        this.age = age;
    }

    talk() {
        console.log(`hey I am ${this.name}`);
    }
}


class Student extends Person {
    constructor(name,age,marks) {
        super(name, age);
        this.marks = marks;
    }


}

class Teacher extends Person {

    constructor(name,age,subject) {
        super(name, age);
        this.subject = subject;
    }
}



let s = new Student("Aas MOhammad",25,95);
let t = new Teacher("Shabnam",40,"Chemistry");

s.talk();//"I am aas"
t.talk();//I am shabnam
console.log(s.talk === t.talk)//true