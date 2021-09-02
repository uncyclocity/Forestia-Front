const postPageOn = {
  type: 'postpage_switcher',
  isPostPage: true,
};

const postPageOff = {
  type: 'postpage_switcher',
  isPostPage: false,
};

export const postPageSwitchOn = (dispatch) => {
  dispatch(postPageOn);
};

export const postPageSwitchOff = (dispatch) => {
  dispatch(postPageOff);
};
