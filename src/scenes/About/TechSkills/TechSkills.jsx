import s from './TechSkills.module.scss';
import {
  DiJavascript1,
  DiReact,
  DiGit,
  DiSass,
  DiHtml5,
  DiCss3,
  DiJqueryLogo,
  DiGulp,
  DiFirebase,
  DiTerminal,
  DiMaterializecss,
} from 'react-icons/di';
import {
  SiTypescript,
  SiAngular,
  SiBootstrap,
  SiTailwindcss,
} from 'react-icons/si';

const TechSkills = () => {
  return (
    <ul className={s.container}>
      <li className={s.techIcon}>
        <DiHtml5 />
      </li>
      <li className={s.techIcon}>
        <DiCss3 />
      </li>
      <li className={s.techIcon}>
        <DiJavascript1 />
      </li>
      <li className={s.techIcon}>
        <DiJqueryLogo />
      </li>
      <li className={s.techIcon}>
        <DiSass />
      </li>
      <li className={s.techIcon}>
        <DiReact />
      </li>
      <li className={s.techIcon}>
        <SiTypescript />
      </li>
      <li className={s.techIcon}>
        <SiAngular />
      </li>
      <li className={s.techIcon}>
        <SiBootstrap />
      </li>
      <li className={s.techIcon}>
        <SiTailwindcss />
      </li>
      <li className={s.techIcon}>
        <DiMaterializecss />
      </li>
      <li className={s.techIcon}>
        <DiGit />
      </li>
      <li className={s.techIcon}>
        <DiGulp />
      </li>
      <li className={s.techIcon}>
        <DiFirebase />
      </li>
      <li className={s.techIcon}>
        <DiTerminal />
      </li>
    </ul>
  );
};

export default TechSkills;
