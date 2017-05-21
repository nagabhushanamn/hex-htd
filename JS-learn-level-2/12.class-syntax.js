// ES5 class

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }
// Person.prototype.sayName = function () {
//     //..
// }
// Person.prototype.sayAge = function () {

// }

//----------------------------------------

// Es6



class Person {
    constructor(name, age) {
        console.log("Person::consructor");
        this.name = name;
        this.age = age;
    }
    sayName() {
        //..
        console.log('im ' + this.name);
    }
    sayAge() {
        //..
        console.log('im ' + this.age);
    }
}

// let p1 = new Person('Nag', 33);

class Employee extends Person {

    constructor(name, age, salary) {
        super(name, age);
        console.log("Employee::consructor");
        this.salary = salary;
    }

    saySalary() {
        console.log('i get ' + this.salary);
    }

    askForRaise() {
        return this.salary * 0.02;
    }
}

// let emp = new Employee('Nag', 33, 10000);

class Boss extends Employee {

    askForRaise() {
        return this.salary * 0.2 + super.askForRaise();
    }

}

let boss = new Boss("Boss",33,10000);



class Abc{
    static staMethod() {
        console.log('sta method');
    }
}

Abc.staVar = 12;

Abc.staMethod();