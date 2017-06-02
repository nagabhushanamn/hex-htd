
// precompile the template
var template = _.template('<%= lat %>, <%= lon %>​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​');
console.log(typeof template);

// render the precompiled template
for (var i = 0; i<100; i++) {
    console.log(template({lat: -27, lon: 153}));
}
​