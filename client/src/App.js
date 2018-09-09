import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import logo from './logo.svg';
//import './App.css';

//import the webpages
import Navbar from "./pages/navbar";
import Main from "./pages/main";
import Footer from "./pages/footer";
//import Home from "./pages/home";
//import Login from "./pages/login";
//import Register from "./pages/register";
//import NoMatch from "./pages/NoMatch";

//add navbar back in when api, etc is finished.
const App = () => (
    <div className="container">
        <Navbar />
        <Main />
        <Footer />
    </div>
);

export default App;