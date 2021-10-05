import React from 'react';
import Project from './Project';
import { projects } from '../../store/content/index';

export default function Projects() {
  return (
    <div id='projects'>
      {projects.map((project, i) => (
        <Project key={i} project={project} i={i} />
      ))}
    </div>
  );
}
