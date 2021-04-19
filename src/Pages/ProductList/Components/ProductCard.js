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
              src={product.productUrl}
              style={{ ...productSize, ...productBorder }}
            />
          </Link>
          <div className="product-info">
            <Link to="/main" className="product-name" style={fontStyle}>
              <span>{product.name}</span>
            </Link>
            <div className="listed-price" style={fontStyle2}>
              {product.sticker && (
                <span className="product-discount">
                  {(Number(product.discount) * 100).toLocaleString('en-US')}%
                </span>
              )}
              <span className="product-price">
                {Number(product.price).toLocaleString('en-US')}원
              </span>
            </div>
            <div className="product-original-price">
              {Number(product.price).toLocaleString('en-US')}원
            </div>
            <div className="product-intro">{product.intro}</div>
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
