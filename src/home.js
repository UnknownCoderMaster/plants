import React from 'react';
import Footer from "./footer";
import Navbar from "./navbar";
import {useTranslation} from "react-i18next";

function Home(props) {

    const {t} = useTranslation();

    return (
        <div className="container" id="home">
            <Navbar/>
            <div className="row">
                <div className="col-md-6">
                    <h1>{t('header')}</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu, tempor, accumsan sit amet nunc
                        cursus. Nec tristique at in erat lectus mas sa diam. Lectus elit, nulla elementum fringilla
                        at.</p>
                    <button className="btn btn-success">Learn More</button>
                    <div className="row">
                        <div className="col-md-4">
                            <div>
                                <h3>2000+</h3>
                                <p>Delivery</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div>
                                <h3>1200+</h3>
                                <p>Customers</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div>
                                <h3>1000+</h3>
                                <p>Product</p>
                            </div>
                        </div>
                    </div>
                    <div className="barg">
                        <img src="/images/rotate.png" alt="rotate"/>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="img-fluid">
                        <img src="/images/header.png" alt="Cactus"/>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <h4>
                        We have lots of plants collection for you and your family
                    </h4>
                    <p>See all collection <span><img src="/icons/direct.svg" alt="direct"/></span></p>
                </div>
                <div className="col-md-8">
                    <div className="row">
                        <div className="col-md-4">
                            <img src="/images/collection1.png" alt="collect1"/>
                        </div>
                        <div className="col-md-4">
                            <img src="/images/collection2.png" alt="collect2"/>
                        </div>
                        <div className="col-md-4">
                            <img src="/images/collection3.png" alt="collect3"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="end">
                <div className="title">
                    <div>
                        <h3>Follow Us on Instagram</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu, tempor, accu msan sit amet nunc
                            cursus. Nec tristique at in erat lectus</p>
                    </div>
                </div>
                <div>
                    <img src="/images/insta1.png" alt="insta"/>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Home;