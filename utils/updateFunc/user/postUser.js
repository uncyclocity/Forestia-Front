import { doUser, doUserToken } from '../../doApi';

export const postUser = async ({ dispatch, id, email, nickName }) => {
  const token = await doUserToken.get(id, email);
  dispatch({
    type: 'postcnt_switcher',
    sw: true,
  });
  await doUser.post(id, email, nickName, token);
  dispatch({
    type: 'postcnt_switcher',
    sw: false,
  });
};
