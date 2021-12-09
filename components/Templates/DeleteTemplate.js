import CtnBox from '../Atoms/Container/CtnBox';
import styled from 'styled-components';
import BoardTitleTemplate from './BoardTitleTemplate';
import DeleteBoardTitle from '../Organisms/DeleteBoardTitle';
import DeleteLoadingRing from '../MoleCules/DeleteLoadingRing.js.js';

const BoxStyles = styled.div`
  color: #525252;
  padding: 20px 30px 5px 30px;
`;

export default function DeleteTemplate() {
  return (
    <CtnBox>
      <BoxStyles>
        <BoardTitleTemplate>
          <DeleteBoardTitle />
        </BoardTitleTemplate>
        <DeleteLoadingRing />
      </BoxStyles>
    </CtnBox>
  );
}
