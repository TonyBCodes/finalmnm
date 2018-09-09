// JavaScript source code
import axios from "axios";

export default {
    //coctail by id search
    id_search: function (id) {
        const lookfor = id;
        return axios.get(`/api/searchby_id/${lookfor}`);
    },

    //cocktail by name search
    name_search: function (name) {
        const lookfor = name;
        return axios.get(`/api/searchby_name/${lookfor}`);
    },

    //cocktail by ingredient search
    ing_search: function (ingredient) {
        const lookfor = ingredient;
        return axios.get(`/api/searchby_ing/${lookfor}`);
    },

    //cocktail all ingredients list
    ing_list: function () {
        return axios.get('/api/ing_list');
    }
};