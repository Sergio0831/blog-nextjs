import { NextPage } from 'next';
import React from 'react';
import AllPosts from '../../components/posts/AllPosts';
import { posts } from '../../dummy-data/posts';

const AllPostsPage: NextPage = () => {
  return <AllPosts posts={posts} />;
};

export default AllPostsPage;
