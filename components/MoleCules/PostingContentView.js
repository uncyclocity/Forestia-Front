import TxtPostingContentView from '../Atoms/Text/TxtPostingContentView';

export default function PostingContentView({ nowPostingEleObj }) {
  return <TxtPostingContentView content={nowPostingEleObj.content} />;
}
