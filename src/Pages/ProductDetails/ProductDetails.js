import React, { Component } from 'react';
import Thumbnail from './Components/Thumbnail/Thumbnail';
import RelatedProduct from './Components/RelatedProducts/RelatedProduct';
import './ProductDetails.scss';

class ProductDetails extends Component {
  render() {
    return (
      <main className="product-details-main">
        <Thumbnail />
        <RelatedProduct />
      </main>
    );
  }
}

export default ProductDetails;
