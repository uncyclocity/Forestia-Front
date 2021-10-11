import styled from 'styled-components';
import { useDispatch } from '../../src/context';
import GoogleLogin from 'react-google-login';
import { getUser } from '../../src/doApi';
import Router from 'next/router';
import jwt from 'jsonwebtoken';
import instance from '../../src/instance';

const Styles = styled.div`
  width: 167.5px;
  height: 165px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const signinProcess = (payload) => {
  const {
    profileObj: { googleId: id, email },
  } = payload;
  const token = jwt.sign(
    {
      id,
      email,
    },
    process.env.NEXT_PUBLIC_JWT_SECRET,
  );
  instance({
    method: 'POST',
    url: '/api/post_users/postUserToken',
    data: {
      id,
      token,
    },
  });
};

export default function HomeLoginArea() {
  const dispatch = useDispatch();
  const clientId = process.env.NEXT_PUBLIC_OAUTH_CLIENT_ID;

  const onSuccess = async (res) => {
    const {
      profileObj: { googleId: id, email },
    } = res;

    const user = await getUser.doGetUserById(id);

    console.log(user);

    if (!user) {
      dispatch({ type: 'login', userName: '', userEmail: email, userId: id });
      Router.push('/signup');
    } else {
      signinProcess(res);
      dispatch({
        type: 'login',
        userName: user.nickname,
        userEmail: user.email,
        userId: user.id,
      });
    }
  };

  const onFailure = (error) => {
    console.log(error);
  };

  return (
    <Styles>
      <GoogleLogin
        clientId={clientId}
        responseType={'id_token'}
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
      />
    </Styles>
  );
}
