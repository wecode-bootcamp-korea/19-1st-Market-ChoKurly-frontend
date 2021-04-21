import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Thumbnail from './Components/Thumbnail/Thumbnail';
import RelatedProduct from './Components/RelatedProducts/RelatedProduct';
import GoodsDetails from './Components/GoodsDetails/GoodsDetails';
import Footer from '../../Components/Footer/Footer';
import './ProductDetails.scss';

class ProductDetails extends Component {
  componentDidMount() {
    fetch(`${API}/${this.props.match.params.id}`)
      .then(res => res.json())
      .then(res => this.setState({ data: res.result }));
  }
  render() {
    console.log(this.props.match.parmas.id);
    return (
      <main className="product-details-main">
        <Thumbnail />
        <RelatedProduct />
        <GoodsDetails />
        <Footer />
      </main>
    );
  }
}

export default withRounter(ProductDetails);
