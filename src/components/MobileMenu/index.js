import React from "react";
import { Link, useLocation } from 'react-router-dom'
import { useSiteContext } from "../../contexts/websiteContext";
import { Container, NavList, Item } from './MobileMenu.styled'


function MobileMenu() {
  const { isMobileMenuOpen } = useSiteContext()
  const location = useLocation()
  console.log(location.pathname==='/')

  return (
    <Container show={isMobileMenuOpen}>
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
    </Container>
  )
}

export default MobileMenu