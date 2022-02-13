import { Post } from '../../types/Post';
import PostItem from './PostItem';
import classes from './PostsGrid.module.css';

type PostsGridProps = {
  posts: Post[];
};

const PostsGrid = ({ posts }: PostsGridProps) => {
  return (
    <ul className={classes.grid}>
      {posts.map((post) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </ul>
  );
};

export default PostsGrid;
