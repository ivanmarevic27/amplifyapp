import React from 'react';

import { CCollapse, CContainer, CLink, CNav, CNavbar, CNavbarNav, CNavItem, CNavLink } from '@coreui/react';
import { navItems } from './Navbar.types';
import { Link, NavLink } from 'react-router-dom';
import { SignOutButton } from '../../SignOutButton/SignOutButton';
import { LinkStyle, NavLinkStyle } from './NavbarLayout.styles';
export const Navbar = () => {
  return (
    <CNavbar>
      <CNavbarNav style={{ display: 'inline' }}>
        {navItems.map((navItem) => {
          return (
            <Link style={LinkStyle} key={navItem.title} to={navItem.path}>
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
