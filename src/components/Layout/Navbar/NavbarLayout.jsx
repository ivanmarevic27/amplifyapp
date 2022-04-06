import React from 'react';

import { CCollapse, CContainer, CLink, CNav, CNavbar, CNavbarNav, CNavItem, CNavLink } from '@coreui/react';
import { navItems } from './Navbar.types';
import { Link, NavLink } from 'react-router-dom';
import { SignOutButton } from '../../SignOutButton/SignOutButton';
export const Navbar = () => {
  return (
    <CNavbar>
      <CNavbarNav style={{ display: 'inline' }}>
        {navItems.map((navItem) => {
          return (
            <Link style={{ marginLeft: '1rem', marginRight: '1rem' }} key={navItem.title} to={navItem.path}>
              {navItem.title}
            </Link>
          );
        })}
      </CNavbarNav>

      <CNavbarNav>
        <SignOutButton />
      </CNavbarNav>
    </CNavbar>
  );
};
