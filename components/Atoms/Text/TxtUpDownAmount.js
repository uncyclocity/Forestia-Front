import styled from 'styled-components';

// TxtUpDownAmount
// 분류 : 텍스트
// 용도 : 포스팅 페이지 좋아요 싫어요 개수

const Styles = styled.div`
  font-size: 20px;
`;

export default function TxtUpDownAmount({ amount }) {
  return <Styles>{amount}</Styles>;
}
