import React from "react";
import { Link } from 'react-router-dom'
import { useSiteContext } from "../../contexts/websiteContext";
import { Container, NavList } from './MobileMenu.styled'


function MobileMenu() {
  const { isMobileMenuOpen } = useSiteContext()
  return (
    <Container show={isMobileMenuOpen}>
      <NavList>
        <li><Link to='/'><span>00</span>home</Link></li>
        <li><Link to='/destination'><span>01</span>destination</Link></li>
        <li><Link to='/'><span>02</span>crew</Link></li>
        <li><Link to='/'><span>03</span>technology</Link></li>
      </NavList>
    </Container>
  )
}

export default MobileMenu