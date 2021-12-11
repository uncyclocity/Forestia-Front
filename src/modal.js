import ModalTitleBar from '../components/MoleCules/ModalTitleBar';
import { useReducerState } from './context';
import styled from 'styled-components';
import CtnModalWindow from '../components/Atoms/Container/CtnModalWindow';

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
`;

const ModalContentStyle = styled.div`
  padding-top: 20px;
`;

export default function Modal() {
  const modal = useReducerState().modal;

  if (modal.title && modal.content) {
    return (
      <ModalBgStyle>
        <CtnModalWindow>
          <ModalTitleBar title={modal.title} />
          <ModalContentStyle>{modal.content}</ModalContentStyle>
        </CtnModalWindow>
      </ModalBgStyle>
    );
  } else {
    return <></>;
  }
}
