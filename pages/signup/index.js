import {
  useDispatch,
  useReducerState,
} from '../../components/Contexts/context';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import SignUpTemplate from '../../components/Templates/SignUpTemplate';
import { doUser, doUserToken } from '../../utils/doApi';
import Router from 'next/router';
import { postUser } from '../../utils/updateFunc/user/postUser';

const isNickNameOverlap = async (nickName) => {
  const user = await doUser.get.byNickName(nickName);
  if (user == '') {
    return false;
  } else {
    return true;
  }
};

export default function SignUp() {
  const dispatch = useDispatch();
  const state = useReducerState();
  const id = state.user.userId;
  const email = state.user.userEmail;
  const postCnt = state.postCnt;

  const [nickName, setNickName] = useState('');
  const [isOverLap, setIsOverLap] = useState(false);

  const signUpProcess = async () => {
    if (!postCnt) {
      if (nickName) {
        const isNickOverlapVal = await isNickNameOverlap(nickName);
        if (isNickOverlapVal) {
          setIsOverLap(true);
        } else {
          await postUser({ dispatch, id, email, nickName });
          alert(
            '회원 가입이 완료되었습니다.\n해당 구글 계정으로 재로그인 후 사용가능합니다.',
          );
          setIsOverLap(false);
          Router.push('/');
        }
      } else {
        alert('닉네임을 입력하세요');
      }
    }
  };

  useEffect(() => {
    dispatch({
      type: 'initiate',
      nowPage: 'signup',
    });
    return () => {
      dispatch({ type: 'logout' });
    };
  }, [dispatch]);

  return (
    <>
      <Head>
        <title>Sign Up</title>
      </Head>
      <SignUpTemplate
        nickName={nickName}
        setNickName={setNickName}
        signUpProcess={signUpProcess}
        isOverLap={isOverLap}
        email={email}
      />
    </>
  );
}
