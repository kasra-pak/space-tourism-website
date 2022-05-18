import React, { useState } from "react";
import { Link } from 'react-router-dom'

import { Container, Content, Logo, Hamburger } from "./Navbar.styled";
import logoImg from '../../images/shared/logo.svg'


export default function Navbar() {
  return (
    <Container>
      <Content>
        <Link to='/'>
          <Logo src={logoImg} alt='Space Tourism Logo'></Logo>
        </Link> 
        <Hamburger />
      </Content>
    </Container>
  )
}