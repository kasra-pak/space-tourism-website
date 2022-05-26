import styled from "styled-components";

import hamburgerImg from '../../images/shared/icon-hamburger.svg'
import closeImg from '../../images/shared/icon-close.svg'

const Container = styled.nav`
  padding: 1.5em;

  @media screen and (min-width: 575px){
    padding: 0;
    padding-left: 2.5em;
    margin-bottom: 2em;
  }
`

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Logo = styled.img`
  width: 40px;

  @media screen and (min-width: 480px) {
    width: 48px;
  }
`

const NavList = styled.ul`
  list-style: none;
  display: none;
  padding: 0 2.55em;
  background-color: var(--navbar-bg);

  @supports (backdrop-filter: blur(2rem)) {
    background-color: rgba(255, 255, 255, .04);
    backdrop-filter: blur(2rem);
  }
 
  a {
    font-family: var(--font-secondary);
    font-size: var(--fs-14);
    color: var(--secondary-text-color);
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 2.3625px;
    display: block;
    padding: 2.75em 0;
  }

  span {
    // only for large screens
    display: inline-block;
    display: none;
    width: 3ch;
    font-weight: bold;
    margin-right: 1em;
  }

  @media screen and (min-width: 575px) {
    display: flex;
    gap: 2.55em;
  }
`

const Item = styled.li`
  border-bottom: ${({activepage}) => activepage ?
      '3px solid var(--secondary-text-color)': 'none'};
  transition: border .15s ease;

  &:hover {
    border-bottom: ${({activepage}) => activepage ?
      '3px solid var(--secondary-text-color)':
      '3px solid rgba(255, 255, 255, .5)'};
  }
`

const Hamburger = styled.button`
  border: none;
  width: 25px;
  height: 22px;
  padding: .25em;
  cursor: pointer;
  background: url(${props => props.open ? closeImg : hamburgerImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  z-index: 2;

  @media screen and (min-width: 575px) {
    display: none;
  }
`

export { Container, Content, Logo, NavList, Item, Hamburger }