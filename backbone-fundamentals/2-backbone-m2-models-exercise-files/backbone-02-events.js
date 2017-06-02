var ford = new Backbone.Model({
	type: 'car',
	color: 'blue'
});

ford.on('change', function () { 
	console.log('something changed');
});

// ford.on('change:color', function () {
//     console.log('color changed');
// });

ford.set('type', 'truck');
// ford.set('color', 'red');