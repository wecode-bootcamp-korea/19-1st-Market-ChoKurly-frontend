import React, { Component } from 'react';
import './QuantityBtn.scss';

class QuantityBtn extends Component {
  constructor() {
    super();
    this.state = {
      number: 0,
    };
  }

  handleIncrease = () => {
    if (this.state.number > 30) {
      return 30;
    }
    this.setState({
      number: this.state.number + 1,
    });
  };

  handleDecrease = () => {
    if (this.state.number < 2) {
      return 1;
    }
    this.setState({
      number: this.state.number - 1,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <form className="count-btn" onSubmit={this.handleSubmit}>
        <button onClick={this.handleDecrease}>
          <i class="fas fa-minus"></i>
        </button>
        <input type="text" value={this.state.number}></input>
        <button onClick={this.handleIncrease}>
          <i class="fas fa-plus"></i>
        </button>
        <span></span>
      </form>
    );
  }
}

export default QuantityBtn;
