import styled from 'styled-components';
import BoardTitleEles from '../Organisms/BoardTitleEles';

const Styles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding-bottom: 20px;
  border-bottom: 1px solid #e9ecef;
`;

export default function BoardTitleTemplate({ backURL, children }) {
  return (
    <Styles>
      <BoardTitleEles backURL={backURL}>{children}</BoardTitleEles>
    </Styles>
  );
}
