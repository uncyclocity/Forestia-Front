import styled from 'styled-components';
import { useDispatch } from '../../src/context';
import GoogleLogin from 'react-google-login';

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
  console.log(process.env);

  const onSuccess = async (res) => {
    console.log(res);
    const {
      profileObj: { email: userEmail, name: userName },
    } = res;

    dispatch({ type: 'login_google', userName, userEmail });
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
