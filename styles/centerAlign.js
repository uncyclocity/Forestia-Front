import styled from 'styled-components';

const Styles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  height: 100%;

  &:last-child {
    margin-bottom: 30px;
  }
`;

export default function CenterAlign({ children }) {
  return <Styles>{children}</Styles>;
}
