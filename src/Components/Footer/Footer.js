import React, { Component } from 'react';
import footerIconData from './FooterData';
import footerInfoData from './FooterInfoData';
import 'Components/Footer/Footer.scss';

class Footer extends Component {
  render() {
    return (
      <footer className="footer-wrapper">
        <div className="inner-footer">
          <div className="customer-center">
            <h2>고객행복센터</h2>
            <div className="by-phone">
              <div className="phone-number">1944-0315</div>
              <div className="center-time">
                <span>365고객센터</span>
                <span>오전 10시 - 오후 10시</span>
              </div>
            </div>
            <div className="by-Kakao">
              <div className="kakao">
                <button className="kakao-btn" type="button">
                  카카오톡 문의
                </button>
              </div>
              <div className="center-time">
                <span>365고객센터</span>
                <span>오전 10시 - 오후 10시</span>
              </div>
            </div>
            <div className="by-chatting">
              <div className="chat">
                <button className="chat-btn" type="button">
                  카카오톡 문의
                </button>
              </div>
              <div className="center-time">
                <span>24시간 접수 가능</span>
                <span>고객센터 운영시간에 순차적으로 답변해드리겠습니다.</span>
              </div>
            </div>
          </div>
          <div className="info-center">
            <div className="market-intro">
              <a href="/">컬리소개</a>
              <a href="/">컬리소개영상</a>
              <a href="/">인재채용</a>
              <a href="/">이용약관</a>
              <a href="/">개인정보처리방침</a>
              <a href="/">이용안내</a>
            </div>
            <div className="market-info">
              {footerInfoData.map(ele => {
                return (
                  <div>
                    <span>{ele.index_name}</span>
                    <span>
                      <a href="/">{ele.link}</a>
                    </span>
                  </div>
                );
              })}
            </div>
            <div className="copyright"> © CHOKURLY CORP.ALLRIGHTS RESERVED</div>
            <ul className="social">
              {footerIconData.map(ele => {
                return (
                  <li key={ele.id} className="social-icon">
                    <a href="/">
                      <img src={ele.icon} alt={ele.alt} />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="verify-wrapper">
          <div className="cirtification"></div>
          <div className="privacy-policy"></div>
          <div className="paymsent"></div>
        </div>
      </footer>
    );
  }
}

export default Footer;
