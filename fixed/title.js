import { useState } from 'react';
import St_title from '../styles/fixed/St_title';
import { AiOutlineCloud, AiOutlineCamera } from 'react-icons/ai';

export default function Title({ children }) {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <St_title>
      <div className="catchphrase">
        풀내음이 함께하는
        <br />
        자취 이야기를 들려주세요
      </div>
      <div className="btn_area">
        {isClicked ? (
          <div
            className="free_photo_btn"
            onClick={() => setIsClicked(!isClicked)}
          >
            <div
              className="free_btn"
              onClick={() => fetch('http://localhost:3000/api/tmpPosting')}
            >
              <AiOutlineCloud />
            </div>
            <div
              className="photo_btn"
              onClick={() => fetch('http://localhost:3000/api/tmpPosting')}
            >
              <AiOutlineCamera />
            </div>
          </div>
        ) : (
          <div className="posting_btn" onClick={() => setIsClicked(!isClicked)}>
            포스팅
          </div>
        )}
      </div>
    </St_title>
  );
}
