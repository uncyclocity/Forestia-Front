import { keyframes } from 'styled-components';

export const slideUp = keyframes`
  from { 
    transform: translateY(10px);
    opacity: 0;
   }
  to { 
    transform: translateY(0px);
    opacity: 1;
   }
`;

export const slideDown = keyframes`
  from { 
    transform: translateY(0px);
    opacity: 1;
   }
  to { 
    transform: translateY(5px);
    opacity: 0;
   }
`;

export const slideLeft = keyframes`
  from {
    transform: translateX(0px);
    opacity: 1;
   }
  to {
    transform: translateX(-8px);
    opacity: 0;
   }
`;

export const slideRight = keyframes`
  from {
    transform: translateX(-8px);
    opacity: 0;
   }
  to {
    transform: translateX(0px);
    opacity: 1;
   }
`;
