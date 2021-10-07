import styled from 'styled-components';

// BtnLogInOut
// 분류 : 버튼
// 설명 : 로그인/아웃 버튼에 사용된다.

const Styles = styled.div`
  border: 1px solid #20c997;
  border-radius: 5px;
  padding: 5px;
  cursor: pointer;
  font-size: 12px;
  text-align: center;

  &:hover {
    transition: 0.3s all ease-out;
    color: white;
    background: #20c997;
  }

  &:not(:hover) {
    transition: 0.3s all ease-out;
    color: #20c997;
  }
`;

export default function BtnLogInOut({ text, onClick }) {
  return <Styles onClick={onClick}>{text}</Styles>;
}
