import s from './AboutTextCard.module.scss';
import { ImPointRight } from 'react-icons/im';

const AboutTextCard = () => {
  return (
    <div className={s.card}>
      <p style={{ textAlign: 'justify' }}>
        Hi 👋, I am <span className={s.purple}>Faran Javed </span>I
        have a Bachelor's degree in <br /> Computer Science from
        COMSATS University and <br /> currently work as a Front-End
        Developer at <span className={s.purple}>Code Crafters.</span>{' '}
        <br /> I'm really good at using{' '}
        <span className={s.purple}>HTML, CSS, and JavaScript </span>{' '}
        to build websites. <br /> I am also proficient in{' '}
        <span className={s.purple}>
          jQuery, React, Angular, and TypeScript
        </span>{' '}
        <br /> to make even better web pages. At{' '}
        <span className={s.purple}>Code Crafters,</span> I work with{' '}
        <br />
        other team members to make our websites look good and work
        well. <br /> I like to write clean code that's easy to
        understand and fix later <br /> if needed. Because the world
        of tech keeps changing, <br /> I'm always learning new things.
        Right now, I'm also studying <br />{' '}
        <span className={s.purple}>
          Data Structures and Algorithms
        </span>{' '}
        to get better at solving problems. <br /> I love what I do and
        am always excited to work on new projects. <br /> My goal is
        to make websites that people love to use.
      </p>

      <ul>
        <li className={s.aboutActivity}>
          <ImPointRight /> Playing Video Games
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> Watching Movies and TV Series
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> Working out
        </li>
      </ul>
    </div>
  );
};

export default AboutTextCard;
