import styled from 'styled-components';

const Styles = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

export default function BoardTitleBoardInfo({ children }) {
  return <Styles>{children}</Styles>;
}
