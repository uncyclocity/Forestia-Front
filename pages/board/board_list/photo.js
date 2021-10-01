import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from '../../../src/common/context';
import { mountAnimation } from '../../../src/common/animationController';
import postCntSwitcher from '../../../src/common/postCntSwitcher';
import { getPosting } from '../../../src/doApi/doApi';
import PhotoListTemplate from '../../../components/Templates/PhotoListTemplate';

export default function Photo({ photoBoard, page, photoLen }) {
  const dispatch = useDispatch();
  const [nowPage, setNowPage] = useState(page);
  const [nowList, setNowList] = useState(photoBoard);

  const changeList = useCallback(async () => {
    postCntSwitcher(dispatch, true);
    const photoBoard = await getPosting.doGetForList(nowPage, 'photo');
    setNowList(photoBoard);
    postCntSwitcher(dispatch, false);
  }, [dispatch, nowPage]);

  useEffect(() => {
    mountAnimation(dispatch, 'photo');
  }, [dispatch]);

  useEffect(() => {
    changeList();
  }, [changeList, nowPage]);

  return (
    <PhotoListTemplate
      photoLen={photoLen}
      nowPage={nowPage}
      nowList={nowList}
      setNowPage={setNowPage}
    />
  );
}

Photo.getInitialProps = async () => {
  const page = 1;
  const photoBoard = await getPosting.doGetForList(page, 'photo');
  const photoLen = await getPosting.doGetLength('photo');
  return { photoBoard, page, photoLen };
};
