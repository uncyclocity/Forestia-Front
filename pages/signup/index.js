import {
  useDispatch,
  useReducerState,
} from '../../components/Contexts/context';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import SignUpTemplate from '../../components/Templates/SignUpTemplate';
import { postUser } from '../../utils/updateFunc/user/postUser';

export default function SignUp() {
  const dispatch = useDispatch();
  const { user: userObj, postCnt } = useReducerState();

  const [nickName, setNickName] = useState('');
  const [isOverLap, setIsOverLap] = useState(false);

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
        signUpProcess={() =>
          postUser({ dispatch, postCnt, userObj, nickName, setIsOverLap })
        }
        isOverLap={isOverLap}
        email={userObj.userEmail}
      />
    </>
  );
}
