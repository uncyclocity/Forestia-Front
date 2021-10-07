import { useDispatch, useReducerState } from '../../src/context';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import SignUpTemplate from '../../components/Templates/SignUpTemplate';
import { getUser, postUser } from '../../src/doApi';
import Router from 'next/router';

const isNickNameOverlap = async (nickName) => {
  const user = await getUser.doGetUserByNickName(nickName);
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

  const [nickName, setNickName] = useState('');
  const [isOverLap, setIsOverLap] = useState(false);
  const [isPassed, setIsPassed] = useState(false);

  const signUpProcess = async () => {
    if (nickName) {
      const isNickOverlapVal = await isNickNameOverlap(nickName);
      if (isNickOverlapVal) {
        setIsOverLap(true);
      } else {
        setIsOverLap(false);
        setIsPassed(true);
        postUser.doPostUser(id, email, nickName);
        Router.push('/home');
      }
    } else {
      alert('닉네임을 입력하세요');
    }
  };

  useEffect(() => {
    dispatch({
      type: 'initiate',
      nowPage: 'signup',
    });
    return () => {
      if (!isPassed) {
        dispatch({ type: 'logout' });
      }
    };
  }, [dispatch, isPassed]);

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
