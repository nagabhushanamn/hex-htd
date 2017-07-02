
// let Backbone=require('backbone'); // common JS
import Backbone from 'backbone';   // ES6 module standard


// Model

let User = Backbone.Model.extend({
    defaults: {
        name: ''
    }
});

// Collection
let Users = Backbone.Collection.extend({
    model: User
});

// instantiate collection with model instances
let users = new Users([
    { name: 'Nag' },
    { name: 'Kannan' }
]);


// View(s)

let UserView = Backbone.View.extend({
    render() {
        //...
    }
})

let UsersView = Backbone.View.extend({
    render() {
        //...
    }
});

let usersView = new UsersView();



