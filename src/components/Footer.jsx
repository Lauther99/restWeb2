import React from 'react';
import { Link } from 'react-scroll';
import logoChe from '../assets/images/logoChe2.jpg'

const Footer = () => {
    return (
        <article className='footer-container'>
            {/* <ul className="footer-link">
                <Link to="home">Inicio</Link>
                <Link to="menu">Menú</Link>
                <Link to="services">Servicios</Link>
                <Link to="about">Nosotros</Link>
                <Link to="contact">Contáctanos</Link>
                <Link to="gallery">Galería</Link>
            </ul> */}
            <div className='social-div'>
                <h3>Síguenos en:</h3>
                <div className='social-icons'>
                    <a href="https://www.instagram.com/dondelche/" target="_blank"><i className="fa-brands fa-instagram fa-xl"></i></a>
                    <a href="https://www.facebook.com/dondelcheperu" target="_blank"><i className="fa-brands fa-facebook fa-xl"></i></a>
                </div>
            </div>
            
            <div className='location-div'>
                <h3>Ubícanos en:</h3>
                <p><i className="fa-solid fa-location-dot"></i> Av. A 47-49b lateral - Talara, Perú</p>
                <h3>Contáctanos</h3>
                <p><i className="fa-solid fa-phone"></i> +51 956 433 143</p>
                <h3>Escríbenos</h3>
                <p><i className="fa-solid fa-envelope"></i> mailto@gmail.com</p>
            </div>
            
            <div className='logo-div'>
                <Link to="home"><img src={logoChe} alt="Restaurante Donde el che Talara" /></Link>
                <p>Copyright © 2024 Donde el Che. <br/> Todos los derechos reservados.</p>
            </div>
        </article>
    );
};

export default Footer;