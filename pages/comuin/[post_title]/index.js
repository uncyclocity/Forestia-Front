import Link from "next/link";
import { useRouter } from "next/router";
import Board_title from "../../../components/board_title";
import { useDispatch } from "../../_context";
import { AiOutlineCamera } from "react-icons/ai";
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
          짤게/{post_title}
        </Board_title>
        <div className="content_list">
          <ul>
            <li>
              <Link
                href="/comuin/[post_title]/[comment]"
                as={`/comuin/${post_title}/first-comment`}
              >
                <a>First comment</a>
              </Link>
            </li>
            <li>
              <Link
                href="/comuin/[post_title]/[comment]"
                as={`/comuin/${post_title}/second-comment`}
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
