import styled from 'styled-components';
import IcoNextjs from '../Atoms/Icon/IcoNextjs';
import AboutText from '../MoleCules/AboutText';

const Styles = styled.div`
  margin: 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
`;

export default function AboutPage() {
  return (
    <Styles>
      <IcoNextjs />
      <AboutText />
    </Styles>
  );
}
