import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import Picked from 'Pages/Cart/OrderList/Picked/Picked';
import './OrderList.scss';

class OrderList extends Component {
  deleteItem = () => {
    this.props.delOrderItem(this.props.id);
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
            <Link to="/productdetails" className="package">
              {item.name}
            </Link>
            <Link to="/productdetails" className="product">
              {item.name}
            </Link>
          </div>
          <div className="count-btn">
            <button onClick={() => this.props.downClick(this.props.id, -1)}>
              <i className="fas fa-minus"></i>
            </button>
            <input
              type="text"
              value={this.props.prCount}
              onChange={() => this.props.changeCount(this.props.id)}
            />
            <button onClick={() => this.props.upClick(this.props.id, 1)}>
              <i className="fas fa-plus"></i>
            </button>
            <span></span>
          </div>
          <div className="price">
            <dl class="total-price-wrapper">
              <dt className="total-price">
                {(
                  item.price -
                  item.price * item.discount_rate
                ).toLocaleString()}
                <span>원</span>
              </dt>
              <dd className="discount-price">
                {(item.price * 1).toLocaleString()}
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
