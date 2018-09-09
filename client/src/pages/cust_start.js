// JavaScript source code
import React, { Component } from "react";
import CustLog from "./cust_login";
import CustReg from "./cust_reg";
//import API from "../utils/API";

class CustStart extends Component {
    state = {
        email: "",
        password: "",
        message: "",
        isHidden: true
    }


    render() {
        return (
            <div className="container-fluid wpc-about">
                <div className="row" id="top">
                    <div className="wpc-about-us divcenter ">
                        <CustLog />
                        <br/>
                        <CustReg />
                    </div>
                </div>
            </div>
        )
    }
}

export default CustStart;
