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
    const accessToken = await doUserToken.get(data.id, data.email);
    onLoginSuccess(accessToken);
  } catch (error) {
    console.error(error);
  }
};

export const onLoginSuccess = async (accessToken) => {
  instance.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
  setTimeout(onSilentRefresh, jwtExpTime - 60000);
};
