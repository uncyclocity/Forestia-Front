import styled from 'styled-components';

const Styles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  height: 120px;
  padding: 30px 20px 20px 20px;
  color: white;
  background: #20c997;
  border-radius: 15px 15px 0 0;

  .catchphrase {
    width: 100%;

    margin-left: 10px;

    font-weight: bold;
    font-family: Helvetica;
    font-size: 25px;
  }

  .posting_btn {
    width: 80px;
    height: 35px;

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 5px 15px;
    margin-right: 20px;
    border: 2px solid white;
    border-radius: 7px;

    font-size: 15px;
    font-weight: bold;

    &:hover {
      transition: 0.2s all ease-in;
      background: white;
      color: #20c997;
      cursor: pointer;
    }

    &:not(:hover) {
      transition: 0.2s all ease-in;
    }
  }

  .free_photo_btn {
    width: 80px;
    height: 35px;

    display: flex;
    flex-direction: row;

    margin-right: 20px;

    .free_btn {
      width: 100%;
      height: 35px;

      display: flex;
      justify-content: center;
      align-items: center;

      font-size: 20px;

      border: 2px solid white;
      border-right: 1px solid white;
      border-radius: 7px 0 0 7px;

      &:hover {
        transition: 0.2s all ease-in;
        background: white;
        color: #20c997;
        cursor: pointer;
      }

      &:not(:hover) {
        transition: 0.2s all ease-in;
      }
    }

    .photo_btn {
      width: 100%;
      height: 35px;

      display: flex;
      justify-content: center;
      align-items: center;

      font-size: 20px;

      border: 2px solid white;
      border-left: 1px solid white;
      border-radius: 0 7px 7px 0;

      &:hover {
        transition: 0.2s all ease-in;
        background: white;
        color: #20c997;
        cursor: pointer;
      }

      &:not(:hover) {
        transition: 0.2s all ease-in;
      }
    }
  }
`;

export default function St_title({ children }) {
  return <Styles>{children}</Styles>;
}
