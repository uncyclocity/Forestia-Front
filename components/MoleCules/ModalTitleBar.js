import styled from 'styled-components';
import { useDispatch } from '../../src/context';
import BtnCloseModal from '../Atoms/Button/BtnCloseModal';
import TxtModalTitle from '../Atoms/Text/TxtModalTitle';

const LayoutStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
`;

const LRStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10%;
`;

const TitleAreaStyle = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function ModalTitleBar({ title }) {
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch({
      type: 'modal',
      title: '',
      content: '',
    });
  };

  return (
    <LayoutStyle>
      <LRStyle />
      <TitleAreaStyle>
        <TxtModalTitle title={title} />
      </TitleAreaStyle>
      <LRStyle>
        <BtnCloseModal onClick={closeModal} />
      </LRStyle>
    </LayoutStyle>
  );
}
