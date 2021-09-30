import styled from 'styled-components';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';

const Styles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  color: #20c997;
  font-size: 15px;
  margin: 15px 0;

  .prev_next_btn {
    position: relative;
    top: 1px;
  }

  .page_btn {
    margin 0 5px;
    .page_btn_selected {
      font-weight: bold;
      text-decoration: underline;
    }
  }
`;

export default function PageBtn({ freeLen, page, setNowPage }) {
  const postingAmountDivided = freeLen / 15;
  const padInt = parseInt(postingAmountDivided);
  const pageBtnAmount = padInt < postingAmountDivided ? padInt + 1 : padInt;

  return (
    <Styles>
      <div className="prev_next_btn">
        <AiOutlineArrowLeft />
      </div>
      {[...Array(pageBtnAmount)].map((num, index) => {
        if (index + 1 === parseInt(page)) {
          return (
            <div className="page_btn" key={index}>
              <div className="page_btn_selected">{index + 1}</div>
            </div>
          );
        } else {
          return (
            <div
              className="page_btn"
              key={index}
              onClick={() => setNowPage(index + 1)}
            >
              {index + 1}
            </div>
          );
        }
      })}
      <div className="prev_next_btn">
        <AiOutlineArrowRight />
      </div>
    </Styles>
  );
}
