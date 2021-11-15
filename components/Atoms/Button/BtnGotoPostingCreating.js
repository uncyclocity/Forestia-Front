import styled from 'styled-components';

// BtnGotoPostingCreating
// 분류 : 버튼
// 용도 : 포스팅 작성 / 작성 취소 버튼에 쓰인다.

const Styles = styled.div`
  width: 80px;
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
    font-family: 'NanumSquareR';
  }

  @media screen and (max-width: 700px) {
    .posting_icon {
      font-size: 25px;
    }

    .posting_text {
      font-size: 13px;
      font-family: 'NanumSquareR';
    }
  }
`;

export default function BtnGotoPostingCreating({ btnText, children }) {
  return (
    <Styles>
      <div className="posting_icon">{children}</div>
      <div className="posting_text">{btnText}</div>
    </Styles>
  );
}
