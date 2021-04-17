import React, { Component } from 'react';
import Nav from '../../Components/Nav/Nav';
import ProductCard from './Components/ProductCard';
import Modal from './Components/Modal';
import { Link } from 'react-router-dom';
import './ProductList.scss';

class ProductList extends Component {
  constructor() {
    super();
    this.state = {
      productList: [],
      clickCartButton: false,
      cartNumber: 0,
      productFilter: '',
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/productCard_new.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(productData => {
        this.setState({
          productList: productData,
        });
      });
  }

  openCart = () => {
    this.setState({
      clickCartButton: true,
    });
  };

  closeCart = () => {
    this.setState({
      clickCartButton: false,
    });
  };

  addToCart = () => {
    const { cartNumber } = this.state;
    this.setState({
      clickCartButton: false,
      cartNumber: cartNumber + 1,
    });
  };

  setFilter = sub => {
    this.setState({
      productFilter: sub,
    });
  };

  render() {
    const {
      productList,
      cartNumber,
      clickCartButton,
      productFilter,
    } = this.state;

    const { addToCart, closeCart, openCart, setFilter } = this;
    console.log(productFilter);
    return (
      <>
        <Nav cartNumber={cartNumber} />
        <div className="product-list-container">
          <div className="banner">
            <img
              alt="banner"
              className="banner-img"
              src="/images/ProductList/snack.jpg"
            ></img>
          </div>
          <div className="product-list-menu">
            <div className="category-title">
              <i className="fas fa-cookie-bite fa-lg"></i>간식･과자･떡
            </div>
            <div className="sub-title">
              <div className="sub-names">
                <Link onClick={() => setFilter} to="/main" className="sub-name">
                  과자･스낵･쿠키
                </Link>
                <Link to="/main" className="chocolate sub-name">
                  초콜릿･젤리･캔디
                </Link>
                <Link to="/main" className="sub-name">
                  떡･한과
                </Link>
                <Link to="/main" className="sub-name">
                  아이스크림
                </Link>
              </div>
              <div className="filter-container">
                <select className="filter" name="추천순">
                  <option>혜택순</option>
                  <option>낮은가격순</option>
                  <option>높은가격순</option>
                </select>
              </div>
            </div>
          </div>
          <div className="product-list">
            {productList.map((product, index) => {
              return (
                <div
                  key={index}
                  id={product.subcategory}
                  className="product-container"
                >
                  {productList[index].productInfo.map(item => {
                    return (
                      <div className="product-card-button">
                        <ProductCard
                          key={item.id}
                          product={item}
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
                        <button onClick={openCart} className="cart-button">
                          <i className="fas fa-shopping-cart fa-lg"></i>
                        </button>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
          {clickCartButton && (
            <Modal addToCart={addToCart} closeCart={closeCart} />
          )}
        </div>
      </>
    );
  }
}

export default ProductList;
