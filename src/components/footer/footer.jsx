import React from 'react';
import "./footer.css"
import logoBlanco from "../../assets/images/logos/logoBlanco.png"
import { NavLink } from 'react-router-dom';
import iconFacebook from "../../assets/images/icons/iconFacebook.svg";
import iconTwitter from "../../assets/images/icons/iconTwitter.svg";
import iconMail from "../../assets/images/icons/iconMail.svg";
import iconInstagram from "../../assets/images/icons/iconInstagram.svg";

const Footer = () => {
    return (
        <div className='footer'>
            <NavLink to={'/'} className='footerLogo'><img src={logoBlanco} alt="" />SPAGtienda</NavLink>
            <div className="footerIcons">
                <p className='footerProximamente'>Proximamente en</p>
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