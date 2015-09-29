Meteor.startup(function () {
    Parse = Meteor.npmRequire('parse/node').Parse;
    var conf = ParseConf.findOne();
    Parse.initialize(conf.applicationId, conf.jsKey);
    var query = new Parse.Query(Parse.Object.extend("Event"));
    query.find({
      success: function(events) {
        for (var i = 0; i < events.length; ++i) {
          console.log(events[i].get('description'));
        }
      }
    });
});
