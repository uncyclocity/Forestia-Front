import styled from 'styled-components';
import ImgThumbnail from '../Atoms/Image/ImgThumbnail';
import TxtPostingContentView from '../Atoms/Text/TxtPostingContentView';
import IndexTimelineBtn from './IndexTimelineBtn';
import Router from 'next/router';
import { useState, useEffect } from 'react';
import getCommentLen from '../../utils/getCommentLen';
import CtnBox from '../Atoms/Container/CtnBox';
import TxtTimelineTitle from '../Atoms/Text/TxtTimelineTitle';
import HicProfilePhoto from '../Atoms/HybridIcon/HicProfilePhoto';
import { BiUser } from 'react-icons/bi';
import TxtPostingAuthor from '../Atoms/Text/TxtPostingAuthor';
import TxtPostingDate from '../Atoms/Text/TxtPostingDate';
import IcoUp from '../Atoms/Icon/IcoUp';
import TxtUpDownCommAmount from '../Atoms/Text/TxtUpDownCommAmount';
import IcoDown from '../Atoms/Icon/IcoDown';
import IcoComment from '../Atoms/Icon/IcoComment';
import { FaRegCommentAlt } from 'react-icons/fa';

const Styles = styled.div`
  li {
    list-style-type: none;

    &:hover {
      transition: 0.15s all ease-in;
      color: #20c997;
    }

    &:not(:hover) {
      transition: 0.15s all ease-in;
      color: #828c99;
    }
  }
`;

const ImageAreaStyle = styled.div`
  display: flex;
`;

export default function IndexTimelineBtns({ board }) {
  const { NEXT_PUBLIC_IMAGE_URL } = process.env;
  const [postingArr, setPostingArr] = useState(board);

  const slicePostingArr = () => {
    if (window.innerWidth < 700) {
      setPostingArr(board.slice(0, 2));
    } else {
      setPostingArr(board);
    }
  };

  useEffect(() => {
    slicePostingArr();
    window.addEventListener('resize', slicePostingArr);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Styles>
      {postingArr.map((posting, index) => {
        const commentAmount = getCommentLen(posting);
        return (
          <li key={index}>
            <CtnBox>
              <IndexTimelineBtn
                onClick={() =>
                  Router.push(
                    `/board/posting?boardtype=${posting.boardType}&postid=${posting.id}`,
                  )
                }
                profile={
                  <>
                    <div className="profile-photo">
                      <HicProfilePhoto
                        statusIcon={<BiUser />}
                        bgColor="#20c997"
                        color="white"
                        size="26"
                        padding="6"
                      />
                    </div>
                    <div>
                      <TxtPostingAuthor author={posting.author} />
                      <TxtPostingDate date={posting.date} />
                    </div>
                  </>
                }
                content={
                  <>
                    <TxtTimelineTitle
                      title={posting.title}
                      size="23"
                      color="#525252"
                    />
                    <TxtPostingContentView content={posting.content} />
                    <ImageAreaStyle>
                      {posting.imagesUrl[0] &&
                        posting.imagesUrl.map(
                          (imageUrl, index) =>
                            index <= 3 && (
                              <ImgThumbnail
                                key={index}
                                imageUrl={NEXT_PUBLIC_IMAGE_URL + imageUrl}
                                width="300"
                                height="180"
                              />
                            ),
                        )}
                    </ImageAreaStyle>
                  </>
                }
                udAndComm={
                  <>
                    <div className="ud">
                      <IcoUp
                        clicker={posting.up.clicker}
                        size="23"
                        mSize="15"
                      />
                      <TxtUpDownCommAmount
                        amount={posting.up.amount}
                        size="18"
                        mSize="14"
                      />
                      <IcoDown
                        clicker={posting.down.clicker}
                        size="23"
                        mSize="15"
                      />
                      <TxtUpDownCommAmount
                        amount={posting.down.amount}
                        size="18"
                        mSize="14"
                      />
                    </div>
                    <div className="comm">
                      <IcoComment icon={<FaRegCommentAlt />} size="18" />
                      <TxtUpDownCommAmount
                        amount={commentAmount}
                        size="18"
                        mSize="14"
                      />
                    </div>
                  </>
                }
              />
            </CtnBox>
          </li>
        );
      })}
    </Styles>
  );
}
