import styled, { css } from "styled-components";
import { slideUp } from "./keyframes/slide";

export const AppAnimation = styled.div`
  animation: 0.35s ease 0s ${slideUp};
`;

export const BoxAnimation = styled.div`
  animation: 0.35s ease 0s;
  animation-fill-mode: forwards;
  ${({ animation }) =>
    animation &&
    css`
      animation-name: ${animation};
    `}
`;
