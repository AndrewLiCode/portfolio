import React from 'react';
import styles from './Footer.module.scss';
import { useDarkMode } from '../../helpers/context';
import { contact } from '../../store/content/index';

function Footer() {
  const { isDarkMode } = useDarkMode();

  return (
    <footer className={isDarkMode ? styles.darkMain : styles.main} id='contact'>
      <div className={styles.iconContainer}>
        {contact.map((item, i) => (
          <a href={item.link} target='blank' key={i}>
            {item.icon}
          </a>
        ))}
      </div>
    </footer>
  );
}

export default Footer;
