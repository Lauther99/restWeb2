import React from 'react';

const CardStandart = ({cardTitle, cardDescription, styleCardImage}) => {
    return (
        <article className='card-container'>
            <div className='card-image' style={styleCardImage}></div>
            <h1>{cardTitle}</h1>
            <p>{cardDescription}</p>
        </article>
    );
};

export default CardStandart;