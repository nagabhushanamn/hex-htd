// this example is designed to be entered into the env.html console

var people = new People([{name: 'John', age: 19}, {name: 'Sarah', age: 64}]),
	john = people.at(0),
	sarah = people.at(1);

people.at(0).save(); // view xhr network
people.at(1).save();

people.fetch({// view xhr network
    success: function () {
        JSON.stringify(people);
    }
}); 	


people.create({name: 'Tom', age: 50});
JSON.stringify(people);

var person = new Person({id: 1});
person.fetch({
    success: function () {
        console.log(JSON.stringify(person));    
    }
});


var newPerson = new Person({name: 'Ishmael', age: 22});
newPerson.on('sync', function () {
    console.log(JSON.stringify(newPerson));
});
newPerson.save();


sarah.set({age: 65});
sarah.save();		// view xhr network
JSON.stringify(sarah);

sarah.destroy();		// view xhr network

JSON.stringify(people);