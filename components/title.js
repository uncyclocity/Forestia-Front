import styled from "styled-components";

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
    width: 75px;

    display: flex;
    justify-content: right;

    padding: 5px 15px;
    margin-right: 20px;
    border: 2px solid white;
    border-radius: 7px;

    font-size: 15px;
    font-weight: bold;

    &:hover {
      transition: 0.2s all ease-in;
      border: 2px solid #a2f2ca;
      color: #a2f2ca;
      cursor: pointer;
    }

    &:not(:hover) {
      transition: 0.2s all ease-in;
    }
  }
`;

export default function Title({ children }) {
  return (
    <Styles>
      <div className="catchphrase">
        풀내음이 함께하는
        <br />
        자취 이야기를 들려주세요
      </div>
      <div className="btn_area">
        <div className="posting_btn">포스팅</div>
      </div>
    </Styles>
  );
}
