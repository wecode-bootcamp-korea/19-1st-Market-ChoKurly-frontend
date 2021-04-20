import React, { Component } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './LimitedEvent.scss';

const eventProduct = {
  id: 1,
  thumbnail_image: '/images/Main/limited.jpg',
  name: '[디저트] 달달한 생크림과 팬케이크',
  discount_rate: 0.15,
  discounted_price: 17850,
  original_price: 21000,
  sticker: '20%농할쿠폰',
  comment: '기분을 좋게 하는 달콤함!',
};

class LimitedEvent extends Component {
  constructor() {
    super();
    this.state = {
      time: '',
    };
  }

  componentDidMount() {
    this.setTimer();
  }

  componentWillUnmount() {
    this.setTimer();
  }

  setTimer = () => {
    const timer = setInterval(() => {
      let countdownDate = new Date('Apr 24, 2021, 00:00:00').getTime();
      let now = new Date().getTime();
      let remainingTime = countdownDate - now;
      const MILLISECONDS = 1000;
      const SECONDS = 60;
      const MINUTES = 60;
      const HOURS = 24;
      const MSSSMMHH = MILLISECONDS * SECONDS * MINUTES * HOURS;
      const MSSSMM = MILLISECONDS * SECONDS * MINUTES;
      const MSSS = MILLISECONDS * SECONDS;

      let hours = Math.floor((remainingTime % MSSSMMHH) / MSSSMM);
      let minutes = Math.floor((remainingTime % MSSSMM) / MSSS);
      let seconds = Math.floor((remainingTime % MSSS) / MILLISECONDS);

      const twoDigits = time => {
        return (time < 10 ? '0' : '') + time;
      };

      this.setState({
        time: `${twoDigits(hours)}:${twoDigits(minutes)}:${twoDigits(seconds)}`,
      });

      if (remainingTime < 0) {
        clearInterval(timer);
        return;
      }
    }, 1000);
  };

  render() {
    const { time } = this.state;
    return (
      <div className="event-container">
        <div className="event-info">
          <div className="event-title">
            <span className="event-name">일일특가</span>
            <span className="event-subname">24시간 한정 특가</span>
            <span className="event-msg">🕒 망설이면 늦어요!</span>
          </div>
          <div className="event-product">
            <ProductCard
              product={eventProduct}
              productLimited={{
                height: '340px',
                width: '695px',
              }}
            />
            <div className="event-timer">
              <span className="time">{time} 남음</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LimitedEvent;
