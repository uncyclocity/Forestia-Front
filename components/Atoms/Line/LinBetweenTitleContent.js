import styled from 'styled-components';

// LinBetweenTitleContent
// 분류 : 선
// 용도 : 포스팅 작성/수정 페이지에서 제목, 내용 입력 박스 사이의 굵은 선

const Styles = styled.div`
  hr {
    border: 0;
    background: #20c997;
    width: 50px;
    height: 4px;
    margin: 20px 0 20px 2px;
  }
`;

export default function LinBetweenTitleContent() {
  return (
    <Styles>
      <hr align="left" />
    </Styles>
  );
}
