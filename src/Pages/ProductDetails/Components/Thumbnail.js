import React, { Component } from 'react';
import ProductDetailData from './ProductDetailData';

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
                  <dl className="goods-units">
                    <dt className="info">{ele.info}</dt>
                    <dd className="data">{ele.data}</dd>
                    <dt className="info_sub">{ele.info_sub}</dt>
                    <dd className="data_sub">{ele.data_sub}</dd>
                  </dl>
                );
              })}
            </div>
          </div>
        </div>
        <div></div>
      </section>
    );
  }
}

export default Thumbnail;
