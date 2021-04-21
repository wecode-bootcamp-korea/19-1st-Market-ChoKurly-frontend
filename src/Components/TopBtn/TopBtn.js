import React, { Component } from 'react';
import './TopBtn.scss';

class TopBtn extends Component {
  render() {
    return (
      <div>
        <a href="/" id="page-top">
          <img
            url="https://res.kurly.com/pc/service/common/1903/btn_pagetop_x2_v2.png"
            alt="위로"
          />
        </a>
      </div>
    );
  }
}

export default TopBtn;