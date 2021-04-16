import React, { Component } from 'react';
import ProductCard from './ProductCard';
import './ProductCardSlide.scss';

class ProductCardSlide extends Component {
  constructor() {
    super();
    this.state = {
      x: 0,
      productArray: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/productCard.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(productData => {
        this.setState({
          productArray: productData,
        });
      });
  }

  goLeft = () => {
    const { x, productArray } = this.state;

    this.setState({
      x: x === 0 ? -100 * (productArray.length - 4) : x + 400,
    });
  };

  goRight = () => {
    const { x, productArray } = this.state;
    this.setState({
      x: x === -100 * (productArray.length - 4) ? 0 : x - 400,
    });
  };

  render() {
    const { x, productArray } = this.state;
    const { goLeft, goRight } = this;

    return (
      <div className="product-slide-container">
        <div className="product-slide">
          {productArray.map(product => {
            return (
              <ProductCard
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
