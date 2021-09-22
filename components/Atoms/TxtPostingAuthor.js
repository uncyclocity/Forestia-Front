import styled from 'styled-components';

// TxtPostingAuthor
// 분류 : 텍스트
// 용도 : 포스팅 페이지에서 해당 포스팅의 게시자를 표시

export default function TxtPostingAuthor({ author }) {
  const Styles = styled.div`
    padding: 0 5px;
    font-weight: bold;
    color: #20c997;
  `;

  return <Styles>{author}</Styles>;
}
