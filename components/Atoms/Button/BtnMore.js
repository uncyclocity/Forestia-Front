import styled from 'styled-components';

const Styles = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background: #20c997;
  color: white;
  box-shadow: 0 0 5px #dedede;
  padding: 5px;
  width: 70px;
`;

export default function BtnMore({ onClick, children }) {
  return <Styles onClick={onClick}>{children}</Styles>;
}
