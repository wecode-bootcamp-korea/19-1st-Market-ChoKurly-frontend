import React, { Component } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './ProductCardSlide.scss';

class ProductCardSlide extends Component {
  constructor() {
    super();
    this.state = {
      x: 0,
    };
  }

  goLeft = () => {
    const { x } = this.state;
    const { slideX, productData } = this.props;

    this.setState({
      x: x === 0 ? -100 * (productData.length - slideX) : x + slideX * 100,
    });
  };

  goRight = () => {
    const { x } = this.state;
    const { slideX, productData } = this.props;

    this.setState({
      x: x === -100 * (productData.length - slideX) ? 0 : x - slideX * 100,
    });
  };

  render() {
    const { x } = this.state;
    const { goLeft, goRight } = this;
    const { productData } = this.props;

    return (
      <div className="product-slide-container">
        <div className="product-slide">
          {productData.map(product => {
            return (
              <ProductCard
                key={product.id}
                x={x}
                product={product}
                moveX={{ transform: `translateX(${x}%)` }}
              />
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

export default ProductCardSlide;
