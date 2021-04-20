import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import './Login.scss';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      id: '',
      password: '',
      token: '',
    };
  }
  //인풋창 핸들링
  handleInput = e => {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  };

  //서버로 로그인 정보 제출
  handleSubmit = e => {
    e.preventDefault();
    // const inputForLogin = {
    //   id: this.state.id,
    //   password: this.state.password,
    // };
    //this.state

    const Login_Info = {
      method: 'POST',
      body: JSON.stringify(this.state),
    };

    fetch('http://10.58.6.178:8000/users/login', Login_Info)
      .then(response => response.json())
      .then(result => {
        //json데이터 형태가 어떠냐에 따라 ex) {idx: 8, nickname: "noh", email:"aa@n.com" success: true}
        if (result['MESSAGE'] === 'SUCCESS') {
          alert('로그인 되었습니다.');
          //서버로 부터 받은 JSON형태의 데이터 그 중 token값만 (객체 형태 key & value) 를 로컬스토리지에 우선 저장.
          window.localStorage.setItem('token', JSON.stringify(result['TOKEN']));
          this.setState({
            id: result.id,
            password: result.password,
            token: result['TOKEN'],
          });
          this.props.history.push('/Findid');
        } else {
          alert('아이디 또는 비밀번호를 확인해주세요.');
        }
      });
  };
  //회원가입 페이지로 이동
  goToSignup = () => {
    this.props.history.push('/signup');
  };
  render() {
    console.log(this.state.token);
    return (
      <div>
        <div className="login_header"></div>
        <div className="login_main">
          <div className="login_content">
            <div className="login_wrap">
              <h3 className="loginName">로그인</h3>
              <div className="login_container">
                <form className="login_form" onSubmit={this.handleSubmit}>
                  <input
                    type="text"
                    name="id"
                    className="login_inputId"
                    placeholder="아이디를 입력해주세요"
                    size="20"
                    tabIndex="1"
                    onChange={this.handleInput}
                  />
                  <input
                    type="password"
                    name="password"
                    className="login_inputPw"
                    placeholder="비밀번호를 입력해주세요"
                    size="20"
                    tabIndex="2"
                    onChange={this.handleInput}
                  />
                  <div className="login_extra_wrap">
                    <div className="login_checkbox_wrap">
                      <input type="checkbox" name="chk_security" value="y" />
                      <p>보안접속</p>
                      {/* <span>보안접속</span> */}
                    </div>
                    <div className="login_search">
                      <Link to="/Findid" className="link">
                        아이디 찾기
                      </Link>
                      <span className="login_bar">|</span>
                      <Link to="/Findpw" className="link">
                        비밀번호 찾기
                      </Link>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="login_btn"
                    // onClick={this.handleSubmit}
                  >
                    로그인
                  </button>
                </form>
                <button className="loginToSignup" onClick={this.goToSignup}>
                  회원가입
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="login_footer"></div>
      </div>
    );
  }
}

export default withRouter(Login);
