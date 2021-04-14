import React, { Component } from 'react';
import Top from './Components/Top';
import RelatedProduct from './Components/RelatedProduct';
import ProductImg from './Components/ProductImg';
import MoreInformation from './Components/MoreInformation';
import GeustReview from './Components/GuestReview';
import Footer from '../../Components/Footer/Footer';
import './ProductDetails.scss';

class ProductDetails extends Component {
  render() {
    return (
      <main className="product-detatils">
        <div className="product-details-contents">
          <Top />
          <RelatedProduct />
          <ProductImg />
          <MoreInformation />
          <GeustReview />
          <Footer />
        </div>
      </main>
    );
  }
}

export default ProductDetails;
