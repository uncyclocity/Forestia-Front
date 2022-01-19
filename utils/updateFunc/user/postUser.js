import { doUser, doUserToken } from '../../doApi';

export const postUser = async ({ dispatch, id, email, nickName }) => {
  dispatch({
    type: 'postcnt_switcher',
    sw: true,
  });
  await doUser.post(id, email, nickName);
  dispatch({
    type: 'postcnt_switcher',
    sw: false,
  });
};
