import React, { Component } from 'react';
import Submenu from './Components/Submenu';
import './Nav.scss';
// import logo from '/images/logo.webp';

class Nav extends Component {
  constructor() {
    super();
    this.state = {
      isMenuShown: false,
    };
  }

  render() {
    return (
      <div className="common-nav">
        <div className="user-menu">
          <div className="shipping-container">
            <button className="shipping fast-shipping">
              <span>
                서울・경기・인천{' '}
                <a>
                  샛별배송
                  <img alt="arrow" src="/images/next.png" />
                </a>
              </span>
            </button>
            <button className="shipping regular-shipping">
              <span>
                수도권 이외 지역{' '}
                <a>
                  택배배송
                  <img alt="arrow" src="/images/next.png" />
                </a>
              </span>
            </button>
          </div>
          <ul className="user-menu-list">
            <li className="signup">
              <a href="#">회원가입</a>
            </li>
            <li className="login">
              <a href="#">로그인</a>
            </li>
            <li className="cs">
              <a href="#">고객센터 ▾</a>
            </li>
          </ul>
        </div>
        <div className="logo">
          <img alt="logo" src="/images/logo.webp" />
        </div>

        <div className="header-container">
          <div className="main-menu">
            <ul className="menu">
              <li>
                <a id="menu-all-category" href="#">
                  <img alt="menu" src="images/menu.png" />
                  전체 카테고리
                </a>
              </li>
              <li>
                <a href="#">신상품</a>
              </li>
              <li>
                <a href="#">베스트</a>
              </li>
              <li>
                <a href="#">알뜰쇼핑</a>
              </li>
              <li>
                <a href="#">금주혜택</a>
              </li>
            </ul>
          </div>
          <div className="aside-menu">
            <div className="search">
              <form className="search-form">
                <input className="search-input" type="text" required></input>
                <button className="search-button" type="submit">
                  <img
                    className="search-icon"
                    alt="search"
                    src="/images/search.png"
                  />
                </button>
              </form>
            </div>
            <div className="location">
              <a href="#">
                <img
                  className="menu-icons"
                  alt="shipping-location"
                  src="/images/location.png"
                />
              </a>
            </div>
            <div className="cart">
              <a href="#">
                <img
                  className="menu-icons"
                  alt="cart"
                  src="/images/shopping-cart.png"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="sub-menu-container">
          <Submenu />
        </div>
      </div>
    );
  }
}

export default Nav;
