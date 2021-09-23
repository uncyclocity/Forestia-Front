import styled from 'styled-components';

// TxtPostingContentView
// 분류 : 텍스트
// 용도 : 포스팅 페이지에서 내용을 띄움

export default function TxtPostingContentView({ content }) {
  const Styles = styled.div`
    padding: 20px 0 30px 0;
    color: #525252;
  `;

  return <Styles>{content}</Styles>;
}
