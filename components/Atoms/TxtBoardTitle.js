import styled from 'styled-components';

// TxtBoardTitle
// 분류 : 텍스트
// 용도 : BoardTitle에서 현제 페이지를 가리키는 텍스트

export default function TxtBoardTitle({ nowPage, title = null }) {
  const Styles = styled.div`
    color: #20c997;
    font-size: 20px;
    font-weight: bold;
  `;

  return (
    <Styles>
      {nowPage === 'about' && '게시판 소게'}
      {nowPage === 'free' && title && <>{title}</>}
      {nowPage === 'photo' && title && <>{title}</>}
      {nowPage === 'free' && !title && '자게'}
      {nowPage === 'photo' && !title && '짤게'}
      {nowPage === 'creating' && '게시글 작성'}
      {nowPage === 'deleting' && '삭제 중'}
      {nowPage === 'editing' && '게시글 수정'}
    </Styles>
  );
}
