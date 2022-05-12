import styled from 'styled-components';
import CtnHeaderBox from '../Atoms/Container/CtnHeaderBox';
import HeaderFourButtons from '../MoleCules/HeaderFourButtons';
import HeaderLogoArea from '../MoleCules/HeaderLogoArea';
import IndexCatchphraseArea from '../Organisms/IndexCatchphraseArea';

const Styles = styled.div`
  background: #f6f6f6;
`;

export default function HeaderTemplate({ accountSettings }) {
  return (
    <Styles>
      <HeaderLogoArea accountSettings={accountSettings} />
      <CtnHeaderBox>
        <HeaderFourButtons />
      </CtnHeaderBox>
      <IndexCatchphraseArea />
    </Styles>
  );
}
