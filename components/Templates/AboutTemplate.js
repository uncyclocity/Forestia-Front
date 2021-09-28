import CtnBox from '../../components/Atoms/Container/CtnBox';
import AboutBoardTitle from '../Organisms/AboutBoardTitle';
import BoardTitle from '../../src/common/boardTitle';
import styled from 'styled-components';
import AboutPage from '../Organisms/AboutPage';

const Styles = styled.div`
  padding: 20px 30px 5px 30px;
`;

export default function AboutTemplate() {
  const homeUrl = '/home';

  return (
    <CtnBox>
      <Styles>
        <BoardTitle backURL={homeUrl}>
          <AboutBoardTitle />
        </BoardTitle>
        <AboutPage />
      </Styles>
    </CtnBox>
  );
}
