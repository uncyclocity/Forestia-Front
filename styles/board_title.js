import styled from 'styled-components';
import { IoIosArrowBack } from "react-icons/io";
import { useRouter } from 'next/router';

const Styles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;


  font-size: 20px;
  font-weight: bold;

  color: #20c997;

  padding-bottom: 20px;
  margin-bottom: 10px;
  border-bottom: 1px solid #e9ecef;

  .board_info {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
  }

  .icon {
    font-size: 35px;
  }

  .lr_btn {
    width: 35px;
    font-size: 30px;
  }
`;

export default function Board_title({ children }) {
  const router = useRouter();

  return (
    <Styles>
      <div className="lr_btn" onClick={() => router.back()}>
        <IoIosArrowBack />
      </div>
      <div className="board_info">
        {children}
      </div>
      <div className="lr_btn"/>
    </Styles>
  );
}
