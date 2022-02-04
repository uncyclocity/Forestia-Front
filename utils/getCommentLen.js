export default function getCommentLen(posting) {
  let commentAmount = posting.comments.length;
  posting.comments.forEach((comment) => {
    commentAmount += comment.replys.length;
  });
  return commentAmount;
}
