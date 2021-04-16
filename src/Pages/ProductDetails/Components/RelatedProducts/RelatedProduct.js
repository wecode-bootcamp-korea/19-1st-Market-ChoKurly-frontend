import React, { Component } from 'react';
import { RelatedProductData } from './RelatedProductData';
import './RelatedProduct.scss';

class RelatedProduct extends Component {
  render() {
    return (
      <section className="related-products-wrapper">
        <div className="lines"></div>
        <p>RELATED PRODUCT</p>
        <div className="images-slice">
          <button className="left-btn">
            <i class="fas fa-chevron-left"></i>
          </button>
          <div className="related-items-wrapper">
            <ul>
              {RelatedProductData.map(price => {
                return (
                  <li key={price.id} className="related-items-list">
                    <img src="../../../images/timtam.png" alt="no image" />
                    <p className="item-name">{price.name}</p>
                    <p className="item-price">{price.price}원</p>
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
