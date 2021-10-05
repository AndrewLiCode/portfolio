import React from 'react';
import style from './Skill.module.scss';
import { useDarkMode } from '../../helpers/context';

export default function Skill1({ skill }) {
  const { isDarkMode } = useDarkMode();
  const { title, detail, icon } = skill;

  return (
    <div className={isDarkMode ? style.darkMain : style.main}>
      {icon}
      <h4>{title}</h4>
      <p>{detail}</p>
    </div>
  );
}
