
import React from 'react';
import Slice from '../components/Slice';
import '../assets/styles/reviews.css'
import reviewsBg from '../assets/images/clientsBg.jpeg'

const Reviews = () => {

    jQuery(document).ready(function ($) {
        $("#google-reviews").googlePlaces({
            placeId: 'ChIJVciP10hFNpARL2Zs3d1vuhk'
            , render: ['reviews']
            , min_rating: 4
            , max_rows: 4
        });
    });


    return (
        <section id='reviews' className='reviews-container'>
            <Slice title={'NUESTROS'} title2={'CLIENTES'} title3={'OPINAN'} bgImage={reviewsBg}/>
            <div id='google-reviews' data-aos='fade'></div>
        </section>
    );
};

export default Reviews;