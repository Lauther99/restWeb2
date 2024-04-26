import React, { useState, useRef, useEffect } from 'react';

const Slider2 = ({ promos }) => {
  const containerRef = useRef(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [timerId, setTimerId] = useState(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSelectedIndex(prevIndex => (prevIndex + 1) % promos.length);
    }, 5000);
    setTimerId(intervalId);
    return () => clearInterval(intervalId);
  }, []);

  const onImageClicked = (index) => {
    setSelectedIndex(index);

    clearInterval(timerId);
    const newTimerId = setInterval(() => {
      setSelectedIndex(prevIndex => (prevIndex + 1) % promos.length);
    }, 5000);
    setTimerId(newTimerId);
  }

  return (
    <div className='epic-slider'>
      <div className='main-image'>
        <ul ref={containerRef}>
          {
            promos.map((p, i) => (
              <li key={i} className={i === selectedIndex ? "image-active" : "image-inactive"}>
                <img src={p.imagen} alt="" />
              </li>
            ))
          }
        </ul>
      </div>

      <ul>
        {
          promos.map((p, i) => (
            <li key={i} className={i === selectedIndex ? "list-image selected" : "list-image"} onClick={() => onImageClicked(i)}>
              <img src={p.imagen} alt="" />
              <h3>{'Promo ' + (i + 1)}</h3>
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default Slider2;