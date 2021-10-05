import {
  proshopCode,
  dashboardCode,
  proshop,
  dashboard,
} from '../assets/index';

const projects = [
  {
    title: 'Dashboard',
    code: dashboardCode,
    technologies: 'uses React',
    image: dashboard,
    description:
      'Leverages useReducer & useContext best practices as well as custom hooks to allow users to delete, edit, and filter messages that pop up every two seconds.',
  },
  {
    title: 'Proshop',
    code: proshopCode,
    technologies: 'uses MongoDB, Express, React, Node',
    image: proshop,
    description:
      'eCommerce platform built with the MERN stack & Redux.',
  }
];

export { projects };
