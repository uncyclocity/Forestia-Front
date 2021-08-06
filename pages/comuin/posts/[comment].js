import { useRouter } from "next/router";
import Board_title from "../../../styles/board_title";
import { AiOutlineCamera } from "react-icons/ai";
import { useDispatch } from "../../_context";
import styled from "styled-components";
import { useEffect } from "react";
import Box from "../../../styles/box";

const Styles = styled.div`
  padding: 20px 30px 5px 30px;

  .comment_content {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default function Comment() {
  const router = useRouter();
  const { post_title, comment } = router.query;

  const dispatch = useDispatch();

  useEffect(() => {
    const dispatchForm = {
      type: "/comuin",
    };

    dispatch(dispatchForm);
  }, [dispatch]);

  return (
    <Box>
      <Styles>
        <Board_title>
          <div className="icon">
            <AiOutlineCamera />
          </div>
          {post_title}
        </Board_title>
        <div className="comment_content">{comment}</div>
      </Styles>
    </Box>
  );
}
