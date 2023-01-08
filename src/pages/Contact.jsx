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
        <section>
            <Slice title={'DESEAS REALIZAR UNA'} title2={'RESERVA?'} bgImage={contactBg} />
            <div className='contact-container'>
                <div className='contact-icon' style={{backgroundImage: `url(${wspIcon})`}}></div>
                <p>
                    Comunícate con nosotros a nuestro whatsapp
                    <Link to={''}>
                        <HighlightedText
                            text={'aquí'}
                            bgColor={'--main-highlight-bg'}
                            colorText={'--main-color'}
                        />
                    </Link>
                </p>
            </div>
            <div className='contact-container'>
                <div className='contact-icon' style={{backgroundImage: `url(${phoneIcon})`}}></div>
                <p>
                    Tambien puedes llamarnos al
                        <HighlightedText
                            text={'+51 123 123 123'}
                            bgColor={'--main-highlight-bg'}
                            colorText={'--main-color'}
                        />
                </p>
            </div>
            <Footer />
        </section>
    );
};

export default Contact;