Meteor.startup(function () {
    Parse = Meteor.npmRequire('parse/node').Parse;
    var conf = ParseConf.findOne();
    Parse.initialize(conf.applicationId, conf.jsKey);
});
