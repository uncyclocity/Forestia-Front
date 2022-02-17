import styled from 'styled-components';
import CtnBox from '../Atoms/Container/CtnBox';
import IndexCpAreaProfileImgAndCp from '../MoleCules/IndexCpAreaProfileImgAndCp';
import { lighten } from 'polished';
import { useReducerState } from '../Contexts/context';

const BgStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  border-radius: 15px;
  padding: 20px 20px;
  background: #20c997;
  cursor: pointer;

  &:hover {
    background: ${lighten(0.1, '#20c997')};
    transition: 0.15s all ease-in;
  }

  &:not(:hover) {
    background: #20c997;
    transition: 0.15s all ease-in;
  }

  @media screen and (max-width: 700px) {
    padding: 15px 20px 10px 20px;
    border-radius: 0;
    height: 60px;
  }
`;

export default function IndexCatchphraseArea() {
  const state = useReducerState();
  const userName = state.user.userName;
  const postingPostUrl = '/board/update-posting/post';

  return (
    <CtnBox>
      <BgStyle
        onClick={() =>
          userName ? Router.push(postingPostUrl) : alert('로그인이 필요합니다.')
        }
      >
        <IndexCpAreaProfileImgAndCp />
      </BgStyle>
    </CtnBox>
  );
}
