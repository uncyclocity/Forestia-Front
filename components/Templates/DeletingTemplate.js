import CtnBox from '../Atoms/Container/CtnBox';
import styled from 'styled-components';
import BoardTitleTemplate from './BoardTitleTemplate';
import DeletingBoardTitle from '../Organisms/DeletingBoardTitle';
import DeletingLoadingRing from '../MoleCules/DeletingLoadingRing.js';

const BoxStyles = styled.div`
  color: #525252;
  padding: 20px 30px 5px 30px;
`;

export default function DeletingTemplate() {
  return (
    <CtnBox>
      <BoxStyles>
        <BoardTitleTemplate>
          <DeletingBoardTitle />
        </BoardTitleTemplate>
        <DeletingLoadingRing />
      </BoxStyles>
    </CtnBox>
  );
}
