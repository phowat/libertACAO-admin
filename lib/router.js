Router.configure({
    layoutTemplate: 'appBody',
    // notFoundTemplate: 'appNotFound',
    // loadingTemplate: 'appLoading',
});

Router.map(function(){
    this.route('/', {
        name: 'home',
    });
});
