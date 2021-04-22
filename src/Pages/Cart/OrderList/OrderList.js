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
  };

  downClick = () => {
    this.props.changeCount(this.props.id, this.props.prCount - 1);
  };

  render() {
    const { item } = this.props;
    return (
      <div>
        <li className="item">
          <label>
            <input className="check-circle" type="checkbox" />
          </label>
          <img src={item.thumbnail_image} alt="no img" />
          <div className="item-name">
            <Link to="#" className="package">
              {item.name}
            </Link>
            <Link to="#" className="product">
              {item.name}
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
                {(item.price * 0.9).toLocaleString('en-US')}
                <span>원</span>
              </dt>
              <dd className="discount-price">
                {(item.price * 1).toLocaleString('en-US')}
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
