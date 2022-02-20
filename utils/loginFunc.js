import { doRefreshToken, doUserToken } from './doApi';
import instance from './instance';

const jwtExpTime = 0.5 * 3600 * 1000;

export const onLogin = async (id, email) => {
  try {
    const accessToken = await doUserToken.get(id, email);
    await doRefreshToken.post(id);
    onLoginSuccess(accessToken);
  } catch (err) {
    console.error(err);
  }
};

export const onSilentRefresh = async () => {
  try {
    const data = await doRefreshToken.get.isValid();
    if (data) {
      const accessToken = await doUserToken.get(data.id, data.email);
      onLoginSuccess(accessToken);
      return true;
    } else {
      console.log(
        '유효한 리프레시 토큰이 없거나 오류가 발생했습니다. 다시 로그인을 진행해주시기 바랍니다.',
      );
      return false;
    }
  } catch (error) {
    console.error(error);
  }
};

export const onLoginSuccess = async (accessToken) => {
  instance.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
  setTimeout(onSilentRefresh, jwtExpTime - 60000);
};
