import React from 'react';
import style from './Banner.module.scss';
import { lightBanner, darkBanner } from '../../store/assets/index';
import Header from './Header';
import NavBar from './NavBar';
import { useDarkMode } from '../../helpers/context';
export default function Banner() {
  const { isDarkMode } = useDarkMode();
  return (
    <div
      className={isDarkMode ? style.bannerContainerDark : style.bannerContainer}
    >
      <img
        src={isDarkMode ? darkBanner : lightBanner}
        className={style.banner}
        alt=''
      />
      <div
        style={{
          position: 'absolute',
          top: '0',
          width: '100%',
        }}
      >
        <Header />
        <NavBar />
      </div>
    </div>
  );
}
