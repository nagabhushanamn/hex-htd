// How to do inhertance in js-lang ?

/*

    using prototypes .js-lang supports inheritance

    parent-obj (prototype)  <--------- child-obj


*/



function Person(name, age) {
    this.name = name;
    this.age = age;

    // this.sayName = function () {
    //     console.log('im '+this.name);
    // }
    // this.sayAge = function () {
    //     console.log('im '+this.age+" old");
    // }
}

Person.prototype.sayName = function () {
    console.log('im ' + this.name);
}
Person.prototype.sayAge = function () {
    console.log('im ' + this.age + " old");
}

// let p1 = new Person("Nag", 33);
// let p2 = new Person("Ria", 2);
//....

//------------------------------------------


function Employee(name, age, salary) {
    Person.call(this, name, age);
    this.salary = salary;
}
// Object.assign(Employee.prototype, Person.prototype);

// assigning person instance as Employee's prototype to re-use methods
Employee.prototype = new Person(); 
Employee.prototype.saySalary = function () {
    console.log('i get ' + this.salary);
}

let emp = new Employee('Nag', 33, 10000);