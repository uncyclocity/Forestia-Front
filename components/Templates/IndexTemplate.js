import styled from 'styled-components';
import IndexProfileBox from '../Organisms/IndexProfileBox';
import IndexFreeBox from '../Organisms/IndexFreeBox';
import IndexPhotoBox from '../Organisms/IndexPhotoBox';

const BoxLayoutStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .margin_space {
    width: 45px;
  }

  .maxwidth {
    display: flex;
    flex-direction: row;
    width: 750px;

    @media screen and (max-width: 700px) {
      flex-direction: column;
      width: 100%;
    }
  }
`;

export default function IndexTemplate({
  freeBoard,
  photoBoard,
  accountSettings,
}) {
  return (
    <BoxLayoutStyle>
      <div className="maxwidth">
        <IndexProfileBox accountSettings={accountSettings} />
        <div className="margin_space" />
        <IndexFreeBox freeBoard={freeBoard} />
      </div>
      <IndexPhotoBox photoBoard={photoBoard} />
    </BoxLayoutStyle>
  );
}
