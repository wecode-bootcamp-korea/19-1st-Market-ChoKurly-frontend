import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import footerIconData from './FooterIconData';
import footerInfoData from './FooterInfoData';
import 'Components/Footer/Footer.scss';

class Footer extends Component {
  render() {
    return (
      <footer className="footer-wrapper">
        <div className="out-footer">
          <div className="inner-footer">
            <div className="customer-center">
              <h2>고객행복센터</h2>
              <div className="contact-by">
                <div className="contact-left">
                  <span className="contact-number">1942-0315</span>
                </div>
                <dl className="center-time">
                  <dt>365고객센터</dt>
                  <dd className="open-time">오전 10시 - 오후 10시</dd>
                </dl>
              </div>
              <div className="contact-by">
                <div className="contact-left">
                  <Link className="contact-link" to="/">
                    카카오톡 문의
                  </Link>
                </div>
                <dl className="center-time">
                  <dt>365고객센터</dt>
                  <dd className="open-time">오전 10시 - 오후 10시</dd>
                </dl>
              </div>
              <div className="contact-by">
                <div className="contact-left">
                  <Link className="contact-link" to="/">
                    1:1 문의
                  </Link>
                </div>
                <dl className="center-time">
                  <dt>24시간 접수 가능</dt>
                  <dd className="open-time">
                    고객센터 운영시간에 순차적으로 답변해드리겠습니다.
                  </dd>
                </dl>
              </div>
            </div>
            <div className="info-center">
              <ul className="market-info">
                <li className="info-list"></li>
                <li className="info-list">
                  <Link to="/">컬리소개영상</Link>
                </li>
                <li className="info-list">
                  <Link to="/">인재채용</Link>
                </li>
                <li className="info-list">
                  <Link to="/">이용약관</Link>
                </li>
                <li className="info-list">
                  <Link to="/">개인정보처리방침</Link>
                </li>
                <li className="info-list">
                  <Link to="/">이용안내</Link>
                </li>
              </ul>
              <div className="info-wrapper">
                {footerInfoData.map(ele => {
                  return (
                    <div className="name-list">
                      <span className="info-names">{ele.index_name}</span>
                      <span className="info-datas">
                        <Link to="/">{ele.link}</Link>
                      </span>
                    </div>
                  );
                })}
              </div>
              <div className="copyright">
                {' '}
                © CHOKURLY CORP.ALLRIGHTS RESERVED
              </div>
              <ul className="social">
                {footerIconData.map(ele => {
                  return (
                    <li key={ele.id} className="social-icon">
                      <Link to="/">
                        <img src={ele.icon} alt={ele.alt} />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="verify-wrapper">
            <div className="verify">
              <img
                src="https://res.kurly.com/pc/ico/2001/logo_isms.png"
                alt="isms"
                className="logo"
              />
              <ul>
                <li>[인증범위]초컬리 쇼핑몰 서비스 · 개발</li>
                <li>[유효기간]2021.04.12~2022.04.11</li>
              </ul>
            </div>
            <div className="verify">
              <img
                src="https://res.kurly.com/pc/ico/2001/logo_eprivacyplus.png"
                alt="eprivacy plus"
                className="logo"
              />
              <ul>
                <li>개인정보보호 우수 웹사이트 ·</li>
                <li> 개인정보처리시스템 인증 (ePRIVACY MINUS)</li>
              </ul>
            </div>
            <div className="payments">
              <img
                src="https://res.kurly.com/pc/service/main/2009/logo_payments.png"
                alt="payments 로고"
                className="logo"
              />
              <ul>
                <li>
                  고객님의 안전거래를 위해 현금 등으로 결제 시 저희 쇼핑몰에서
                  가입한
                </li>
                <li>
                  토오스 페이먼츠 구매안전(에스크로) 서비스를 이용하실 수
                  있습니다.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;