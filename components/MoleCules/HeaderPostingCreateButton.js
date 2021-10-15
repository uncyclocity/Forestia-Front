import { AiOutlineClose, AiOutlineEdit } from 'react-icons/ai';
import styled from 'styled-components';
import { useReducerState } from '../../src/context';
import BtnGotoPostingCreating from '../Atoms/Button/BtnGotoPostingCreating';
import Router from 'next/router';

const Styles = styled.div`
  color: white;
`;

export default function HeaderPostingCreateButton() {
  const nowPage = useReducerState().nowPage;
  const homeUrl = '/';
  const postingCreatingUrl = '/board/update_posting/postingCreating';

  return (
    <Styles>
      {nowPage === 'creating' ? (
        <div onClick={() => Router.push(homeUrl)}>
          <BtnGotoPostingCreating btnText="포스팅 취소">
            <AiOutlineClose />
          </BtnGotoPostingCreating>
        </div>
      ) : (
        <div onClick={() => Router.push(postingCreatingUrl)}>
          <BtnGotoPostingCreating btnText="포스팅">
            <AiOutlineEdit />
          </BtnGotoPostingCreating>
        </div>
      )}
    </Styles>
  );
}
