import styled from 'styled-components';

// TxtLineAboutDescription
// 분류 : 텍스트
// 용도 : about 페이지 설명의 각 텍스트 라인

export default function TxtLineAboutDescription({ children }) {
  const Styles = styled.div`
    display: flex;
    flex-direction: row;
    .bold {
      color: #20c997;
      font-weight: bold;
    }
    &:not(:last-child) {
      margin-bottom: 3px;
    }
  `;

  return <Styles>{children}</Styles>;
}
