var volcano = _.extend({}, Backbone.Events);

volcano.on('disaster:eruption', function () {
	console.log('duck and cover');
});

volcano.trigger('disaster:eruption');

volcano.off('disaster:eruption');

volcano.trigger('disaster:eruption');
