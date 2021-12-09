import styled from 'styled-components';

// TxtBoardTitle
// 분류 : 텍스트
// 용도 : BoardTitle에서 현제 페이지를 가리키는 텍스트

const Styles = styled.div`
  color: #20c997;
  font-size: 20px;
  @media screen and (max-width: 700px) {
    font-size: 17px;
  }
  font-family: 'NanumSquareEB';
  text-align: center;
`;

export default function TxtBoardTitle({ nowPage, title = null }) {
  return (
    <Styles>
      {nowPage === 'about' && '게시판 소개'}
      {nowPage === 'free' && title && <>{title}</>}
      {nowPage === 'photo' && title && <>{title}</>}
      {nowPage === 'free' && !title && '자게'}
      {nowPage === 'photo' && !title && '짤게'}
      {nowPage === 'post' && '게시글 작성'}
      {nowPage === 'delete' && '삭제 중'}
      {nowPage === 'put' && '게시글 수정'}
      {nowPage === 'signup' && '회원가입'}
    </Styles>
  );
}
