import styled from 'styled-components';
import TxtModalTitle from '../Atoms/Text/TxtModalTitle';

const LayoutStyle = styled.div`
  height: 30px;
`;

const LRStyle = styled.div`
  width: 10%;
`;

const TitleAreaStyle = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function ModalTitleBar({ title }) {
  return (
    <LayoutStyle>
      <LRStyle />
      <TitleAreaStyle>
        <TxtModalTitle title={title} />
      </TitleAreaStyle>
      <LRStyle></LRStyle>
    </LayoutStyle>
  );
}
