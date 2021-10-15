import CtnBox from '../../components/Atoms/Container/CtnBox';
import AboutBoardTitle from '../Organisms/AboutBoardTitle';
import styled from 'styled-components';
import AboutPage from '../Organisms/AboutPage';
import BoardTitleTemplate from './BoardTitleTemplate';

const Styles = styled.div`
  padding: 20px 30px 5px 30px;
`;

export default function AboutTemplate() {
  const homeUrl = '/';

  return (
    <CtnBox>
      <Styles>
        <BoardTitleTemplate backURL={homeUrl}>
          <AboutBoardTitle />
        </BoardTitleTemplate>
        <AboutPage />
      </Styles>
    </CtnBox>
  );
}
