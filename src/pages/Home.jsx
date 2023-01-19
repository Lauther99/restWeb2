import React, { useEffect } from 'react';
import Logo from '../assets/images/logoChe2.jpg'
import '../assets/styles/home.css'
import Menu from './Menu';
import Services from './Services';
import About from './About';
import Reviews from './Reviews';
import Contact from './Contact';
import AOS from 'aos'
import 'aos/dist/aos.css'
import Footer from '../components/Footer'


const Home = () => {
    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 500,
            easing: 'ease-in-sine',
            delay: 100,
        });
    }, []);

    return (
        <section className='home-container' id='home'>
            <div className='filter-image' ></div>
            <div className='cheLogo '>
                <img src={Logo} data-aos="slide-right" alt="" />
            </div>
            <Menu />
            <Services />
            <About />
            <Reviews />
            <Contact />
            <Footer />
        </section>
    );
};

export default Home;