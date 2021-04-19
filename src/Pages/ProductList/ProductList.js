import React, { Component } from 'react';
import Nav from '../../Components/Nav/Nav';
import ProductCard from './Components/ProductCard';
import Modal from './Components/Modal';
import './ProductList.scss';

class ProductList extends Component {
  constructor() {
    super();
    this.state = {
      productList: [],
      clickCartButton: false,
      cartName: '',
      cartPrice: '',
      cartNumber: 0,
      productFilter: '',
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/productlist_chocolate.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(productData => {
        this.setState({
          productList: productData.result,
        });
      });
  }

  openCart = (name, price) => {
    this.setState({
      clickCartButton: true,
      cartName: name,
      cartPrice: price,
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

  setFilter = subName => {
    this.setState({
      productFilter: subName,
    });
  };

  render() {
    const {
      productList,
      cartNumber,
      clickCartButton,
      cartName,
      cartPrice,
    } = this.state;

    const { addToCart, closeCart, openCart, setFilter } = this;

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
                <span
                  onClick={() => setFilter('과자･스낵･쿠키')}
                  className="sub-name"
                >
                  과자･스낵･쿠키
                </span>
                <span
                  onClick={() => setFilter('초콜릿･젤리･캔디')}
                  className="chocolate sub-name"
                >
                  초콜릿･젤리･캔디
                </span>
                <span onClick={() => setFilter('떡･한과')} className="sub-name">
                  떡･한과
                </span>
                <span
                  onClick={() => setFilter('아이스크림')}
                  className="sub-name"
                >
                  아이스크림
                </span>
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
                  key={product.id}
                  // id={product.subcategory}
                  className="product-container"
                >
                  <div className="product-card-button" key={product.id}>
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
                    <button
                      key={product.id}
                      id={product.id}
                      name={product.name}
                      onClick={() => {
                        openCart(product.name, product.discounted_price);
                      }}
                      className="cart-button"
                    >
                      <i className="fas fa-shopping-cart fa-lg"></i>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          {clickCartButton && (
            <Modal
              addToCart={addToCart}
              closeCart={closeCart}
              cartName={cartName}
              cartPrice={cartPrice}
            />
          )}
        </div>
      </>
    );
  }
}

export default ProductList;
