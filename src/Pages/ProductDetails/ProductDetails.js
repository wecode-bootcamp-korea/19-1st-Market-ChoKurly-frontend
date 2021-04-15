import React, { Component } from 'react';
import Thumbnail from './Components/Thumbnail/Thumbnail';
import './ProductDetails.scss';

class ProductDetails extends Component {
  render() {
    return (
      <main className="product-details-main">
        <Thumbnail />
      </main>
    );
  }
}

export default ProductDetails;
