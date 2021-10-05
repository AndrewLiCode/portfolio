import React from 'react';
import styles from './About.module.scss';
import { useDarkMode } from '../../helpers/context';
import { illustration, darkIllustration } from '../../store/assets/index';
function About() {
  const { isDarkMode } = useDarkMode();

  return (
    <div className={isDarkMode ? styles.mainDark : styles.main}>
      <div className={styles.text}>
        <h1>I am a Full-Stack Software Engineer</h1>
        <h3>following leading industry standards and specialized in JS/TS stacks.</h3>
        <h3>I love autonomous working and I always apply best practices for every product I work on.</h3>
        <p>
          I have strong interest in system architecture design, performance optimization, and automation
          solutions.
        </p>
      </div>
      <img
        src={isDarkMode ? darkIllustration : illustration}
        alt=''
        className={styles.illustration}
      />
    </div>
  );
}

export default About;
