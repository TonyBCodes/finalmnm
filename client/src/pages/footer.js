// JavaScript source code
// JavaScript source code
import React from "react";
import { Link } from "react-router-dom";


const Footer = () => (

    <div >
        <footer className="footer">
            <div className="navbar content has-text-centered greybg">

                <a className="navbar-item padding0" href="/">
                    <img className="navbarpic greyorangebg" src="/img/logo1.png" alt="Mix and Ming" />
                </a>

                <a className="navbar-item greyorangebg" href="#">
                    <span className="button1text createeventtext">
                        <img className="goldicon" src="/img/faviconb.jpg" alt="MAndM" />
                        Create Your Event Now!!
                    </span>
                </a>
                <div className="box">
                    CONTACT US:<br />
                    Sharon Hill PA USA<br />
                    <a href="mailto:info@mixandming.com" target="_top">info@mixandming.com</a>
                </div>
            </div>
        </footer>
    </div>

);

export default Footer;