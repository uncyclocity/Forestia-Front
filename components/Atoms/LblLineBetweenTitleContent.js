import styled from 'styled-components';

// LblLineBetweenTitleContent
// 분류 : 레이블
// 용도 : 포스팅 작성/수정 페이지에서 제목, 내용 입력 박스 사이의 굵은 선

const Styles = styled.div`
  hr {
    width: 50px;
    border: 2px solid #20c997;
    margin: 20px 0 20px 2px;
  }
`;

export default function LblLineBetweenTitleContent() {
  return (
    <Styles>
      <hr className="title_content_line" align="left" />
    </Styles>
  );
}
