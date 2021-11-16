import styled from 'styled-components';

// BtnCommentEditDel
// 분류 : 버튼
// 용도 : 댓글 수정, 삭제 버튼

const Styles = styled.div`
  color: #20c997;
  font-size: 14px;
  cursor: pointer;
  margin-right: 7px;
  @media screen and (max-width: 700px) {
    font-size: 12px;
  }
`;

export default function BtnCommentEditDel({ text }) {
  return <Styles>{text}</Styles>;
}
