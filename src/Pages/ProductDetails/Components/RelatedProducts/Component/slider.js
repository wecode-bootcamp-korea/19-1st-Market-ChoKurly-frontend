import React, { useState } from 'react';
import ImgComp from '../ImgComp';
import './Slider.scss';

function Slider({ info }) {
  const [x, setX] = useState(0);

  let sliderArr = [
    <ImgComp info={info} />,
    <ImgComp info={info} />,
    <ImgComp info={info} />,
  ];

  const goLeft = () => {
    console.log(x);
    x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100);
  };
  const goRight = () => {
    console.log(x);

    x === -100 * (sliderArr.length - 1) ? setX(0) : setX(x - 100);
  };

  return (
    <div className="slider">
      {sliderArr.map((item, index) => {
        return (
          <div
            key={index}
            className="slide"
            style={{ transform: `translateX(${x}%)` }}
          >
            {item}
          </div>
        );
      })}
      <button id="goLeft" onClick={goLeft}>
        left
      </button>
      <button id="goRight" onClick={goRight}>
        right
      </button>
    </div>
  );
}

export default Slider;
