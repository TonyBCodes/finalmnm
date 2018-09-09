// JavaScript source code
const axios = require("axios");
require("dotenv");



module.exports = function (app, passport, db) {

    //Create a new event with the details of the event page
    app.post("/api/create_event", function (req, res) {
        console.log("Req.body \n", req.body);
        db.Event.create({
            cust_id: req.body.cust_id,
            user_id: null,
            ev_code: Math.floor(Math.random() * 10000).toString(),
            ev_name: req.body.name,
            ev_date: req.body.date,
            ev_time: req.body.date + " " + req.body.time,
            ev_pax: req.body.pax,
            ev_drink1: req.body.drink1id,
            ev_drink2: req.body.drink2id,
            ev_drink3: req.body.drink3id,
            ev_drink4: req.body.drink4id,
            ev_drink5: req.body.drink5id,
            ev_drink6: req.body.drink6id,
            ev_addon1: null,
            ev_addon1_quant: null,
            ev_addon2: null,
            ev_addon2_quant: null,
            ev_addon3: null,
            ev_addon3_quant: null,
            ev_addon4: null,
            ev_addon4_quant: null,
            ev_addon5: null,
            ev_addon5_quant: null,
            ev_addon6: null,
            ev_addon6_quant: null,
            ev_note: null,
            ev_addr1: req.body.cust_addr1,
            ev_addr2: req.body.cust_addr2,
            ev_city: req.body.cust_city,
            ev_state: req.body.cust_state,
            ev_zip: req.body.cust_zip,
            ev_country: req.body.cust_country,
            ev_paid: false,
            ev_pymt_suc_code: null,
            ev_pymt_timestamp: null,
            ev_status: "planning"
        })
            .then(event => {
                console.log(event);
                res.send(event);
            })
            .catch(function (err) {
                console.log(err);
                res.json(err);
            });
    });

    //Retrieve event information using event id
    app.get("/api/get_event/:search_id", function (req, res) {
        db.Event.findOne({
            where: { ev_id: req.params.search_id }
        }).then(event => {
            //if (err) { console.log(err); return done(err); }
            console.log(event);
            res.json(event);
        }).catch(function (err) {
            console.log(err);
            res.json(err);
        });
    });
};