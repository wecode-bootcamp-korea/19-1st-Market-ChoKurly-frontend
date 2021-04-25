# Project Market ChoKurly 🍫🍪🍩🍭🧁
## 🖥 Project Summary
- 2021.04.12 ~ 2021.04.23 까지 2주 간 진행
- 국내 식품 전문 온라인 쇼핑몰인 마켓 컬리를 클론하는 프로젝트
- Front(이예원, 서동이, 채준형)와 Back(백승찬, 안정현, 김영훈) 총 6명의 팀원으로 구성

## 👩🏻‍💻 Front-end Work Details
### 이예원
- `Nav`: 공통으로 쓰이는 Nav 컴포넌트
    - 스크롤 시 Nav 바가 가려지는 시점부터 고정 기능
    - 전체 카테고리에 마우스 오버 시 서버로부터 받아온 카테고리 리스트 드롭다운
    - 전체 카테고리가 선택 되었을 시에만 서브 카테고리 조건부 렌더링
- `Main`: 웹 앱의 첫 메인 페이지
    - 자동으로 슬라이드 되는 캐러셀, 캐러셀 필터링 기능
    - 24시간 한정 세일을 위한 타이머 기능
    - 총 6개 추천 품목 (suggestions, sales, new 등) 으로 나누어진 상품들을 각 캐러셀로 구현  
- `Product List`: 선택된 카테고리의 상품 리스트 페이지
    - 동적 라우팅으로 각 서브 카테고리의 상품 리스트 구현
    - 동적 라우팅으로 신상품순, 가격순 필터링 구현
    - Pagination 구현
    - 장바구니 모달창 기능 구현
### 서동이
- `Footer`: 맨 아래 고정. 해당 페이지로 이동 링크.
- `Product Details`: 
   - 상세페이지를 Thumbnail, related-product, product-description, review 부분으로 나누어 컴포넌트화 후 관리. (state와 props를 사용)
   - 관련상품: 버튼 클릭시 이미지 슬라이딩(캐러셀) 기능 구현
   - 수량변경버튼과 상품수량에 따른 가격변동 구현.
   - 고객후기&상품문의: 댓글 기능구현
   - scrollTo()구현: 상세정보/댓글 탭 클릭시 해당위치로 이동, 맨위로 이동 버튼
   - 장바구니 담기: fetch() post를 이용해 장바구니 페이지로 데이터 전달.
- `Cart`:
   - 레이아웃
   - 수량변경 버튼
   - 전체삭제 기능


### 채준형
- `Signup`:
   - Signup 페이지 전반적인 레이아웃(html & CSS)
   - Id, Email 중복검사 백엔드와의 소통
   - Id, Pw , Email 등 Validation 기능
   - 필수항목, 선택항목 구분 후, Login Information BackEnd로 전달
   - Sign up Fin Page 구성 
- `Login`: 
   - Login 페이지 전반적인 레이아웃(html & CSS)
   - Login Info 와 비교후 Login 진행 기능
   - Id 찾기 페이지 구성 및 id찾기 기능
   - Pw 찾기 페이지 구성 및 pw찾기 기능 ( 이메일로 발급된 임시비밀번호로 로그인 가능)
- `Cart`:
   - 장바구니 페이지 구성
   - 특정 회원의 장바구니에 개별 상품마다 수량 증감 버튼 기능
   - 특정 회원의 장바구니의 전체 삭제 버튼 기능
   - 특정 회원의 장바구니의 개별 삭제 버튼 기능
   - 선택한 상품들 계산결과 표시 (할인가 적용 가능)
   - 특정 조건(~원 이상시)달성 시 무료배송 조건 구현

## 👩🏻‍💻 Back-end Work Details
### 백승찬
- 'users'
    - FindIdView 기능 구현
    - FindPasswordView 기능 구현
    - ReviewView 기능 구현
    - UserLikeView 기능 구현
- 'products'
    - CategoryView 기능 구현
    - ProductListView 기능 구현
    - SearchView 기능 구현
### 안정현
- `User`
    - UserView 기능구현
    - LoginView 기능구현
    - SignupCheckView 기능 구현
- `Order`
    - OrderformView  기능 구현
    - OrderDetailView 기능 구현
### 김영훈
- `Decorator`
    - login_required 기능 구현
- `Product_detail`
    - ProductDetail View 기능 구현
- `Basket` 
    - 장바구니 View 기능 구현
    - Cart 기능 구현
    - 장바구니 수량 조절 기능 View 구현
## 🔧 Skills
- ![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
- ![SASS](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)
- ![JS](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
- ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
- ![Python](https://img.shields.io/badge/Python-14354C?style=for-the-badge&logo=python&logoColor=white)
- ![Django](https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white)

## 🔧 Tools
- <img alt="Trello" src="https://img.shields.io/badge/Trello-%23026AA7.svg?&style=for-the-badge&logo=Trello&logoColor=white"/>
- <img alt="Git" src="https://img.shields.io/badge/git-%23F05033.svg?&style=for-the-badge&logo=git&logoColor=white"/>
- <img alt="GitHub" src="https://img.shields.io/badge/github-%23121011.svg?&style=for-the-badge&logo=github&logoColor=white"/>
- <img alt="Slack" src="https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white" />
- <img alt="AWS" src="https://img.shields.io/badge/AWS-%23FF9900.svg?&style=for-the-badge&logo=amazon-aws&logoColor=white"/>
- <img alt="Visual Studio Code" src="https://img.shields.io/badge/VisualStudioCode-0078d7.svg?&style=for-the-badge&logo=visual-studio-code&logoColor=white"/>
## ✏️ Blogs
- 이예원 : https://jessywlee.medium.com
- 서동이 : https://velog.io/@seod0209/Project-2.-%EB%A7%88%EC%BC%93%EC%BB%AC%EB%A6%AC-%ED%81%B4%EB%A1%A0
- 채준형 : https://velog.io/@hello1358
- 백승찬 : https://velog.io/@chan_baek
- 안정현 : https://velog.io/@tgrf07
- 김영훈 : https://velog.io/@fcfargo

## ✏️ References
- 이 프로젝트는 마켓 컬리를 참고하여 학습용으로 작업 되었습니다.
- 이 프로젝트에서 사용된 모든 무료 이미지는 Unsplash에서 가져왔습니다.
