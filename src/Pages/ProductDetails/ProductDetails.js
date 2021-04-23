import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Nav from '../../Components/Nav/Nav';
import Thumbnail from './Components/Thumbnail/Thumbnail';
import RelatedProduct from './Components/RelatedProducts/RelatedProduct';
import GoodsDetails from './Components/GoodsDetails/GoodsDetails';
import Taps from './Components/Taps/Taps';
import GuestReview from './Components/GuestReview/GuestReview';

import './ProductDetails.scss';

class ProductDetails extends Component {
  constructor() {
    super();
    this.state = {
      toggleStatus: true,
      data: {},
      product_id: '',
      shipping_method_id: '',
      quantity: '',
      cartResult: '',
      number: 0,
    };
  }

  goTop = () => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  goToDetail = () => {
    window.scrollTo({ top: 1400, behavior: 'auto' });

    this.setState({
      toggleStatus: !this.state.toggleStatus,
    });
  };

  goToReview = () => {
    window.scrollTo({ top: 4300, behavior: 'auto' });
    this.setState({
      toggleStatus: !this.state.toggleStatus,
    });
  };

  goToCart = () => {
    fetch('http://locahost:8000/orders/basket', {
      METHOD: 'POST',
      body: JSON.stringify({
        product_id: this.state.data.product_id,
        shipping_method_id: 1,
        quantity: this.state.number,
      }),
    })
      .then(response => response.json())
      .then(result =>
        this.setSTate({
          cartResult: result,
        })
      );
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  handleIncrease = () => {
    if (this.state.number > 30) {
      return 30;
    }
    this.setState({
      number: this.state.number + 1,
    });
  };

  handleDecrease = () => {
    if (this.state.number < 2) {
      return 1;
    }
    this.setState({
      number: this.state.number - 1,
    });
  };

  componentDidMount() {
    fetch(`http://10.58.5.244:8000/products/${this.props.match.params.id}`)
      .then(res => res.json())
      .then(res => this.setState({ data: res.result[0] }));

    window.scrollTo(0, 0);
  }

  render() {
    const { data, number } = this.state;
    const { handleIncrease, handleDecrease, handleSubmit } = this;

    return (
      <>
        <Nav />
        <main className="product-details-main">
          <Thumbnail
            handleSubmit={handleSubmit}
            handleIncrease={handleIncrease}
            handleDecrease={handleDecrease}
            number={number}
            data={data}
            goToCart={this.goToCart}
          />
          <RelatedProduct data={data} />
          <Taps
            data={data}
            goToDetail={this.goToDetail}
            goToReview={this.goToReview}
          />
          <GoodsDetails data={data} />
          <Taps
            data={data}
            goToDetail={this.goToDetail}
            goToReview={this.goToReview}
          />
          <GuestReview data={data} />
          <button className="goTop" onClick={this.goTop}>
            <i class="fas fa-arrow-circle-up"></i>
          </button>
        </main>
      </>
    );
  }
}

export default withRouter(ProductDetails);
