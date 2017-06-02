var Vehicle = Backbone.Model.extend({
	dump: function () {
        console.log(JSON.stringify(this.toJSON()));
	}
});

// set a property in the constructor
var v = new Vehicle({
	type: 'car'
});

// set a single property
v.set('color', 'blue');


// set multiple properties
v.set({
	description: "<script>alert('script injection');</script>",
	weight: 1750
});

v.dump();


//$('body').append(v.get('description'));

$('body').append(v.escape('description'));

