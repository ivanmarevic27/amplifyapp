import { ALL_NOTES, ALL_STUDIES } from '../constants/Router.constants';

import { Notes } from '../../pages/Notes/Notes';
import { Studies } from '../../pages/Studies/Studies';
export const navBarOutlets = [
  {
    path: ALL_NOTES,
    name: 'Notes page',
    component: Notes,
  },
  {
    path: ALL_STUDIES,
    name: 'Studies page',
    component: Studies,
  },
];
