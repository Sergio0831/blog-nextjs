import Image from 'next/image';
import classes from './PostHeader.module.css';

type PostHeaderProps = {
  title: string;
  image: string;
};

const PostHeader = ({ image, title }: PostHeaderProps) => {
  return (
    <header className={classes.header}>
      <h1>{title}</h1>
      <Image src={image} width={200} height={100} />
    </header>
  );
};

export default PostHeader;
