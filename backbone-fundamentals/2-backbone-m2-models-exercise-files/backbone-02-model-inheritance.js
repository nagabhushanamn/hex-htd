​var A = Backbone.Model.extend({
    
    initialize: function () {
      console.log('initialize A');
    },
    
    asString: function () {
      return JSON.stringify(this.toJSON());
    }    
});

​var B = A.extend({});

​var a = new A({
    one: '1',
    two: '2'   
});

​console.log(a.asString());

var b = new B({
    three: '3'
});

console.log(b.asString());

console.log(b instanceof B);
​console.log(b instanceof A);
console.log(b instanceof Backbone.Model);
console.log(a instanceof B);