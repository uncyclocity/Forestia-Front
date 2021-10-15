import styled from 'styled-components';
import IcoLogo from '../Atoms/Icon/IcoLogo';
import Router from 'next/router';

const Styles = styled.div`
  margin: 30px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 700px;
`;

export default function HeaderLogoArea() {
  const homeUrl = '/';

  return (
    <Styles onClick={() => Router.push(homeUrl)}>
      <IcoLogo />
    </Styles>
  );
}
