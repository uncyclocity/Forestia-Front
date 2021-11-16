import styled from 'styled-components';

// TxtPostingContentView
// 분류 : 텍스트
// 용도 : 포스팅 페이지에서 내용을 띄움

const Styles = styled.div`
  padding: 20px 0 20px 0;
  color: #525252;

  @media screen and (max-width: 700px) {
    font-size: 14px;
  }
`;

export default function TxtPostingContentView({ content }) {
  return <Styles>{content}</Styles>;
}
