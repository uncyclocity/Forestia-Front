import ModalTitleBar from './ModalTitleBar';
import { useReducerState } from '../Contexts/context';
import styled, { css } from 'styled-components';
import {
  slideUpAppear,
  slideDownDisappear,
} from '../../styles/keyframes/slide';
import { fadeIn, fadeOut } from '../../styles/keyframes/fade';

const ModalBgStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ closeAnimation }) =>
    closeAnimation
      ? css`
          animation: 0.25s ease 0s ${fadeOut};
        `
      : css`
          animation: 0.25s ease 0s ${fadeIn};
        `}
  animation-fill-mode: forwards;
`;

const ModalCtnWindow = styled.div`
  border-radius: 15px;
  padding: 20px;
  background: white;
  width: 400px;
  ${({ closeAnimation }) =>
    closeAnimation
      ? css`
          animation: 0.25s ease 0s ${slideDownDisappear};
        `
      : css`
          animation: 0.25s ease 0s ${slideUpAppear};
        `}
  animation-fill-mode: forwards;

  @media screen and (max-width: 700px) {
    width: 300px;
    padding: 15px;
  }
`;

const ModalContentStyle = styled.div`
  padding-top: 20px;
`;

export default function Modal() {
  const modal = useReducerState().modal;

  if (modal.active) {
    return (
      <ModalBgStyle closeAnimation={modal.closeAnimation}>
        <ModalCtnWindow closeAnimation={modal.closeAnimation}>
          <ModalTitleBar title={modal.title} />
          <ModalContentStyle>{modal.content}</ModalContentStyle>
        </ModalCtnWindow>
      </ModalBgStyle>
    );
  } else {
    return <></>;
  }
}
