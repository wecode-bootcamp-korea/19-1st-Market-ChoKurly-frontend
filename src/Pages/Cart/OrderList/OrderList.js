import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import Picked from 'Pages/Cart/OrderList/Picked/Picked';
import './OrderList.scss';

class OrderList extends Component {
  deleteItem = () => {
    this.props.delOrderItem(this.props.id);
  };
  upClick = () => {
    this.props.changeCount(this.props.id, this.props.prCount + 1);
    console.log('하이');
  };

  downClick = () => {
    this.props.changeCount(this.props.id, this.props.prCount - 1);
    console.log('하이');
  };
  countOnChange = () => {};
  render() {
    const { item } = this.props;
    return (
      <div>
        <li className="item">
          <label>
            <input className="check-circle" type="checkbox" />
          </label>
          <img src="/" alt="no img" />
          <div className="item-name">
            <Link to="#" className="package">
              [춰컬릿] 여기서 맵 돌려야 함
            </Link>
            <Link to="#" className="product">
              [춰컬릿] 미니미 베리베리{' '}
            </Link>
          </div>
          <div className="count-btn">
            <button onClick={this.downClick}>
              <i className="fas fa-minus"></i>
            </button>
            <input
              type="text"
              value={this.props.prCount}
              onChange={this.countOnChange}
            />
            <button onClick={this.upClick}>
              <i className="fas fa-plus"></i>
            </button>
            <span></span>
          </div>
          <div className="price">
            <dl class="total-price-wrapper">
              <dt className="total-price">
                {(item.pickedPrice - item.pickedPrice * item.discountRate) *
                  this.props.prCount}
                <span>원</span>
              </dt>
              <dd className="discount-price">
                {item.pickedPrice * this.props.prCount}
                <span>원</span>
              </dd>
            </dl>
            <button className="del-btn" onClick={this.deleteItem} type="submit">
              <i class="fas fa-window-close"></i>
            </button>
          </div>
        </li>
      </div>
    );
  }
}

export default OrderList;
