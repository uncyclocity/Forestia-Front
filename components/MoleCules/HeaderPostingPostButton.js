import { AiOutlineClose, AiOutlineEdit } from 'react-icons/ai';
import styled from 'styled-components';
import { useReducerState } from '../Contexts/context';
import BtnGotoPostingPost from '../Atoms/Button/BtnGotoPostingPost';
import Router from 'next/router';

const Styles = styled.div`
  color: white;
`;

export default function HeaderPostingPostButton() {
  const state = useReducerState();
  const nowPage = state.nowPage;
  const userName = state.user.userName;
  const homeUrl = '/';
  const postingPostUrl = '/board/update-posting/post';

  return (
    <Styles>
      {nowPage === 'post' ? (
        <div
          onClick={() =>
            userName ? Router.push(homeUrl) : alert('로그인이 필요합니다.')
          }
        >
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
