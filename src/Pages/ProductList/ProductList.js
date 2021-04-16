import React, { Component } from 'react';
import Nav from '../../Components/Nav/Nav';
import ProductCard from '../Main/Components/ProductCard';
import './ProductList.scss';

class ProductList extends Component {
  constructor() {
    super();
    this.state = {
      productList: [],
      clickCartButton: false,
      cartNumber: 0,
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/productCard.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(productData => {
        this.setState({
          productList: productData,
        });
      });
  }

  addToCart = () => {
    const { cartNumber } = this.state;
    this.setState(
      {
        clickCartButton: true,
        cartNumber: cartNumber + 1,
      },
      () => {
        console.log(cartNumber);
      }
    );
  };

  render() {
    const { productList, clickCartButton, cartNumber } = this.state;
    const { addToCart } = this;

    return (
      <>
        <Nav cartNumber={cartNumber} />
        <div className="product-list-container">
          <div className="banner">
            <img
              className="banner-img"
              src="/images/ProductList/snack.jpg"
            ></img>
          </div>
          <div className="product-list-menu">
            <div className="category-title">
              <i class="fas fa-cookie-bite fa-lg"></i>간식･과자･떡
            </div>
            <div className="sub-title">
              <span className="sub-name">과자･스낵･쿠키</span>
              <span className="sub-name">초콜릿･젤리･캔디</span>
              <span className="sub-name">떡･한과</span>
              <span className="sub-name">아이스크림</span>
              <select className="filter" name="추천순">
                <option>혜택순</option>
                <option>낮은가격순</option>
                <option>높은가격순</option>
              </select>
            </div>
          </div>

          <div className="product-list">
            {productList.map((product, index) => {
              return (
                <div key={index} className="product-container">
                  <ProductCard
                    product={product}
                    productSize={{
                      height: '395px',
                      width: '310px',
                    }}
                    productBorder={{
                      border: '1px solid #ddd',
                    }}
                    fontStyle={{ fontSize: '20px' }}
                    fontStyle2={{ fontSize: '18px' }}
                    productMargin={{ marginBottom: '100px' }}
                  />
                  <button onClick={addToCart} className="cart-button">
                    <i className="fas fa-shopping-cart fa-lg"></i>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}

export default ProductList;
