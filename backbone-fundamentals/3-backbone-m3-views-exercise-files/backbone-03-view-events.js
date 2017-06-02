var FormView = Backbone.View.extend({
    tagName: 'div',
    
    events: {
        'click .clickable': 'handleClick',
        'change': 'handleChange'
    },
    
    render: function() {
        this.$el.html('<input type="text" class="clickable" placeholder="clickable" /> <input type="text" />');
        return this;
    },
    
    handleClick: function() {
        console.log('handleClick');
    },
    
    handleChange: function() {
        console.log('handleChange');
    }
});

var fv = new FormView();

$('body').append(fv.render().el);​