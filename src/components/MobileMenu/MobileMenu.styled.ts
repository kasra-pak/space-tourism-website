import styled from "styled-components";

const Container = styled.div`
  background-color: var(--navbar-bg);
  position: absolute;
  width: 68%;
  top: 0;
  bottom: 0;
  right: 0;
  overflow: hidden;
  transform: translateX(${props => props.show ? '0' : '100%'});
  transition: transform .3s ease;
  z-index: 2;

  @supports (backdrop-filter: blur(2rem)) {
    background-color: rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(2rem);
  }

  @media screen and (min-width: 575px) {
    transform: translateX(100%);
  }
`

const NavList = styled.ul`
  list-style: none;
  margin-top: 7.5em;
 
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

const Item = styled.li`
  margin-left: 2em;
  transition: border .15s ease;
  border-right: ${({activepage}) => activepage ?
      '4px solid var(--secondary-text-color)': 'none'};

  + li {
    margin-top: 1em;    
  }

  &:hover {
    border-right: ${({activepage}) => activepage ?
      '4px solid var(--secondary-text-color)':
      '4px solid rgba(255, 255, 255, .5)'};
  }
`

export { Container, NavList, Item }