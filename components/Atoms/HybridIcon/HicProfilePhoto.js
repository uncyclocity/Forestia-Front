import { lighten } from 'polished';
import styled, { css } from 'styled-components';

// HicProfilePhoto
// 분류 : 하이브리드 아이콘
// 용도 : 프로필 사진 역할

const Styles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  border-radius: 50px;
  font-size: ${({ size }) => size}px;
  padding: ${({ padding }) => padding}px;
  box-shadow: 0px 2px 3px #dedede;

  ${({ isBtn }) =>
    isBtn
      ? css`
          cursor: pointer;
          &:hover {
            transition: 0.15s all ease-in;
            background: ${({ bgColor }) => lighten(0.1, bgColor)};
          }

          &:not(:hover) {
            transition: 0.15s all ease-in;
            background: ${({ bgColor }) => bgColor};
          }
        `
      : css`
          background: ${({ bgColor }) => bgColor};
        `}
`;

export default function HicProfilePhoto({
  statusIcon,
  bgColor,
  onClick,
  size,
  padding,
}) {
  if (onClick) {
    return (
      <Styles
        bgColor={bgColor}
        size={size}
        padding={padding}
        isBtn={true}
        onClick={onClick}
      >
        {statusIcon}
      </Styles>
    );
  } else {
    return (
      <Styles bgColor={bgColor} size={size} padding={padding} isBtn={false}>
        {statusIcon}
      </Styles>
    );
  }
}
