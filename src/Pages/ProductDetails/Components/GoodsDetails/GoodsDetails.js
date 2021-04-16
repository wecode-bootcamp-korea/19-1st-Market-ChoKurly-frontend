import React, { Component } from 'react';
import Taps from '../Taps/Taps';
import GoodsDescription from './Components/GoodsDescription/GoodsDescription';
import MoreInformation from './Components/MoreInformation/MoreInformation';
import ProductImg from './Components/ProductImg/ProductImg';
import GuestReview from '../GuestReview/GuestReview';
import './GoodsDetails.scss';

class GoodsDetails extends Component {
  render() {
    return (
      <section className="goods-details">
        <Taps />
        <GoodsDescription />
        <ProductImg />
        <MoreInformation />
        <GuestReview />
      </section>
    );
  }
}

export default GoodsDetails;
