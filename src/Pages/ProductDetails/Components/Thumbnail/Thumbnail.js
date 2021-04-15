import React, { Component } from 'react';
import { thumbnailData } from './ThumbnailData';
import './Thumbnail.scss';

class Thumbnail extends Component {
  constructor() {
    super();
    this.state = {
      number: 0,
    };
  }

  handleIncrease = () => {
    this.setState({
      number: this.state.number + 1,
    });
  };

  handleDecrease = () => {
    this.setState({
      number: this.state.number - 1,
    });
  };

  render() {
    return (
      <section className="top-view">
        <article className="thumbnail-wrapper">
          <img
            src="../../../images/상세페이지 썸네일.jpg"
            alt="대표 이미지"
            className="top-img"
          />
          <div className="thumbnail-info">
            <dl className="goods-name">
              <dt>[춰컬릿] 미니미 믹스 2종 (봉지)</dt>
              <dd> 부담 없이 즐기는 미니 초콜릿</dd>
            </dl>
            <div className="goods-price-wrapper">
              <div className="goods-price">
                <span className="price"> 10,500</span>
                <span className="unit"> 원 </span>
              </div>
              <div className="goods-discount">
                <div className="discount-percent">
                  <span> 웰컴5%</span>
                </div>
                <span className="discount-price"> 개당 525원 적립</span>
              </div>
            </div>
            <div className="goods-dl">
              {thumbnailData.map(ele => {
                return (
                  <dl key={ele.id} className="goods-units">
                    <dt className="info">{ele.chartName}</dt>
                    <dd className="data">
                      {ele.data.map(line => (
                        <p className="data-sub" key={line}>
                          {line}
                        </p>
                      ))}
                      <dd className="subdata">{ele.subdata}</dd>
                    </dd>
                  </dl>
                );
              })}
              <div className="goods-select-wrapper">
                <label>상품선택</label>
                <div className="goods-select">
                  <select className="goods-list">
                    <option value="">상품선택</option>
                    <option value="nuts-mix">
                      [리터 스포트]미니미 넛츠믹스 15p
                    </option>
                    <option value="berry-mix">
                      [리터 스포트]미니미 베리믹스 15p
                    </option>
                  </select>
                  <ul className="list">
                    <li className="goods-one">
                      <div className="added-goods-name">
                        <span>[리터 스포트]미니 초콜릿 믹스 18p</span>
                        <span className="del-btn">
                          <button className="delete">X</button>
                        </span>
                      </div>
                      <div className="goods-quantity">
                        <form className="count-btn">
                          <button onClick={this.handleDecrease}>--</button>
                          <input type="text" value={this.state.number}></input>
                          <button onClick={this.handleIncrease}>+</button>
                          <span></span>
                        </form>
                        <div className="fixed-price">
                          <span className="goods-own-price">10,500</span>
                          <span>원</span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="buy-for-it">
              <div className="total-price-wrapper">
                <span> 총 상품금액: </span>
                <span className="total-price" value="0">
                  0
                </span>
                <span className="won">원</span>
              </div>
              <form className="mark-btn">
                <button className="restock">재입고 알림</button>
                <button className="buy-often"> 늘 사는 것</button>
                <button className="add-cart-btn">장바구니 담기</button>
              </form>
            </div>
          </div>
        </article>
      </section>
    );
  }
}

export default Thumbnail;
