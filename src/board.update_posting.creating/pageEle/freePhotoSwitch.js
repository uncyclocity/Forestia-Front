import { AiOutlineCamera, AiOutlineCloud } from 'react-icons/ai';
import styled from 'styled-components';

const FreePhotoSwitchStyle = styled.div`
  color: #20c997;
  margin: 20px 0;

  .free_photo_btn {
    width: 130px;
    height: 35px;

    display: flex;
    flex-direction: row;

    margin: 0 0 20px 2px;

    .free_btn {
      width: 100%;
      height: 35px;

      display: flex;
      justify-content: center;
      align-items: center;

      font-size: 20px;

      border: 2px solid #20c997;
      border-right: 1px solid #20c997;
      border-radius: 7px 0 0 7px;

      cursor: pointer;
    }

    .free_btn_act {
      width: 100%;
      height: 35px;

      display: flex;
      justify-content: center;
      align-items: center;

      font-size: 20px;

      border: 2px solid #20c997;
      border-right: 1px solid #20c997;
      border-radius: 7px 0 0 7px;

      color: white;

      background: #20c997;
    }

    .photo_btn {
      width: 100%;
      height: 35px;

      display: flex;
      justify-content: center;
      align-items: center;

      font-size: 20px;

      border: 2px solid #20c997;
      border-left: 1px solid #20c997;
      border-radius: 0 7px 7px 0;

      cursor: pointer;
    }

    .photo_btn_act {
      width: 100%;
      height: 35px;

      display: flex;
      justify-content: center;
      align-items: center;

      font-size: 20px;

      border: 2px solid #20c997;
      border-left: 1px solid #20c997;
      border-radius: 0 7px 7px 0;

      color: white;

      background: #20c997;
    }

    .board_name {
      margin-left: 5px;
      font-size: 15px;
    }
  }
`;

export default function FreePhotoSwitch({ selBoard, setSelBoard }) {
  return (
    <FreePhotoSwitchStyle>
      {selBoard === 'free' && (
        <div className="free_photo_btn">
          <div className="free_btn_act">
            <AiOutlineCloud />
            <div className="board_name">자게</div>
          </div>
          <div className="photo_btn" onClick={() => setSelBoard('photo')}>
            <AiOutlineCamera />
            <div className="board_name">짤게</div>
          </div>
        </div>
      )}
      {selBoard === 'photo' && (
        <div className="free_photo_btn">
          <div className="free_btn" onClick={() => setSelBoard('free')}>
            <AiOutlineCloud />
            <div className="board_name">자게</div>
          </div>
          <div className="photo_btn_act">
            <AiOutlineCamera />
            <div className="board_name">짤게</div>
          </div>
        </div>
      )}
    </FreePhotoSwitchStyle>
  );
}
