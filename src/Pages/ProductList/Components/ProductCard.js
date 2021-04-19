import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.scss';

class ProductCard extends Component {
  constructor() {
    super();
    this.state = {
      addCart: false,
    };
  }

  clickCartButton = () => {
    this.setState({
      addCart: true,
    });
  };

  render() {
    const {
      product,
      moveX,
      productSize,
      productBorder,
      fontStyle,
      fontStyle2,
      productMargin,
    } = this.props;

    return (
      <div className="product-card-container" style={productMargin}>
        <div key={product.id} className="product-card" style={moveX}>
          <Link to="/main" className="product-link" style={productSize}>
            <img
              className="product-img"
              alt="product"
              src={product.thumbnail_image}
              style={{ ...productSize, ...productBorder }}
            />
          </Link>
          <div className="product-info">
            <Link to="/main" className="product-name" style={fontStyle}>
              <span>{product.name}</span>
            </Link>
            <div className="listed-price" style={fontStyle2}>
              {product.discount_rate && (
                <span className="product-discount">
                  {(product.discount_rate * 100).toLocaleString('en-US')}%
                </span>
              )}
              <span className="product-price">
                {product.discounted_price
                  ? product.discounted_price.toLocaleString('en-US')
                  : Number(product.original_price).toLocaleString('en-US')}
                원
              </span>
            </div>
            {product.discount_rate && (
              <div className="product-original-price">
                {Number(product.original_price).toLocaleString('en-US')}원
              </div>
            )}
            {product.comment && (
              <div className="product-intro">{product.comment}</div>
            )}
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
