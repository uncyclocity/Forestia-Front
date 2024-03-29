# 🌳 Forestia-Front

**Next.js** 학습을 목적으로 제작하게 된 게시판 사이트 **Forestia**의 프론트엔드 단입니다. <br>

<img src="./public/assets/readme_src/logo.png" width="500px"></img>

## 📃 개요

- SSR을 쉽게 구현할 수 있도록 하는 리액트 기반 프레임워크인 **Next.js**에 적응하기 위해 제작하게 된 커뮤니티 사이트입니다.
- **숲세권 자취 이야기**라는 마이너한 컨셉으로 제작하였으며, 해당 컨셉에 알맞는 초록색을 퍼스널 컬러로 지정하였습니다.
- **Forestia**라는 커뮤니티명은 경기도 성남시 수정구 신흥동에 위치한 <a href="http://www.forestia.kr/">산성역 포레스티아</a> 아파트에서 따왔습니다.
- 백엔드에 대한 설명은 <a href="https://github.com/uncyclocity/Forestia-Back">Forestia-Back</a> 레포를 참고해주시기 바랍니다.

## 💻 사용 기술

<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=black"/> <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=black"/> <img src="https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white"/> <img src="https://img.shields.io/badge/styled-components-DB7093?style=flat-square&logo=styled-components&logoColor=white"/> <img src="https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white"/>

## 📜 기술 및 사용 설명

- 간단한 게시판 사이트의 프론트엔드 단입니다. 게시글 및 댓글의 작성/수정/삭제가 가능합니다.
- **vercel**을 통해 배포되어 있습니다.
- **Google OAuth2**를 통해 구글 계정으로 로그인할 수 있습니다.
- 게시판은 **자게/짤게** 두 분류로 나뉘어져 있으며, 짤게의 경우 **이미지 업로드가 필수**입니다.
- **아토믹 디자인 패턴** 지향적으로 설계하였습니다.

## 📸 시연 동영상

이전 버전 기준이며, 현재 개편 된 UI와 상이할 수 있습니다.

- 홈 페이지 <br>
  <img src="./public/assets/readme_src/main.PNG" width="700px"></img>

- 게시글 작성 <br>
  <img src="./public/assets/readme_src/postingCreating.gif" width="700px"></img>

- 좋아요 및 댓글 작성 <br>
  <img src="./public/assets/readme_src/commentCreating.gif" width="700px"></img>

- 게시글 삭제 <br>
  <img src="./public/assets/readme_src/postingDeleting.gif" width="700px"></img>

## 🕘 향후 계획

- 메인 페이지 타임라인화
- 게시글 조회수 추가
- 게시글 북마크 추가
- 답글 방식을 회원 언급 방식으로 변경
- 댓글, 답글 및 좋아요/싫어요 알림 추가
- 해시태그 추가
- 프로필 사진, 닉네임 변경 기능 추가
- 게시글 검색 기능 추가
