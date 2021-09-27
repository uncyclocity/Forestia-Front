import styled from 'styled-components';

// BtnErrorPageWhite
// 분류 : 버튼
// 용도 : 에러 페이지에서의 버튼 (흰색)

const Styles = styled.div`
  width: 60px;

  margin: 10px 10px;
  padding: 8px;

  text-align: center;
  font-size: 15px;

  box-shadow: 0px 0px 15px #9aefd6;

  color: #20c997;
  background: white;

  border-radius: 15px;

  &:hover {
    transition: 0.25s all ease-in;
    box-shadow: 0px 0px 15px #36deac;
    cursor: pointer;
  }

  &:not(:hover) {
    transition: 0.25s all ease-in;
  }
`;

export default function BtnErrorPageWhite({ text, onClick }) {
  return <Styles onClick={onClick}>{text}</Styles>;
}
