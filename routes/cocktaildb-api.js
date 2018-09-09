// JavaScript source code
const axios = require("axios");
//import axios from 'axios';
require("dotenv");

APIKey = process.env.COCKTAILDB_API_KEY;

module.exports = function (app) {

    //Lookup full cocktail details of a single cocktail by id
    //https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=13060
    app.get("/api/searchby_id/:searchTerm", (req, res) => {
        const searchTerm = encodeURI(req.params.searchTerm);
        console.log(searchTerm);
        console.log(APIKey);
        axios.get(`https://www.thecocktaildb.com/api/json/v1/${APIKey}/lookup.php?i=${searchTerm}`)
            .then((results) => {
                console.log(results.data.drinks);
                let info = results.data.drinks;
                res.json(info);
                console.log(info);
            })
            .catch(err => { console.log(err); res.end() });
    });

    //Get full details of a multiple cocktails by drink name
    //https://www.thecocktaildb.com/api/json/v1/${APIKey}/search.php?s=margarita
    app.get("/api/searchby_name/:searchTerm", (req, res) => {
        const searchTerm = encodeURI(req.params.searchTerm);
        //console.log(searchTerm);
        //console.log(APIKey);
        axios.get(`https://www.thecocktaildb.com/api/json/v1/${APIKey}/search.php?s=${searchTerm}`)
            .then((results) => {
                //console.log(results);
                console.log(results.data.drinks);
                const data = results.data.drinks;
                res.json(data);
            })
            .catch(err => { console.log(err); res.end() });
    });

    //Lookup full cocktail details of a multiple cocktails by drink ingrediant
    //https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=vodka
    app.get("/api/searchby_ing/:searchTerm", (req, res) => {
        const searchTerm = encodeURI(req.params.searchTerm);
        console.log(searchTerm);
        console.log(APIKey);
        axios.get(`https://www.thecocktaildb.com/api/json/v1/${APIKey}/filter.php?i=${searchTerm}`)
            .then((results) => {
                console.log("hi");
                console.log(results.data.drinks);
                const data = results.data.drinks;
                res.json(data);
            })
            .catch(err => { console.log(err); res.end() });
    });

    //Lookup all current ingredients list
    //https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list
    app.get("/api/ing_list", (req, res) => {
        console.log(APIKey);
        axios.get(`https://www.thecocktaildb.com/api/json/v1/${APIKey}/list.php?i=list`)
            .then((results) => {
                console.log(results.data);
                const data = results.data;
                console.log(data);
                res.json(data);
            })
            .catch(err => { console.log("hey"); console.log(err); res.end() });
    });

};