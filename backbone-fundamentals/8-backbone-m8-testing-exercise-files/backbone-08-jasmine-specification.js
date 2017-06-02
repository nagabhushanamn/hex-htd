describe('Rectangle', function() {
    var rectangle;

    beforeEach(function() {
        rectangle = new app.Rectangle();
    });

    describe('with length 7 and width 4', function() {
        it('should have an area of 28', function() {
            expect(rectangle.area()).toBe(28);
        });
        it('should have a circumference of 22', function() {
            
        });
    });

});