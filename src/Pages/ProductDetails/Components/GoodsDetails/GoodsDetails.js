import React, { Component } from 'react';
import './GoodsDetails';

class GoodsDetails extends Component {
  render() {
    return (
      <section className="goods-details">
        <ariticle className="goods-description-wrapper">
          <ul className="tab-groups"></ul>
          <div className="goods-description">
            <div className="goods-intro">
              <div className="goods-img">
                <img src="#" alt="chocKurly" />
              </div>
              <div className="goods-intro-info"></div>
            </div>
            <div className="goods-point"></div>
            <div className="goods-pick"></div>
          </div>
        </ariticle>
        <article className="product-img">
          <ul className="tab-groups"></ul>
          <img src="#" alt="choKurly" />
        </article>
        <article className="more-info-wrapper">
          <table className="extra-info"></table>
          <div className="why-chokurly"></div>
        </article>
      </section>
    );
  }
}

export default GoodsDetails;
