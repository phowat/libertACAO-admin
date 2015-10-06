Template.home.events({
    "submit form": function(e) {
        e.preventDefault();
        var formData = $(e.target).serializeArray();
        console.log("DELETEME: ->", formData);
        Meteor.call("parseLogin", formData[0].value, formData[1].value);
    },
});
