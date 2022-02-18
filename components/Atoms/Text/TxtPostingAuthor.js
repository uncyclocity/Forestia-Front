import styled from 'styled-components';

// TxtPostingAuthor
// 분류 : 텍스트
// 용도 : 포스팅 페이지에서 해당 포스팅의 게시자를 표시

const Styles = styled.div`
  font-weight: bold;
  color: ${({ color }) => color};
`;

export default function TxtPostingAuthor({ author, color }) {
  return <Styles color={color}>{author}</Styles>;
}
