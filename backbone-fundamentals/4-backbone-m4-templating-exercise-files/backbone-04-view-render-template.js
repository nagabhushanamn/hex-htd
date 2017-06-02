var V = Backbone.View.extend({
  el:'body',
  render: function () {
  	var data = { lat: -27, lon: 153 };
    this.$el.html(_.template('<%= lat %> <%= lon%>', data));
    return this;
  }
});

var v = new V();

v.render();

