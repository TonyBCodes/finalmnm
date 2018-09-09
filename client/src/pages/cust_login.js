// JavaScript source code
import React, { Component } from "react";
import { BrowserRouter, Link, withRouter } from 'react-router-dom';
import { Redirect } from 'react-router'
import axios from "axios";
//import API from "../utils/API";

class CustLogin extends Component {
    state = {
        email: "",
        password: "",
        loggedin: false
    }

    handleInputChange = event => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        });
    };

    ValidateEmail = inputText => {
        const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (inputText.match(mailformat)) {
            return true;
        }
        else {
            return false;
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        if (this.ValidateEmail(this.state.email)) {
            //console.log('handling form submit...');
            //console.log(this.state);
            axios.post("/api/login", this.state)
                .then((res) => {
                    console.log(res.data);
                    //this.renderEventInfoRedirect();
                    if (res.data === true) {
                        console.log("1");
                        this.setState({ loggedin: true });
                    }
                    else {
                        document.getElementById("log_msg").style.visibility = "visible";
                        document.getElementById("log_msg").textContent = "Incorrect Email Address or Password. Please try again or request password reset.";
                        setTimeout(function () {
                            document.getElementById("log_msg").style.visibility = "hidden";
                        }, 4000);
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        }
        else {

            document.getElementById("log_msg").style.visibility = "visible";
            document.getElementById("log_msg").textContent = "The email address you entered is invalid. Please enter a valid email address.";
            setTimeout(function () {
                document.getElementById("log_msg").style.visibility = "hidden";
            }, 4000);

        }
    };

    render() {
        if (this.state.loggedin === true) {
            let red_path = `/event_info/${this.state.email}`;
            return <Redirect to={red_path} />;
        }
        else {
            return (
                <div className="col-lg-6 col-md-6">
                    <div className="wpc-about-form marg-lg-t140 marg-lg-b140 marg-sm-b50 marg-sm-t50">
                        <h3><i>Login</i></h3>
                        <span>Existing customers, please enter your email and password to login.</span>
                        <form>
                            <input type="email" name="email" placeholder='Email Address' onChange={this.handleInputChange} className="input" />
                            <br />
                            <input type="password" name="password" placeholder='Password' onChange={this.handleInputChange} className="input" />
                            <br />
                            <a className="button" type="submit" onClick={this.handleSubmit}>Login</a>
                            <br />
                            <div id="log_msg" className="box invis_box" />
                        </form>
                    </div>
                </div>
            )
        }
    }
}

export default CustLogin;