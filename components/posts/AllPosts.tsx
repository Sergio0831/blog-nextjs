import { Post } from '../../types/Post';
import classes from './AllPosts.module.css';
import PostsGrid from './PostsGrid';

type AllPostsProps = {
  posts: Post[];
};

const AllPosts = ({ posts }: AllPostsProps) => {
  return (
    <div className={classes.posts}>
      <h1>All Posts</h1>
      <PostsGrid posts={posts} />
    </div>
  );
};

export default AllPosts;
