Router.configure({
    layoutTemplate: 'appBody',
    // notFoundTemplate: 'appNotFound',
    // loadingTemplate: 'appLoading',
});

Router.onBeforeAction(function () {
    if (! Meteor.userId()) {
        Router.go('home');
    } else {
        this.next();
    }
}, {only: ['events']});

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
