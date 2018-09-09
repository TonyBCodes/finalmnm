//Require Express and Router
//const express = require('express');
//const app = express.Router();
// Requiring our models and passport as we've configured it

module.exports = function (app, passport, db) {
    // Using the passport.authenticate middleware with our local strategy.
    // If the customer has valid login credentials, send them to the event order page.
    // Otherwise the user will be sent an error
    // +++app.post("/api/login", passport.authenticate("local"), function(req, res) {
    //   // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
    //   // So we're sending the user back the route to the members page because the redirect will happen on the front end
    //   // They won't get this or even be able to access this page if they aren't authed
    // +++  res.json("/members");
    //+++ });

    // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
    // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
    // otherwise send back an error
    app.post("/api/signup", function (req, res) {
        console.log(req.body);
        db.Customer.create({
            cust_password: req.body.password,
            cust_pw_update_code: null,
            cust_pw_update_time: null,
            cust_email: req.body.email,
            cust_firstname: req.body.firstname,
            cust_lastname: req.body.lastname,
            cust_addr1: req.body.addr1,
            cust_addr2: req.body.addr2,
            cust_city: req.body.city,
            cust_state: req.body.state,
            cust_zip: req.body.zip,
            cust_country: "USA",
            cust_phone: req.body.phone,
            cust_dob: req.body.dob,
            cust_last_login: null,
            cust_status: "active"
        }).then(function () {
            res.redirect(307, "/api/login");
        }).catch(function (err) {
            console.log(err);
            res.json(err);
        });
    });


    // Route for logging customer in
    app.post("/api/login", passport.authenticate("local", { failureRedirect: '/login/true' }), function (req, res) {
        console.log("Req  ", req.body);
        console.log("Res   ", res.body);
        console.log("Inside of Login");
        res.send(true);
    });

    // Route for logging user out
    app.get("/logout", function (req, res) {
        req.logout();
        res.redirect("/");
    });

    // Route for getting userid of logged in customer
    app.get("/api/cust_info/:email", function (req, res) {
        db.Customer.findOne({
            where: { cust_email: req.params.email }
        }).then(cust => {
            //if (err) { console.log(err); return done(err); }
            console.log(cust);
            res.send(cust);
        });
    });

    app.get("/api/cust_exists/:email", function (req, res) {

        console.log(req.params.email);
        console.log("Right here!!");

        db.Customer.findOne({
            where: { cust_email: req.params.email }
        }).then(user => {
            //if (err) { console.log(err); return done(err); }
            console.log(user);
            if (user === null) {
                res.send(false);
            }
            else {
                res.send(true);
            }
        });

    });

};
