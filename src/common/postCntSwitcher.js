export default function postCntSwitcher(dispatch, sw) {
  dispatch({
    type: 'postcnt_switcher',
    sw,
  });
}
