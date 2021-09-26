import IcoBoardTitle from '../../../../components/Atoms/Icon/IcoBoardTitle';
import TxtBoardTitle from '../../../../components/Atoms/Text/TxtBoardTitle';

export default function InEditPostingBoardTitle() {
  return (
    <>
      <IcoBoardTitle nowPage="editing" />
      <TxtBoardTitle nowPage="editing" />
    </>
  );
}
