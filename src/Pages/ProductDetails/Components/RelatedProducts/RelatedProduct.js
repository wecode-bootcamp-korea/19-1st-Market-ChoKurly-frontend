import React, { Component } from 'react';
import './RelatedProduct.scss';

class RelatedProduct extends Component {
  state = {
    info: [],
  };
  componentDidMount() {
    fetch('http://localhost:3000/productdetails/data/RelatedProduct.json')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({
          info: data.result,
        });
      });
  }

  render() {
    const { info } = this.state;
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
              {info.related_products &&
                info.related_products.map(card => {
                  return (
                    <li key={card.id} className="related-items-list">
                      <img
                        src="../../../../../images/timtam.png"
                        alt="no image"
                      />
                      <p className="item-name">{card.name}</p>
                      <p className="item-price">{card.price}원</p>
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
