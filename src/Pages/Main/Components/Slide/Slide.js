import React, { Component } from 'react';
import './Slide.scss';

class Slide extends Component {
  constructor() {
    super();
    this.state = {
      x: 0,
      imgArray: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/mainImgSlide.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(imgData => {
        this.setState({
          imgArray: imgData,
        });
      });

    setInterval(this.goRight, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.goRight);
  }

  goLeft = () => {
    const { x, imgArray } = this.state;
    if (x === 0) {
      this.setState({
        x: -100 * (imgArray.length - 1),
      });
    } else {
      this.setState({
        x: x + 100,
      });
    }
  };

  goRight = () => {
    const { x, imgArray } = this.state;
    if (x === -100 * (imgArray.length - 1)) {
      this.setState({
        x: 0,
      });
    } else {
      this.setState({
        x: x - 100,
      });
    }
  };

  render() {
    const { x, imgArray } = this.state;
    const { goLeft, goRight } = this;

    return (
      <div className="slide-container">
        <div className="slide-img-container">
          {imgArray.map((img, index) => {
            return (
              <div
                key={index}
                className="slide"
                style={{ transform: `translateX(${x}%)` }}
              >
                <img alt={img.alt} src={img.path} />
              </div>
            );
          })}
        </div>

        <button onClick={goLeft} className="go-left">
          <img alt="prev-button" src="/images/Slide/prev.png" />
        </button>
        <button onClick={goRight} className="go-right">
          <img alt="next-button" src="/images/Slide/next.png" />
        </button>
      </div>
    );
  }
}

export default Slide;
