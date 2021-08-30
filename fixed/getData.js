import instance from '../pages/api/api';

export default async function getData(dispatch) {
  const free_res = await instance.get('/api/viewFree');
  const freeBoard = free_res.data;
  const photo_res = await instance.get('/api/viewPhoto');
  const photoBoard = photo_res.data;
  dispatch({
    type: 'update_post',
    freeBoard,
    photoBoard,
  });
}
