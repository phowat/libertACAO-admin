Meteor.methods({
  parseLogin: function(username, password){
    if (Meteor.isServer) {
        Parse.User.logIn(username, password, {
          success: function(user) {
            // Do stuff after successful login.
            console.log("DELETEME: user", user);
          },
          error: function(user, error) {
            // The login failed. Check error to see why.
            console.log("DELETEME: error", error);
          }
        });
    }
  },
});
