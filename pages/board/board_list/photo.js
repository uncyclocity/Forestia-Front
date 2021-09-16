import BoardTitle from '../../../src/common/boardTitle';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from '../../../src/common/context';
import { mountAnimation } from '../../../src/common/animationController';
import styled from 'styled-components';
import FourAnimationedBox from '../../../src/boxEle/FourAnimationdBox';
import InPhotoListBoardTitle from '../../../src/board/list.photo/pageEle/inPhotoListBoardTitle';
import PhotoListPostingList from '../../../src/board/list.photo/pageEle/photoListPostingList';
import PageBtn from '../../../src/board/list.photo/pageEle/pageBtn';
import postCntSwitcher from '../../../src/common/postCntSwitcher';
import { getPosting } from '../../../src/doApi/doApi';

const BoxStyles = styled.div`
  color: #525252;
  padding: 20px 30px 5px 30px;
`;

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
    <FourAnimationedBox>
      <BoxStyles>
        <BoardTitle backURL="/home">
          <InPhotoListBoardTitle />
        </BoardTitle>
        <PhotoListPostingList page={nowPage} photoBoard={nowList} />
        {photoLen > 0 && (
          <PageBtn photoLen={photoLen} page={nowPage} setNowPage={setNowPage} />
        )}
      </BoxStyles>
    </FourAnimationedBox>
  );
}

Photo.getInitialProps = async () => {
  const page = 1;
  const photoBoard = await getPosting.doGetForList(page, 'photo');
  const photoLen = await getPosting.doGetLength('photo');
  return { photoBoard, page, photoLen };
};
