var Workspace = Backbone.Router.extend({
    routes: {
        "!search/:query": "search",
    },

    search: function(query) {
        console.log('searched for ' + query);
    }
});

var router = new Workspace();
Backbone.history.start({pushState: false});

router.navigate('!search/cats', {
    trigger: true
});​