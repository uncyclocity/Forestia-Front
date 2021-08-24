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
    width: 120px;
    height: 35px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    cursor: pointer;

    .posting_icon {
      font-size: 30px;
    }

    .posting_text {
      font-size: 16px;
      font-weight: bold;
    }
  }
`;

export default function St_title({ children }) {
  return <Styles>{children}</Styles>;
}
