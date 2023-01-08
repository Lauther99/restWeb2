import React from 'react';
import { Link } from 'react-router-dom';
import logoChe from '../assets/images/logoChe.png'

const Footer = () => {
    return (
        <article className='footer-container'>
            <div className='logo-div'>
                <img src={logoChe} alt="Resaurante Donde el che Talara" />
                <p>Copyright © 2023 Donde el che. All rights reserved.</p>
            </div>
            <div className="link-div">
                <ul className="footer-link">
                    <a href="">Inicio</a>
                    <a href="">Menú</a>
                    <a href="">Galería</a>
                    <a href="">Nosotros</a>
                    <a href="">Contáctanos</a>
                </ul>
            </div>
            <div className='location-div'>
                <h3>Ubícanos en:</h3>
                <p><i className="fa-solid fa-location-dot"></i> Av. A-49b lateral - Talara, Perú</p>
                <h3>Contactanos</h3>
                <p><i className="fa-solid fa-phone"></i> +51 123 123 123</p>
                <h3>Escríbenos</h3>
                <p><i className="fa-solid fa-envelope"></i> mailto@gmail.com</p>
            </div>
            <div className='social-div'>
                <a href="instagram.com"><i className="fa-brands fa-instagram"></i></a>
                <a href="facebook.com"><i className="fa-brands fa-facebook"></i></a>
            </div>
        </article>
    );
};

export default Footer;