import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import styled from 'styled-components';
import { spin_360 } from '../../../styles/keyframes/spin';

const DeleteSignStyle = styled.div`
  margin: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  .icon {
    width: 70px;
    height: 70px;
    font-size: 70px;
    color: #20c997;
    animation: ${spin_360} infinite 5s linear;
  }
`;

export default function CommDeleteSign() {
  return (
    <DeleteSignStyle>
      <div className="icon">
        <AiOutlineLoading3Quarters />
      </div>
    </DeleteSignStyle>
  );
}
