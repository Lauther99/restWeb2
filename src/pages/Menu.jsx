import React from 'react';
import HighlightedText from '../components/HighlightedText';
import Slice from '../components/Slice';
import menuBg from '../assets/images/menuBg.jpeg'
import '../assets/styles/menu.css'
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <section className='menu-container'>
            <div className='slogan-container'>
                <h1>
                    Desde el corazón de nuestro hogar
                    <HighlightedText
                        text={'hacia el tuyo . . .'}
                        colorText={'--main-color'}
                        bgColor={'--main-highlight-bg'}
                    />
                </h1>
            </div>
            <Slice title={'MENU'} bgImage={menuBg}/>
            <article className='menu-description'>
                <p>
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
        </section>
    );
};

export default Menu;