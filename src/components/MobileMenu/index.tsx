import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSiteContext } from '../../contexts/websiteContext';
import { Container, NavList, Item } from './MobileMenu.styled';

function MobileMenu() {
  const { isMobileMenuOpen, closeMobileMenu } = useSiteContext();
  const location = useLocation();

  return (
    <Container show={isMobileMenuOpen}>
      <NavList>
        <Item activepage={location.pathname == '/'} onClick={closeMobileMenu}>
          <Link to="/">
            <span>00</span>home
          </Link>
        </Item>
        <Item
          activepage={location.pathname.includes('destination')}
          onClick={closeMobileMenu}
        >
          <Link to="/destination">
            <span>01</span>destination
          </Link>
        </Item>
        <Item
          activepage={location.pathname.includes('crew')}
          onClick={closeMobileMenu}
        >
          <Link to="/crew">
            <span>02</span>crew
          </Link>
        </Item>
        <Item
          activepage={location.pathname.includes('technology')}
          onClick={closeMobileMenu}
        >
          <Link to="/technology">
            <span>03</span>technology
          </Link>
        </Item>
      </NavList>
    </Container>
  );
}

export default MobileMenu;

export default MobileMenu;
