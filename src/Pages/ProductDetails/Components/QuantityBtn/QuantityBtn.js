import React, { Component } from 'react';
import './QuantityBtn.scss';

class QuantityBtn extends Component {
  render() {
    return (
      <form className="count-btn" onSubmit={this.props.submit}>
        <button>
          <i class="fas fa-minus" onClick={this.props.down}></i>
        </button>
        <input type="text" value={this.props.num}></input>
        <button onClick={this.props.up}>
          <i class="fas fa-plus"></i>
        </button>
        <span></span>
      </form>
    );
  }
}

export default QuantityBtn;
