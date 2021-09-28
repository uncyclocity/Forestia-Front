import styled from 'styled-components';

// TxtPostingDate4List
// 분류 : 텍스트
// 용도 : 리스트에서의 포스팅 날짜

const Styles = styled.div`
  font-size: 13px;
  width: auto;
  text-align: center;
`;

export default function TxtPostingDate4List({ date }) {
  return <Styles>{date.substring(5, 16)}</Styles>;
}
