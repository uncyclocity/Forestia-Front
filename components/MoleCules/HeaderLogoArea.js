import styled from 'styled-components';
import IcoLogo from '../Atoms/Icon/IcoLogo';
import Router from 'next/router';
import TxtLogo from '../Atoms/Text/TxtLogo';
import { CgTrees } from 'react-icons/cg';
import HeaderLoginArea from './HeaderLoginArea';
import HicProfilePhoto from '../Atoms/HybridIcon/HicProfilePhoto';
import { BiUser, BiUserX } from 'react-icons/bi';
import { useReducerState } from '../Contexts/context';

const BgStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .max-width {
    display: flex;
    justify-content: space-between;
    width: 900px;

    @media screen and (max-width: 700px) {
      width: 100%;
      margin: 0 10px;
    }
  }
`;

const LogoStyle = styled.div`
  margin: 15px 0;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const ProfileBtnStyle = styled.div`
  display: flex;
  align-items: center;
`;

export default function HeaderLogoArea({ accountSettings }) {
  const homeUrl = '/';
  const { userId, imageUrl } = useReducerState().user;

  return (
    <BgStyle>
      <div className="max-width">
        <LogoStyle onClick={() => Router.push(homeUrl)}>
          <IcoLogo icon={<CgTrees />} color="#20c997" size="38" mSize="34" />
          <TxtLogo text="Forestia" color="#20c997" size="30" mSize="25" />
        </LogoStyle>
        <ProfileBtnStyle>
          {userId ? (
            <HicProfilePhoto
              statusIcon={<BiUser />}
              bgColor="#20c997"
              color="white"
              shadowColor="#dedede"
              size="26"
              padding="6"
              onClick={accountSettings}
              imageUrl={imageUrl}
            />
          ) : (
            <HeaderLoginArea
              style={
                <HicProfilePhoto
                  statusIcon={<BiUserX />}
                  bgColor="#828c99"
                  color="white"
                  shadowColor="#dedede"
                  size="26"
                  padding="6"
                  onClick={() => {}}
                />
              }
            />
          )}
        </ProfileBtnStyle>
      </div>
    </BgStyle>
  );
}
