import styled from 'styled-components';

// TxtPostingDate4List
// 분류 : 텍스트
// 용도 : 리스트에서의 포스팅 날짜

export default function TxtPostingDate4List({ date }) {
  const Styles = styled.div`
    font-size: 13px;
  `;

  return <Styles>{date.substring(5, 16)}</Styles>;
}
