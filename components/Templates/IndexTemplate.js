import styled from 'styled-components';
import IndexTimeline from '../Organisms/IndexTimeline';
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

export default function IndexTemplate({ board }) {
  return (
    <BoxLayoutStyle>
      <IndexCatchphraseArea />
      <IndexTimeline board={board} />
    </BoxLayoutStyle>
  );
}
