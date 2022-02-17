import styled from 'styled-components';
import IndexFreeBox from '../Organisms/IndexFreeBox';
import IndexPhotoBox from '../Organisms/IndexPhotoBox';
import IndexCatchphraseArea from '../Organisms/IndexCatchphraseArea';

const BoxLayoutStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media screen and (max-width: 700px) {
    display: block;
  }
`;

export default function IndexTemplate({ freeBoard, photoBoard }) {
  return (
    <BoxLayoutStyle>
      <IndexCatchphraseArea />
      <IndexFreeBox freeBoard={freeBoard} />
      <IndexPhotoBox photoBoard={photoBoard} />
    </BoxLayoutStyle>
  );
}
