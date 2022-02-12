import Image from 'next/image';
import classes from './Hero.module.css';

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src='/images/site/myportrait.jpg'
          alt='An image showing me'
          height={300}
          width={300}
        />
      </div>
      <h1>Hi, I'm Sergejs</h1>
      <p>
        I blog about web development - especially frontend framework like a
        React
      </p>
    </section>
  );
};

export default Hero;
