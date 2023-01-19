import React from 'react';
import Slice from '../components/Slice';
import contactBg from '../assets/images/contactImg.jpeg'
import HighlightedText from '../components/HighlightedText'
import wspIcon from '../assets/images/wsp.svg'
import phoneIcon from '../assets/images/phone.svg'
import '../assets/styles/contact.css'

const Contact = () => {
    return (
        <section id='contact' className='contact-container'>
            <Slice title={'DESEAS REALIZAR UNA'} title2={'RESERVA?'} bgImage={contactBg} />
            <article className='contact-sc-container' data-aos="fade">
                <a href={'https://api.whatsapp.com/send?phone=%2B51956433143&text='} target="_blank" className='contact-item'>
                    <div className='contact-icon' style={{ backgroundImage: `url(${wspIcon})` }}></div>
                    <p>
                        Comunícate con nosotros a nuestro whatsapp
                        <HighlightedText
                            text={'aquí'}
                            bgColor={'--main-highlight-bg'}
                            colorText={'--main-color'}
                        />
                    </p>
                </a>
                <div className='contact-item' data-aos="fade">
                    <div className='contact-icon' style={{ backgroundImage: `url(${phoneIcon})` }}></div>
                    <p>
                        También puedes llamarnos al
                        <HighlightedText
                            text={'+51 956 433 143'}
                            bgColor={'--main-highlight-bg'}
                            colorText={'--main-color'}
                        />
                    </p>
                </div>
            </article>
        </section>
    );
};

export default Contact;