import Router from "next/router";
import { useReducerState, useDispatch } from "../pages/_context";
import styled from "styled-components";
import {
  AiOutlineHome,
  AiOutlineInfoCircle,
  AiOutlineCloud,
  AiOutlineCamera,
} from "react-icons/ai";
import Box from "../components/box";
import { useEffect } from "react";

const BoxStyles = styled.div`
  height: 80px;
  padding: 10px 0 5px 0;
`;

const MenuBtnStyles = styled.span`
  display: flex;
  justify-content: center;

  ul {
    padding-right: 40px;
    li {
      list-style-type: none;
      float: left;
      font-size: 26px;
    }

    a {
      .selected {
        color: #20c997;
        font-weight: bold;

        &:hover {
          transition: 0.15s all ease-in;
          color: #6debac;
        }

        &:not(:hover) {
          transition: 0.15s all ease-in;
          color: #20c997;
        }
      }

      &:hover {
        transition: 0.15s all ease-in;
        color: #6debac;
      }
  
      &:not(:hover) {
        transition: 0.15s all ease-in;
        color: #828c99;
      }
    }
`;

const unMountAni = (dispatch, nowPage, URL) => {
  dispatch({
    type: nowPage,
    isAnimate: true,
  });

  setTimeout(() => {
    dispatch({
      type: URL,
      isAnimate: false,
    });
    Router.push(URL);
  }, 100);
};

export default function Header() {
  const nowPage = useReducerState().nowPage;
  const dispatch = useDispatch();

  useEffect(() => {
    const partName = "/" + location.pathname.split("/")[1];
    dispatch({
      type: "initiate",
      nowPage: partName,
    });
  }, [dispatch]);

  console.log(nowPage);

  return (
    <Box>
      <BoxStyles>
        <MenuBtnStyles>
          <ul>
            <li>
              <a>
                {nowPage === "/home" ? (
                  <div className="selected">
                    <AiOutlineHome />
                  </div>
                ) : (
                  <div onClick={() => unMountAni(dispatch, nowPage, "/home")}>
                    <AiOutlineHome />
                  </div>
                )}
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a>
                {nowPage === "/about" ? (
                  <div className="selected">
                    <AiOutlineInfoCircle />
                  </div>
                ) : (
                  <div onClick={() => unMountAni(dispatch, nowPage, "/about")}>
                    <AiOutlineInfoCircle />
                  </div>
                )}
              </a>
            </li>
          </ul>
          <ul>
            <li>
              {/* as : 해당 Link 클릭 시 이동 될 URL을 명시해주는 속성 */}

              <a>
                {nowPage === "/free" ? (
                  <div className="selected">
                    <AiOutlineCloud />
                  </div>
                ) : (
                  <div onClick={() => unMountAni(dispatch, nowPage, "/free")}>
                    <AiOutlineCloud />
                  </div>
                )}
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a>
                {nowPage === "/comuin" ? (
                  <div className="selected">
                    <AiOutlineCamera />
                  </div>
                ) : (
                  <div onClick={() => unMountAni(dispatch, nowPage, "/comuin")}>
                    <AiOutlineCamera />
                  </div>
                )}
              </a>
            </li>
          </ul>
        </MenuBtnStyles>
      </BoxStyles>
    </Box>
  );
}
