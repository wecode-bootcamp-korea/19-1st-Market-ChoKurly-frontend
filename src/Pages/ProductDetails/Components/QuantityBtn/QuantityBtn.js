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
    const { add } = this.props;
    if (this.state.number > 30) {
      return 30;
    }
    this.setState({
      number: this.state.number + 1,
    });
    add();
  };

  handleDecrease = () => {
    const { del } = this.props;
    if (this.state.number < 2) {
      return 1;
    }
    this.setState({
      number: this.state.number - 1,
    });
    del();
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <form className="count-btn" onSubmit={this.handleSubmit}>
        <button>
          <i class="fas fa-minus" onClick={this.handleDecrease}></i>
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
