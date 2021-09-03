import { AiOutlineClose, AiOutlineEdit } from 'react-icons/ai';
import { RiLeafLine } from 'react-icons/ri';
import { useDispatch, useReducerState } from '../../context';
import styled from 'styled-components';
import { unmountAnimation } from '../../animationController';

const Styles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  height: 110px;
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

export default function Title() {
  const dispatch = useDispatch();
  const nowPage = useReducerState().nowPage;

  return (
    <Styles>
      <div className="catchphrase">
        풀내음이 함께하는
        <br />
        자취 이야기를 들려주세요&nbsp;
        <RiLeafLine />
      </div>
      <div className="btn_area">
        {nowPage === 'posting' ? (
          <div
            className="posting_btn"
            onClick={() => unmountAnimation(0, dispatch, `/home`)}
          >
            <div className="posting_icon">
              <AiOutlineClose />
            </div>
            <div className="posting_text">포스팅 취소</div>
          </div>
        ) : (
          <div
            className="posting_btn"
            onClick={() =>
              unmountAnimation(0, dispatch, `/board/update_posting/creating`)
            }
          >
            <div className="posting_icon">
              <AiOutlineEdit />
            </div>
            <div className="posting_text">포스팅</div>
          </div>
        )}
      </div>
    </Styles>
  );
}
