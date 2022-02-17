import { useDispatch } from '../Contexts/context';
import GoogleLogin from 'react-google-login';
import { doUser } from '../../utils/doApi';
import Router from 'next/router';
import { onLogin } from '../../utils/loginFunc';

export default function HeaderLoginArea({ style }) {
  const dispatch = useDispatch();
  const clientId = process.env.NEXT_PUBLIC_OAUTH_CLIENT_ID;

  const onSuccess = async (res) => {
    const {
      profileObj: { googleId: id, email, imageUrl },
    } = res;

    const user = await doUser.get.byId(id);

    if (!user) {
      dispatch({
        type: 'login',
        userName: '',
        userEmail: email,
        userId: id,
        imageUrl,
      });
      Router.push('/signup');
    } else {
      onLogin(id, email);
      dispatch({
        type: 'login',
        userName: user.nickname,
        userEmail: user.email,
        userId: user.id,
        imageUrl: user.imageUrl,
      });
    }
  };

  const onFailure = (error) => {
    console.error(error);
  };

  return (
    <GoogleLogin
      clientId={clientId}
      responseType={'id_token'}
      onSuccess={onSuccess}
      onFailure={onFailure}
      render={(renderProps) => <div onClick={renderProps.onClick}>{style}</div>}
    />
  );
}
