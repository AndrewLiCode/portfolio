import React from 'react';
import ProjectButtons from './ProjectButtons';
import style from './Project.module.scss';
import { useDarkMode } from '../../helpers/context';

export default function Project({ project, i }) {
  const { isDarkMode } = useDarkMode();
  const { image, title, technologies, description } = project;
  return (
    <div
      className={isDarkMode ? style.projectDark : style.project}
      style={{ background: isDarkMode && i % 2 !== 0 && '#16161a' }}
    >
      <div className={style.container}>
        <div>
          <img src={image} alt='macbook' />
        </div>
        <div className={style.textContainer}>
          <h1>{title}</h1>
          <div className={style.text}>
            <h5>{technologies}</h5>
            <p>{description}</p>
          </div>
          <ProjectButtons project={project} />
        </div>
      </div>
    </div>
  );
}
