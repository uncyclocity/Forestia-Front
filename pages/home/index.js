import { useEffect } from 'react';
import { mountAnimation } from '../../src/common/animationController';
import styled from 'styled-components';
import { useDispatch } from '../../src/common/context';
import { getPosting } from '../../src/doApi/doApi';
import FourAnimationedBox from '../../src/boxEle/FourAnimationdBox';
import FreeBox from '../../src/Home/pageEle/free';
import PhotoBox from '../../src/Home/pageEle/photo';
import HomeProfileBox from '../../components/Organisms/HomeProfileBox';

const BoxLayoutStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .margin_space {
    width: 30px;
  }

  .maxwidth {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    max-width: 700px;
  }
`;

const BoxStyle1F = styled.div`
  display: flex;
  flex-direction: column;
  width: 335px;
  height: 165px;
`;

const BoxStyle2F = styled.div`
  display: flex;
  flex-direction: column;
  width: 700px;
  height: 240px;
`;

export default function Home({ freeBoard, photoBoard }) {
  const dispatch = useDispatch();

  useEffect(() => {
    mountAnimation(dispatch, 'home');
  }, [dispatch]);

  return (
    <BoxLayoutStyle>
      <div className="maxwidth">
        <HomeProfileBox />
        <div className="margin_space" />
        <FourAnimationedBox>
          <BoxStyle1F>
            <FreeBox freeBoard={freeBoard} />
          </BoxStyle1F>
        </FourAnimationedBox>
      </div>
      <FourAnimationedBox>
        <BoxStyle2F>
          <PhotoBox photoBoard={photoBoard} />
        </BoxStyle2F>
      </FourAnimationedBox>
    </BoxLayoutStyle>
  );
}

Home.getInitialProps = async () => {
  const freeBoard = await getPosting.doGetTop3('free');
  const photoBoard = await getPosting.doGetTop3('photo');
  return { freeBoard, photoBoard };
};
