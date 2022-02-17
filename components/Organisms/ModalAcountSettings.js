import styled from 'styled-components';
import ModalAccountSettingsBtn from '../MoleCules/ModalAccountSettingsBtn';
import ModalAccountSettingsProfile from '../MoleCules/ModalAccountSettingsProfile';

const Styles = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function ModalAccountSettings({
  logOutAccount,
  deleteAccount,
  user,
}) {
  return (
    <Styles>
      <ModalAccountSettingsProfile user={user} />
      <ModalAccountSettingsBtn
        logOutAccount={logOutAccount}
        deleteAccount={deleteAccount}
      />
    </Styles>
  );
}
