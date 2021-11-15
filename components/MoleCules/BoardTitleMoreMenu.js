import styled, { css } from 'styled-components';
import { useReducerState } from '../../src/context';
import { slideLeft, slideRight } from '../../styles/keyframes/slide';
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
                Router.push(`/board/update_posting/postingEditing`);
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
                  Router.push(`/board/update_posting/postingDeleting`);
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
