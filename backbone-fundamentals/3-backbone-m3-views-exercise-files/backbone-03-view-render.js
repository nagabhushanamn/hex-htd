var V = Backbone.View.extend({
  el:'body',
  render: function () {
    this.$el.html('some content');
    return this;
  }
});

var v = new V();

v.render();

