import React, { useRef } from 'react';
import styles from './Hamburger.module.scss';
import { useOutsideAlerter } from '../../helpers/helpers';
import NavLinks from './NavLinks';
import { useDarkMode } from '../../helpers/context';

function Hamburger({ showMenu, menu }) {
  const { isDarkMode } = useDarkMode();
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, showMenu, menu);
  
  return (
    <main
      className={isDarkMode ? styles.darkMain : styles.main}
      ref={wrapperRef}
    >
      <section className={styles.left}>
        <NavLinks />
        <code>(just tap the coffee...)</code>
      </section>
    </main>
  );
}

export default Hamburger;
