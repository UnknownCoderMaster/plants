import React from 'react';
import {useNavigate} from "react-router-dom";

function Footer(props) {

    const navigate = useNavigate();

    return (
        <div id="footer" className="d-flex">
            <div>
                <h4>Plant</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adi piscing elit. Diam nibh posuere duis eu non sit integer at
                    placerat amet.</p>
                <div>
                    <button className="btn"><span><img src="/icons/facebook.svg" alt="facebook"/></span></button>
                    <button className="btn"><span><img src="/icons/twitter.svg" alt="twitter"/></span></button>
                    <button className="btn"><span><img src="/icons/greenInsta.svg" alt="instagram"/></span></button>
                </div>
            </div>
            <div>
                <h4>Navigation</h4>
                <ul className="navbar-nav">
                    <li onClick={()=>{navigate("/")}}  className="nav-link">Home</li>
                    <li onClick={()=>{navigate("/aboutUs")}} className="nav-link">About</li>
                    <li className="nav-link">Help & Support</li>
                    <li className="nav-link">Product</li>
                </ul>
            </div>
            <div>
                <h4>About Us</h4>
                <ul className="navbar-nav">
                    <li className="nav-link">Contact</li>
                    <li className="nav-link">Address</li>
                    <li className="nav-link">Blog</li>
                    <li onClick={()=>{navigate("/aboutUs")}} className="nav-link">About Us</li>
                </ul>
            </div>
            <div>
                <h4>Help</h4>
                <ul className="navbar-nav">
                    <li onClick={()=>{navigate("/services")}} className="nav-link">Customers Services</li>
                    <li className="nav-link">FAQs</li>
                    <li className="nav-link">We Are Hiring</li>
                    <li className="nav-link">Returns</li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;