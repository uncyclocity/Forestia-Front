import styled from 'styled-components';
import { useDispatch } from '../Contexts/context';
import GoogleLogin from 'react-google-login';
import { doUser } from '../../utils/doApi';
import Router from 'next/router';
import { onLogin } from '../../utils/loginFunc';

const Styles = styled.div`
  width: 100%;
  height: 165px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export default function IndexLoginArea() {
  const dispatch = useDispatch();
  const clientId = process.env.NEXT_PUBLIC_OAUTH_CLIENT_ID;

  const onSuccess = async (res) => {
    const {
      profileObj: { googleId: id, email },
    } = res;

    const user = await doUser.get.byId(id);

    if (!user) {
      dispatch({ type: 'login', userName: '', userEmail: email, userId: id });
      Router.push('/signup');
    } else {
      onLogin(id, email);
      dispatch({
        type: 'login',
        userName: user.nickname,
        userEmail: user.email,
        userId: user.id,
      });
    }
  };

  const onFailure = (error) => {
    console.error(error);
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
