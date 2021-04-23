import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import QuantityBtn from '../QuantityBtn/QuantityBtn';
import './Thumbnail.scss';

class Thumbnail extends Component {
  render() {
    const {
      data,
      number,
      handleIncrease,
      handleDecrease,
      handleSubmit,
    } = this.props;

    return (
      <section className="top-view">
        <article className="thumbnail-wrapper">
          <img
            src={data.thumbnail_image && data.thumbnail_image}
            alt="대표"
            className="top"
          />
          <div className="thumbnail-info">
            <dl className="goods-name">
              <dt>{data.name}</dt>
              <dd> {data.comment}</dd>
            </dl>
            <div className="goods-price-wrapper">
              <div className="goods-price">
                <p className="member">회원할인가</p>
                <p className="member-price">
                  <span className="price">
                    {(
                      data.price -
                      data.price * data.discount_rate
                    ).toLocaleString('en-US')}
                  </span>
                  <span className="unit"> 원 </span>
                  <span className="discount-percent">
                    {data.discount_rate * 100}
                    <span> %</span>
                  </span>
                </p>
                <p className="discount-price">
                  <span>
                    {(data.price * 1).toLocaleString('en-US')}
                    <span>원</span>
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
                <li className="subject-content">{data.sale_unit}</li>
                <li className="subject-content">{data.weight_g * 10}kg</li>
                <li className="subject-content">{data.delivery_type}</li>
                <li className="subject-content">{data.packing_type}</li>
                <li className="subject-content">
                  {data.allergy &&
                    data.allergy.map(text => {
                      return <p key={text.id}>{text.allergy}</p>;
                    })}{' '}
                  함유
                </li>
                <li className="subject-content">{data.instruction}</li>
              </ul>
            </div>
            <div className="goods-select-wrapper">
              <label>상품선택</label>
              <div className="goods-select">
                <select className="goods-list">
                  <option value="">상품선택</option>
                  <option value="nuts-mix">[품절] {data.name} 딸기</option>
                  <option value="berry-mix">{data.name} 녹차</option>
                </select>
                <ul className="list">
                  <li className="goods-own">
                    <div className="added-goods-name">
                      <span>{data.name} 녹차</span>
                      <button className="delete">
                        <i className="fas fa-times"></i>
                      </button>
                    </div>

                    <div className="fixed-price">
                      <QuantityBtn
                        number={number}
                        submit={handleSubmit}
                        up={handleIncrease}
                        down={handleDecrease}
                      />
                      <p>
                        <span className="goods-own-price">
                          {(
                            data.price -
                            data.price * data.discount_rate
                          ).toLocaleString('en-US')}
                        </span>
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
                <span className="total-price">
                  {(
                    (data.price - data.price * data.discount_rate) *
                    number
                  ).toLocaleString('en-US')}
                </span>
                <span className="won">원</span>
              </div>
              <form className="mark-btn">
                <button className="restock">재입고 알림</button>
                <button className="buy-often"> 늘 사는 것</button>
                <button className="add-cart-btn" onClick={this.props.goToCart}>
                  장바구니 담기
                </button>
              </form>
            </div>
          </div>
        </article>
      </section>
    );
  }
}

export default withRouter(Thumbnail);
