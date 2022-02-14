import { GetStaticProps } from 'next';
import React from 'react';
import AllPosts from '../../components/posts/AllPosts';
import { getAllPosts } from '../../helpers/posts-util';
import { Posts } from '../../types/Post';

const AllPostsPage = ({ posts }: Posts) => {
  return <AllPosts posts={posts} />;
};

export const getStaticProps: GetStaticProps = () => {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts
    }
  };
};

export default AllPostsPage;
