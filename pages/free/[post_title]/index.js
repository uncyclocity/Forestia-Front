import Link from "next/link";
import { useRouter } from "next/router";
import Board_title from "../../../components/board_title";
import { useDispatch } from "../../_context";
import { AiOutlineCloud } from "react-icons/ai";
import styled from "styled-components";
import { useEffect } from "react";
import Box from "../../../components/box";

const Styles = styled.div`
  padding: 20px 30px 5px 30px;

  .content_list {
    transform: translateX(-6.5%);
    li {
      list-style-type: none;
      &:not(:first-child) {
        margin-top: 10px;
      }
      &:hover {
        color: #20c997;
      }
    }
  }
`;

export default function Post() {
  const router = useRouter();
  const { post_title } = router.query;

  const dispatch = useDispatch();

  console.log("Free() rendering");

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
          자게/{post_title}
        </Board_title>
        <div className="content_list">
          <ul>
            <li>
              <Link
                href="/free/[post_title]/[comment]"
                as={`/free/${post_title}/first-comment`}
              >
                <a>First comment</a>
              </Link>
            </li>
            <li>
              <Link
                href="/free/[post_title]/[comment]"
                as={`/free/${post_title}/second-comment`}
              >
                <a>Second comment</a>
              </Link>
            </li>
          </ul>
        </div>
      </Styles>
    </Box>
  );
}
