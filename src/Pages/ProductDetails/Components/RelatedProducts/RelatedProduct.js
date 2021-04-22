import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { API } from '../../../../../src/config';
import './RelatedProduct.scss';

class RelatedProduct extends Component {
  constructor() {
    super();
    this.state = {
      x: 0,
      sliderArr: [],
      info: {},
    };
  }

  goLeft = () => {
    const { x, sliderArr } = this.state;

    x === 0 ? this.setState({ x: 0 }) : this.setState({ x: x + 100 });
  };

  goRight = () => {
    const { x, sliderArr } = this.state;

    x === -100 * (sliderArr.length - 1)
      ? this.setState({ x: 0 })
      : this.setState({ x: x - 100 });
  };

  componentDidMount() {
    fetch(`${API}/products/${this.props.match.params.id}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          info: data[0],
          sliderArr: data[0],
        });
      });
  }

  render() {
    const { x, sliderArr } = this.state;

    return (
      <section className="related-products-wrapper">
        <div className="lines"></div>
        <p>RELATED PRODUCT</p>
        <div className="images-slice">
          <button className="left-btn" onClick={this.goLeft}>
            <i class="fas fa-chevron-left"></i>
          </button>
          <div className="related-items-wrapper">
            <ul
              className="img-wrapper"
              style={{ transform: `translateX(${x}%)` }}
            >
              {sliderArr.realted_products &&
                sliderArr.realted_products.map(el => {
                  return (
                    <li key={el.id} className="related-items-list">
                      <img
                        src={el.rel_img}
                        className="item-image"
                        alt="no image"
                      />
                      <p className="item-name">{el.name}</p>
                      <p className="item-price">{el.price}원</p>
                    </li>
                  );
                })}
            </ul>
          </div>
          <button className="right-btn" onClick={this.goRight}>
            <i class="fas fa-chevron-right"></i>
          </button>
        </div>
      </section>
    );
  }
}

export default withRouter(RelatedProduct);
