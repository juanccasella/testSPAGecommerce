import React from 'react';
import "./footer.css"
import logoVerde from "../../assets/images/logos/logoVerde.png"
import { NavLink } from 'react-router-dom';
import iconFacebook from "../../assets/images/icons/iconFacebook.svg";
import iconTwitter from "../../assets/images/icons/iconTwitter.svg";
import iconMail from "../../assets/images/icons/iconMail.svg";
import iconInstagram from "../../assets/images/icons/iconInstagram.svg";

const Footer = () => {
    return (
        <div className='footer'>
            <NavLink to={'/'} className='footerLogo'>
            <img src={logoVerde} alt="" />
            <span>SPAG tienda</span>
            </NavLink>
            <div className="footerIcons">
                <img src={iconFacebook} alt="Facebook" />
                <img src={iconTwitter} alt="Twitter" />
                <img src={iconMail} alt="Mail" />
                <img src={iconInstagram} alt="Instagram" />
            </div>
            <p className='footerCopy'>Todos los derechos reservados</p>
        </div>
    );
};

export default Footer;