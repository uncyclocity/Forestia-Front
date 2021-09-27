import BoardTitle from '../../src/common/boardTitle';
import { useEffect } from 'react';
import { useDispatch } from '../../src/common/context';
import CtnBox from '../../components/Atoms/Container/CtnBox';
import styled from 'styled-components';
import { mountAnimation } from '../../src/common/animationController';
import InAboutBoardTitle from '../../src/about/pageEle/inAboutBoardTitle';
import AboutContent from '../../src/about/pageEle/aboutContent';

const Styles = styled.div`
  padding: 20px 30px 5px 30px;

  .content {
    color: #5d5d5d;
    margin: 20px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;

    .text {
      border-left: 1px solid #e9ecef;
      padding-left: 40px;
      .line {
        display: flex;
        flex-direction: row;
        .bold {
          color: #20c997;
          font-weight: bold;
        }
        &:not(:last-child) {
          margin-bottom: 3px;
        }
      }
    }
  }
`;

export default function About() {
  const dispatch = useDispatch();

  useEffect(() => {
    mountAnimation(dispatch, 'about');
  }, [dispatch]);

  return (
    <CtnBox>
      <Styles>
        <BoardTitle backURL="/home">
          <InAboutBoardTitle />
        </BoardTitle>
        <AboutContent />
      </Styles>
    </CtnBox>
  );
}
