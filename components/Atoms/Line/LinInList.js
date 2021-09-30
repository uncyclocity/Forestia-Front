import styled from 'styled-components';

// LinInList
// 분류 : 선
// 용도 : 테이블 th-tr 사이의 선

const Styles = styled.div`
  hr {
    border: 0;
    background: #20c997;
    height: 2px;
    margin: 0;
  }
`;

export default function LinInList() {
  return (
    <Styles>
      <hr />
    </Styles>
  );
}
