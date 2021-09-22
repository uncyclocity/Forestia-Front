import styled from 'styled-components';

// TxtPostingAuthor4List
// 분류 : 텍스트
// 용도 : 리스트에서의 포스팅 작성자

export default function TxtPostingAuthor4List({ author }) {
  const Styles = styled.div`
    font-size: 13px;
  `;

  return <Styles>{author}</Styles>;
}
