import instance from '../pages/api/api';

export default async function getData() {
  const free_res = await instance.get('/api/viewFree');
  const free_data = await free_res.data;
  const photo_res = await instance.get('/api/viewPhoto');
  const photo_data = await photo_res.data;
  return { freeBoard: free_data, photoBoard: photo_data };
}
