import React, { Component } from 'react';
import Slider from '../../Components/RelatedProducts/Component/Slider';
import './RelatedProduct.scss';

class RelatedProduct extends Component {
  state = {
    info: {},
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
            <Slider info={this.state.info} />
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
