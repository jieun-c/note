import Post from "./post";
import { PostsBox } from "../styled/styled";

const Posts = ({ posts }) => {
  return (
    <PostsBox>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </PostsBox>
  );
};

export default Posts;
