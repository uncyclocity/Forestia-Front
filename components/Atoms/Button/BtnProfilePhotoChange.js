import styled from 'styled-components';

// BtnProfilePhotoChange
// 분류 : 버튼
// 용도 : 프로필 사진 변경 버튼

const Styles = styled.div`
  display: flex;
  align-items: center;
  justify-contents: center;
  position: absolute;
  border-radius: 50px;
  cursor: pointer;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  background: black;
  opacity: 0.5;
  color: white;
  font-size: ${({ size }) => size}px;
  text-align: center;
`;

export default function BtnProfilePhotoChange({
  onClick,
  text,
  size,
  width,
  height,
}) {
  return (
    <Styles onClick={onClick} width={width} height={height} size={size}>
      {text}
    </Styles>
  );
}
