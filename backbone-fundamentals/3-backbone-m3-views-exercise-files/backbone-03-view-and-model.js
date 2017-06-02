

var RefreshingView = Backbone.View.extend({
    initialize: function () {
        this.model.on('change', function () {
            this.render();
        }, this);
    },
    render: function () {
        this.$el.html(this.model.get('text'));
    }
});

var m = new Backbone.Model({text: new Date().toString()});
var v = new RefreshingView({model: m, el: 'body'});
v.render();

setInterval(function () {
    m.set({text: new Date().toString()});
}, 1000);
​