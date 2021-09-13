import instance from '../../../common/instance';

export default async function getPostingEleState(board_type, id) {
  const foundPosting = await instance.get(
    `/api/get_posting/viewFree?id=${id}&board_type=${board_type}`,
  );
  const boardTypeAddedPosting = { ...foundPosting, board_type };
  return boardTypeAddedPosting;
}
