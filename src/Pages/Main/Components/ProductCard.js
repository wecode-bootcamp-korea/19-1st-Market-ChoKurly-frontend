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
      showCart,
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
              <span className="product-discount">{product.discount}%</span>
              <span className="product-price">{product.price}원</span>
            </div>
            <div className="product-original-price">
              {product.originalPrice}원
            </div>
            <div className="product-intro">{product.intro}</div>
          </div>
          {product.sticker && (
            <span className="product-sticker">{product.sticker}</span>
          )}
          {/* {showCart && (
            <button onClick={clickCartButton} className="cart-button">
              <i class="fas fa-shopping-cart fa-lg"></i>
            </button>
          )} */}
        </div>
      </div>
    );
  }
}

export default ProductCard;
