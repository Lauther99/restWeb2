import React from 'react';
import '../assets/styles/slice.css'

const Slice = ({ title, title2, title3, bgImage}) => {
    return (
        <article className='slice-container' >
            <div className='image-slice' style={{ backgroundImage: `url(${bgImage})` }}>
                <div className='filter-slice'>
                    <h1>{title}</h1>
                    <h1>{title2}</h1>
                    <h1>{title3}</h1>
                </div>
            </div>
        </article>
    );
};

export default Slice;