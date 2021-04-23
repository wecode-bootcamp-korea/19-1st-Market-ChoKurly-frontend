import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
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
      number: 0,
      data: {},
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
    this.props.history.push('/cart');
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

  handleSubmit = e => {
    e.preventDefault();
  };

  componentDidMount() {
    fetch('http://localhost:3000/data/ThumnailData.json')
      .then(res => res.json())
      .then(ele => {
        this.setState({
          data: ele.result,
        });
      });
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <main className="product-details-main">
        <Thumbnail
          up={this.handleIncrease}
          down={this.handleDecrease}
          submit={this.handleSubmit}
          goToCart={this.goToCart}
          num={this.state.number}
          info={this.state.data}
        />
        <RelatedProduct />
        <Taps goToDetail={this.goToDetail} goToReview={this.goToReview} />
        <GoodsDetails />
        <Taps goToDetail={this.goToDetail} goToReview={this.goToReview} />
        <GuestReview />
        <button className="goTop" onClick={this.goTop}>
          <i class="fas fa-arrow-circle-up"></i>
        </button>
      </main>
    );
  }
}

export default withRouter(ProductDetails);
