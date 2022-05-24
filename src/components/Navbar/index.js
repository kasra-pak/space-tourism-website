import React, { useState } from "react";
import { Link } from 'react-router-dom'

import { useSiteContext } from '../../contexts/websiteContext'
import { Container, Content, Logo, Hamburger } from "./Navbar.styled";
import logoImg from '../../images/shared/logo.svg'


function Navbar() {
  const { isMobileMenuOpen, toggleMobileMenu } = useSiteContext()
  return (
    <Container>
      <Content>
        <Link to='/'>
          <Logo src={logoImg} alt='Space Tourism Logo'></Logo>
        </Link> 
        <Hamburger
          onClick={toggleMobileMenu}
          open={isMobileMenuOpen}
        />
      </Content>
    </Container>
  )
}

export default Navbar
