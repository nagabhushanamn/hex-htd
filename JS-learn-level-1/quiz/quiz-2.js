let trainer = {
    name: 'Nag',
    doTeach: function () {
        console.log(this.name + ' teaching .js');

        let self = this;
        let doLearn = function () {
            console.dir(this);
            console.log(this.name + ' learning .js from ' + self.name);
        }

        // doLearn();

        let emp = {
            name: 'Hex'
        };

        doLearn.call(emp);
    }
};

trainer.doTeach();



let newTrainer = {
    name: 'Kannan'
};
trainer.doTeach.call(newTrainer);