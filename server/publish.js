Meteor.publish('parseEvents', function() {
    var self = this;

    // Some very interesting books
    var query = new Parse.Query(Parse.Object.extend("Event"));
    query.find({
      success: function(events) {
        for (var i = 0; i < events.length; ++i) {
            var evt = {
                description: events[i].get('description'),
            };
            self.added('parseEvents', Random.id(), evt);
        }
        self.ready();
      }
    });

});
