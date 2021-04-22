import React, { Component } from 'react';
import Taps from 'Pages/ProductDetails/Components/Taps/Taps';
import './GoodsDescription.scss';

class GoodsDescription extends Component {
  state = {
    info: [],
  };

  componentDidMount() {
    fetch('http://localhost:3000/data/ThumbnailData.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          info: data[0],
        });
      });
  }

  render() {
    const { info } = this.state;

    return (
      <ariticle className="goods-description-wrapper">
        <div className="goods-description">
          <div className="goods-intro">
            <div className="goods-img">
              <img src={info.description_image} alt="no image" />
            </div>
            <p className="goods-intro-info">
              <h3>부담없이 즐기는 미니 초콜릿</h3>
              <h2>
                [리터스포트]
                <br />
                미니미 믹스 2종(봉지)
              </h2>
              <span>
                리터스포츠는 판형 초콜릿은 너무나도 맛있지만, 한번에 먹기에는
                양이 조금 많게 느껴졌다면 컬리가 준비한 미니믹스를 만나보세요.
                한판이 4조각으로 이루어져 달콤함이 필요한 순간에 부담없이 즐길
                수 있는 제품이에요. 게다가 미니미 베리 믹스는 총 5종, 미니미
                넛츠믹스는 총 3종의 제품을 골고루 섞어 담았기에 매 순간 다양하게
                골라먹을 수 있지요. 워낙 조그마한 크기라 외출할 때 비상용으로
                하나 정도 챙기기에도 손색이 없을 거예요.
              </span>
            </p>
          </div>
          <div className="goods-point">
            <span> ChocKurly's Check Point </span>
            <img
              src={
                '//img-cf.kurly.com/shop/data/goodsview/20191106/gv30000067069_1.jpg'
              }
              alt="no image"
            />
          </div>
          <div className="goods-pick">
            <p className="title"> ChocKurly's Pick </p>
            <p className="goods-text">
              <span className="goods-title"> 01. 미니미 베리 믹스 </span>
              <br />
              <b>구성:</b>
              <span> 헤이즐넛, 마카다미아, 딸기크림, 딸기요거트, 버터 </span>
            </p>
            <p className="goods-text">
              <span className="goods-title"> 02. 미니미 베리 믹스 </span>
              <br />
              <b>구성:</b>
              <span> 다크초코, 밀크초코, 화이트초코 </span>
            </p>
          </div>
        </div>
        <Taps />
        <img src={info.size_image} alt="choKurly" />
      </ariticle>
    );
  }
}

export default GoodsDescription;
