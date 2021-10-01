import PageBtn from '../../src/board/list.photo/pageEle/pageBtn';
import PhotoListPostingList from '../../src/board/list.photo/pageEle/photoListPostingList';

export default function PhotoListPage({
  photoLen,
  nowPage,
  nowList,
  setNowPage,
}) {
  return (
    <>
      <PhotoListPostingList page={nowPage} photoBoard={nowList} />
      {photoLen > 0 && (
        <PageBtn photoLen={photoLen} page={nowPage} setNowPage={setNowPage} />
      )}
    </>
  );
}
