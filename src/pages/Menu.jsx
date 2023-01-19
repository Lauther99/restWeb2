import React from 'react';
import HighlightedText from '../components/HighlightedText';
import Slice from '../components/Slice';
import menuBg from '../assets/images/menuBg.jpeg'
import '../assets/styles/menu.css'
import { Link } from 'react-scroll';
import { Element } from 'react-scroll';

const Menu = () => {
    return (
        <section id='menu' data-aos="fade">
            <div className='slogan-container'>
                <h1 data-aos="slide-right">
                    Desde el corazón de nuestro hogar
                </h1>
                <HighlightedText
                    text={'hacia el tuyo . . .'}
                    colorText={'--main-color'}
                    bgColor={'--main-highlight-bg'}
                />
            </div>
            <div className='menu-container'>
                <Slice title={'MENU'} bgImage={menuBg}/>
                <article className='menu-description' data-aos='zoom-in'>
                    <p >
                        Disfrute de nuestra oferta actual de deliciosos platos, elaborados con ingredientes locales de nuestros amigos y vecinos.
                    </p>
                    <Link to='/'>
                        <HighlightedText
                            text={'Mira nuestro menú'}
                            bgColor={'--alt-highlight-bg'}
                            colorText={'--light-color-text'}
                        />
                    </Link>
                </article>
            </div>
        </section>
    );
};

export default Menu;