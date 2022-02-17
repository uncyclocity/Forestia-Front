import Router from 'next/router';
import { useReducerState } from '../Contexts/context';
import BtnHeader from '../Atoms/Button/BtnHeader';
import styled from 'styled-components';

const LayoutStyle = styled.div`
  display: flex;
`;

const ListStyle = styled.div`
  ul {
    margin: 0px;
    padding-left: 0px;
    li {
      list-style-type: none;
      float: left;
      font-size: 26px;

      &:not(:last-child) {
        padding-right: 30px;

        @media screen and (max-width: 700px) {
          padding-right: 25px;
        }
      }
    }
`;

const headerMenuArr = ['index', 'about', 'free', 'photo'];

const menuIconReturner = (headerMenu, isSelected) => {
  switch (headerMenu) {
    case headerMenuArr[0]:
      if (isSelected) {
        return (
          <BtnHeader
            btnText="로비"
            color="#20c997"
            size="20"
            mSize="17"
            isSelected={isSelected}
          />
        );
      } else {
        return (
          <BtnHeader
            btnText="로비"
            color="#828c99"
            size="20"
            mSize="17"
            isSelected={isSelected}
          />
        );
      }
    case headerMenuArr[1]:
      if (isSelected) {
        return (
          <BtnHeader
            btnText="정보"
            color="#20c997"
            size="20"
            mSize="17"
            isSelected={isSelected}
          />
        );
      } else {
        return (
          <BtnHeader
            btnText="정보"
            color="#828c99"
            size="20"
            mSize="17"
            isSelected={isSelected}
          />
        );
      }
    case headerMenuArr[2]:
      if (isSelected) {
        return (
          <BtnHeader
            btnText="자게"
            color="#20c997"
            size="20"
            mSize="17"
            isSelected={isSelected}
          />
        );
      } else {
        return (
          <BtnHeader
            btnText="자게"
            color="#828c99"
            size="20"
            mSize="17"
            isSelected={isSelected}
          />
        );
      }
    case headerMenuArr[3]:
      if (isSelected) {
        return (
          <BtnHeader
            btnText="짤게"
            color="#20c997"
            size="20"
            mSize="17"
            isSelected={isSelected}
          />
        );
      } else {
        return (
          <BtnHeader
            btnText="짤게"
            color="#828c99"
            size="20"
            mSize="17"
            isSelected={isSelected}
          />
        );
      }
    default:
      throw new Error('headerMenuArr에 존재하는 메뉴 이름이 아닙니다.');
  }
};

export default function HeaderFourButtons() {
  const nowPage = useReducerState().nowPage;

  const HMUrlArr = [
    '/',
    '/about',
    '/board/boardlist/free?page=1',
    '/board/boardlist/photo?page=1',
  ];

  return (
    <LayoutStyle>
      <ListStyle>
        <ul>
          {headerMenuArr.map((headerMenu, index) => {
            return (
              <li key={index}>
                {nowPage === headerMenu ? (
                  menuIconReturner(headerMenu, true)
                ) : (
                  <div onClick={() => Router.push(HMUrlArr[index])}>
                    {menuIconReturner(headerMenu, false)}
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </ListStyle>
    </LayoutStyle>
  );
}
