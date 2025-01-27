import React, { useEffect } from 'react';

import Footer from '../../components/Footer'
import Logo from '../../assets/images/logoChe3.png'
import Caldito from '../../assets/images/homeImage.jpeg'

import Slider from './components/Slider'
import Slider2 from './components/Slider2'

import p1 from '../../assets/images/promos/1.jpg'
import p2 from '../../assets/images/promos/2.jpg'
import p3 from '../../assets/images/promos/3.jpg'
import p4 from '../../assets/images/promos/4.jpg'
import p5 from '../../assets/images/promos/5.jpg'
import alitas from '../../assets/images/promos/11.jpg'

import './styles/index.css'

const Home = () => {

    let promos = [
        {
            imagen: p1,

        },
        {
            imagen: p2,

        },
        {
            imagen: p3,

        },
        {
            imagen: p4,

        },
        {
            imagen: p5,
        }
    ];

    const linkPedido = "https://api.whatsapp.com/send?phone=51956433143&text=Quiero%20hacer%20un%20pedido"
    const linkCartaPdf = "https://acortar.link/TlnolE"
    const linkCartaDrive = "https://acortar.link/eQTpxK"
    const linkGMaps = "https://acortar.link/cdvAzH"

    return (
        <main className='home-container' id='home'>
            <div className='top-bar'>
                <img src={Logo} alt="Restaurante Donde el Che - Caldo de Gallina" />
            </div>

            <section className='banner-section'>
                <div className='filter-image'></div>
                <img src={Caldito} alt="Restaurante Donde el Che - Caldo de gallina" />
                <ul>
                    <li><h2>Desde el corazón de nuestro hogar<br />hacia el tuyo...</h2></li>
                    <li>
                        <a className='btn-box' href={linkPedido} target='_blank' rel='noopener noreferrer'>
                            Haz tu pedido
                        </a>
                    </li>
                </ul>
            </section>

            <section className='section promos'>
                <article className='section-container'>
                    <h2>Nuestras promos</h2>
                    <Slider2 promos={promos}/>
                    {/* <Slider promos={promos}/> */}
                </article>
            </section>

            <section className='section'>
                <article className='section-container article-menu'>
                    <img src={alitas} alt="Restaurante Donde el che - Alitas a la BBQ" />
                    <ul>
                        <li><h2 className='section-title'>Explora Nuestro Menú</h2></li>
                        <li><p className='section-text'>Explora nuestra selección de sabores marinos, parrillas, ceviches y más. En nuestra carta encontrarás una variedad de platillos deliciosos, preparados con los mejores ingredientes para satisfacer tu apetito y deleitar tu paladar. Sumérgete en una experiencia culinaria inolvidable con nosotros.</p></li>
                        <li><a className='btn-box' href={linkCartaDrive} target='_blank' rel='noopener noreferrer'>Nuestra carta</a></li>
                    </ul>
                </article>
            </section>

            <section className='section'>
                <article className='section-container ubicacion'>
                    <ul>
                        <li><h2 className='section-title'>Encuéntranos</h2></li>
                        <li><p className='section-text'>Estamos ubicados en Av. A 47-49 Lateral, frente a la Municipalidad provincial de Talara.</p></li>
                        <li><a className='btn-box' href={linkGMaps} target='_blank' rel='noopener noreferrer'>Ver en maps</a></li>
                    </ul>
                    <div class="google-map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3977.0841575727195!2d-81.27199592520958!3d-4.578907248089638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x90364548d78fc855%3A0x19ba6fdddd6c662f!2sDonde%20el%20Che!5e0!3m2!1ses!2spe!4v1713833618114!5m2!1ses!2spe" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
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
                        <li><a className='btn-box' href={linkPedido} target='_blank' rel='noopener noreferrer'>Haz tu pedido ahora</a></li>
                    </ul>
                </article>
            </section>

            <Footer />
        </main>
    );
};

export default Home;
