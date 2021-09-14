import styled from 'styled-components';
import { useDispatch, useReducerState } from '../../../common/context';
import { postPosting } from '../../../doApi/doApi';

const ContentInputStyle = styled.div`
  flex-direction: column;
  margin: 20px 0 15px 0;

  .content_title_input_box {
    width: 640px;
    font-size: 25px;
    font-weight: bold;
    color: #464646;
    border: none;
    outline: none;
    &::placeholder {
      color: #aaaaaa;
    }
  }

  .title_content_line {
    width: 50px;
    border: 2px solid #20c997;
    margin: 20px 0 20px 2px;
  }

  .content_input_box {
    width: 640px;
    height: 300px;

    margin-bottom: 10px;

    border: none;
    border-bottom: 1px solid #e9ecef;

    outline: none;

    font-size: 17px;
    font-family: inherit;

    &::placeholder {
      color: #aaaaaa;
      font-style: italic;
    }
  }

  .content_post_btn {
    background: #20c997;
    color: white;

    width: 80px;
    height: 35px;

    border-radius: 5px;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 30px;

    margin-left: 87%;

    cursor: pointer;

    .post_icon {
      height: 23px;
      font-size: 20px;
      margin-right: 5px;
    }

    .post_text {
      font-size: 18px;
      font-weight: bold;
    }

    &:hover {
      background: #37dfad;
    }
  }
`;

export default function PostingEditContentInput({
  board_type,
  id,
  newTitle,
  newContent,
}) {
  const dispatch = useDispatch();
  const postCnt = useReducerState().postCnt;

  return (
    <ContentInputStyle>
      <div className="content_input">
        <input
          type="text"
          className="content_title_input_box"
          placeholder="제목을 입력하세요"
          ref={newTitle}
        />
        <hr className="title_content_line" align="left" />
        <textarea
          className="content_input_box"
          style={{ resize: 'none' }}
          placeholder="내용을 입력하세요"
          ref={newContent}
        />
        <div
          className="content_post_btn"
          onClick={() => {
            if (!postCnt) {
              newTitle.current.value && newContent.current.value
                ? postPosting.doEditPosting(
                    board_type,
                    id,
                    newTitle,
                    newContent,
                    dispatch,
                  )
                : alert('제목 및 내용을 입력하세요');
            }
          }}
        >
          <div className="post_text">수정</div>
        </div>
      </div>
    </ContentInputStyle>
  );
}
