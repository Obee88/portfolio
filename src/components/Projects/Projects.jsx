import classNames from 'classnames';
import React from 'react';
import projects from './data';
import styles from './Projects.module.scss'
import ProjectsPanel from './ProjectsPanel';


const Projects = ({ className }) => {
  return (
    <div className={classNames(styles.container, className)}>
      <ProjectsPanel items={projects} title="Projects" />
    </div>
  );
};

export default Projects;