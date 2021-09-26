import TxtPostingContentView from '../../../../components/Atoms/Text/TxtPostingContentView';

export default function ContentView({ nowPostingEleObj }) {
  return <TxtPostingContentView content={nowPostingEleObj.content} />;
}
