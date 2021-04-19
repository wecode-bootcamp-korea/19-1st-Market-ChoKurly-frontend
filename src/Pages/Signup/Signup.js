import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { isEmail, isId, isPassword } from './Check';
import './Signup.scss';

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      showId: false,
      showPw: false,
      showRe: false,
      showAddress: false,
      id: '',
      password: '',
      repassword: '',
      address: '',
      email: '',
      idCheck: '',
      pwCheck: '',
      emailCheck: '',
      birth: '',
    };
  }
  handleShowIdGuide = () => {
    this.setState({
      // show: !this.state.show,
      showId: true,
    });
  };
  handleShowPwGuide = () => {
    this.setState({
      showPw: true,
    });
  };
  handleShowReGuide = () => {
    this.setState({
      showRe: true,
    });
  };
  handleShowAddress = () => {
    this.setState({
      showAddress: !this.state.showAddress,
    });
  };
  //인풋창 핸들링 + 유효성 검사
  handleInput = e => {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
    if (!isId(this.state.id)) {
      this.setState({ isValidId: false });
    } else {
      this.setState({ isValidId: true });
    }
    if (!isPassword(this.state.password)) {
      this.setState({ isValidPw: false });
    } else {
      this.setState({ isValidPw: true });
    }
    if (!isEmail(this.state.email)) {
      this.setState({ isValidEmail: false });
    } else {
      this.setState({ isValidEmail: true });
    }
  };
  //아이디 Validation + fetch 함수 적용
  checkId = e => {
    e.preventDefault();

    const inputId = {
      id: this.state.id,
    };
    const id_info = {
      method: 'POST',
      body: JSON.stringify(inputId),
    };

    if (this.state.isValidId === false) {
      alert('잘못된형식입니다.');
      this.setState({
        id: '',
      });
      //   alert('사용이 가능합니다. or 이미 등록된 아이디입니다. ');
      //   this.setState({ checkedId: true });
      //   this.setState({ idCheck: this.state.id });
    } else {
      // alert(
      //   '사용이 가능합니다. or 이미 등록된 이메일입니다.다시 작성해 주십시요! '
      // );
      // this.setState({ idCheck: this.state.id });
      // this.setState({ checkedId: true });
      fetch('http://10.58.2.7:8000/users/signupcheck', id_info)
        .then(response => response.json())
        .then(result => {
          if (result === false) {
            alert('이미 존재하는 아이디입니다.');
          } else {
            alert('사용가능 한 아이디입니다');
            this.setState({ checkedId: true });
            this.setState({ idCheck: this.state.id });
          }
        });
    }
  };
  //비밀번호 Validation
  checkPw = e => {
    e.preventDefault();
    if (this.state.isValidPw) {
      this.setState({ pwCheck: this.state.password });
    } else {
      // alert('비밀번호 형식을 맞춰주세요.');
    }
  };
  //이메일 Validation
  checkEmail = e => {
    e.preventDefault();

    const inputEmail = {
      email: this.state.email,
    };

    const email_info = {
      method: 'POST',
      body: JSON.stringify(inputEmail),
    };

    if (this.state.isValidEmail) {
      fetch('http://10.58.2.7:8000/users/signupcheck', email_info)
        .then(response => response.json())
        .then(result => {
          if (result === false) {
            alert('이미 등록된 이메일입니다. 다시 작성해 주십시요!');
          } else {
            alert('사용이 가능합니다.');
            this.setState({ emailCheck: this.state.email });
          }
        });
      // alert(
      //   '사용이 가능합니다. or 이미 등록된 이메일입니다.다시 작성해 주십시요! '
      // );
      // this.setState({ emailCheck: this.state.email });
    } else {
      alert('잘못된 이메일 형식입니다.');
    }
  };
  //서버로 가입 양식 제출
  handleSubmit = e => {
    e.preventDefault();
    const {
      id,
      password,
      repassword,
      name,
      email,
      address,
      mobile,
      idCheck,
      pwCheck,
      emailCheck,
    } = this.state;

    const signupInfo = {
      id: this.state.idCheck,
      pw: this.state.pwCheck,
      name: this.state.name,
      email: this.state.emailCheck,
      mobile: this.state.mobile,
      address: this.state.address,
      gender: this.state.gender,
      birth: this.state.birth,
    };
    const signup_info = {
      method: 'POST',
      body: JSON.stringify(signupInfo),
    };
    if (
      id &&
      password &&
      repassword &&
      name &&
      email &&
      email === emailCheck &&
      mobile &&
      address &&
      id === idCheck &&
      password === pwCheck &&
      password === repassword
    ) {
      fetch('http://10.58.2.7:8000/users/signup', signup_info)
        .then(response => response.json())
        .then(result => console.log('결과: ', result));
      // .then(
      //   alert('가입이 안료되었습니다.')
      // );
      // alert('가입이 완료되었습니다.');
      //여가에 무브 투.
    } else {
      alert('입력값을 확인해주세요.');
    }
  };
  //회원가입 최종 승인 바인딩
  SignupApproval = e => {
    e.preventDefault();
    this.checkPw(e);
    this.handleSubmit(e);
  };
  render() {
    const { showId, showPw, showRe } = this.state;
    const { password, repassword } = this.state;
    console.log(this.state.birth);
    // console.log(pwCheck)
    return (
      <div className="Signup-Main">
        <div className="Signup-Header"></div>
        <div className="Signup-Container">
          <h3>회원가입</h3>
          <p className="Signup-Sub">
            <span className="ico">*</span>
            필수입력사항
          </p>
          <main class="Signup-Form">
            <div className="SignupWrap">
              <div className="SignupContent SignupId">
                아이디
                <span className="ico">*</span>
              </div>
              <div className="Signup-Input-Wrap">
                <input
                  type="text"
                  name="id"
                  maxlength="16"
                  label="아이디"
                  placeholder="6자 이상의 영문 혹은 영문과 숫자를 조합"
                  data-validator="false"
                  className="Signup-Input"
                  onChange={this.handleInput}
                  onClick={this.handleShowIdGuide}
                />
              </div>
              <Link to="/" className="Signup-checkBtn" onClick={this.checkId}>
                중복확인
              </Link>
            </div>
            {showId ? (
              <div className="SignupGuide">
                <li className={this.state.isValidId ? 'correct' : 'incorrect'}>
                  6자 이상의 영문 혹은 영문과 숫자를 조합
                </li>
                <li className={this.state.checkedId ? 'correct' : 'incorrect'}>
                  아이디 중복확인
                </li>
              </div>
            ) : null}
            <div className="SignupWrap">
              <div className="SignupContent SignupList">
                비밀번호
                <span className="ico">*</span>
              </div>
              <input
                type="password"
                name="password"
                label="비밀번호"
                maxlength="16"
                className="Signup-Input"
                placeholder="비밀번호를 입력해주세요"
                onChange={this.handleInput}
                onClick={this.handleShowPwGuide}
              />
            </div>
            {showPw ? (
              <div className="SignupGuide">
                <li className={password.length > 9 ? 'correct' : 'incorrect'}>
                  10자 이상 입력
                </li>
                <li className={this.state.isValidPw ? 'correct' : 'incorrect'}>
                  영문/숫자/특수문자(공백 제외)만 허용하며 3가지 조합이 필요
                </li>
              </div>
            ) : null}
            <div className="SignupWrap">
              <div className="SignupContent SignupList">
                비밀번호확인
                <span className="ico">*</span>
              </div>
              <input
                type="password"
                name="repassword"
                label="비밀번호"
                maxlength="16"
                className="Signup-Input"
                placeholder="비밀번호를 한번 더 입력해주세요"
                onChange={this.handleInput}
                onClick={this.handleShowReGuide}
              />
            </div>
            {showRe ? (
              <div className="SignupGuide">
                <li
                  className={
                    repassword.length > 0 && repassword === this.state.password
                      ? 'correct'
                      : 'incorrect'
                  }
                >
                  동일한 비밀번호를 입력해주세요.
                </li>
              </div>
            ) : null}
            <div className="SignupWrap">
              <div className="SignupContent SignupList">
                이름
                <span className="ico">*</span>
              </div>
              <input
                type="text"
                name="name"
                label="이름"
                className="Signup-Input"
                placeholder="이름을 입력해주세요"
                onChange={this.handleInput}
              />
            </div>
            <div className="SignupWrap">
              <div className="SignupContent SignupList">
                이메일
                <span className="ico">*</span>
              </div>
              <input
                type="text"
                name="email"
                label="이메일"
                className="Signup-Input"
                placeholder="예:chokurly@kurly.com"
                onChange={this.handleInput}
              />
              <input type="hidden" name="chk_email" label="이메일중복체크" />
              <Link to="/" class="Signup-checkBtn" onClick={this.checkEmail}>
                중복확인
              </Link>
            </div>
            <div className="SignupWrap">
              <div className="SignupContent SignupList">
                휴대폰
                <span className="ico">*</span>
              </div>
              <div>
                <div className="phone_num">
                  <input
                    type="text"
                    name="mobile"
                    label="휴대폰"
                    placeholder="숫자만 입력해주세요"
                    className="Signup-Input"
                    pattern="[0-9]*"
                    onChange={this.handleInput}
                  />
                  <input
                    type="hidden"
                    name="mobile[]"
                    id="mobile0"
                    label="휴대폰"
                  />
                  <button
                    id="certBtn"
                    className={
                      Number(this.state.mobile)
                        ? 'SignupCert '
                        : 'notSignupCert'
                    }
                    type="button"
                  >
                    인증번호 받기
                  </button>
                </div>
                <div id="codeNum" className="code_num"></div>
              </div>
            </div>
            <div className="SignupWrap">
              <div className="SignupContent SignupAddress">
                주소
                <span className="ico">*</span>
              </div>
              <div className="field_address">
                <div className="SignupAddressField">
                  <button
                    to="/"
                    id="addressSearch"
                    class="Signup-Search"
                    onClick={this.handleShowAddress}
                  >
                    <i className="fas fa-search"></i>
                    <span id="addressNo" class="address_no" data-text="재검색">
                      주소 입력
                    </span>
                  </button>
                  <p class="zip guide">
                    <span class="zip guide case1">
                      배송지에 따라 상품 정보가 달라질 수 있습니다.
                    </span>
                  </p>
                </div>
              </div>
            </div>
            {this.state.showAddress ? (
              <div className="hiddenAddress">
                <input
                  className="hiddenAddressInput"
                  name="address"
                  placeholder="주소를 입력하세요."
                  onChange={this.handleInput}
                />
              </div>
            ) : null}
            <div className="SignupWrap">
              <div className="SignupContent SignupList">성별</div>
              <div className="SignupGenderWrap">
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="m"
                    onClick={this.handleInput}
                  />
                  <span className="ico"></span>
                  남자
                </label>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="w"
                    onClick={this.handleInput}
                  />
                  <span className="ico"></span>
                  여자
                </label>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="n"
                    onClick={this.handleInput}
                  />
                  <span className="ico"></span>
                  선택안함
                </label>
              </div>
            </div>
            <div className="SignupWrap">
              <div className="SignupContent SignupList">생년월일</div>
              <div className="birth_day_wrap">
                <input type="date" name="birth" onChange={this.handleInput} />
                {/* <div className="birth_day">
                  <input
                    type="text"
                    name="birth_year"
                    id="birth_year"
                    pattern="[0-9]*"
                    label="생년월일"
                    size="4"
                    maxlength="4"
                    placeholder="YYYY"
                  />
                  <span class="SignupBar">/</span>
                  <input
                    type="text"
                    name="birth[]"
                    id="birth_month"
                    pattern="[0-9]*"
                    label="생년월일"
                    size="2"
                    maxLength="2"
                    placeholder="MM"
                  />
                  <span class="SignupBar">/</span>
                  <input
                    type="text"
                    name="birth[]"
                    id="birth_day"
                    pattern="[0-9]*"
                    label="생년월일"
                    size="2"
                    maxLength="2"
                    placeholder="DD"
                  />
                </div> */}
              </div>
            </div>
            <div id="formSubmit" className="form_footer">
              <button
                type="button"
                className="btn active btn_join"
                onClick={this.SignupApproval}
              >
                가입하기
              </button>
            </div>
          </main>
        </div>
        <div className="Signup-Footer"></div>
      </div>
    );
  }
}

export default Signup;
