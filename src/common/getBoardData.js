import instance from './instance';

export default async function getBoardData(dispatch) {
  const free_res = await instance.get('/api/get_posting/viewFree');
  const freeBoard = free_res.data.reverse();
  const photo_res = await instance.get('/api/get_posting/viewPhoto');
  const photoBoard = photo_res.data.reverse();
  dispatch({
    type: 'update_post',
    freeBoard,
    photoBoard,
  });
}
