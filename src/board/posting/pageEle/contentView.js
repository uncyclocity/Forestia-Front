import TxtPostingContentView from '../../../../components/Atoms/TxtPostingContentView';

export default function ContentView({ nowPostingEleObj }) {
  return <TxtPostingContentView content={nowPostingEleObj.content} />;
}
