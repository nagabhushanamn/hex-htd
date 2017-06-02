
var app = {}, Backbone = require('backbone');

(function (shapes) {
    shapes.Rectangle = Backbone.Model.extend({
        initialize: function () {
            this.on('change', function () {
                if (this.get('length') <= 0 || this.get('width') <= 0) {
                    throw new Error('Invalid dimensions');
                }
            }, this);
        },
        area: function () {
            return this.get('length') * this.get('width');
        },
        perimeter: function () {
            return 2*this.get('length') + 2*this.get('width');
        },
        isSquare: function () {
            return this.get('length') === this.get('width');
        }
    });

})(app);

module.exports = app;

