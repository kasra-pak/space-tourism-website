import styled from 'styled-components';

import hamburgerImg from '../../images/shared/icon-hamburger.svg';
import closeImg from '../../images/shared/icon-close.svg';

const Container = styled.nav`
  padding: 1.5em;

  @media screen and (min-width: 575px) {
    padding: 0;
    padding-left: 2.5em;
    margin-bottom: 2em;
  }

  @media screen and (min-width: 1025px) {
    padding: 2.5em 0 0 3.4em;
    margin-bottom: 4.75em;
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img`
  width: 40px;

  @media screen and (min-width: 480px) {
    width: 48px;
  }
`;

const WhiteLine = styled.div`
  background-color: var(--secondary-text-color);
  height: 1px;
  flex: 1 1 10%;
  margin-left: 2.5em;
  margin-right: -2.5em;
  z-index: 1;
  display: none;

  @media screen and (min-width: 1070px) {
    display: block;
  }
`;

const NavList = styled.ul`
  list-style: none;
  display: none;
  padding: 0 2.55em;
  background-color: var(--navbar-bg);

  @supports (backdrop-filter: blur(2rem)) {
    background-color: rgba(255, 255, 255, 0.04);
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
    width: 3ch;
    font-weight: bold;
    margin-right: 0.7em;
    display: none;

    @media screen and (min-width: 1025px) {
      display: inline-block;
    }
  }

  @media screen and (min-width: 575px) {
    display: flex;
    gap: 2.55em;
  }

  @media screen and (min-width: 1025px) {
    gap: 3em;
    padding: 0 7.65em 0 10.3em;

    a {
      font-size: var(--fs-16);
      letter-spacing: 2.7px;
    }
  }
`;

const Item = styled.li<{ activepage: boolean }>`
  border-bottom: ${({ activepage }) =>
    activepage ? '3px solid var(--secondary-text-color)' : 'none'};
  transition: border 0.15s ease;

  &:hover {
    border-bottom: ${({ activepage }) =>
      activepage
        ? '3px solid var(--secondary-text-color)'
        : '3px solid rgba(255, 255, 255, .5)'};
  }
`;

const Hamburger = styled.button<{ open: boolean }>`
  border: none;
  width: 25px;
  height: 22px;
  padding: 0.25em;
  cursor: pointer;
  background: url(${props => (props.open ? closeImg : hamburgerImg)});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  z-index: 2;

  @media screen and (min-width: 575px) {
    display: none;
  }
`;

export { Container, Content, Logo, WhiteLine, NavList, Item, Hamburger };
