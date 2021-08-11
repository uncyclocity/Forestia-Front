import Router from 'next/router';

export function unmountAnimation(
  routerSW,
  dispatch,
  slideDown,
  URL = undefined,
  asURL = undefined,
) {
  dispatch({
    type: 'change_animation',
    animation: 3,
  });

  setTimeout(() => {
    dispatch(
      {
        type: 'change_animation',
        animation: 4,
      },
      150,
    );

    // sw 0 = push(), 1 = back()
    switch (routerSW) {
      case 0:
        asURL ? Router.push(URL, asURL) : Router.push(URL);
        break;
      case 1:
        Router.back();
    }
  }, 350);
}

export function mountAnimation(dispatch, nowPage) {
  dispatch({
    type: 'initiate',
    nowPage,
    animation: 1,
  });
  setTimeout(() => {
    dispatch({
      type: 'change_animation',
      animation: 2,
    });
  }, 350);
}
