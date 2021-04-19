import React, { Component } from 'react';
import Nav from '../../Components/Nav/Nav';
import Slide from './Components/Slide/Slide';
import ProductCardSlide from './Components/ProductCardSlide/ProductCardSlide';
import LimitedEvent from './Components/LimitedEvent/LimitedEvent';
import Tag from './Components/Tag/Tag';
import './Main.scss';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      suggestionArr: [],
      salesArr: [],
      mdArr: [],
      newArr: [],
      hotArr: [],
      finalSalesArr: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/productCard_main2.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(productData => {
        this.setState({
          //테스트중
          suggestionArr: productData.result,
          salesArr: productData.result,
          mdArr: productData.result,
          newArr: productData.result,
          hotArr: productData.result,
          finalSalesArr: productData.result,
        });
      });
  }

  render() {
    const {
      suggestionArr,
      salesArr,
      mdArr,
      newArr,
      hotArr,
      finalSalesArr,
    } = this.state;
    return (
      <>
        <Nav />
        <Slide />
        <div className="suggestion">
          <div className="main-title suggestion-title">이 상품 어때요?</div>
          <ProductCardSlide productData={suggestionArr} slideX={4} />
        </div>
        <div className="event">
          <LimitedEvent />
        </div>

        <div className="sales">
          <div className="main-title sales-title">알뜰상품</div>
          <ProductCardSlide productData={salesArr} slideX={2} />
        </div>

        <div className="md-suggestion">
          <div className="main-title md-title">MD의 추천</div>
          <Tag />
          <ProductCardSlide productData={mdArr} slideX={2} />
        </div>

        <div className="new">
          <div className="main-title new-title">오늘의 신상품</div>
          <ProductCardSlide productData={newArr} slideX={2} />
        </div>

        <div className="hot">
          <div className="main-title hot-title">지금 가장 핫한 상품</div>
          <ProductCardSlide productData={hotArr} slideX={2} />
        </div>

        <div className="final-sales">
          <div className="main-title final-sale-title">365일 최저가 도전</div>
          <ProductCardSlide productData={finalSalesArr} slideX={2} />
        </div>
      </>
    );
  }
}

export default Main;
