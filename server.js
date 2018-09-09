// Requiring necessary npm packages
var express = require("express");
var bodyParser = require("body-parser");
var session = require("express-session");
// Requiring passport as we've configured it
var passport = require("./config/passport");
var path = require("path");
const LocalStrategy=require("passport-local").Strategy

// Setting up port and requiring models for syncing
var PORT = process.env.PORT || 8080;
var db = require("./models");

// Creating express app and configuring middleware needed for authentication
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));
// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// Requiring our routes
require("./routes/cust-auth")(app, passport, db);
require("./routes/eventdb-api")(app, passport, db);
//require("./routes/user-auth")(app, db);  //,passport);
require("./routes/cocktaildb-api")(app);

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function (req, res) {
    //use this in development
   // res.sendFile(path.join(__dirname, "./client/public/index.html"));
    //change to this in production
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    session: false
},
    function (username, password, done) {
        //console.log(username);
        db.Customer.findOne({
            where: { cust_email: username }
        }).then(user => {
            //if (err) { console.log(err); return done(err); }
            if (!user) { console.log("user not found"); return done(null, false); }
            //console.log(user.validPassword(password), "    ", user);
            if (!user.validPassword(password)) { console.log("password incorrect"); return done(null, false); }
            //console.log("landed here", user);
            return done(null, user);
        });
    }
));

// Syncing our database and logging a message to the user upon success
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
  });
});
