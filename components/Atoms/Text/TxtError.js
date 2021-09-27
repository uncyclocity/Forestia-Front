import styled from 'styled-components';

const Styles = styled.div`
  font-size: 21px;
  color: #20c997;
`;

export default function TxtError({ errorCode }) {
  return <Styles>{errorCode}&nbsp;Error</Styles>;
}
