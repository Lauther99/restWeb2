import React, { useEffect } from 'react';

import Footer from '../../components/Footer'
import Logo from '../../assets/images/logoChe3.png'
import Caldito from '../../assets/images/homeImage.jpeg'

import Slider from './components/Slider'
import Slider2 from './components/Slider2'

import './styles/index.css'

const Home = () => {

    let promos = [
        {
            imagen: "https://scontent.fpiu2-1.fna.fbcdn.net/v/t39.30808-6/431869721_1299685904313183_1282931894421355796_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHZM-DNpLMjP_v51nxSaYVIp7VHe5rwoUantUd7mvChRkv3b73BT5kq_nAVDbcQKjzLpFJZjocINIgWFMzDgCiR&_nc_ohc=Pelr7BscI0kAb7on0zX&_nc_oc=AdhWJ3tEd-nHx00Bvasi9XkeAcCb3Fd54zxuKqu4h7vGwEMH0jy3rm8FgsdDqMdITis&_nc_ht=scontent.fpiu2-1.fna&oh=00_AfDlLyR7bWda3QT5H0fs20YtVzxPnpgLyeS88yQr2UXBKQ&oe=662DA4DC",

        },
        {
            imagen: "https://scontent.fpiu2-1.fna.fbcdn.net/v/t39.30808-6/431929066_1299685914313182_2036666616869323662_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGY7StzaU1ejDDXzPWudXvERXncKcpRvmxFedwpylG-bNNr7N3OMWj7P9hPjV_DRryD6lRfGOKr-cisauBz37Mc&_nc_ohc=LSL3BT1UjUEAb6kz5S8&_nc_ht=scontent.fpiu2-1.fna&oh=00_AfAMp0ygA4GwScD4aKXwoP_KRVTQRjT7632sFUOC6wNMnw&oe=662DBA8A",

        },
        {
            imagen: "https://scontent.fpiu2-2.fna.fbcdn.net/v/t39.30808-6/431898181_1299685894313184_7082901570527481732_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFlAAvbv6dnyNWGvxz8nKR3VB-WLZRRWjBUH5YtlFFaMJbCr9lB5ceFM_a1pahpzBFA-qKONi6clfhId8yBQKKJ&_nc_ohc=8CYjYudj3JsAb41KRdO&_nc_ht=scontent.fpiu2-2.fna&oh=00_AfDRQPlRi8V30VYkoh21wL-jSJi9drUfZC0a1_Q2kObCSw&oe=662DAE13",

        },
        {
            imagen: "https://scontent.fpiu2-1.fna.fbcdn.net/v/t39.30808-6/406885301_1237930787155362_2102223621602655985_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFtnUVyqke3DVhnFH_YKLMKN8Gaz0WEOkQ3wZrPRYQ6RJmVloQ6mGP_1DCguxLXLJe4wb9PV08tLvE6E85zKkPc&_nc_ohc=Gz1jksPZ85gQ7kNvgFEjGh0&_nc_ht=scontent.fpiu2-1.fna&oh=00_AfDpgeS6_WnMzTZq4YJ4A4Wrs2ppPrHGIJL1b6Vdgfj7hw&oe=662DBF48",

        },
        {
            imagen: "https://scontent.fpiu2-2.fna.fbcdn.net/v/t39.30808-6/405381801_1235660257382415_3014935332659649813_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEiYhLG97bUUpkVj-2tsGACbE81mzUsrZhsTzWbNSytmJvJQqKsrazjzYxSTu3uTx5eBQJxr3a_baZLPaWRiXsP&_nc_ohc=8P8yuL4J_iwAb4xswQP&_nc_ht=scontent.fpiu2-2.fna&oh=00_AfCz-ERm2-7YXYZkBl7El-e8MKV-NGBSl53JcPY3RoBuLw&oe=662DA49A",
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
                    <li><h2>Desde el corazón de nuestro hogar</h2></li>
                    <li><h2>hacia el tuyo...</h2></li>
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
                    <img src="https://scontent.fpiu2-2.fna.fbcdn.net/v/t39.30808-6/405260671_1234488544166253_4766368705041785995_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEfPL3TLSZfyw3x4DCO446l3tmpNu2Qe8Te2ak27ZB7xPB2PjkOMvtaWH0XnW0RNIqqOvoVuM_ABRhRNEODeo8P&_nc_ohc=2qwww3bq8rsAb5MTdGr&_nc_ht=scontent.fpiu2-2.fna&oh=00_AfCW7CKrBIB9es8IoIl8dA1bIzC1UodT3FvO7zuYHfK6vA&oe=662CA0EB" alt="Restaurante Donde el che - Alitas a la BBQ" />
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