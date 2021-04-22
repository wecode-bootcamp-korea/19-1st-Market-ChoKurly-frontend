import React, { Component } from 'react';
import './GuestReview.scss';

class GuestReview extends Component {
  state = {
    text: '',
    guestReviews: [],
    num: 1,
    id: 0,
  };

  handleInput = e => {
    this.setState({
      text: e.target.value,
    });
  };

  getToday() {
    const date = new Date();
    const year = date.getFullYear();
    const month = ('0' + (1 + date.getMonth())).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    return year + '-' + month + '-' + day;
  }

  handleKeyPress = e => {
    if (e.key === 'Enter') {
      if (!this.state.text) {
        e.preventDefault();
      } else {
        return this.addComment();
      }
    }
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  indexNum = () => {
    const { num } = this.state;
    const count = this.addComment;

    if (count === 1) {
      return this.state.num + 1;
    }
  };

  addComment = () => {
    const { id, text, guestReviews, reviewer } = this.state;
    const date = this.getToday();
    // const num = this.indexNum()
    const num = guestReviews.length;

    this.setState({
      guestReviews: [
        ...guestReviews,
        {
          text: text,
          id: id + 1,
          num: guestReviews.length + 1,
          reviewer: 'dongdong2',
          date: date,
        },
      ],
      text: '',
    });
  };

  render() {
    const isBtnAble = this.state.text.length > 9 ? 'onColor' : 'offColor';
    return (
      <section className="geust-review-wrapper">
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
            <li className="reviews">
              <div className="number"> 공지 </div>
              <div className="review"> 맛있어요~ </div>
              <div className="reviewer"> PM 이예원 </div>
              <div className="date">2021-05-13</div>
            </li>
            {this.state.guestReviews.map(comment => {
              return (
                <li key={comment.id} className="reviews">
                  <div className="number">{comment.num}</div>
                  <div className="review">{comment.text}</div>
                  <div className="reviewer">백엔드 플리스 김미아이디</div>
                  <div className="date">{String(comment.date)}</div>
                </li>
              );
            })}
          </ul>
          <div className="input-wrapper">
            <form className="add-comment" onSubmit={this.handleSubmit}>
              <input
                type="text"
                placeholder="제품에 대한 흔적을 남겨보세요(10자 이상)."
                onChange={this.handleInput}
                onKeyPress={this.handleKeyPress}
                value={this.state.text}
              />
              <button
                type="button"
                className={isBtnAble + ' push-btn'}
                onClick={this.addComment}
              >
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
