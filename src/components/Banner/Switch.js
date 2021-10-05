import React from 'react';
import styles from './Switch.module.scss';
import DarkModeToggle from 'react-dark-mode-toggle';
import { useDarkMode } from '../../helpers/context';

function Switch() {
  const { isDarkMode, setIsDarkMode } = useDarkMode();

  return (
    <div className={styles.main}>
      <DarkModeToggle
        onChange={() => setIsDarkMode(!isDarkMode)}
        checked={isDarkMode}
        size={80}
      />
    </div>
  );
}

export default Switch;
