import React, { Component } from 'react';
import QuantityBtn from '../QuantityBtn/QuantityBtn';
import './Thumbnail.scss';

class Thumbnail extends Component {
  state = {
    unit: 1,
    sell_price: 9000,
    sum: 0,
    info: [],
  };

  addItem = () => {
    const { unit, sell_price, sum } = this.state;
    this.setState({
      unit: unit + 1,
      sum: unit * sell_price,
    });
  };

  delItem = () => {
    const { unit, sell_price, sum } = this.state;

    console.log(unit);
    if (unit > 1) {
      this.setState({
        unit: unit - 1,
        sum: (unit - 1) * sell_price,
      });
    }
  };

  componentDidMount() {
    fetch('http://localhost:3000/data/ThumbnailData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(p => {
        this.setState({
          info: p,
        });
      });
  }

  render() {
    const { sell_price, sum, unit } = this.state;
    const { addItem, delItem } = this;

    return (
      <section className="top-view">
        <article className="thumbnail-wrapper">
          <img
            src="../../../images/상세페이지 썸네일.jpg"
            alt="대표 이미지"
            className="top-img"
          />
          <div className="thumbnail-info">
            <dl className="goods-name">
              <dt>[춰컬릿] 미니미 믹스 2종 (봉지)</dt>
              <dd> 부담 없이 즐기는 미니 초콜릿</dd>
            </dl>
            <div className="goods-price-wrapper">
              <div className="goods-price">
                <p className="member">회원할인가</p>
                <p className="member-price">
                  <span className="price"> {sell_price}</span>
                  <span className="unit"> 원 </span>
                  <span className="discount-percent">
                    10<span> %</span>
                  </span>
                </p>
                <p className="discount-price">
                  <span>
                    1,000<span>원</span>
                  </span>
                  <span>
                    <i class="far fa-question-circle"></i>
                  </span>
                </p>
              </div>
              <div className="cupon-benefit">
                <div className="cupon-percent">
                  <span> 웰컴5%</span>
                </div>
                <span className="cupon-price"> 개당 525원 적립</span>
              </div>
            </div>
            <div className="goods-ul">
              <ul>
                <li className="subject">판매단위</li>
                <li className="subject">중량/용량</li>
                <li className="subject">배송구분</li>
                <li className="subject">포장타입</li>
                <li className="subject">알레르기정보</li>
                <li className="subject">안내사항</li>
              </ul>
              <ul>
                {this.state.info.map(ele => {
                  return (
                    <li className="content" key={ele.id}>
                      {ele.data}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="goods-select-wrapper">
              <label>상품선택</label>
              <div className="goods-select">
                <select className="goods-list">
                  <option value="">상품선택</option>
                  <option value="nuts-mix">
                    [리터 스포트]미니미 넛츠믹스 15p
                  </option>
                  <option value="berry-mix">
                    [리터 스포트]미니미 베리믹스 15p
                  </option>
                </select>
                <ul className="list">
                  <li className="goods-one">
                    <div className="added-goods-name">
                      <span>[리터 스포트]미니 초콜릿 믹스 18p</span>
                      <button className="delete">
                        <i class="fas fa-times"></i>
                      </button>
                    </div>

                    <div className="fixed-price">
                      <QuantityBtn add={addItem} del={delItem} unit={unit} />
                      <p>
                        <span className="goods-own-price">{sell_price}</span>
                        <span>원</span>
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="buy-for-it">
              <div className="total-price-wrapper">
                <span> 총 상품금액: </span>
                <span className="total-price">{sum}</span>
                <span className="won">원</span>
              </div>
              <form className="mark-btn">
                <button className="restock">재입고 알림</button>
                <button className="buy-often"> 늘 사는 것</button>
                <button className="add-cart-btn">장바구니 담기</button>
              </form>
            </div>
          </div>
        </article>
      </section>
    );
  }
}

export default Thumbnail;
