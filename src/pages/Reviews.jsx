import { GoogleMap, useLoadScript } from '@react-google-maps/api';
import React from 'react';
import Slice from '../components/Slice';
import '../assets/styles/reviews.css'
import reviewsBg from '../assets/images/clientsBg.jpeg'
import GoogleMapsReviews from 'google-maps-reviews';

const Reviews = () => {



    return (
        <section>
            <Slice title={'NUESTROS'} title2={'CLIENTES'} title3={'OPINAN'} bgImage={reviewsBg}/>
            {/* <div className='map-container'>
                <GoogleMap
                    zoom={10}
                    center={{ lat: 44, lng: -80 }}
                    mapContainerClassName="map-container">
                </GoogleMap> 
            </div>*/}
            <div id='google-reviews'></div>
        </section>
    );
};

export default Reviews;