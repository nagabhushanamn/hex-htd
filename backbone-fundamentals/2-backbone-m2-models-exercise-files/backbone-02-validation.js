/*
	Validation
*/

var Vehicle = Backbone.Model.extend({
	validate: function (attrs) {
		var validColors = ['white','red','blue','yellow'];
		var colorIsValid = function (attrs) {
			if (!attrs.color) return true;
			return _(validColors).include(attrs.color);
		};
		
		if (!colorIsValid(attrs)) {
			return "color must be one of: " + validColors.join(',');
		}
	}
});

var car = new Vehicle();

car.on('error', function (model, error) {
	console.log(error);
});

car.set('foo','bar');
car.set('color', 'blue');
car.set('color', 'mauve');
console.log(car.get('color'));
car.set('color', 'red');
console.log(car.get('color'));

// error handlers can be overridden per-operation
car.set({color: 'turquoise'}, {
	error: function (model, error) {
		alert(error);
	}
});
