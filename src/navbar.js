import React from 'react';
import {useNavigate} from "react-router-dom";
import i18next from "i18next";
import {useTranslation} from "react-i18next";
import {Dropdown} from "react-bootstrap";

const language=[
    {
        code: 'uz',
        name: 'UZ',
        country_code: 'uz'
    },
    {
        code: 'en',
        name: 'EN',
        country_code: 'gb'
    },
    {
        code: 'ru',
        name: 'RU',
        country_code: 'ru'
    }
];

function Navbar(props) {

    const navigate = useNavigate();
    const {t} =useTranslation();

    return (
        <div id="navbar" className="container d-flex justify-content-between">
            <div onClick={()=>{navigate("/")}} className="navbar-brand">
                <img src="/icons/Plant.svg" alt="Logo"/>
            </div>
            <ul className="navbar">
                <li onClick={()=>{navigate("/")}}  className="nav-link">{t('home')}</li>
                <li onClick={()=>{navigate("/services")}} className="nav-link">{t('services')}</li>
                <li onClick={()=>{navigate("/aboutUs")}}  className="nav-link">{t('about')}</li>
                <li className="nav-link">{t('blog')}</li>
                <li className="nav-link">{t('contact')}</li>
            </ul>
            <div className="btns">
                <div className='language-box'>
                    <Dropdown>
                        <Dropdown.Toggle variant="primary" id="dropdown-basic">
                            {i18next.language}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {
                                language.map(({code, name, country_code})=>(
                                    <li key={country_code}>
                                        <div onClick={()=>i18next.changeLanguage(code)} className='d-flex'>
                                            <Dropdown.Item>
                                                {name}
                                            </Dropdown.Item>
                                        </div>
                                    </li>
                                ))
                            }
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <a className="link">{t('login')}</a>
                <button type="button"  className="btn btn-success">{t('SignUp')}</button>
            </div>
        </div>
    );
}

export default Navbar;