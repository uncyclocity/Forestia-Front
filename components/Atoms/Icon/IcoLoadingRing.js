import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import styled from 'styled-components';
import { spin360 } from '../../../styles/keyframes/spin';

// IcoLoadingRing
// 분류 : 아이콘
// 용도 : 댓글 및 포스팅 삭제 시 표시되는 로딩 링

const Styles = styled.div`
  width: 70px;
  height: 70px;
  font-size: 70px;
  color: #20c997;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${spin360} infinite 5s linear;
`;

export default function IcoLoadingRing() {
  return (
    <Styles>
      <AiOutlineLoading3Quarters />
    </Styles>
  );
}
