import styled from 'styled-components';
import Title from '../../src/title';
import Box from '../box';

const BoxStyles = styled.div`
  height: 80px;
  padding: 0 0 5px 0;
`;

const MenuBtnAreaStyles = styled.span`
  display: flex;
  justify-content: center;

  ul {
    padding-right: 40px;
    li {
      list-style-type: none;
      float: left;
      font-size: 26px;

      &:not(:last-child) {
        padding-right: 80px;
      }
    }

    a {
      cursor: pointer;

      .menu_icon {
        height: 30px;
        margin-bottom: 3px;
      }

      .menu_name {
        display: flex;
        justify-content: center;
        font-size: 13px;
      }

      .selected {
        color: #20c997;

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

export default function St_HeaderBar({ children }) {
  return (
    <Box>
      <Title />
      <BoxStyles>
        <MenuBtnAreaStyles>{children}</MenuBtnAreaStyles>
      </BoxStyles>
    </Box>
  );
}
