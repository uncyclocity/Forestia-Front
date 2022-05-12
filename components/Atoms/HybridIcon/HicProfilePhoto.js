import { darken } from 'polished';
import styled, { css } from 'styled-components';

// HicProfilePhoto
// 분류 : 하이브리드 아이콘
// 용도 : 프로필 사진 역할

const Styles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  height: ${({ size, padding }) => parseInt(size) + parseInt(padding) * 2}px;
  ${({ shadowColor }) =>
    shadowColor &&
    css`
      box-shadow: 0px 2px 3px ${shadowColor};
    `}

  ${({ imageUrl, size, bgColor, color, isBtn, padding }) =>
    imageUrl
      ? css`
          background-image: url(${imageUrl});
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center center;
          width: ${parseInt(size) + parseInt(padding) * 2}px;

          ${isBtn &&
          css`
            cursor: pointer;
          `}
        `
      : css`
          color: ${color};
          font-size: ${size}px;
          padding: ${padding}px;

          ${isBtn
            ? css`
                cursor: pointer;
                &:hover {
                  transition: 0.15s all ease-in;
                  background: ${darken(0.08, bgColor)};
                }

                &:not(:hover) {
                  transition: 0.15s all ease-in;
                  background: ${bgColor};
                }
              `
            : css`
                background: ${bgColor};
              `}
        `}
`;

export default function HicProfilePhoto({
  statusIcon,
  bgColor,
  color,
  shadowColor,
  onClick,
  size,
  padding,
  imageUrl,
}) {
  if (onClick) {
    return (
      <Styles
        bgColor={bgColor}
        color={color}
        shadowColor={shadowColor}
        size={size}
        padding={padding}
        isBtn={true}
        onClick={onClick}
        imageUrl={imageUrl}
      >
        {!imageUrl && statusIcon}
      </Styles>
    );
  } else {
    return (
      <Styles
        bgColor={bgColor}
        color={color}
        shadowColor={shadowColor}
        size={size}
        padding={padding}
        isBtn={false}
        imageUrl={imageUrl}
      >
        {!imageUrl && statusIcon}
      </Styles>
    );
  }
}
