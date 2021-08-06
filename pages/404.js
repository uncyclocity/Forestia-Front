import Box from "../components/box";
import styled from "styled-components";
import { VscError } from "react-icons/vsc";
import router from "next/router";

const BoxStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100px;
  padding: 20px;
  color: #828c99;

  .errorcode {
    height: 100%;
    padding: 20px 30px 20px 20px;
    font-size: 21px;

    color: #20c997;
    border-right: 1px solid #e9ecef;

    display: flex;
    align-items: center;
    justify-content: center;

    .error_icon {
      font-size: 26px;
      transform: translateY(10%);
    }
  }

  .btns {
    padding: 20px 10px 20px 20px;

    display: flex;
    justify-content: center;
    flex-direction: row;

    .back_btn {
      width: 60px;

      margin: 10px 10px;
      padding: 8px;

      text-align: center;
      font-size: 15px;

      box-shadow: 0px 0px 15px #9aefd6;

      color: white;
      background: #20c997;

      border-radius: 15px;

      &:hover {
        transition: 0.25s all ease-in;
        box-shadow: 0px 0px 15px #36deac;
        cursor: pointer;
      }

      &:not(:hover) {
        transition: 0.25s all ease-in;
      }
    }

    .home_btn {
      width: 60px;

      margin: 10px 10px;
      padding: 8px;

      text-align: center;
      font-size: 15px;

      box-shadow: 0px 0px 15px #9aefd6;

      color: #20c997;
      background: white;

      border-radius: 15px;

      &:hover {
        transition: 0.25s all ease-in;
        box-shadow: 0px 0px 15px #36deac;
        cursor: pointer;
      }

      &:not(:hover) {
        transition: 0.25s all ease-in;
      }
    }
  }
`;

export default function NotFoundPage() {
  return (
    <Box>
      <BoxStyles>
        <div className="errorcode">
          <div className="error_icon">
            <VscError />
          </div>
          &nbsp;404 Error
        </div>
        <div className="btns">
          <div className="back_btn" onClick={() => router.back()}>
            뒤로
          </div>
          <div className="home_btn" onClick={() => router.push("/home")}>
            메인
          </div>
        </div>
      </BoxStyles>
    </Box>
  );
}
