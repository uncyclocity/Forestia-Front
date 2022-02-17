import { Router } from 'next/router';
import { doUser } from '../../doApi';

const isNickNameOverlap = async (nickName) => {
  const user = await doUser.get.byNickName(nickName);
  if (user == '') {
    return false;
  } else {
    return true;
  }
};

export const postUser = async ({
  dispatch,
  postCnt,
  userObj: { userId, userEmail, imageUrl },
  nickName,
  setIsOverLap,
}) => {
  if (!postCnt) {
    dispatch({
      type: 'postcnt_switcher',
      sw: true,
    });

    if (nickName) {
      try {
        if (await isNickNameOverlap(nickName)) {
          setIsOverLap(true);
        } else {
          await doUser.post(userId, userEmail, nickName, imageUrl);
          alert(
            '회원 가입이 완료되었습니다.\n해당 구글 계정으로 재로그인 후 사용가능합니다.',
          );
          Router.push('/');
        }
      } catch (e) {
        console.error(e);
      }
    } else {
      alert('닉네임을 입력하세요');
    }

    dispatch({
      type: 'postcnt_switcher',
      sw: false,
    });
  }
};
