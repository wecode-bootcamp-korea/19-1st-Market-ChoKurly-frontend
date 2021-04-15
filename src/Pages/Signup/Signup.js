import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Signup.scss';

class Signup extends Component {
  render() {
    return (
      <div className="Signup-Main">
        <div className="Signup-Header">여기는헤더</div>
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
                />
              </div>
              <Link to="/" class="Signup-checkBtn">
                중복확인
              </Link>
            </div>
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
              />
            </div>
            <div className="SignupWrap">
              <div className="SignupContent SignupList">
                비밀번호확인
                <span className="ico">*</span>
              </div>
              <input
                type="password"
                name="password2"
                label="비밀번호"
                maxlength="16"
                className="Signup-Input"
                placeholder="비밀번호를 한번 더 입력해주세요"
              />
            </div>
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
              />
              <input type="hidden" name="chk_email" label="이메일중복체크" />
              <Link to="/" class="Signup-checkBtn">
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
                    name="mobileInput"
                    label="휴대폰"
                    placeholder="숫자만 입력해주세요"
                    className="Signup-Input"
                    pattern="[0-9]*"
                  />
                  <input
                    type="hidden"
                    name="mobile[]"
                    id="mobile0"
                    label="휴대폰"
                  />
                  <button
                    id="certBtn"
                    class="SignupCert disabled"
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
                <input type="hidden" name="zonecode" id="zonecode" size="5" />
                <input type="hidden" name="zipcode" id="zipcode0" size="3" />
                <input type="hidden" name="zipcode" id="zipcode1" size="3" />
                <input type="hidden" name="deliPoli" id="deliPoli" size="1" />
                <input
                  type="hidden"
                  id="baseAddressType"
                  name="base_address_type"
                />
                <div className="SignupAddressField">
                  <Link to="/" id="addressSearch" class="Signup-Search" onclick>
                    <i className="fas fa-search"></i>
                    <span id="addressNo" class="address_no" data-text="재검색">
                      주소 검색
                    </span>
                  </Link>
                  <p class="zip guide">
                    <span class="zip guide case1">
                      배송지에 따라 상품 정보가 달라질 수 있습니다.
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="SignupWrap">
              <div className="SignupContent SignupList">성별</div>
              <div className="SignupGenderWrap">
                <label>
                  <input type="radio" name="gender" value="m" />
                  <span className="ico"></span>
                  남자
                </label>
                <label>
                  <input type="radio" name="gender" value="w" />
                  <span className="ico"></span>
                  여자
                </label>
                <label>
                  <input type="radio" name="gender" value="n" />
                  <span className="ico"></span>
                  선택안함
                </label>
              </div>
            </div>
            <div className="SignupWrap">
              <div className="SignupContent SignupList">생년월일</div>
              <div className="birth_day_wrap">
                <div className="birth_day">
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
                </div>
              </div>
            </div>
            <div id="formSubmit" className="form_footer">
              <button type="button" className="btn active btn_join" onClick>
                가입하기
              </button>
            </div>
          </main>
        </div>
        <div className="Signup-Footer">여기는 푸터</div>
      </div>
    );
  }
}

export default Signup;
