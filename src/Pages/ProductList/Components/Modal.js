import React, { Component } from 'react';
import './Modal.scss';

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartQuantity: 1,
    };
  }

  minusQuantity = () => {
    const { cartQuantity } = this.state;
    if (cartQuantity > 0) {
      this.setState({
        cartQuantity: cartQuantity - 1,
      });
    }
  };

  addQuantity = () => {
    const { cartQuantity } = this.state;
    this.setState({
      cartQuantity: cartQuantity + 1,
    });
  };

  render() {
    const { cartQuantity } = this.state;
    const { minusQuantity, addQuantity } = this;
    const { addToCart, closeCart, cartName, cartPrice } = this.props;

    return (
      <div className="modal-container">
        <div className="cart-box">
          <div className="cart-product-name">
            <span>{cartName}</span>
          </div>
          <div className="cart-quantity">
            <div className="cart-price">
              {Number(cartPrice).toLocaleString('en-US')}원
            </div>
            <div className="quantity-button">
              <button onClick={minusQuantity} className="minus-button">
                ﹣
              </button>
              <span className="quantity">{cartQuantity}</span>
              <button onClick={addQuantity} className="plus-button">
                +
              </button>
            </div>
          </div>
          <div className="cart-total">
            <span>합계</span>
            <span>
              {(Number(cartPrice) * cartQuantity).toLocaleString('en-US')}원
            </span>
          </div>
          <div className="cart-buttons">
            <button onClick={closeCart} className="close-button">
              취소
            </button>
            <button onClick={addToCart} className="add-button">
              장바구니 담기
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
