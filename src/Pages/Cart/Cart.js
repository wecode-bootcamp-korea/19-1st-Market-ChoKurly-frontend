import React, { Component } from 'react';
import Nav from '../../Components/Nav/Nav';
import { withRouter } from 'react-router-dom';
import OrderList from './OrderList/OrderList';
import { API } from '../../config';

import './Cart.scss';

class Cart extends Component {
  constructor() {
    super();
    this.state = {
      ItemList: {},
      number: 0,
      isCheck: false,
      SumList: [],
      total: 0,
      discount: 0,
      delivery: 0,
    };
  }
  componentDidMount = () => {
    fetch(`${API}/orders/basket`, {
      // fetch('data/cartdata.json', {
      headers: {
        Authorization: localStorage.getItem('Authorization'),
      },
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({
          // ItemList: data.result,
          ItemList: data.result[0],
        });
        console.log(this.state.ItemList);
      });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.ItemList !== this.state.ItemList) {
      //계산
      let totalAmount = 0;
      let totalDiscount = 0;
      console.log('ItemList', this.state.ItemList);
      this.state.ItemList.cart_product_info.forEach(order => {
        // const [price] = order.price.split('.');
        console.log(order.price);
        console.log(order.quantity);
        console.log(order.discount_rate);

        totalAmount += order.price * order.quantity;
        totalDiscount += order.price * +order.discount_rate * order.quantity;
        if (totalAmount > 40000) {
          this.setState({ delivery: 0 });
        } else {
          this.setState({ delivery: 3000 });
        }
      });

      this.setState({ total: totalAmount, discount: totalDiscount });
    }
  }
  //장바구니 - 개별리스트 삭제
  delOrderItem = hot => {
    const { ItemList } = this.state;
    this.setState({
      ItemList: ItemList.filter(({ id }) => id !== hot),
    });
  };
  //장바구니 - 전체리스트 삭제
  delOrderItemAll = e => {
    e.preventDefault();
    const { ItemList } = this.state;
    this.setState({
      ItemList: ItemList.filter(() => false),
    });
  };

  // 수량 증감 표현식
  changeCount = (itemId, count) => {
    if (!count) return;

    const { ItemList } = this.state;

    this.setState({
      ItemList: ItemList.map(order => ({ ...order, count })),
    });
  };

  render() {
    const { ItemList, total, discount, delivery } = this.state;

    return (
      <main className="cart-wrapper">
        <Nav />
        <h2> 장바구니 </h2>
        <div className="cart-content">
          <div className="select-products">
            <form className="check-wrapper">
              <label className="check">
                <input
                  className="check-circle"
                  type="checkbox"
                  name="checkAll"
                />
                <span className="check-all">전체선택</span>
              </label>
              <span className="divide">|</span>
              <button className="del-select">선택삭제</button>
              <label className="del-all">
                <i class="fas fa-dumpster"></i>
                <button
                  className="del-all-clear"
                  onClick={this.delOrderItemAll}
                >
                  장바구니 비우기
                </button>
              </label>
            </form>
            <div className="cart-select">
              <ul className="cart-select-list">
                {ItemList.cart_product_info?.map(el => {
                  return (
                    <OrderList
                      delOrderItem={this.delOrderItem}
                      key={el.id}
                      id={el.product_id}
                      item={el}
                      number={this.state.number}
                      prCount={el.quantity}
                      changeCount={this.changeCount}
                    />
                  );
                })}
              </ul>
              {!ItemList.length && (
                <div className="inner-empty">
                  <p className="empty-txt">장바구니에 담긴 상품이 없습니다</p>
                </div>
              )}
            </div>
            <form className="check-wrapper">
              <label className="check">
                <input
                  className="check-circle"
                  type="checkbox"
                  name="checkAll"
                />
                <span className="check-all">전체선택</span>
              </label>
              <span className="divide">|</span>
              <button className="del-select">선택삭제</button>
            </form>
          </div>
          <div className="cart-result">
            <div className="inner-result">
              <div className="cart-delivery">
                <p className="address">
                  <i className="fas fa-map-marker-alt" />
                  배송지
                </p>
                <p className="address">백엔드에서 받을곳</p>
                <button type="button" className="change-btn">
                  배송지변경
                </button>
              </div>
              <div className="amount-view">
                <dl className="price-detail">
                  <dt className="price-product">상품금액</dt>
                  <dd>
                    <span className="total-price">
                      {total.toLocaleString()}
                      <span>원</span>
                    </span>
                  </dd>
                </dl>
                <dl className="price-detail">
                  <dt className="price-product">상품할인금액</dt>
                  <dd>
                    <span>
                      {discount.toLocaleString()}
                      <span>원</span>
                    </span>
                  </dd>
                </dl>
                <dl className="price-detail">
                  <dt className="price-product">배송비</dt>
                  <dd>
                    <span className="total-price">
                      {delivery}
                      <span>원</span>
                    </span>
                  </dd>
                </dl>
                <dl className="final-price-main">
                  <dt className="price-product">결제예정금액</dt>
                  <dd>
                    <span className="final-price">
                      {(total - discount + delivery).toLocaleString()}
                      <span>원</span>
                    </span>
                  </dd>
                </dl>
              </div>
              <div className="free-delivery-fee">
                <span>주문하면</span>
                <span className="final-price">
                  {total - discount + delivery}
                  <span>분</span>
                </span>
                <span>동안 무료배송</span>
                <div className="moreFree">30,000원 이상 주문시 무료배송</div>
              </div>
              <form className="submit">
                <button className="submit-btn">주문하기</button>
              </form>
              <div className="notice">
                <p>쿠폰/적립금은 주문서에서 사용 가능합니다</p>
                <p>
                  '입금확인'상태일 때는 주문 내역 상세에서 직접 주문 가능합니다.
                </p>
                <p>'입금확인'이수 상태에는 고객센터로 문의해 주세요</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default withRouter(Cart);
