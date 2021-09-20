import { useReducerState } from '../../../common/context';
import LblFreePhoto from '../../../../components/Atoms/LblFreePhoto';

export default function FreePhotoSign() {
  const { board_type } = useReducerState().nowPostingEleObj;

  return <LblFreePhoto board_type={board_type} />;
}
