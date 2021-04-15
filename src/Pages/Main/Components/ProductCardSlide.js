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
    if (x === 0) {
      this.setState({
        x: -100 * (productArray.length - 4),
      });
    } else {
      this.setState({
        x: x + 400,
      });
    }
  };

  goRight = () => {
    const { x, productArray } = this.state;
    if (x === -100 * (productArray.length - 4)) {
      this.setState({
        x: 0,
      });
    } else {
      this.setState({
        x: x - 400,
      });
    }
  };

  render() {
    const { x, productArray } = this.state;
    const { goLeft, goRight } = this;

    return (
      <div className="product-slide-container">
        <div
          className="product-slide"
          // style={{ transform: `translateX(${x}%)` }}
        >
          <ProductCard x={x} productArray={productArray} />
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
