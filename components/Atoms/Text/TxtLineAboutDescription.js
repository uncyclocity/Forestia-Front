import styled from 'styled-components';

// TxtLineAboutDescription
// 분류 : 텍스트
// 용도 : about 페이지 설명의 각 텍스트 라인

const Styles = styled.div`
  display: flex;
  flex-direction: row;
  color: #5d5d5d;
  .bold {
    color: #20c997;
    font-weight: bold;
  }
  &:not(:last-child) {
    margin-bottom: 3px;
  }
`;

export default function TxtLineAboutDescription({ children }) {
  return <Styles>{children}</Styles>;
}
