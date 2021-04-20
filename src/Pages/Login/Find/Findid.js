import React, { Component } from 'react';
import './Findid.scss';

class Findid extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
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

    const find_id = {
      method: 'POST',
      body: JSON.stringify(this.state),
    };

    fetch('http://10.58.6.178:8000/users/find', find_id)
      .then(response => response.json())
      .then(result => {
        if (
          result['MESSAGE'] === 'EMAIL_TYPE_ERROR' ||
          result['MESSAGE'] === 'INVALID_EMAIL_OR_INVALID_NAME'
        ) {
          alert('입력값을 확인해주세요.');
        } else {
          alert(`고객님의 아이디는 ${result['MESSAGE']}입니다.`);
          console.log(result);
        }
      });
  };
  render() {
    console.log(this.state.finded);
    return (
      <div>
        <div className="f_id_head"></div>
        <div className="f_id_main">
          <div className="f_id_content">
            <h3>아이디 찾기</h3>
            <div className="f_id_form">
              <strong>이름</strong>
              <input
                type="text"
                name="name"
                className="findName"
                size="29"
                placeholder="고객님의 이름을 입력해주세요"
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
        <div className="f_id_footer"></div>
      </div>
    );
  }
}

export default Findid;
