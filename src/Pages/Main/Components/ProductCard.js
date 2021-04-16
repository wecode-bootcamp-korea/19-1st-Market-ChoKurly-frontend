import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.scss';

class ProductCard extends Component {
  render() {
    const { product, moveX, productSize } = this.props;

    return (
      <div className="product-card-container">
        <div key={product.id} className="product-card" style={moveX}>
          <Link to="/main" className="product-link" style={productSize}>
            <img
              className="product-img"
              alt="product"
              src={product.productUrl}
              style={productSize}
            />
          </Link>
          <div className="product-info">
            <Link to="/main" className="product-name">
              <span>{product.name}</span>
            </Link>
            <div className="listed-price">
              <span className="product-discount">{product.discount}%</span>
              <span className="product-price">{product.price}원</span>
            </div>
            <div className="product-original-price">
              {product.originalPrice}원
            </div>
          </div>
          {product.sticker && (
            <span className="product-sticker">{product.sticker}</span>
          )}
        </div>
      </div>
    );
  }
}

export default ProductCard;
