import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Category from './Components/Category';

import './Nav.scss';

class Nav extends Component {
  constructor() {
    super();
    this.state = {
      isCategoryShown: false,
      navBarFixed: false,
    };
  }

  handleMouseOnCategory = () => {
    this.setState({
      isCategoryShown: true,
    });
  };

  handleMouseOffCategory = () => {
    this.setState({
      isCategoryShown: false,
    });
  };

  componentDidMount() {
    window.addEventListener('scroll', this.scrollNavBar);
  }

  scrollNavBar = () => {
    const scroll = window.scrollY;
    const { navBarFixed } = this.state;

    if (scroll > 150 && this.state.navBarFixed === false) {
      this.setState({
        navBarFixed: !navBarFixed,
      });
    }

    if (scroll <= 150 && this.state.navBarFixed === true) {
      this.setState({
        navBarFixed: !navBarFixed,
      });
    }
  };

  render() {
    const { isCategoryShown, navBarFixed } = this.state;
    const { handleMouseOnCategory, handleMouseOffCategory } = this;

    return (
      <div className="common-nav">
        <div className="user-menu">
          <div className="shipping-container">
            <button className="shipping fast-shipping">
              <span>
                서울・경기・인천{' '}
                <Link to="/main">
                  샛별배송
                  <img alt="arrow" src="/images/Nav/next.png" />
                </Link>
              </span>
            </button>
            <button className="shipping regular-shipping">
              <span>
                수도권 이외 지역{' '}
                <Link to="/main">
                  택배배송
                  <img alt="arrow" src="/images/Nav/next.png" />
                </Link>
              </span>
            </button>
          </div>
          <ul className="user-menu-list">
            <li className="signup">
              <Link to="/main">회원가입</Link>
            </li>
            <li className="login">
              <Link to="/main">로그인</Link>
            </li>
            <li className="cs">
              <Link to="/main">고객센터 ▾</Link>
            </li>
          </ul>
        </div>
        <div className="logo">
          <img alt="logo" src="/images/Nav/chokurly.png" />
        </div>
        <>
          <div
            className="header-container"
            id={navBarFixed ? 'header-container-fixed' : null}
          >
            <div className="fixed-header">
              <div className="main-menu">
                <ul className="menu">
                  <li>
                    <Link
                      onMouseEnter={handleMouseOnCategory}
                      className="menu-all-category"
                      to="/main"
                    >
                      <img alt="menu" src="images/Nav/menu.png" />
                      전체 카테고리
                    </Link>
                  </li>
                  <li>
                    <Link to="/main">신상품</Link>
                  </li>
                  <li>
                    <Link to="/main">베스트</Link>
                  </li>
                  <li>
                    <Link to="/main">알뜰쇼핑</Link>
                  </li>
                  <li>
                    <Link to="/main">금주혜택</Link>
                  </li>
                </ul>
              </div>

              <div className="aside-menu">
                <div className="search">
                  <form className="search-form">
                    <input
                      className="search-input"
                      placeholder="비바니 유기농 초콜릿 4종 55% 할인!"
                      type="text"
                      required
                    ></input>
                    <button className="search-button" type="submit">
                      <img
                        className="search-icon"
                        alt="search"
                        src="/images/Nav/search.png"
                      />
                    </button>
                  </form>
                </div>
                <div className="location">
                  <Link to="/main">
                    <img
                      className="menu-icons"
                      alt="shipping-location"
                      src="/images/Nav/location.png"
                    />
                  </Link>
                </div>
                <div className="cart">
                  <Link to="/main">
                    <img
                      className="menu-icons"
                      alt="cart"
                      src="/images/Nav/shopping-cart.png"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </>

        {isCategoryShown && (
          <Category
            isCategoryShown={isCategoryShown}
            handleMouseOffCategory={handleMouseOffCategory}
          />
        )}
      </div>
    );
  }
}

export default Nav;
