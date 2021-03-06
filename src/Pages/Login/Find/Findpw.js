import React, { Component } from 'react';
import { API } from 'config';
import './Findpw.scss';

class Findpw extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      identification: '',
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

    fetch(`${API}/users/find-password`, find_pw)
      .then(response => response.json())
      .then(result => {
        if (result['MESSAGE'] === 'SUCCESS') {
          alert('임시 비밀번호가 해당메일로 전송되었습니다.');
        } else {
          alert('존재하지 않는 고객입니다.');
        }
      });
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
                name="identification"
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
              <button
                type="submit"
                className="find_submit"
                onClick={this.handleSubmit}
              >
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
