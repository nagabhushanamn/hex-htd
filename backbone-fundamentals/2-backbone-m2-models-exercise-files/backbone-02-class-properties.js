var Vehicle = Backbone.Model.extend(
	{},
	{
		summary: function () { return 'Vehicles are for travelling';}
	}
);

Vehicle.summary();