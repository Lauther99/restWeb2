import React from 'react';
import Slice from '../components/Slice';
import contactBg from '../assets/images/contactImg.jpeg'
import { Link } from 'react-router-dom';
import HighlightedText from '../components/HighlightedText'
import Footer from '../components/Footer';
import wspIcon from '../assets/images/wsp.svg'
import phoneIcon from '../assets/images/phone.svg'
import '../assets/styles/contact.css'

const Contact = () => {
    return (
        <section id='contact'>
            <Slice title={'DESEAS REALIZAR UNA'} title2={'RESERVA?'} bgImage={contactBg} />
            <article className='contact-container'>
                <div className='contact-item'>
                    <div className='contact-icon' style={{ backgroundImage: `url(${wspIcon})` }}></div>
                    <p>
                        Comunícate con nosotros a nuestro whatsapp
                        <a href={'https://api.whatsapp.com/send?phone=%2B51956433143&text='} target="_blank">
                            <HighlightedText
                                text={'aquí'}
                                bgColor={'--main-highlight-bg'}
                                colorText={'--main-color'}
                            />
                        </a>
                    </p>
                </div>
                <div className='contact-item'>
                    <div className='contact-icon' style={{ backgroundImage: `url(${phoneIcon})` }}></div>
                    <p>
                        Tambien puedes llamarnos al
                        <HighlightedText
                            text={'+51 956 433 143'}
                            bgColor={'--main-highlight-bg'}
                            colorText={'--main-color'}
                        />
                    </p>
                </div>
            </article>
            <Footer />
        </section>
    );
};

export default Contact;