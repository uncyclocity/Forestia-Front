import styled from 'styled-components';

// TxtPostingTitle
// 분류 : 텍스트
// 용도 : 리스트에서의 각 포스팅에 대한 제목

export default function TxtPostingTitle({ children }) {
  const Styles = styled.div`
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `;

  return <Styles>{children}</Styles>;
}
