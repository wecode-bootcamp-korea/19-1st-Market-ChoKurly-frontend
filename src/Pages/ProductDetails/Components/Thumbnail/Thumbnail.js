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
        <div className="thumbnail-wrapper">
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
                      {ele.data}
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
                      <span>
                        [리터 스포트]미니 초콜릿 믹스 18p
                        <button className="delete">X</button>
                      </span>
                      <div className="count-btn">
                        <span>
                          <button onClick={this.handleIncrease}>+</button>
                          <input
                            type="number"
                            value={this.state.number}
                          ></input>
                          <button onClick={this.handleDecrease}>-</button>
                        </span>
                        <span></span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="buy-for-it"></div>
          </div>
        </div>
        <div></div>
      </section>
    );
  }
}

export default Thumbnail;
