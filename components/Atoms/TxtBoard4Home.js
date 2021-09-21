import styled from 'styled-components';

// TxtBoard4Home
// 분류 : 텍스트
// 용도 : 홈 페이지에서의 각 게시판 이름을 나타냄

export default function TxtBoard4Home({ boardName }) {
  const Styles = styled.div`
    margin-left: 5px;
    font-size: 20px;
    font-weight: bold;
    width: 100%;
  `;

  return <Styles>{boardName === 'free' ? '자게' : '짤게'}</Styles>;
}
