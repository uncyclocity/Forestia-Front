import { keyframes } from 'styled-components';

export const slideUpAppear = keyframes`
  from { 
    transform: translateY(5px);
    opacity: 0;
   }
  to { 
    transform: translateY(0px);
    opacity: 1;
   }
`;

export const slideUpDisappear = keyframes`
  from { 
    transform: translateY(0px);
    opacity: 1;
   }
  to { 
    transform: translateY(-5px);
    opacity: 0;
   }
`;

export const slideDownAppear = keyframes`
  from { 
    transform: translateY(-5px);
    opacity: 0;
   }
  to { 
    transform: translateY(0px);
    opacity: 1;
   }
`;

export const slideDownDisappear = keyframes`
  from { 
    transform: translateY(0px);
    opacity: 1;
   }
  to { 
    transform: translateY(5px);
    opacity: 0;
   }
`;

export const slideLeftDisappear = keyframes`
  from {
    transform: translateX(0px);
    opacity: 1;
   }
  to {
    transform: translateX(-5px);
    opacity: 0;
   }
`;

export const slideRightAppear = keyframes`
  from {
    transform: translateX(-5px);
    opacity: 0;
   }
  to {
    transform: translateX(0px);
    opacity: 1;
   }
`;
