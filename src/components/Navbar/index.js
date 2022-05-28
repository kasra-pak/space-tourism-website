import React from "react";
import { Link, useLocation } from 'react-router-dom'

import { useSiteContext } from '../../contexts/websiteContext'
import { Container, Content, Logo, WhiteLine, NavList, Item, Hamburger } from "./Navbar.styled";
import logoImg from '../../images/shared/logo.svg'


function Navbar() {
  const { isMobileMenuOpen, toggleMobileMenu, closeMobileMenu } = useSiteContext()
  const location = useLocation()

  return (
    <Container>
      <Content>
        <Link to='/'>
          <Logo
            src={logoImg} alt='Space Tourism Logo'
            onClick={closeMobileMenu}
          ></Logo>
        </Link>
        <WhiteLine />
        <NavList>
          <Item 
            activepage={location.pathname == '/'}
          >
            <Link to='/'><span>00</span>home</Link>
          </Item>
          <Item 
            activepage={location.pathname.includes('destination')}
          >
            <Link to='/destination'><span>01</span>destination</Link>
          </Item>
          <Item 
            activepage={location.pathname.includes('crew')}
          >
            <Link to='/crew'><span>02</span>crew</Link>
          </Item>
          <Item 
            activepage={location.pathname.includes('technology')}
          >
            <Link to='/technology'><span>03</span>technology</Link>
          </Item>
        </NavList>
        <Hamburger
          onClick={toggleMobileMenu}
          open={isMobileMenuOpen}
        />
      </Content>
    </Container>
  )
}

export default Navbar
