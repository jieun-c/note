import { PostBox } from "../styled/styled";

const Post = ({ post }) => {
  const { userId, id, title, body } = post;
  return (
    <PostBox>
      <p>PostID: {id}</p>
      <p>작성자ID: {userId}</p>
      <div>
        <p>Title: {title}</p>
        <p>
          Body: {body.slice(0, 50)}
          {body.length > 50 && "..."}
        </p>
      </div>
    </PostBox>
  );
};

export default Post;
