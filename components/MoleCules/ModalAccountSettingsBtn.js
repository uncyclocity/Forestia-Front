import styled from 'styled-components';
import BtnDeleteAccount from '../Atoms/Button/BtnDeleteAccount';

const Styles = styled.div`
  div {
    padding: 8px 0;
  }
`;

export default function ModalAccountSettingsBtn({
  logOutAccount,
  deleteAccount,
}) {
  return (
    <Styles>
      <BtnDeleteAccount
        text="로그아웃"
        color="#9ea6b0"
        size="18"
        mSize="15"
        onClick={logOutAccount}
      />
      <BtnDeleteAccount
        text="계정 삭제"
        color="#ff8787"
        size="18"
        mSize="15"
        onClick={deleteAccount}
      />
    </Styles>
  );
}
