var Person = Backbone.Model.extend({});

var People = Backbone.Collection.extend({
    model: Person,

    initialize: function() {
        this.on("add", function() {
            console.log("person added");
        });
        this.on('change', function () {
            console.log('person changed');
        });
    }
});

var woody = new Person({
    name: 'Woody'
});

var musicians = new People();
musicians.add(woody);

woody.set('instrument', 'guitar');
​