import styled from 'styled-components';

// TxtPostingContentView
// 분류 : 텍스트
// 용도 : 포스팅 페이지에서 내용을 띄움

const Styles = styled.div`
  padding: 5px 0;
  color: ${({ color }) => color};
`;

export default function TxtPostingContentView({ content, color }) {
  return <Styles color={color}>{content}</Styles>;
}
