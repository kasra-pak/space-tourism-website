import styled from "styled-components";

import mobileBG from '../../images/home/background-home-mobile.jpg'
import tabletBG from '../../images/home/background-home-tablet.jpg'
import desktopBG from '../../images/home/background-home-desktop.jpg'

const Container = styled.div`
  background: rgba(0, 0, 0, 1);
  position: absolute;
  width: 68%;
  top: 0;
  bottom: 0;
  right: 0;
  overflow: hidden;
  transform: translateX(${props => props.show ? '0' : '100%'});
  transition: transform .3s ease;
  z-index: 2;
`

const NavList = styled.ul`
  list-style: none;
  margin-top: 7.5em;
  
  li {
    margin-left: 2em;
    transition: border .15s ease;

    + li {
      margin-top: 1em;    
    }

    &:hover {
      border-right: 4px solid rgba(255, 255, 255, .5);
    }
  }
  
  a {
    font-family: var(--font-secondary);
    color: var(--secondary-text-color);
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 2.7px;
    display: block;
    width: 100%;
    padding: .5em 0;
  }

  span {
    display: inline-block;
    width: 3ch;
    font-weight: bold;
    margin-right: 1em;
  }
`

export { Container, NavList }