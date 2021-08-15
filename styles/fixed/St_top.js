import styled from 'styled-components';

const Styles = styled.div`
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
    cursor: pointer;
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
    box-shadow: 0px 6px 10px #9aefd6;

    &:hover {
      transition: 0.25s all ease-in;
      box-shadow: 0px 6px 10px #36deac;
      cursor: pointer;
    }

    &:not(:hover) {
      transition: 0.25s all ease-in;
    }
  }
`;

export default function St_top({ children }) {
  return <Styles>{children}</Styles>;
}
