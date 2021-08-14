import St_title from '../styles/fixed/St_title';

export default function Title({ children }) {
  return (
    <St_title>
      <div className="catchphrase">
        풀내음이 함께하는
        <br />
        자취 이야기를 들려주세요
      </div>
      <div className="btn_area">
        <div className="posting_btn">포스팅</div>
      </div>
    </St_title>
  );
}
