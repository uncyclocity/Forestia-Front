import Router from 'next/router';

export function unmountAnimation(
  routerSW,
  dispatch,
  URL = undefined,
  query = {},
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
        Router.push(URL);
        break;
      case 1:
        Router.back();
        break;
      case 2:
        Router.push({
          pathname: URL,
          query,
        });
        break;
      default:
        throw new Error(
          '존재하지 않는 routerSW입니다. unmountAnimation()에 넘기는 routerSW를 확인하세요',
        );
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
