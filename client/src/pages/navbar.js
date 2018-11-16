// JavaScript source code
import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";


const Navbar = () => (
    <div className="columns">
        <nav className="navbar is-transparent centernav sticky">
            <div className="navbar-brand greybg">
                <a className="navbar-item padding0" href="/">
                    <img className="navbarpic greyorangebg" src="/img/logo1.png" alt="Mix and Ming" />
                </a>
                <a className="navbar-item greyorangebg" href="#">
                    <span className="button1text createeventtext">
                        <img className="goldicon" src="/img/faviconb.jpg" alt="MAndM" />
                        Create Your Event Now!!
                    </span>
                </a>
                <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

            <div id="" className="navbar-menu">
                <div className="navbar-start">
                    <a className="navbar-item navbartext greybg" href="/">
                        Home
                    </a>
                    <a className="navbar-item navbartext greybg" href="#">
                        <HashLink to="/#about">About Us</HashLink>
                    </a>
                    <a className="navbar-item navbartext greybg" href="#">
                        <HashLink to="/#services">Services</HashLink>
                    </a>
                    <a className="navbar-item navbartext greybg" href="#">
                        Gallery
                    </a>
                    <a className="navbar-item navbartext greybg" href="/FAQ">
                        FAQ
                    </a>
                    <a className="navbar-item navbartext greybg" href="/cust_start">
                        Login
                    </a>
                    <a className="navbar-item navbartext greybg" href="/api/logout">
                        Logout
                    </a>
                </div>
            </div>
        </nav>
        <br/>
    </div>
);

export default Navbar;