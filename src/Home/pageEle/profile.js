import { BsPerson } from 'react-icons/bs';
import { useReducerState } from '../../common/context';
import styled from 'styled-components';
import { BtnLogInOut } from '../../../components/Atoms/Button';

const ProfileBoxStyle = styled.div`
  display: flex;
  flex-direction: row;

  .profile_photo {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 165px;
    color: white;
    background: #20c997;
    border-radius: 25px 0 0 25px;
    font-size: 70px;
  }

  .profile_name_area {
    width: 50%;
    height: 165px;
    font-size: 20px;
    color: #828c99;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .profile_name_line {
      display: flex;
      flex-direction: row;
      .profile_name {
        color: #20c997;
      }
    }
  }
`;

export default function ProfileBox() {
  const userName = useReducerState().userName;
  return (
    <ProfileBoxStyle>
      <div className="profile_photo">
        <BsPerson />
      </div>
      <div className="profile_name_area">
        <div className="profile_name_line">
          <div className="profile_name">{userName}</div>님
        </div>
        <BtnLogInOut>로그아웃</BtnLogInOut>
      </div>
    </ProfileBoxStyle>
  );
}
