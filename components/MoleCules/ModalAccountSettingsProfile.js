import { useState } from 'react';
import { BiUser } from 'react-icons/bi';
import styled from 'styled-components';
import HicProfilePhoto from '../Atoms/HybridIcon/HicProfilePhoto';
import BtnProfilePhotoChange from '../Atoms/Button/BtnProfilePhotoChange';
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

  .input-file {
    width: 100px;
    height: 100px;
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }
`;

export default function ModalAccountSettingsProfile({ user }) {
  const [fileImage, setFileImage] = useState(user.imageUrl);

  return (
    <Styles>
      <div>
        <BtnProfilePhotoChange
          text={
            <>
              <div>프로필 사진 변경</div>
              <input
                name="imgUpload"
                type="file"
                accept="image/*"
                onChange={(e) => {
                  console.log(e);
                  setFileImage(URL.createObjectURL(e.target.files[0]));
                }}
                className="input-file"
              />
            </>
          }
          size="14"
          width="100"
          height="100"
        />
        <HicProfilePhoto
          statusIcon={<BiUser />}
          bgColor="#20c997"
          color="white"
          shadowColor="#dedede"
          size="70"
          padding="15"
          imageUrl={fileImage}
        />
      </div>
      <TxtProfile userName={user.userName} color="#20c997" size="21" />
      <TxtProfile userName={user.userEmail} color="#828c99" size="15" />
    </Styles>
  );
}
