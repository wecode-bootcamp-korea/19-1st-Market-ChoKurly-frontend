import React, { Component } from 'react';
import ./'ProductDescription.scss'

class ProductDescription extends Component {
  render() {
    return (
      <section className="goods-description-wrapper">
        <ul className="tab-groups"></ul>
        <div className="goods-description">
          <div className="goods-intro">
            <div className="goods-img">
              <img src="#" alt='chocKurly' />
            </div>
            <div className='goods-intro-info'>
            </div>
          </div>
          <div className="goods-point"></div>
          <div className="goods-pick"></div>
        </div>
      </section>
    );
  }
}

export default ProductDescription;
