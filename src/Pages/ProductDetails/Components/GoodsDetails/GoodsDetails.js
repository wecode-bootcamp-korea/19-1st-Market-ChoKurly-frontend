import React, { Component } from 'react';
import GoodsDescription from './Components/GoodsDescription/GoodsDescription';
import MoreInformation from './Components/MoreInformation/MoreInformation';
import Taps from '../Taps/Taps';
import './GoodsDetails.scss';

class GoodsDetails extends Component {
  render() {
    return (
      <section className="goods-details">
        <GoodsDescription />
        <MoreInformation />
      </section>
    );
  }
}

export default GoodsDetails;
