import React, { Component } from 'react';
import Taps from '../Taps/Taps';
import { guestReviewData } from './GuestReviewData';
import './GuestReview.scss';
class GuestReview extends Component {
  render() {
    return (
      <section className="geust-review-wrapper">
        <Taps />
        <div className="guest-review">
          <b>PRODUCT REVIEW</b>
          <div className="review-info">
            <div calssName="alert-review">
              <p>
                상품에 대한 문의를 남기는 공간입니다. 해당 게시판의 성격과 다른
                글은 사전동의 없이 담당 게시판으로 이동될 수 있습니다.
              </p>
              <p>
                배송관련, 주문(취소/교환/환불)관련 문의 및 요청사항은 마이컬리
                내 1:1 문의에 남겨주세요.
              </p>
            </div>
            <select className="arrage-review">
              <option value="standard">최근등록순</option>
              <option value="standard">좋아요많은순</option>
              <option value="standard">등급순</option>
            </select>
          </div>
          <ul className="comment-list">
            <li className="reviews">
              <div className="number">번호</div>
              <div className="review-title">내용</div>
              <div className="reviewer">작성자</div>
              <div className="date">작성일</div>
            </li>
            {guestReviewData.map(ele => {
              return (
                <li key="ele.id" className="reviews">
                  <div className="number">{ele.number}</div>
                  <div className="review">{ele.review}</div>
                  <div className="reviewer">{ele.reviewer}</div>
                  <div className="date">{ele.date}</div>
                </li>
              );
            })}
          </ul>
          <div className="input-wrapper">
            <form className="move">
              <button className="left-btn">
                <i class="fas fa-chevron-left"></i>
              </button>
              <button className="page-number">1</button>
              <button className="page-number">2</button>
              <button className="right-btn">
                <i class="fas fa-chevron-right"></i>
              </button>
            </form>
            <form className="add-comment">
              <input type="text" placeholder="제품에 대한 흔적을 남겨보세요." />
              <button type="button">
                <i class="fas fa-shoe-prints"></i>
              </button>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default GuestReview;
