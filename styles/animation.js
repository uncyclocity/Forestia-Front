import styled, { css } from "styled-components";
import { slideUp, slideDown } from "./keyframes/slide";

// 첫 렌더링 시 애니메이션
export const AppAnimation = styled.div`
  animation: 0.35s ease 0s ${slideUp};
`;

// 박스 렌더링 (home, about, free, comuin)
const sw0 = css`
  animation: 0.35s ease 0s;
  animation-fill-mode: forwards;
  animation-name: ${slideUp};
`;

const sw2 =  css`
  animation: 0.15s ease 0s;
  animation-fill-mode: forwards;
  animation-name: ${slideDown};
`;

const sw3 =  css`
  opacity: 0;
`;

export const BoxAnimation = styled.div`
  ${({ animation }) => {
    if (animation) {
      switch(animation) {
        case 1:
          return sw0;
        case 2:
          return;
        case 3:
          return sw2;
        case 4:
          return sw3;
        default:
          break;
      }
    }
  }}
`;
