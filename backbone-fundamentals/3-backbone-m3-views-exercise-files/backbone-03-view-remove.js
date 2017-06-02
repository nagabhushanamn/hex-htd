var h = new Backbone.Model({
    content: 'Historical context'
});

var HeadingView = Backbone.View.extend({
    tagName: 'p',
    render: function () {
      this.$el.html(this.model.get('content'));
      return this;
    }    
});

var v = new HeadingView({
    model: h
});

$('body').append(v.render().el);
        
v.remove();
​