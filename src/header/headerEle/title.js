import { AiOutlineClose, AiOutlineEdit } from 'react-icons/ai';
import { useDispatch, useReducerState } from '../../common/context';
import styled from 'styled-components';
import { unmountAnimation } from '../../common/animationController';
import BtnGotoPosting from '../../../components/Atoms/BtnGotoPosting';
import LblCatchphrase from '../../../components/Atoms/LblCatchphrase';

const Styles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  height: 110px;
  padding: 30px 20px 20px 20px;
  color: white;
  background: #20c997;
  border-radius: 25px 25px 0 0;
`;

export default function Title() {
  const dispatch = useDispatch();
  const nowPage = useReducerState().nowPage;
  const homeUrl = `/home`;
  const postingCreatingUrl = `/board/update_posting/postingCreating`;

  return (
    <Styles>
      <LblCatchphrase />
      {nowPage === 'posting' ? (
        <div onClick={() => unmountAnimation(0, dispatch, homeUrl)}>
          <BtnGotoPosting btnText="포스팅 취소">
            <AiOutlineClose />
          </BtnGotoPosting>
        </div>
      ) : (
        <div onClick={() => unmountAnimation(0, dispatch, postingCreatingUrl)}>
          <BtnGotoPosting btnText="포스팅">
            <AiOutlineEdit />
          </BtnGotoPosting>
        </div>
      )}
    </Styles>
  );
}
