import React, { Component } from 'react';
import { RelatedProductData } from './RelatedProductData';
import './RelatedProduct.scss';

class RelatedProduct extends Component {
  render() {
    return (
      <section className="related-products-wrapper">
        <div className="nothing"></div>
        <p>RELATED PRODUCT</p>
        <div className="images-slice">
          <button className="left-btn">
            <i class="fas fa-chevron-left"></i>
          </button>
          <div className="related-items-wrapper">
            <ul>
              {RelatedProductData.map(ele => {
                return (
                  <li key={ele.id} className="related-items-list">
                    <img src="../../../images/timtam.png" alt="없다고" />
                    <p className="item-name">{ele.name}</p>
                    <p className="item-price">{ele.price}원</p>
                  </li>
                );
              })}
            </ul>
          </div>
          <button className="right-btn">
            <i class="fas fa-chevron-right"></i>
          </button>
        </div>
      </section>
    );
  }
}

export default RelatedProduct;
