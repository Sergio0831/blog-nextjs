import ReactMarkdown from 'react-markdown';
import { Post } from '../../../types/Post';
import classes from './PostContent.module.css';
import PostHeader from './PostHeader';

type PostContentProps = {
  post: Post;
};

const PostContent = ({ post }: PostContentProps) => {
  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;
