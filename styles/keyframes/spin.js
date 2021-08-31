import { keyframes } from 'styled-components';

export const spin_90 = keyframes`
  from {
    transform: rotate(0deg);  
  }
  to {
    transform: rotate(90deg);
  }
`;

export const spin_90_r = keyframes`
  from {
    transform: rotate(90deg);  
  }
  to {
    transform: rotate(0deg);
  }
`;

export const spin_360 = keyframes`
  from {
    transform: rotate(0deg);  
  }
  to {
    transform: rotate(360deg);
  }
`;
