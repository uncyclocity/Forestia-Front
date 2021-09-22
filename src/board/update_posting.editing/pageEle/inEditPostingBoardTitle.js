import IcoBoardTitle from '../../../../components/Atoms/IcoBoardTitle';
import TxtBoardTitle from '../../../../components/Atoms/TxtBoardTitle';

export default function InEditPostingBoardTitle() {
  return (
    <>
      <IcoBoardTitle nowPage="editing" />
      <TxtBoardTitle nowPage="editing" />
    </>
  );
}
