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

  componentDidMount() {
    fetch(`http://10.58.6.70:8000/products/${this.props.match.params.id}`)
      .then(res => res.json())
      .then(res => this.setState({ data: res.result }));
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <main className="product-details-main">
        <Nav />
        <Thumbnail goToCart={this.goToCart} />
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
