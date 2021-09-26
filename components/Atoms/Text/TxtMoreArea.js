import styled from 'styled-components';

// TxtMoreArea
// 분류 : 텍스트
// 용도 : 포스팅 페이지 더보기 영역 버튼의 텍스트

const Styles = styled.div`
  margin-left: 3px;
  font-size: 18px;
`;

export default function TxtMoreArea({ text }) {
  return <Styles>{text}</Styles>;
}
