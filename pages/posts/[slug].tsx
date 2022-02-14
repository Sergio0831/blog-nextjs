import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';
import PostContent from '../../components/posts/post-detail/PostContent';
import { getPostData, getPostsFiles } from '../../helpers/posts-util';
import { Post } from '../../types/Post';

type PostDetailPageProps = {
  post: Post;
};

const PostDetailPage = ({ post }: PostDetailPageProps) => {
  console.log(post);

  return <PostContent post={post} />;
};

export const getStaticProps: GetStaticProps = (context) => {
  const slug = context.params?.slug as string;

  const postData = getPostData(slug);

  return {
    props: {
      post: postData
    },
    revalidate: 600
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  const postFilenames = getPostsFiles();

  const slugs = postFilenames.map((fileName) => fileName.replace(/\.md$/, ''));

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: 'blocking'
  };
};

export default PostDetailPage;
