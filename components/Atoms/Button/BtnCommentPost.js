import { IoIosSend } from 'react-icons/io';
import styled from 'styled-components';

// BtnComment
// 분류 : 버튼
// 용도 : 댓글 업데이트에 관련 된 POST 작업에서 사용된다.

const Styles = styled.div`
  background: #20c997;
  color: white;
  width: 50px;
  height: 50px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 30px;

  &:hover {
    transition: 0.25s all ease-in;
    box-shadow: 0px 0px 15px #36deac;
    cursor: pointer;
  }

  &:not(:hover) {
    transition: 0.25s all ease-in;
    box-shadow: 0px 0px 15px #9aefd6;
  }
`;

export const BtnCommentPost = () => {
  return (
    <Styles>
      <IoIosSend />
    </Styles>
  );
};
