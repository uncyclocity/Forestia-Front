import styled, { css } from 'styled-components';
import { slideUp, slideDown, slideLeft, slideRight } from './keyframes/slide';

// 첫 렌더링 시 애니메이션
export const AppAnimation = styled.div`
  animation: 0.35s ease 0s ${slideUp};
`;

// 박스 업다운 슬라이드 렌더링 (home, about, free, comuin)
const box_ud_sw0 = css`
  animation: 0.35s ease 0s;
  animation-fill-mode: forwards;
  animation-name: ${slideUp};
`;

const box_ud_sw2 = css`
  animation: 0.15s ease 0s;
  animation-fill-mode: forwards;
  animation-name: ${slideDown};
`;

const box_ud_sw3 = css`
  opacity: 0;
`;

export const BoxUdAnimation = styled.div`
  ${({ animation }) => {
    if (animation) {
      switch (animation) {
        case 1:
          return box_ud_sw0;
        case 2:
          return;
        case 3:
          return box_ud_sw2;
        case 4:
          return box_ud_sw3;
        default:
          break;
      }
    }
  }}
`;

// 박스 LR 슬라이드 렌더링 (home, about, free, comuin)
const box_lr_sw0 = css`
  animation: 0.35s ease 0s;
  animation-fill-mode: forwards;
  animation-name: ${slideLeft};
`;

const box_lr_sw2 = css`
  animation: 0.15s ease 0s;
  animation-fill-mode: forwards;
  animation-name: ${slideRight};
`;

const box_lr_sw3 = css`
  opacity: 0;
`;

export const BoxLrAnimation = styled.div`
  ${({ animation }) => {
    if (animation) {
      switch (animation) {
        case 1:
          return box_lr_sw0;
        case 2:
          return;
        case 3:
          return box_lr_sw2;
        case 4:
          return box_lr_sw3;
        default:
          break;
      }
    }
  }}
`;
