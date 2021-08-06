import styled, { css } from "styled-components";
import { slideDown, slideUp } from "./keyframes/slide";

export const AppAnimation = styled.div`
  animation: 0.35s ease 0s ${slideUp};
`;

export const BoxAnimation = styled.div`
  animation: 0.35s ease 0s ${slideUp};
  animation-fill-mode: forwards;
  ${({ animate }) =>
    animate &&
    css`
      animation-name: ${slideDown};
      animation-duration: 0.1s;
    `}
`;
