function sessionStart() {

    function Trainer(name) {
        this.name = name;
        this.doTeach = function () {
            console.log(this.name + " teaching...");
            let self = this;
            let doLearn = function () {
                console.log(this.name + ' learning from ' + self.name);
            }
            return doLearn;
        }
    }


    function Employee(name) {
        this.name = name;
    }


    //

    let tnr1 = new Trainer('Nag'); // constructor invocation
    let tnr2 = new Trainer('Kannan');

    let emp1 = new Employee('emp1');
    let emp2 = new Employee('emp2');

    let learnFunc = tnr1.doTeach(); // method-invocation
    let learnFunc2 = tnr2.doTeach();


    learnFunc.call(emp1); // call invocation
    learnFunc.call(emp2);

    learnFunc2.call(emp1);
    learnFunc2.call(emp2);


}

sessionStart(); // function invocation