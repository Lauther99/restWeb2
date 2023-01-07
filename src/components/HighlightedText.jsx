import React from 'react';

const HighlightedText = ({ text, bgColor, colorText }) => {

    return (
        <article>
            <div className="highlight" style={{ backgroundColor: `var(${bgColor})`, color: `var(${colorText})` }}>
                {text}
            </div>
        </article>
    );
};

export default HighlightedText;