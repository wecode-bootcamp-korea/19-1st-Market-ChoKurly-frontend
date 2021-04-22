import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
//import Nav from '../../Components/Nav/Nav';
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
      cartId: '',
      cartNumber: 0,
      productFilter: '',
      categoryType: '',
      filterId: '',
      sortId: '',
      isClicked: false,
      titleId: '',
    };
  }

  componentDidMount() {
    fetch(
      '/data/productList_chocolate.json'
      // eslint-disable-next-line prettier/prettier
      // `http://localhost:8000/products/list?sub_category_id=${Number(
      //   this.props.match.params.id
      // )}&order_by_type=%3F&page=1&limit=6`
    )
      .then(res => res.json())
      .then(productData => {
        this.setState({
          productList: productData.RESULTS,
          categoryType: 'sub_',
          filterId: Number(this.props.match.params.id) + 57,
        });
      });
  }

  openCart = (name, price, id) => {
    this.setState({
      clickCartButton: true,
      cartName: name,
      cartPrice: price,
      cartId: id,
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

  handleFilter = (sub, num, e) => {
    this.setState({
      isClicked: true,
      titleId: e.target.id,
      categoryType: sub,
      filterId: num,
    });

    fetch(
      `http://localhost:8000/products/list?${sub}category_id=${num}&order_by_type=%3F&page=1&limit=6`
    )
      .then(res => res.json())
      .then(filteredProducts => {
        this.setState({
          productList: filteredProducts.RESULTS,
        });
      });
  };

  handleSort = e => {
    this.setState({ sortId: e.target.value });

    fetch(
      `http://localhost:8000/products/list?sub_category_id=59&order_by_type=${this.state.sortId}&page=1&limit=6`
    )
      .then(res => res.json())
      .then(filteredProducts => {
        this.setState({
          productList: filteredProducts.RESULTS,
        });
      });
  };

  handlePage = num => {
    const { categoryType, filterId } = this.state;
    fetch(
      `http://localhost:8000/products/list?${categoryType}category_id=${filterId}&order_by_type=%3F&page=${num}&limit=6`
    );
  };

  render() {
    const {
      productList,
      clickCartButton,
      cartName,
      cartPrice,
      cartId,
      isClicked,
      titleId,
      cartNumber,
    } = this.state;
    const {
      addToCart,
      closeCart,
      openCart,
      handleFilter,
      handleSort,
      sortId,
      handlePage,
    } = this;

    return (
      <>
        <Nav cartNumber={cartNumber} cartId={cartId} />
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
                  onClick={e => handleFilter(null, 9, e)}
                  className={
                    isClicked && titleId === '1'
                      ? 'sub-name-clicked'
                      : 'sub-name'
                  }
                  id="1"
                >
                  전체 보기
                </span>
                <span
                  onClick={e => handleFilter('sub_', 58, e)}
                  className={
                    isClicked && titleId === '2'
                      ? 'sub-name-clicked'
                      : 'sub-name'
                  }
                  id="2"
                >
                  과자･스낵･쿠키
                </span>
                <span
                  onClick={e => handleFilter('sub_', 59, e)}
                  className={
                    isClicked && titleId === '3'
                      ? 'sub-name-clicked'
                      : 'sub-name'
                  }
                  id="3"
                >
                  초콜릿･젤리･캔디
                </span>
                <span
                  onClick={e => handleFilter('sub_', 60, e)}
                  className={
                    isClicked && titleId === '4'
                      ? 'sub-name-clicked'
                      : 'sub-name'
                  }
                  id="4"
                >
                  떡･한과
                </span>
                <span
                  onClick={e => handleFilter('sub_', 61, e)}
                  className={
                    isClicked && titleId === '5'
                      ? 'sub-name-clicked'
                      : 'sub-name'
                  }
                  id="5"
                >
                  아이스크림
                </span>
              </div>
              <div className="filter-container">
                <select className="filter" onChange={handleSort} value={sortId}>
                  <option value="created_at">신상품순</option>
                  <option value="-price">낮은가격순</option>
                  <option value="price">높은가격순</option>
                </select>
              </div>
            </div>
          </div>
          <div className="product-list">
            {productList.map(product => {
              return (
                <div key={product.id} className="product-container">
                  <div className="product-card-button" key={product.id}>
                    <ProductCard
                      product={product}
                      productBig={true}
                      fontStyleBig={{ fontSize: '20px' }}
                      fontStyleSmall={{ fontSize: '18px' }}
                      productMargin={{ marginBottom: '100px' }}
                    />
                    <button
                      key={product.id}
                      id={product.id}
                      name={product.name}
                      onClick={() => {
                        openCart(
                          product.name,
                          product.discounted_price,
                          product.id
                        );
                      }}
                      className="cart-button"
                    >
                      <i className="fas fa-shopping-cart fa-lg"></i>
                    </button>
                  </div>
                </div>
              );
            })}
            <div className="pages-container">
              <button onClick={() => handlePage(1)} className="to-left">
                ◀︎
              </button>
              <button onClick={() => handlePage(1)} className="page-number">
                1
              </button>
              <button onClick={() => handlePage(2)} className="page-number">
                2
              </button>
              <button onClick={() => handlePage(2)} className="to-right">
                ►
              </button>
            </div>
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

export default withRouter(ProductList);
