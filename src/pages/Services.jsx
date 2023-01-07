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
    const styleCard = {
        width: '130px',
        height: '130px',
        backgroundImage: `url(${birthdayCake})`
    }
    const styleCard2 = {
        width: '130px',
        height: '130px',
        backgroundImage: `url(${delivery})`
    }
    const styleCard3 = {
        width: '130px',
        height: '130px',
        backgroundImage: `url(${dish})`
    }

    return (
        <section className='services-container'>
            <Slice
                title={'SERVICIOS'}
                bgImage={servicesBg}
                bgColorSlice={'--main-bg-color'}
            />
            <article className='services-details'>
                <p>Atendiendo desde 2009</p>
                <h1>
                    A tu servicio por
                    <HighlightedText
                        text={'más de 13 años'}
                        colorText={'--main-color'}
                        bgColor={'--main-highlight-bg'}
                    />
                </h1>
                <article className='services-cards'>
                    <CardStandart
                        cardTitle={'Birthday Catering'}
                        cardDescription={'Celebra tu cumpleaños con nosotros!'}
                        styleCardImage={styleCard}
                    />
                    <CardStandart
                        cardTitle={'Delivery'}
                        cardDescription={'¿Te gustaría solicitar un servicio de entrega a domicilio?'}
                        styleCardImage={styleCard2}
                    />
                    <CardStandart
                        cardTitle={'Visítanos'}
                        cardDescription={'Prueba nuestros deliciosos platos! ¡Te esperamos! '}
                        styleCardImage={styleCard3}
                    />
                </article>
            </article>
        </section>
    );
};

export default Services;