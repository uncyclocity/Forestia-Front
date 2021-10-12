import styled from 'styled-components';
import { useDispatch } from '../../src/context';
import GoogleLogin from 'react-google-login';
import { getUser, postUser } from '../../src/doApi';
import Router from 'next/router';
import jwt from 'jsonwebtoken';

const Styles = styled.div`
  width: 167.5px;
  height: 165px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export default function HomeLoginArea() {
  const dispatch = useDispatch();
  const clientId = process.env.NEXT_PUBLIC_OAUTH_CLIENT_ID;

  const onSuccess = async (res) => {
    const {
      profileObj: { googleId: id, email },
    } = res;

    const user = await getUser.doGetUserById(id);

    if (!user) {
      dispatch({ type: 'login', userName: '', userEmail: email, userId: id });
      Router.push('/signup');
    } else {
      const token = jwt.sign(
        {
          id,
          email,
        },
        process.env.NEXT_PUBLIC_JWT_SECRET,
      );

      postUser.doPostUserToken(id, token);

      localStorage.setItem('token', token);

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
      />
    </Styles>
  );
}
