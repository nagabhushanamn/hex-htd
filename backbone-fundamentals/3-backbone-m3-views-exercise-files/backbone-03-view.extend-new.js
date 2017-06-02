var V = Backbone.View.extend({
    tagName: 'li',
    id: 'thing',
    className: 'active',
    attributes: {
        'data-value': 12345
    }
});

var v = new V();

$('body').prepend(v.el);​