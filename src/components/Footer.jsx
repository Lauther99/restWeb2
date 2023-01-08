import React from 'react';
import { Link } from 'react-scroll';
import logoChe from '../assets/images/logoChe.png'

const Footer = () => {
    return (
        <article className='footer-container'>
            <ul className="footer-link">
                <Link to="home">Inicio</Link>
                <Link to="menu">Menú</Link>
                <Link to="galery">Galería</Link>
                <Link to="about">Nosotros</Link>
                <Link to="services">Servicios</Link>
                <Link to="contact">Contáctanos</Link>
            </ul>

            <div className='location-div'>
                <h3>Ubícanos en:</h3>
                <p><i className="fa-solid fa-location-dot"></i> Av. A-49b lateral - Talara, Perú</p>
                <h3>Contáctanos</h3>
                <p><i className="fa-solid fa-phone"></i> +51 123 123 123</p>
                <h3>Escríbenos</h3>
                <p><i className="fa-solid fa-envelope"></i> mailto@gmail.com</p>
            </div>
            <div className='social-div'>
                <h3>Síguenos en:</h3>
                <div className='social-icons'>
                    <a href="https://www.instagram.com" target="_blank"><i className="fa-brands fa-instagram fa-xl"></i></a>
                    <a href="https://www.facebook.com/MatthewDota" target="_blank"><i className="fa-brands fa-facebook fa-xl"></i></a>
                </div>
            </div>
            <div className='logo-div'>
                <img src={logoChe} alt="Resaurante Donde el che Talara" />
                <p>Copyright © 2023 Donde el che. All rights reserved.</p>
            </div>
        </article>

    );
};

export default Footer;