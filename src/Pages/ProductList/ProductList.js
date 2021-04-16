import React, { Component } from 'react';
import Nav from '../../Components/Nav/Nav';
import ProductCard from '../Main/Components/ProductCard';
import './ProductList.scss';

class ProductList extends Component {
  constructor() {
    super();
    this.state = {
      productList: [],
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

  render() {
    const { productList } = this.state;
    return (
      <>
        <Nav />
        <div className="product-list-container">
          <div className="banner">
            <img
              className="banner-img"
              src="/images/ProductList/snack.jpg"
            ></img>
            {/* <div className="msg">
              <span>다양한 디저트를 색다르게!</span>
              <span>와플팬 재료 모음전 </span>
              <span>~4월 23일(금) 11시</span>
            </div> */}
          </div>
          <div className="product-list">
            {productList.map(product => {
              return (
                <>
                  <ProductCard
                    product={product}
                    productSize={{ height: '395px', width: '310px' }}
                  />
                  {/* <CartIcon /> */}
                </>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}

export default ProductList;
