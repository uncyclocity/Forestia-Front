import Router from "next/router";

export default function unMountAnimation(routerSW, dispatch, slideDown, URL=undefined, asURL=undefined) {
  dispatch({
    type: "change_animation",
    animation: 3,
  });

  setTimeout(() => {
    dispatch({
      type: "change_animation",
      animation: 4,
    }, 150);

    // sw 0 = push(), 1 = back()
    switch(routerSW) {
      case 0:
        asURL ? Router.push(URL, asURL) : Router.push(URL);
        break;
      case 1:
        Router.back();    
    }
    
  }, 350);
}
