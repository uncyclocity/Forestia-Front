import {
  useDispatch,
  useReducerState,
} from '../../components/Contexts/context';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import SignUpTemplate from '../../components/Templates/SignUpTemplate';
import { postUser } from '../../utils/updateFunc/user/postUser';
import Router from 'next/router';

export default function SignUp() {
  const ogImage = '/assets/embed.png';
  const dispatch = useDispatch();
  const { user: userObj, postCnt } = useReducerState();

  const [nickName, setNickName] = useState('');
  const [isOverLap, setIsOverLap] = useState(false);

  useEffect(() => {
    dispatch({
      type: 'initiate',
      nowPage: 'signup',
    });
    (userObj.userName || !userObj.userId) && Router.push('/404');
    return () => {
      dispatch({ type: 'logout' });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Head>
        <title>회원가입</title>
        <meta property="og:title" content="회원가입" />
        <meta property="og:image" content={ogImage} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://forestia.me" />
      </Head>
      {!userObj.userName && userObj.userId && (
        <SignUpTemplate
          nickName={nickName}
          setNickName={setNickName}
          signUpProcess={() =>
            postUser({ dispatch, postCnt, userObj, nickName, setIsOverLap })
          }
          isOverLap={isOverLap}
          email={userObj.userEmail}
        />
      )}
    </>
  );
}
