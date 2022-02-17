import styled from 'styled-components';

// TxtProfile
// 분류 : 텍스트
// 용도 : 프로필 띄우기

const Styles = styled.div`
  display: flex;
  flex-direction: row;
  font-size: ${({ size }) => size}px;
  color: ${({ color }) => color};
`;

export default function TxtProfile({ userName, color, size }) {
  return (
    <Styles color={color} size={size}>
      {userName}
    </Styles>
  );
}
