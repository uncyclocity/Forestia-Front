import styled from 'styled-components';

const Styles = styled.div`
  height: 125.88px;
  padding: 40px 20px 20px 20px;
  color: white;
  background: #20c997;
  border-radius: 15px 15px 0 0;

  font-weight: bold;
  font-family: Helvetica;
  font-size: 50px;

  display: flex;
  align-item: center;
  justify-content: center;
`;

export default function Title({ children }) {
  return <Styles>{children}</Styles>;
}
