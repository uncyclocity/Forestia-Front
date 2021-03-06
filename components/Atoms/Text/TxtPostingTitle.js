import styled from 'styled-components';

// TxtPostingTitle
// 분류 : 텍스트
// 용도 : 리스트에서의 각 포스팅에 대한 제목

const Styles = styled.div`
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media screen and (max-width: 700px) {
    max-width: 127px;
  }
`;

export default function TxtPostingTitle({ title }) {
  return <Styles>{title}</Styles>;
}
