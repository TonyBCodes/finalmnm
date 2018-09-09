// JavaScript source code
import React, { Component } from "react";
import { Redirect, withRouter } from 'react-router-dom';
import axios from "axios";
//import CLogin from "../apis/cust_login_api";

class CustReg extends Component {
    state = {
        email: "",
        message: "",
        isHidden: true,
        needs_to_register: false
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    renderCustRegRedirect = () => {
        this.props.history.push('/cust_info/' + this.state.email);
    }

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

        console.log('handling form submit...');

        if (this.ValidateEmail(this.state.email)) {

            let durl = "/api/cust_exists/" + this.state.email;
            let ourl = `/api/cust_exists/${this.state.email}`;
            console.log(durl);
            console.log(ourl);

            axios
                .get(durl, function (res) { })
                .then(res => {
                    if (res.data === true) {
                        console.log('email found');

                        //suggest customer login
                        document.getElementById("reg_msg").style.visibility = "visible";
                        document.getElementById("reg_msg").textContent = "The email you entered is already associated with an account. Please log in.";
                        setTimeout(function () {
                            document.getElementById("reg_msg").style.visibility = "hidden";
                        }, 3000);
                    }
                    else {
                        //set state for redirect to register page
                        console.log('email not found');
                        this.setState({ needs_to_register: true });
                    }
                })
                .catch(error => {
                    console.log(error)
                    this.errored = true
                });
        }
        else {

            document.getElementById("reg_msg").style.visibility = "visible";
            document.getElementById("reg_msg").textContent = "The email address you entered is invalid. Please enter a valid email address.";
            setTimeout(function () {
                document.getElementById("reg_msg").style.visibility = "hidden";
            }, 4000);

        }
    }

    //if (this.state.email) {
    //    let checkpath = `/api/cust_exists/${this.state.email}`;
    //    console.log(checkpath);
    //    axios.get("/api/cust_exists/" + this.state.email, function (res) {})
    //    //axios.get({ checkpath })
    //        .then((res) => {
    //            console.log(res);
    //            if (res) {

    //                console.log('email found');

    //                //redirct to login page
    //                this.setState({ isHidden: false });
    //                this.setState({ message: "The email you entered is already associated with an account.  Please log in." });
    //            }
    //            else {
    //                //redirect to register page
    //                //send email as prop
    //                console.log('email not found');
    //                this.renderCustRegRedirect();
    //            }
    //        })
    //        .catch((err) => {
    //            console.log(err);
    //        });
    //}

    //else {
    //    console.log('this.state.email not found');
    //}
    //};




    render() {
        if (this.state.needs_to_register === true) {
            let red_path = `/cust_info/${this.state.email}`;
            return <Redirect to={red_path} />;
        }
        else {
            return (

                <div className="col-lg-6 col-md-6">
                    <div className="wpc-about-form marg-lg-t140 marg-lg-b140 marg-sm-b50 marg-sm-t50">
                        <h2><i>Register</i></h2>
                        <span>Please enter your email address to register as a new customer.</span>
                        <form>
                            <input type="email" name="email" placeholder='Email Address' className="input" onChange={this.handleInputChange} />
                            <br />
                            <a className="button" type="submit" onClick={this.handleSubmit}>Register</a>
                            <div id="reg_msg" className="box invis_box" />

                        </form>
                    </div>
                </div>
            )
        }
    }
}

export default withRouter(CustReg);

    //    handleInputChange = event => {
    //        const { name, value } = event.target
    //        this.setState({
    //            [name]: value
    //        });
    //    };

    //    handleSubmit = event => {
    //        event.preventDefault();
    //        if (this.state.email && this.state.password) {
    //            API.loginUser({
    //                email: this.state.email,
    //                password: this.state.password
    //            }).then(res => {
    //                console.log(res);
    //                this.props.history.push("/");
    //            })
    //                .catch(err => console.log(err));
    //        };
    //    };
