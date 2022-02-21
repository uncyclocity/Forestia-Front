import styled from 'styled-components';

const BgStyle = styled.div`
  cursor: pointer;
  padding: 20px;
`;

const ProfileStyle = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;

  .profile-photo {
    height: 38px;
    margin-right: 10px;
  }
`;

const ContentStyle = styled.div`
  .boardtype-and-title {
    display: flex;
    align-items: center;
    .title {
      margin-left: 5px;
    }
  }
`;

const UdAndCommStyle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;

  .ud {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    width: 80px;
  }

  .comm {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    width: 35px;
  }
`;

export default function IndexTimelineBtn({
  onClick,
  profile,
  content,
  udAndComm,
}) {
  return (
    <BgStyle onClick={onClick}>
      <ProfileStyle>{profile}</ProfileStyle>
      <ContentStyle>{content}</ContentStyle>
      <UdAndCommStyle>{udAndComm}</UdAndCommStyle>
    </BgStyle>
  );
}
