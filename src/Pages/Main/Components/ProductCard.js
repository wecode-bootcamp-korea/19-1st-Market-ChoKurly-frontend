import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.scss';

class ProductCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { x, productArray } = this.props;

    return (
      <div
        className="product-card-container"
        // style={{ transform: `translateX(${x}%)` }}
      >
        {productArray.map(item => {
          return (
            <div
              key={item.id}
              className="product-card"
              style={{ transform: `translateX(${x}%)` }}
            >
              <Link to="/main" className="product-link">
                <img
                  className="product-img"
                  alt="product"
                  src={item.productUrl}
                />
              </Link>
              <div className="product-info">
                <Link to="/main" className="product-name">
                  <span>{item.name}</span>
                </Link>
                <div className="listed-price">
                  <span className="product-discount">{item.discount}%</span>
                  <span className="product-price">{item.price}원</span>
                </div>
                <div className="product-original-price">
                  {item.originalPrice}원
                </div>
              </div>
              {item.sticker && (
                <span className="product-sticker">{item.sticker}</span>
              )}
            </div>
          );
        })}
      </div>
    );
  }
}

export default ProductCard;
