import React from "react";
import './Footer.css';
import { assets } from "../../assets/assets";
import { Link } from 'react-router-dom';
const Footer = () => {
    return(
        <div className="footer" id="footer">
            <div className="footer-content">
                <div className="footer-content-left">
                    <h2>Tareesh..</h2>
                    <p>Savor delicious dishes delivered fast to your door.</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt=""/>
                        <img src={assets.twitter_icon} alt=""/>
                        <img src={assets.linkedin_icon} alt=""/>
                    </div>
                </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Help</li>
                        <li>Privacy Policy</li>
                    </ul>
            </div>
        <div className="footer-content-right">
            <h2>Git in Touch</h2>
                 <ul>
                    <li> +91 7569906172</li>
                    <li> tareeshpasarla172@gmail.com</li>
                    <Link to='/'><li>@ tareesh_172</li></Link>
                    
                </ul>
            <div className="app-downlode-platforms">
                <img src={assets.play_store} alt="playstore-app"/>
                <img src={assets.app_store} alt="appstore-app"/>
            </div>
        </div>
    </div>
    <hr/>
    <p className="footer-copyright"> copyright 2024 &copy; Ahmedo.com-All Rights Reserved</p>
</div>
    )
}

export default Footer;