import ModalTitleBar from './ModalTitleBar';
import { useReducerState } from '../Contexts/context';
import styled from 'styled-components';

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

const ModalCtnWindow = styled.div`
  border-radius: 15px;
  padding: 20px;
  background: white;
  width: 400px;

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

  if (modal.title && modal.content) {
    return (
      <ModalBgStyle>
        <ModalCtnWindow>
          <ModalTitleBar title={modal.title} />
          <ModalContentStyle>{modal.content}</ModalContentStyle>
        </ModalCtnWindow>
      </ModalBgStyle>
    );
  } else {
    return <></>;
  }
}
