import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './SignupFin.scss';

class SignupFin extends Component {
  render() {
    return (
      <div className="SignupFin-Main">
        <div className="SignupFin-Content">
          <div className="SignupFin-Wrap">
            <div className="SignupFin-Form">
              <div className="SignupFin-Ment">
                <p className="desc">회원가입이 완료되었습니다.</p>
                <div className="memberInfo">
                  <ul>
                    <li>
                      <strong className="bolds">아이디</strong>
                      <span>hello1358</span>
                    </li>
                    <li>
                      <strong className="bolds">이름</strong>
                      <span>채준형</span>
                    </li>
                    <li>
                      <strong className="bolds">이메일</strong>
                      <span>h_e_ll_o_@naver.com</span>
                    </li>
                  </ul>
                </div>
                <p className="SignupFin-Btn">
                  <Link to="/">
                    <span className="LoginFin_Btn Event">
                      신규 혜택 100원 상품 보러가기
                    </span>
                  </Link>
                  <Link to="/">
                    <span className="LoginFin_Btn GotoMain">
                      마이페이지로 이동
                    </span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignupFin;
