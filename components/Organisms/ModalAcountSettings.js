import BtnDeleteAccount from '../Atoms/Button/BtnDeleteAccount';

export default function ModalAccountSettings({ deleteAccount }) {
  return <BtnDeleteAccount onClick={deleteAccount} />;
}
