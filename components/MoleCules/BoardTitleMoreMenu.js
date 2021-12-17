import styled, { css } from 'styled-components';
import { useReducerState } from '../Contexts/context';
import {
  slideLeft,
  slideRight,
  slideDown,
  slideUp,
} from '../../styles/keyframes/slide';
import BtnMore from '../Atoms/Button/BtnMore';
import IcoMoreDeletePosting from '../Atoms/Icon/IcoMoreDeletePosting';
import IcoMoreEditPosting from '../Atoms/Icon/IcoMoreEditPosting';
import TxtMoreArea from '../Atoms/Text/TxtMoreArea';
import Router from 'next/router';

const Styles = styled.div`
  cursor: default;
  position: absolute;
  height: 68px;
  top: -40px;
  left: 70px;

  .ctxmenu {
    ${({ isOpenMoreAnimation }) =>
      isOpenMoreAnimation
        ? css`
            animation: 0.25s ease 0s ${slideRight};
          `
        : css`
            animation: 0.25s ease 0s ${slideLeft};
          `}
    animation-fill-mode: forwards;

    ul {
      padding-left: 0;
      height: 100%;
      li {
        list-style-type: none;
        &:not(:last-child) {
          margin-bottom: 8px;
        }
      }
    }
  }

  @media screen and (max-width: 700px) {
    top: 30px;
    left: -20px;
    .ctxmenu {
      ${({ isOpenMoreAnimation }) =>
        isOpenMoreAnimation
          ? css`
              animation: 0.25s ease 0s ${slideDown};
            `
          : css`
              animation: 0.25s ease 0s ${slideUp};
            `}
    }
  }
`;

export default function BoardTitleMoreMenu({ isOpenMoreAnimation }) {
  const postCnt = useReducerState().postCnt;

  return (
    <Styles isOpenMoreAnimation={isOpenMoreAnimation}>
      <div className="ctxmenu">
        <ul>
          <li>
            <BtnMore
              onClick={() => {
                Router.push(`/board/update-posting/put`);
              }}
            >
              <IcoMoreEditPosting />
              <TxtMoreArea text="수정" />
            </BtnMore>
          </li>
          <li>
            <BtnMore
              onClick={() => {
                if (!postCnt && confirm('정말로 삭제하시겠습니까')) {
                  Router.push(`/board/update-posting/delete`);
                }
              }}
            >
              <IcoMoreDeletePosting />
              <TxtMoreArea text="삭제" />
            </BtnMore>
          </li>
        </ul>
      </div>
    </Styles>
  );
}
