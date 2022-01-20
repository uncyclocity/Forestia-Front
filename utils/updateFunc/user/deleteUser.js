import { doUser } from '../../doApi';

export const deleteUser = async ({ dispatch, userId }) => {
  dispatch({
    type: 'postcnt_switcher',
    sw: true,
  });

  try {
    await doUser.delete(userId);
  } catch (e) {
    console.error(e);
  }

  dispatch({
    type: 'postcnt_switcher',
    sw: false,
  });
};
