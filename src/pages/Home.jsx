import React from 'react';
import NavBar from '../components/NavBar';
import Logo from '../assets/images/logoChe2.jpg'
import '../assets/styles/home.css'
import Menu from './Menu';
import Services from './Services';
import About from './About';
import Reviews from './Reviews';
import Contact from './Contact';

const Home = () => {
    return (
        <section className='home-container' id='home'>
            <NavBar />
            <div className='filter-image'></div>
            <div className='cheLogo'>
                <img src={Logo} alt=""/>
            </div>
            <Menu />
            <Services />
            <About />
            <Reviews />
            <Contact />
        </section>
    );
};

export default Home;