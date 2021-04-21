import React, { Component } from 'react';
import './RelatedProduct.scss';

class RelatedProduct extends Component {
  constructor() {
    super();
    this.state = {
      x: 0,
      sliderArr: [],
      setX: 1,
      info: {},
    };
  }

  goLeft = () => {
    const { x, sliderArr } = this.state;
    // x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100);
  };

  goRight = () => {
    const { x, sliderArr } = this.state;
    // x === -100 * (sliderArr.length - 1) ? setX(0) : setX(x - 100);
  };

  componentDidMount() {
    fetch('http://10.58.6.70:8000/products/7')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({
          info: data.result[0],
        });
      });
  }

  render() {
    const { x, sliderArr, setX, info } = this.state;
    return (
      <section className="related-products-wrapper">
        <div className="lines"></div>
        <p>RELATED PRODUCT</p>
        <div className="images-slice">
          <button className="left-btn" onClick={this.goLeft}>
            <i class="fas fa-chevron-left"></i>
          </button>

          {/* {sliderArr.map(info, index => {
            return (
              <div
                key={index}
                className="slide"
                style={{ transform: `translateX(${x}%)` }}
                className="related-items-wrapper"
              >
                <ul className="img-wrapper">
                  {info.realted_products &&
                    info.realted_products.map(card => {
                      return (
                        <li key={card.id} className="related-items-list">
                          <img src={card.rel_img} alt="no image" />
                          <p className="item-name">{card.name}</p>
                          <p className="item-price">{card.price}원</p>
                        </li>
                      );
                    })}
                </ul>
              </div>
            );
          })} */}
          <button className="right-btn" onClick={this.goRight}>
            <i class="fas fa-chevron-right"></i>
          </button>
        </div>
      </section>
    );
  }
}

export default RelatedProduct;
