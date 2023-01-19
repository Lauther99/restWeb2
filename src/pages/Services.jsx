import React from 'react';
import Slice from '../components/Slice';
import servicesBg from '../assets/images/servicesBg.jpeg'
import '../assets/styles/services.css'
import HighlightedText from '../components/HighlightedText';
import CardStandart from '../components/CardStandart';
import birthdayCake from '../assets/images/birthday-cake.svg'
import delivery from '../assets/images/delivery.svg'
import dish from '../assets/images/dish.svg'

const Services = () => {
    return (
        <section className='services-container' id='services'>
            <Slice
                title={'SERVICIOS'}
                bgImage={servicesBg}
                bgColorSlice={'--main-bg-color'}
            />
            <article className='services-details'>
                <p data-aos="slide-right">Atendiendo desde 2009</p>
                <h1 data-aos="slide-right">
                    A tu servicio por
                    <HighlightedText
                        text={'más de 13 años'}
                        colorText={'--main-color'}
                        bgColor={'--main-highlight-bg'}
                    />
                </h1>
                <article className='services-cards' data-aos="fade">
                    <CardStandart
                        cardTitle={'Birthday Catering'}
                        cardDescription={'Celebra tu cumpleaños con nosotros!'}
                        bgImage={birthdayCake}
                    />
                    <CardStandart
                        cardTitle={'Delivery'}
                        cardDescription={'¿Te gustaría solicitar un servicio de entrega a domicilio?'}
                        bgImage={delivery}
                    />
                    <CardStandart
                        cardTitle={'Visítanos'}
                        cardDescription={'Prueba nuestros deliciosos platos! ¡Te esperamos! '}
                        bgImage={dish}
                    />
                </article>
            </article>
        </section>
    );
};

export default Services;