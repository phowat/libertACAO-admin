Router.configure({
    layoutTemplate: 'appBody',
    // notFoundTemplate: 'appNotFound',
    // loadingTemplate: 'appLoading',
});

Router.map(function(){
    this.route('/', {
        name: 'home',
    });
    this.route('events', {
        name: 'events',
        waitOn: function () {
            return [
                Meteor.subscribe('parseEvents')
            ];
        }
    });
});
