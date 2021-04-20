import React, { Component } from 'react';
import './Findpw.scss';

class Findpw extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      id: '',
      name: '',
    };
  }
  //인풋창 핸들링
  handleInput = e => {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  };
  //찾기 버튼 핸들링
  handleSubmit = e => {
    e.preventDefault();

    const find_pw = {
      method: 'POST',
      body: JSON.stringify(this.state),
    };

    fetch('http://10.58.6.178:8000/users/find-password', find_pw)
      .then(response => response.json())
      .then(result => console.log('결과: ', result));
  };
  render() {
    return (
      <div>
        <div className="f_pw_head"></div>
        <div className="f_pw_main">
          <div className="f_pw_content">
            <h3>비밀번호 찾기</h3>
            <div className="f_pw_form">
              <strong>이름</strong>
              <input
                type="text"
                name="name"
                className="findName"
                size="29"
                placeholder="고객님의 이름을 입력해주세요"
                onChange={this.handleInput}
              />
              <strong>아이디</strong>
              <input
                type="text"
                name="id"
                className="findId"
                size="29"
                placeholder="가입 시 등록하신 아이디를 입력해주세요"
                onChange={this.handleInput}
              />
              <strong>이메일</strong>
              <input
                type="text"
                name="email"
                className="findEmail"
                size="29"
                placeholder="가입 시 등록하신 이메일 주소를 입력해주세요"
                onChange={this.handleInput}
              />
              <button type="submit" className="find_submit">
                찾기
              </button>
            </div>
          </div>
        </div>
        <div className="f_pw_footer"></div>
      </div>
    );
  }
}

export default Findpw;
