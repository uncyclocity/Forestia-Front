import FreeListPostingList from '../MoleCules/FreeListPostingList';
import ListPageBtn from '../MoleCules/ListPageBtn';

export default function FreeListPage({
  freeLen,
  nowPage,
  nowList,
  setNowPage,
}) {
  return (
    <>
      <FreeListPostingList page={nowPage} freeBoard={nowList} />
      {freeLen > 0 && (
        <ListPageBtn freeLen={freeLen} page={nowPage} setNowPage={setNowPage} />
      )}
    </>
  );
}
