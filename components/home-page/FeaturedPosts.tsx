import React from 'react';
import { Post } from '../../types/Post';
import PostsGrid from '../posts/PostsGrid';
import classes from './FeaturedPosts.module.css';

type FeaturedPostsProps = {
  posts: Post[];
};

const FeaturedPosts = ({ posts }: FeaturedPostsProps) => {
  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
};

export default FeaturedPosts;
