import { AiOutlineClose, AiOutlineEdit } from 'react-icons/ai';
import styled from 'styled-components';
import { useReducerState } from '../../src/context';
import BtnGotoPostingPost from '../Atoms/Button/BtnGotoPostingPost';
import Router from 'next/router';

const Styles = styled.div`
  color: white;
`;

export default function HeaderPostingPostButton() {
  const nowPage = useReducerState().nowPage;
  const homeUrl = '/';
  const postingPostUrl = '/board/update-posting/post';

  return (
    <Styles>
      {nowPage === 'post' ? (
        <div onClick={() => Router.push(homeUrl)}>
          <BtnGotoPostingPost btnText="포스팅 취소">
            <AiOutlineClose />
          </BtnGotoPostingPost>
        </div>
      ) : (
        <div onClick={() => Router.push(postingPostUrl)}>
          <BtnGotoPostingPost btnText="포스팅">
            <AiOutlineEdit />
          </BtnGotoPostingPost>
        </div>
      )}
    </Styles>
  );
}
