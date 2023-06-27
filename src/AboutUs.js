import React from 'react';
import Navbar from "./navbar";

function AboutUs(props) {
    return (
        <>
            <Navbar/>
        <div className="container" id="About">
            <div className="row">
                <div className="col-md-6">
                    <div className="back">
                        <div className="img-fluid">
                            <img src="/images/company.png" alt="company"/>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <h6>About Us</h6>
                    <h4>Continue to Develop to Became Global Company</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu, tempor, accumsan sit amet nunc
                        cursus. Nec tristique at in erat lectus mas sa diam. Lectus elit, nulla elementum fringilla at.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu, tempor, accumsan sit amet nunc
                        cursus. Nec tristique at in erat lectus mas sa diam. Lectus elit, nulla elementum fringilla
                        at.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu, tempor, accumsan sit amet nunc cursus. </p>
                    <button className="btn btn-success">Read More</button>
                </div>
            </div>
        </div>
        </>
    );
}

export default AboutUs;