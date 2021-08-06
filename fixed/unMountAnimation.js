import Router from "next/router";

export default function unMountAnimation(dispatch, nowPage, URL) {
  dispatch({
    type: nowPage,
    isAnimate: true,
  });

  setTimeout(() => {
    dispatch({
      type: URL,
      isAnimate: false,
    });
    Router.push(URL);
  }, 100);
}
