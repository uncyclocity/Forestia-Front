import styled from 'styled-components';
import { IoIosArrowBack } from 'react-icons/io';
import { unmountAnimation } from '../fixed/AnimationController';
import { useDispatch } from '../pages/_context';

const Styles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  color: #20c997;

  padding-bottom: 20px;
  border-bottom: 1px solid #e9ecef;

  .board_info {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;

    .icon {
      font-size: 35px;
    }

    .title_name {
      font-size: 20px;
      font-weight: bold;
    }

    .author_and_date {
      display: flex;
      flex-direction: row;

      margin-top: 10px;

      .author {
        padding: 0 5px;
        font-weight: bold;
      }

      .date {
        display: flex;
        flex-direction: row;
        padding: 0 5px;

        .date_icon {
          transform: translateY(1px);
        }
      }
    }
  }

  .lr_btn {
    cursor: pointer;
    width: 35px;
    font-size: 30px;
  }
`;

export default function Board_title({ children }) {
  const dispatch = useDispatch();
  return (
    <Styles>
      <div className="lr_btn" onClick={() => unmountAnimation(1, dispatch)}>
        <IoIosArrowBack />
      </div>
      <div className="board_info">{children}</div>
      <div className="lr_btn" />
    </Styles>
  );
}
