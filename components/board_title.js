import styled from 'styled-components';

const Styles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  font-size: 20px;
  font-weight: bold;

  color: #20c997;

  padding-bottom: 20px;
  margin-bottom: 10px;
  border-bottom: 1px solid #e9ecef;

  .icon {
    font-size: 35px;
  }
`;

export default function Board_title({ children }) {
  return <Styles>{children}</Styles>;
}
