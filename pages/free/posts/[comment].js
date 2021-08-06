import { useRouter } from "next/router";
import Board_title from "../../../components/board_title";
import { AiOutlineCloud } from "react-icons/ai";
import { useDispatch } from "../../_context";
import styled from "styled-components";
import { useEffect } from "react";
import Box from "../../../components/box";

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
      type: "/free",
    };

    dispatch(dispatchForm);
  }, [dispatch]);

  return (
    <Box>
      <Styles>
        <Board_title>
          <div className="icon">
            <AiOutlineCloud />
          </div>
          {post_title}
        </Board_title>
        <div className="comment_content">{comment}</div>
      </Styles>
    </Box>
  );
}