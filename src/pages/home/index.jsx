import React, { useEffect } from 'react';

import Footer from '../../components/Footer'
import Logo from '../../assets/images/logoChe3.png'
import Caldito from '../../assets/images/homeImage.jpeg'

import './styles/index.css'

import AOS from 'aos'
import 'aos/dist/aos.css'


const Home = () => {
    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 500,
            easing: 'ease-in-sine',
            delay: 100,
        });
    }, []);

    return (
        <main className='home-container' id='home'>
            <div className='top-bar'>
                <img src={Logo} alt="Restaurante Donde el Che - Caldo de Gallina" />
            </div>

            <section className='banner-section'>
                <div className='filter-image'></div>
                <img src={Caldito} alt="" />
                <ul>
                    <li><h2>Desde el corazón de nuestro hogar</h2></li>
                    <li><h2>hacia el tuyo...</h2></li>
                    <li>
                        <button className='btn-box'>
                            Haz tu pedido
                        </button>
                    </li>
                </ul>
            </section>
            {/* data-aos="slide-right"  */}
            <section className='section'>
                <article className='section-container article-menu'>
                    <img src="https://scontent.fpiu2-2.fna.fbcdn.net/v/t39.30808-6/405260671_1234488544166253_4766368705041785995_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEfPL3TLSZfyw3x4DCO446l3tmpNu2Qe8Te2ak27ZB7xPB2PjkOMvtaWH0XnW0RNIqqOvoVuM_ABRhRNEODeo8P&_nc_ohc=2qwww3bq8rsAb5MTdGr&_nc_ht=scontent.fpiu2-2.fna&oh=00_AfCW7CKrBIB9es8IoIl8dA1bIzC1UodT3FvO7zuYHfK6vA&oe=662CA0EB" alt="Restaurante Donde el che - Alitas a la BBQ" />
                    <ul>
                        <li><h2 className='section-title'>Explora Nuestro Menú</h2></li>
                        <li><p className='section-text'>Explora nuestra selección de sabores marinos, parrillas, ceviches y más. En nuestra carta encontrarás una variedad de platillos deliciosos, preparados con los mejores ingredientes para satisfacer tu apetito y deleitar tu paladar. Sumérgete en una experiencia culinaria inolvidable con nosotros.</p></li>
                        <li><button className='btn-box'>Nuestra carta</button></li>
                    </ul>
                </article>
            </section>

            <section className='section'>
                <article className='section-container article-ubicacion'>
                    <div class="google-map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3977.0841575727195!2d-81.27199592520958!3d-4.578907248089638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x90364548d78fc855%3A0x19ba6fdddd6c662f!2sDonde%20el%20Che!5e0!3m2!1ses!2spe!4v1713833618114!5m2!1ses!2spe" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <ul>
                        <li><h2 className='section-title'>Encuéntranos</h2></li>
                        <li><p className='section-text'>Estamos ubicados en Av. A 47-49 Lateral, frente a la Municipalidad provincial de Talara.</p></li>
                        <li><button className='btn-box'>Ver en maps</button></li>
                    </ul>
                </article>
            </section>

            <section className='section delivery'>
                <article className='section-container article-delivery'>
                    <ul>
                        <li><h2 className='section-title'>Delivery</h2></li>
                        <li>
                            <p className='section-text'>Disfruta de nuestros deliciosos platillos en casa.</p>
                            <p className='section-text'>Realiza tu pedido y nosotros te lo llevamos.</p>
                        </li>
                        <li><button className='btn-box'>Haz tu pedido ahora</button></li>
                    </ul>
                </article>
            </section>

            {/* <Services /> */}
            {/* <About />
            <Reviews />
            <Contact />*/}
            <Footer /> 
        </main>
    );
};

export default Home;