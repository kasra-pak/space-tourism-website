import styled from "styled-components";

import hamburgerImg from '../../images/shared/icon-hamburger.svg'
import closeImg from '../../images/shared/icon-close.svg'

const Container = styled.nav`
  padding: 1.5em;
`
const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Logo = styled.img`
  width: 40px;
`
const Hamburger = styled.button`
  border: none;
  width: 25px;
  height: 22px;
  padding: .25em;
  cursor: pointer;
  background: url(${hamburgerImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`

export { Container, Content, Logo, Hamburger }