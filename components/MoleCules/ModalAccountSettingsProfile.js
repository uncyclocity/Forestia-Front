import { BiUser } from 'react-icons/bi';
import styled from 'styled-components';
import HicProfilePhoto from '../Atoms/HybridIcon/HicProfilePhoto';
import TxtProfile from '../Atoms/Text/TxtProfile';

const Styles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 10px;
  border-bottom: 1px solid #efefef;

  & > div {
    margin-bottom: 5px;
  }
`;

export default function ModalAccountSettingsProfile({ user }) {
  return (
    <Styles>
      <HicProfilePhoto
        statusIcon={<BiUser />}
        bgColor="#20c997"
        color="white"
        shadowColor="#dedede"
        size="70"
        padding="15"
        imageUrl={user.imageUrl}
      />
      <TxtProfile userName={user.userName} color="#20c997" size="21" />
      <TxtProfile userName={user.userEmail} color="#828c99" size="15" />
    </Styles>
  );
}
