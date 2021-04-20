import React, { Component } from 'react';
import QuantityBtn from '../QuantityBtn/QuantityBtn';
import './Thumbnail.scss';

class Thumbnail extends Component {
  state = {
    unit: 1,
    sell_price: 0,
    sum: 0,
    info: {},
  };

  addItem = () => {
    const { unit, sell_price } = this.state;
    this.setState({
      unit: unit + 1,
      sum: unit * sell_price,
    });
  };

  delItem = () => {
    const { unit, sell_price } = this.state;
    console.log(unit);
    if (unit > 1) {
      this.setState({
        unit: unit - 1,
        sum: unit * sell_price,
      });
    }
  };

  componentDidMount() {
    fetch('http://10.58.6.70:8000/products/7')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({
          info: data.result[0],
        });
      });
  }

  render() {
    const { sell_price, sum, unit, info } = this.state;
    const { addItem, delItem } = this;
    return (
      <section className="top-view">
        <article className="thumbnail-wrapper">
          <img
            src={info.thumbnail_image && info.thumbnail_image}
            alt="대표"
            className="top"
          />
          <div className="thumbnail-info">
            <dl className="goods-name">
              <dt>{info.name}</dt>
              <dd> {info.comment}</dd>
            </dl>
            <div className="goods-price-wrapper">
              <div className="goods-price">
                <p className="member">회원할인가</p>
                <p className="member-price">
                  <span className="price"> {info.price}</span>
                  <span className="unit"> 원 </span>
                  <span className="discount-percent">
                    {info.discount_rate * 100}
                    <span> %</span>
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
                <li className="subject">{info.sale_unit}</li>
                <li className="subject">{info.weight_g}</li>
                <li className="subject">{info.delivery_type}</li>
                <li className="subject">{info.packing_type}</li>
                <li className="subject">
                  {info.allergy &&
                    info.allergy.map(text => {
                      return <p key={text.id}>{text.allergy}</p>;
                    })}
                </li>
                <li className="subject">{info.instruction}</li>
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
