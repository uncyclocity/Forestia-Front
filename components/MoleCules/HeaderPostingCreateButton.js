import { AiOutlineClose, AiOutlineEdit } from 'react-icons/ai';
import styled from 'styled-components';
import { unmountAnimation } from '../../src/common/animationController';
import { useDispatch, useReducerState } from '../../src/common/context';
import BtnGotoPostingCreating from '../Atoms/Button/BtnGotoPostingCreating';

const Styles = styled.div`
  color: white;
`;

export default function HeaderPostingCreateButton() {
  const nowPage = useReducerState().nowPage;
  const dispatch = useDispatch();
  const homeUrl = '/home';
  const postingCreatingUrl = '/board/update_posting/postingCreating';

  return (
    <Styles>
      {nowPage === 'creating' ? (
        <div onClick={() => unmountAnimation(0, dispatch, homeUrl)}>
          <BtnGotoPostingCreating btnText="포스팅 취소">
            <AiOutlineClose />
          </BtnGotoPostingCreating>
        </div>
      ) : (
        <div onClick={() => unmountAnimation(0, dispatch, postingCreatingUrl)}>
          <BtnGotoPostingCreating btnText="포스팅">
            <AiOutlineEdit />
          </BtnGotoPostingCreating>
        </div>
      )}
    </Styles>
  );
}
