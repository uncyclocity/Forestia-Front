import { useDispatch } from '../../../components/Contexts/context';
import { useEffect, useState } from 'react';
import { doPosting } from '../../../utils/doApi';
import PostingTemplate from '../../../components/Templates/PostingTemplate';
import Head from 'next/head';
import { useRouter } from 'next/router';

const postingPageSwitchOn = (dispatch) => {
  dispatch({
    type: 'posting_page_switcher',
    isPostingPage: true,
  });
};

const postingPageSwitchOff = (dispatch) => {
  dispatch({
    type: 'posting_page_switcher',
    isPostingPage: false,
  });
};

export default function Posting({ nowPostingEleObjRaw, boardType }) {
  const page = useRouter().query.page || 1;
  const dispatch = useDispatch();
  const [nowPostingEleObj, setNowPostingEleObj] = useState(nowPostingEleObjRaw);

  useEffect(() => {
    dispatch({
      type: 'initiate',
      nowPage: boardType,
    });
    dispatch({ type: 'editpost_data', nowPostingEleObj });
    postingPageSwitchOn(dispatch);
    return () => {
      postingPageSwitchOff(dispatch);
    };
  }, [boardType, dispatch, nowPostingEleObj]);

  return (
    <>
      <Head>
        <title>{nowPostingEleObj.title}</title>
        <meta property="og:title" content={nowPostingEleObj.title} />
        <meta property="og:description" content={nowPostingEleObj.content} />
      </Head>
      <PostingTemplate
        nowPostingEleObj={nowPostingEleObj}
        setNowPostingEleObj={setNowPostingEleObj}
        boardType={boardType}
        page={page}
      />
    </>
  );
}

Posting.getInitialProps = async (ctx) => {
  const { boardtype: boardType, postid: postId } = ctx.query;
  const getPostingEle = await doPosting.get.ele(boardType, postId);
  const nowPostingEleObjRaw = { ...getPostingEle, boardType };
  return { nowPostingEleObjRaw, boardType };
};
