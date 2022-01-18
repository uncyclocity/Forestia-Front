import { doUser } from '../../doApi';

export const deleteUser = async ({ dispatch, userId }) => {
  dispatch({
    type: 'postcnt_switcher',
    sw: true,
  });
  await doUser.delete(userId);
  dispatch({
    type: 'postcnt_switcher',
    sw: false,
  });
};
