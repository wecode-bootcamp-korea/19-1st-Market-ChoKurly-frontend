import React, { Component } from 'react';

import './Taps.scss';

class Taps extends Component {
  render() {
    const { goToDetail, goToReview } = this.props;
    return (
      <div className="tap-group">
        <ul>
          <li className="tap-list">
            <span className="link-name">
              <button onMouseOver={this.toggle} onClick={goToDetail}>
                상품설명
              </button>
            </span>
          </li>
          <li className="tap-list">
            <span className="link-name">
              <button onMouseOver={this.toggle} onClick={goToReview}>
                상세정보
              </button>
            </span>
          </li>
          <li className="tap-list">
            <span className="link-name">
              <button onMouseOver={this.toggle} onClick={goToReview}>
                고객후기
              </button>
            </span>
          </li>
        </ul>
      </div>
    );
  }
}

export default Taps;
