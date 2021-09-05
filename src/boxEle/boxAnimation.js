import styled, { css } from 'styled-components';
import { slideUp, slideDown } from '../../styles/keyframes/slide';

/* 박스 애니메이션 셋팅
1. 마운트
2. 마운트 직후
3. 언마운트
4. 언마운트 직후 */
export const BoxAnimation = styled.div`
  ${({ animation, sw1, sw2, sw3, sw4 }) => {
    if (animation) {
      switch (animation) {
        case 1:
          return sw1;
        case 2:
          return sw2;
        case 3:
          return sw3;
        case 4:
          return sw4;
        default:
          break;
      }
    }
  }}
`;

// 첫 렌더링 시 애니메이션
export const AppAnimation = styled.div`
  animation: 0.35s ease 0s ${slideUp};
  animation-fill-mode: forwards;
`;

// 박스 빈 렌더링
export const box_empty = css``;

// 박스 투명 렌더링 - 언마운트 이후
export const box_zero_opacity = css`
  opacity: 0;
`;

// 박스 업다운 슬라이드 렌더링 (home, about, free, photo)
export const box_slide_up = css`
  animation: 0.35s ease 0s;
  animation-fill-mode: forwards;
  animation-name: ${slideUp};
`;

export const box_slide_down = css`
  animation: 0.15s ease 0s;
  animation-fill-mode: forwards;
  animation-name: ${slideDown};
`;
