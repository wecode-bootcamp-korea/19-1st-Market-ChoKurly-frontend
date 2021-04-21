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
    Promise.all([
      fetch('http://localhost:8000/products/list?order_by_type=%3F'),
      fetch('http://localhost:8000/products/list?order_by_type=-discount_rate'),
      fetch(
        'http://localhost:8000/products/list?order_by_type=%3F&sub_category_id=58'
      ),
      fetch('http://localhost:8000/products/list?order_by_type=created_at'),
      fetch('http://localhost:8000/products/list?order_by_type=-stock'),
      fetch('http://localhost:8000/products/list?order_by_type=price'),
    ])
      .then(([res1, res2, res3, res4, res5, res6]) =>
        Promise.all([
          res1.json(),
          res2.json(),
          res3.json(),
          res4.json(),
          res5.json(),
          res6.json(),
        ])
      )
      .then(([data1, data2, data3, data4, data5, data6]) =>
        this.setState({
          suggestionArr: data1.results,
          salesArr: data2.results,
          mdArr: data3.results,
          newArr: data4.results,
          hotArr: data5.results,
          finalSalesArr: data6.results,
        })
      );
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
      <div className="main-container">
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
      </div>
    );
  }
}

export default Main;
