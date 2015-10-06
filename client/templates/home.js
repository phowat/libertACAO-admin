Template.home.events({
    "submit form": function(e) {
        e.preventDefault();
        var formData = $(this).serialize();
        console.log("DELETEME: ->", formData);
        Parse.User.logIn("myname", "mypass", {
          success: function(user) {
            // Do stuff after successful login.
            console.log("DELETEME: user", user);
          },
          error: function(user, error) {
            // The login failed. Check error to see why.
            console.log("DELETEME: error", error);
          }
        });
    },
});
