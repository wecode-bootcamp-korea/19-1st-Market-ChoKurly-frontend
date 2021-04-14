import React, { Component } from 'react';
import Thumbnail from './Components/Thumbnail';
import './ProductDetails.scss';

class Top extends Component {
  render() {
    return (
      <main className="product-details-main">
        <Thumbnail />
      </main>
    );
  }
}

export default ProductDetails;
