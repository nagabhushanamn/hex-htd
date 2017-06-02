var V = Backbone.View.extend({
    tagName: 'div',
    render: function () {
    	this.$el.html('lorem ipsum')
    		.css('background-color', 'cornflourBlue');    		
    	return this;
    }
});

var v = new V();

v.render().prependTo('body');
