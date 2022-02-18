import styled from 'styled-components';

// TxtTimelineTitle
// 분류 : 텍스트
// 용도 : 인덱스 페이지 타임라인 게시글의 제목

const Styles = styled.div`
  font-weight: bold;
  font-size: ${({ size }) => size}px;
  color: ${({ color }) => color};
`;

export default function TxtTimelineTitle({ title, size, color }) {
  return (
    <Styles size={size} color={color}>
      {title}
    </Styles>
  );
}
