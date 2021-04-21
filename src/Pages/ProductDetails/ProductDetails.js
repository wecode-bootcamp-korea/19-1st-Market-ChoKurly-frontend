import React, { Component } from 'react';
import Thumbnail from './Components/Thumbnail/Thumbnail';
import RelatedProduct from './Components/RelatedProducts/RelatedProduct';
import GoodsDetails from './Components/GoodsDetails/GoodsDetails';
import Footer from '../../Components/Footer/Footer';
import './ProductDetails.scss';

class ProductDetails extends Component {
  render() {
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

export default ProductDetails;
