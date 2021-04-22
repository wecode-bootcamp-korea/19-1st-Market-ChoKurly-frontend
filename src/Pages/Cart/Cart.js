import React, { Component } from 'react';
import OrderList from './OrderList/OrderList';
import { API } from '../../config';

import './Cart.scss';

class Cart extends Component {
  constructor() {
    super();
    this.state = {
      ItemList: [],
      number: 0,
      isEmpty: false,
      isCheck: false,
      SumList: [],
      total: 0,
      discount: 0,
      delivery: 3000,
    };
  }
  // addSum = () => {
  //   for (i = 0; i < SumList.length; i++) {
  //     SumList;
  //   }
  // };
  //,{header: {Authorization: localStorage.getItem('Authorization or Token')}}

  //목데이터 관리(Get)
  componentDidMount = () => {
    fetch('data/cartdata.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          ItemList: data,
        });
      });
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevState.ItemList !== this.state.ItemList) {
      //계산
      let totalAmount = 0;
      let totalDiscount = 0;
      this.state.ItemList.forEach(order => {
        totalAmount += order.pickedPrice * order.count;
        totalDiscount += order.pickedPrice * order.discountRate * order.count;
        if (totalAmount > 40000) {
          this.setState({ delivery: 0 });
        } else {
          this.setState({ delivery: 3000 });
        }
      });

      this.setState({ total: totalAmount, discount: totalDiscount });
    }
  }
  //장바구니 선택한거 BackEnd 보내기
  // giveItemList = () => {
  //   let products = this.state.orderList.map(order => {
  //     return {
  //       product_id: order.id,
  //       count: order.count,
  //     };
  //   });
  //   console.log(products);
  //   fetch('http://10.5.30.109:8000/products/basket', {
  //     method: 'POST',
  //     body: {
  //       products: products,
  //     },
  //   })
  //     .then(res => res.json())
  //     .then(data => {
  //       // { MESSAGE: SUCCESS }
  //       console.log(data);
  //     });
  //   this.props.history.push('/');
  // };
  // componentDidMount = () => {
  //   fetch(`${API}/orders/basket`, {
  //     headers: {
  //       Authorization: localStorage.getItem('Authorization'),
  //     },
  //   })
  //     .then(response => response.json())
  //     .then(result => {
  //       this.setState({
  //         ItemList: result.data.result,
  //       });
  //     });
  // };
  //장바구니 - 개별리스트 삭제
  delOrderItem = hot => {
    const { ItemList } = this.state;
    this.setState({
      ItemList: ItemList.filter(order => {
        console.log(order.id);
        if (order.id === hot) {
          return;
        }
        return order;
      }),
    });
  };
  //장바구니 - 전체리스트 삭제
  delOrderItemAll = e => {
    e.preventDefault();
    const { ItemList } = this.state;
    this.setState(
      {
        ItemList: ItemList.filter(() => {}),
        isEmpty: true,
      },
      () => {
        console.log(this.state.ItemList);
      }
    );
  };

  // 바뀌기
  changeCount = (id, count) => {
    if (!count) return;

    const { ItemList } = this.state;

    const newOrderList = ItemList.filter(order => {
      if (order.id === id) {
        order.count = count;
      }
      return order;
    });
    this.setState({
      ItemList: newOrderList,
    });
  };
  // //증가함수 핸들링
  // handleIncrease = (id, count) => {
  //   const { ItemList } = this.state;
  //   this.setState({
  //     ItemList: ItemList.filter(order => {
  //       if (order.idx === id) {
  //         if (this.state.number > 29) {
  //           return 30;
  //         }
  //       }
  //       return order;
  //     }),
  //   });
  //   if (this.state.number > 29) {
  //     return 30;
  //   }
  //   this.setState({
  //     number: this.state.number + 1,
  //   });
  // };
  // //감소함수 핸들링
  // handleDecrease = () => {
  //   if (this.state.number < 1) {
  //     return 0;
  //   }
  //   this.setState({
  //     number: this.state.number - 1,
  //   });
  // };
  // //제출 핸들링
  // handleSubmit = e => {
  //   e.preventDefault();
  // };
  hiddenDiv = e => {
    e.preventDefault();
    if (this.state.ItemList === null) {
      this.setState({ isEmpty: true });
    }
  };

  render() {
    // const { carts } = this.state;
    // const totalPrice =
    //   carts.length &&
    //   carts
    //     .reduce((totalPrice, cart) => {
    //       totalPrice = totalPrice + cart.price * cart.count;
    //       return totalPrice;
    //     }, 0)
    //     .toLocaleString();
    const { ItemList } = this.state;
    return (
      <main className="cart-wrapper">
        <h2> 장바구니 </h2>
        <div className="cart-content">
          <div className="select-products">
            <form className="check-wrapper">
              <label className="check">
                <input
                  className="check-circle"
                  type="checkbox"
                  name="checkAll"
                  onChange={this.handleCheck}
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
              <ul className="cart-select-list" onChange={this.hiddenDiv}>
                {ItemList.map(item => {
                  return (
                    <OrderList
                      delOrderItem={this.delOrderItem}
                      id={item.id}
                      item={item}
                      handleDecrease={this.handleDecrease}
                      handleIncrease={this.handleIncrease}
                      handleSubmit={this.handleSubmit}
                      number={this.state.number}
                      prCount={item.count}
                      changeCount={this.changeCount}
                      // total={this.state.total}
                      // discount={this.state.discount}
                      // delivery={this.state.delivery}
                    />
                  );
                })}
              </ul>
              {this.state.isEmpty ? (
                <div className="inner-empty">
                  <p className="empty-txt">장바구니에 담긴 상품이 없습니다</p>
                </div>
              ) : null}
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
                  <i className="fas fa-map-marker-alt"></i>배송지
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
                      {this.state.total}
                      <span>원</span>
                    </span>
                  </dd>
                </dl>
                <dl className="price-detail">
                  <dt className="price-product">상품할인금액</dt>
                  <dd>
                    <span>
                      {this.state.discount}
                      <span>원</span>
                    </span>
                  </dd>
                </dl>
                <dl className="price-detail">
                  <dt className="price-product">배송비</dt>
                  <dd>
                    <span className="total-price">
                      {this.state.delivery}
                      <span>원</span>
                    </span>
                  </dd>
                </dl>
                <dl className="final-price-main">
                  <dt className="price-product">결제예정금액</dt>
                  <dd>
                    <span className="final-price">
                      {this.state.total -
                        this.state.discount +
                        this.state.delivery}
                      <span>원</span>
                    </span>
                  </dd>
                </dl>
              </div>
              <div className="free-delivery-fee">
                <span>주문하면</span>
                <span className="final-price">
                  {this.state.total - this.state.discount + this.state.delivery}
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

export default Cart;
