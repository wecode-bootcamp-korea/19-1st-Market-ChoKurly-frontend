import React, { Component } from 'react';
import Taps from '../../../Taps/Taps';
import './ProductImg.scss';
class ProductImg extends Component {
  render() {
    return (
      <article className="product-img">
        <Taps />
        <img
          src="//img-cf.kurly.com/shop/data/goodsview/20191106/gv00000067070_1.jpg"
          alt="choKurly"
        />
      </article>
    );
  }
}

export default ProductImg;
