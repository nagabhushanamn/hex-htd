describe('Rectangle View', function () {
    var rectangleView;

    describe('with width 70 and height 40', function () {

        beforeEach(function () {
            var rectangle = new Backbone.Model({
                width: 70,
                height: 40
            });
            rectangleView = new app.views.RectangleView({
                model: rectangle
            });
            rectangleView.render();
        });

        it('should render a div with class rectanlge', function () {
            expect(rectangleView.el.tagName).toBe('DIV');
            expect(rectangleView.$el.hasClass('rectangle')).toBe(true);
        });

        it('should have dimensions 70 x 40', function () {
            expect(rectangleView.$el.width()).toBe(70);
            expect(rectangleView.$el.height()).toBe(40);
        });

        it('should raise rectangle:selected when clicked', function () {
            var rectangleSelectedRaised = false;
            app.eventAggregator.on('rectangle:selected', function () {
                rectangleSelectedRaised = true;
            });
            rectangleView.$el.click();
            expect(rectangleSelectedRaised).toBe(true);
        });        
    });
});
