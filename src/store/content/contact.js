import { GrGithub } from 'react-icons/gr';
import { VscMail } from 'react-icons/vsc';
import { github, email } from '../assets/index';

const contact = [
  {
    link: email,
    icon: <VscMail />,
  },
  {
    link: github,
    icon: <GrGithub />,
  },
];

export { contact };
