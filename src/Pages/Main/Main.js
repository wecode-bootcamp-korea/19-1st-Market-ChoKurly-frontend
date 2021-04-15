import React, { Component } from 'react';
import Nav from '../../Components/Nav/Nav';
import Slide from './Components/Slide';
import ProductCardSlide from './Components/ProductCardSlide';
import './Main.scss';

class Main extends Component {
  render() {
    return (
      <>
        <Nav />
        <Slide />
        <div className="suggestion">
          <div className="main-title suggestion-title">이 상품 어때요?</div>
          <ProductCardSlide />
        </div>

        <div className="sales">
          <div className="main-title sales-title">알뜰상품</div>
          <ProductCardSlide />
        </div>

        <div className="md-suggestion">
          <div className="main-title md-title">MD의 추천</div>
        </div>
      </>
    );
  }
}

export default Main;
