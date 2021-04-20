import React, { Component } from 'react';
import './ImgComp.scss';

class ImgComp extends Component {
  render() {
    const { info } = this.props;
    console.log(info);
    console.log(info.realted_products);

    return (
      <ul className="img-wrapper">
        {info.realted_products &&
          info.realted_products.map(card => {
            return (
              <li key={card.id} className="related-items-list">
                <img src={card.rel_img} alt="no image" />
                <p className="item-name">{card.name}</p>
                <p className="item-price">{card.price}원</p>
              </li>
            );
          })}
      </ul>
    );
  }
}

export default ImgComp;
