import React, { useState, useRef, useEffect } from 'react';

const PromosCard = ({ promos }) => {
  const containerRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(true);
  
  const handleMouseEnter = (event) => {
    event.target.classList.add('active');
    setIsScrolling(false)
  };

  const handleMouseLeave = (event) => {
    event.target.classList.remove('active');
    setIsScrolling(true);
  };
  
  useEffect(() => {
    if (containerRef.current) {
      let nodes = Array.from(containerRef.current.childNodes)
      if (nodes.length < 6) {
        nodes = nodes.slice(0, 5);
        nodes.forEach(node => {
          const copy = node.cloneNode(true);
          containerRef.current.appendChild(copy);
        });
      }
    }

    const cardImages = document.querySelectorAll('.card-image');
    // Iterar sobre los elementos y agregar el evento onMouseEnter
    cardImages.forEach(cardImage => {
      cardImage.addEventListener('mouseenter', handleMouseEnter);
      cardImage.addEventListener('mouseleave', handleMouseLeave);
    });

    // Cleanup: remover el evento onMouseEnter cuando el componente se desmonta
    return () => {
      cardImages.forEach(cardImage => {
        cardImage.removeEventListener('mouseenter', handleMouseEnter);
        cardImage.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  const scrollerClass = isScrolling ? 'images-scroller' : 'images-scroller paused';

  return (
    <div className='scroller'>
      <ul className={scrollerClass} ref={containerRef}>
        {
          promos.map((p, i) => (
            <li key={i}>
              <img className='card-image' src={p.imagen} alt="" />
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default PromosCard;