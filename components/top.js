import styled from "styled-components";
import { CgTrees } from "react-icons/cg";
import { RiShieldKeyholeLine } from "react-icons/ri";

const LayoutStyles = styled.div`
  width: 700px;
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  .forestia_logo {
    width: 100%;
    display: flex;
    flex-direction: row;
    color: #20c997;
    font-family: Helvetica;
    font-size: 50px;
    font-weight: bold;
  }

  .profile .signin_btn {
    background: #20c997;
    color: white;
    width: 50px;
    height: 50px;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 30px;
  }
`;

export default function Top() {
  return (
    <LayoutStyles>
      <div className="forestia_logo">
        <CgTrees />
        &nbsp;Forestia.
      </div>
      <div className="profile">
        <div className="signin_btn">
          <RiShieldKeyholeLine />
        </div>
      </div>
    </LayoutStyles>
  );
}
