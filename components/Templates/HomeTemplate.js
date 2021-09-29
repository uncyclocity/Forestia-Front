import styled from 'styled-components';
import HomeProfileBox from '../../components/Organisms/HomeProfileBox';
import HomeFreeBox from '../../components/Organisms/HomeFreeBox';
import HomePhotoBox from '../../components/Organisms/HomePhotoBox';

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

export default function Home({ freeBoard, photoBoard }) {
  return (
    <BoxLayoutStyle>
      <div className="maxwidth">
        <HomeProfileBox />
        <div className="margin_space" />
        <HomeFreeBox freeBoard={freeBoard} />
      </div>
      <HomePhotoBox photoBoard={photoBoard} />
    </BoxLayoutStyle>
  );
}