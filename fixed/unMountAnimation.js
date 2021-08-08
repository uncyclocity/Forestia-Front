import Router from "next/router";

export default function unMountAnimation(dispatch, nowPage, URL, asURL=undefined) {
  dispatch({
    type: nowPage,
    isAnimate: true,
  });

  setTimeout(() => {
    dispatch({
      type: URL,
      isAnimate: false,
    });

    asURL ? Router.push(URL, asURL) : Router.push(URL)
  }, 100);
}
