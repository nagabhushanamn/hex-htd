var app = app || {};

(function (shapes) {

    shapes.views = {
        RectangleView: Backbone.View.extend({
            className: 'rectangle',
            events: {
                'click': function () {
                    app.eventAggregator.trigger('rectangle:selected');
                }
            },
            render: function () {
                this.$el.width(this.model.get('width'));
                this.$el.height(this.model.get('height'));
                return this;
            }
        })
    };

    shapes.eventAggregator = _.extend({}, Backbone.Events);

})(app);