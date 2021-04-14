import React, { Component } from 'react';
import { productDetailsData } from '../ProductDetailsData';

class Thumbnail extends Component {
  render() {
    return (
      <section className="top-view">
        <div className="thumbnail-wrapper">
          <img
            src="../../../images/goods-thumb.jpeg"
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
                <span> 원 </span>
              </div>
              <div className="goods-discount">
                <span className="discount-percent"> 웰컴5%</span>
                <span> 개당 500원 적립</span>
              </div>
            </div>
            <div className="dl-list">
              {thumbnailData.map(ele => {
                return (
                  <dl key={ele.id} className="goods-units">
                    <dt className="info">{ele.chartName}</dt>
                    <dd className="num-data">{ele.num}</dd>
                    <dd className="unit">{ele.unit}</dd>
                    <dd className="data">{ele.data}</dd>
                    <dd className="subdata">{ele.subdata}</dd>
                  </dl>
                );
              })}
              <dl className="goods-units">
                <dt>상품선택</dt>
                <div className="selector">
                  <select name="goods-list">
                    <option value="상품선택"></option>
                    <option value="nuts-mix">
                      [리터 스포트]미니미 넛츠믹스 15p
                    </option>
                    <option value="berry-mix">
                      [리터 스포트]미니미 베리믹스 15p
                    </option>
                  </select>
                </div>
              </dl>
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
