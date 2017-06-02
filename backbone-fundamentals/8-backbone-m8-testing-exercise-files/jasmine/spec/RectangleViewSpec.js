// Rectangle View
//   with length 70 and width 40
//     should render a div with class rectangle
//     should have dimensions 70 x 40
//     should raise rectangle:selected when clicked

describe('Rectangle View', function () {
    var rectangleView;

    describe('with length 70 and width 40', function () {
        beforeEach(function () {
            var rectangle = new app.Rectangle({
                width: 70,
                height: 40
            });
            rectangleView = new app.views.RectangleView({
                model: rectangle
            });
            rectangleView.render();
        });

        it('should render a div', function () {
            expect(rectangleView.el.tagName).toBe('DIV');
        });

        it('should render with class rectangle', function () {
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
        })

    });

});