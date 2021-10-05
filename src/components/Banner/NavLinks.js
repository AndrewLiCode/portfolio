import React from 'react';
import { navLinks } from '../../store/content/index';

function ProjectsContactResume() {
  function blank(item) {
    return item.href.includes('google') ? '_blank' : '_self';
  }

  return (
    <>
      {navLinks.map((item, i) => {
        return (
          <a href={item.href} key={i} target={blank(item)}>
            <h1>{item.title}</h1>
          </a>
        );
      })}
    </>
  );
}

export default ProjectsContactResume;
