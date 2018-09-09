// JavaScript source code
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./home";
import UserLogin from "./usr_login";
import CustStart from "./cust_start";
import UserRegister from "./usr_register";
import CustInfo from "./cust_info";
import EventInfo from "./event_info";
import CustLogin from './cust_login';
import ConfirmEventInfo from './confirm_event_info';
import FAQ from './faq';

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/FAQ' component={FAQ} />
            <Route exact path='/usr_login' component={UserLogin} />
            <Route exact path='/usr_register' component={UserRegister} />
            <Route exact path='/cust_start' component={CustStart} />
            <Route exact path='/cust_info/:email' component={CustInfo} />
            <Route exact path='/event_info/:email' component={EventInfo} />
            <Route exact path='/confirm_event_info/:eventnum' component={ConfirmEventInfo} />
            <Route path='/cust_login/:failed' component={CustLogin} />
        </Switch>
    </main>
);

export default Main;