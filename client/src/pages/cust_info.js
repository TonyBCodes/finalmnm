// JavaScript source code
import React, { Component } from "react";
import { Redirect, withRouter } from 'react-router-dom';
import axios from "axios";

class CustInfo extends Component {
    state = {
        email: this.props.match.params.email,
        password: "",
        conf_pw: "",
        firstname: "",
        lastname: "",
        addr1: "",
        addr2: "",
        city: "",
        state: "",
        zip: "",
        phone: "",
        dob: ""
    }

    renderEventInfoRedirect = () => {
        console.log('in the function');
        this.props.history.push("/event_info/" + this.state.email);
        // return <Redirect to={'/cust_info' + this.state.email} />;
    }

    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    };

    handleChange = event => {
        this.setState({ state: event.target.value });
    }

    pwcheck = event => {
        event.preventDefault();
        console.log("pwcheck");
        console.log(this.state.password);
        console.log(this.state.conf_pw);
        //enforce upper, lower, number but no special characters
        const pwformat = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,16}$/;
        if (this.state.password !== this.state.conf_pw) {
            document.getElementById("pw_msg").style.visibility = "visible";
            document.getElementById("pw_msg").textContent = "The passwords do not match. Password must be entered twice and be identical.";
            setTimeout(function () {
                document.getElementById("pw_msg").style.visibility = "hidden";
            }, 4000);
            return;
        }
        if (this.state.password.length < 8 || this.state.password.length > 16) {
            document.getElementById("pw_msg").style.visibility = "visible";
            document.getElementById("pw_msg").textContent = "Password must be at least 8 characters long and no longer than 16 characters long.";
            setTimeout(function () {
                document.getElementById("pw_msg").style.visibility = "hidden";
            }, 4000);
            return;
        }
        if (!this.state.password.match(pwformat)) {
            document.getElementById("pw_msg").style.visibility = "visible";
            document.getElementById("pw_msg").textContent = "Password does not meet the required format. Password must be 8-16 characters long, contain upper case letters, lower case letters and numbers, and must not contain spaces, special characters, or emoji.";
            setTimeout(function () {
                document.getElementById("pw_msg").style.visibility = "hidden";
            }, 7000);
            return;
        }

        document.getElementById("pw_msg").style.visibility = "visible";
        document.getElementById("pw_msg").textContent = "Password OK";
        document.getElementById("cust_pwinfo").style.visibility = "hidden";
        document.getElementById("cust_pwinfo").style.display = "none";
        document.getElementById("cust_otherinfo").style.visibility = "visible";
        return;
    }

    info_ok = () => {
        if (this.state.firstname === "" ||
            this.state.lastname === "" ||
            this.state.addr1 === "" ||
            this.state.city === "" ||
            this.state.state === "" ||
            this.state.zip === "" ||
            this.state.phone === "" ||
            this.state.dob === "") {
            return false;
        }
        else {
            return true;
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        if (this.info_ok()) {

            console.log('handling form submit...');

            axios.post("/api/signup", this.state)
                .then((res) => {
                    console.log(res);
                    this.renderEventInfoRedirect();
                })
                .catch((err) => {
                    console.log(err);
                });
        }
        else {
            document.getElementById("info_msg").style.visibility = "visible";
            document.getElementById("info_msg").textContent = "The following must be completed: First Name, Last Name, Address Line 1, City, State / Province, Zip Postal Code, Phone Number and Date of Birth";
            setTimeout(function () {
                document.getElementById("info_msg").style.visibility = "hidden";
            }, 10000);
            return;
        }
    };


    render() {
        return (

            <div>

                <div className="columns">
                    <div className="column">
                        <h3><i>Enter Your Information</i></h3>
                    </div>
                </div>
                <div className="columns">
                    <div className="column">
                        <h5>Email address: <b>{this.props.match.params.email}</b></h5>
                    </div>
                </div>
                <div id="cust_pwinfo">
                    <div className="columns">
                        <div className="column is-one-third">
                            <div className="field">
                                <label className="label">Enter Password</label>
                                <input className="input" type="password" name="password" onChange={this.handleInputChange} placeholder="Enter Password" />
                            </div>
                            <div className="field">
                                <label className="label">Confirm Password</label>
                                <input className="input" type="password" name="conf_pw" onChange={this.handleInputChange} placeholder="Confirm Password" />
                            </div>
                        </div>
                    </div>

                    <div className="columns">
                        <div className="column">
                            <p className="help">Your password must be 8-16 characters long, contain upper case letters, lower case letters and numbers, and must not contain spaces, special characters, or emoji.</p>
                        </div>
                    </div>

                    <div className="columns">
                        <div className="column">
                            <a className="button" id="pw_check" type="submit" onClick={this.pwcheck}>Check Your Password</a>
                        </div>
                    </div>
                </div>
                <div className="columns">
                    <div className="column">
                        <div id="pw_msg" className="box invis_box" />
                    </div>
                </div>
                <br />
                <div id="cust_otherinfo">

                    <div className="columns">
                        <div className="column">
                            <label className="label">First Name</label>
                            <div className="control">
                                <input className="input" type="text" name="firstname" onChange={this.handleInputChange} placeholder="First Name" />
                            </div>
                        </div>

                        <div className="column">
                            <label className="label">Last Name</label>
                            <div className="control">
                                <input className="input" type="text" name="lastname" onChange={this.handleInputChange} placeholder="Last Name" />
                            </div>
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column">
                            <label className="label">Address Line 1</label>
                            <div className="control">
                                <input className="input" type="text" name="addr1" onChange={this.handleInputChange} placeholder="Address Line 1" />
                            </div>
                        </div>

                        <div className="column">
                            <label className="label">Address Line 2</label>
                            <div className="control">
                                <input className="input" type="text" name="addr2" onChange={this.handleInputChange} placeholder="Address Line 2" />
                            </div>
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column">
                            <label className="label">City</label>
                            <div className="control">
                                <input className="input" type="text" name="city" onChange={this.handleInputChange} placeholder="City" />
                            </div>
                        </div>
                        <div className="column">
                            <label className="label">State / Province</label>
                            <div className="control">
                                <div className="select tooltip is-tooltip-right is-tooltip-multiline" data-tooltip="Currently serving DE, NJ & PA within 30 miles of Philadelphia.  Additional areas coming soon." value={this.state.state} onChange={this.handleChange}>
                                    <select>
                                        <option value="" />
                                        <option value="DE">DE</option>
                                        <option value="NJ">NJ</option>
                                        <option value="PA">PA</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <label className="label">Zip / Postal Code</label>
                            <div className="control">
                                <input className="input" type="text" name="zip" onChange={this.handleInputChange} placeholder="Zip / Postal Code" />
                            </div>
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column is-one-third">
                            <label className="label">Phone Number</label>
                            <div className="control">
                                <input className="input" type="tel" name="phone" onChange={this.handleInputChange} placeholder="Phone Number" />
                            </div>
                        </div>

                        <div className="column is-one-third">
                            <label className="label">Date of Birth</label>
                            <div className="control">
                                <input className="input" type="date" name="dob" onChange={this.handleInputChange} placeholder="Date Of Birth" />
                            </div>
                        </div>
                    </div>

                    <a className="button" type="submit" onClick={this.handleSubmit}> Save Your Information </a>
                </div>
                <div className="columns">
                    <div className="column">
                        <div id="info_msg" className="box invis_box" />
                    </div>
                </div>

            </div>
        );
    }
}

export default CustInfo;