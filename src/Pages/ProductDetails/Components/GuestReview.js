import React, { Component } from 'react';
import './GuestReview.scss';
class GuestReview extends Component {
  render() {
    return (
      <form className="guest-review">
        <div className="review-info"></div>
        <div className="input-wrapper">
          <div className="comment-list">
            <ul></ul>
          </div>
        </div>
      </form>
    );
  }
}

export default GuestReview;
