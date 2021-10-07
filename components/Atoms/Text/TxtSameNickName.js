import styled from 'styled-components';
import { ImCancelCircle } from 'react-icons/im';

// TxtSameNickName
// 분류 : 텍스트
// 용도 : 회원가입 페이지에서 중복된 닉네임이 존재함을 알리는 메세지

const Styles = styled.div`
  display: flex;
  flex-direction: row;
  font-family: 'NanumSquareR';
  font-size: 13px;
  color: #bd001d;
`;

export default function TxtSameNickName({ email }) {
  return (
    <Styles>
      <ImCancelCircle />
      &nbsp;이미 해당 닉네임이 존재합니다.
    </Styles>
  );
}
