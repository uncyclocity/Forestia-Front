import styled from 'styled-components';

// BtnDisabledPosting
// 분류 : 버튼
// 용도 : 포스팅 업데이트에 관련 된 POST 작업이 이루어지는 동안 표시되는 동작 없는 버튼이다.

const Styles = styled.div`
  background: #1ba77c;
  color: white;
  border-radius: 5px;
  display: flex;
  width: 80px;
  height: 35px;
  margin: 0 0 0 auto;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  font-size: 18px;
  font-family: 'NanumSquareEB';
`;

export default function BtnDisabledPosting({ text }) {
  return <Styles>{text}</Styles>;
}
