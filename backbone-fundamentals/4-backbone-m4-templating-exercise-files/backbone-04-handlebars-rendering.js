var source = '<p>Latitude: {{lat}}</p>';
var compiled = Handlebars.compile(source);
var rendered = compiled({ lat: -27 });
console.log(rendered);
​