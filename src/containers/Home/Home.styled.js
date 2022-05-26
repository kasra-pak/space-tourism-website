import styled from "styled-components";

import mobileBG from '../../images/home/background-home-mobile.jpg'
import tabletBG from '../../images/home/background-home-tablet.jpg'
import desktopBG from '../../images/home/background-home-desktop.jpg'

const Hero = styled.div`
  background: url(${mobileBG});
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  background-position: center;

  @media screen and (min-width: 480px) {
    background: url(${tabletBG});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  @media screen and (min-width: 1025px) {
    background: url(${desktopBG});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
`

const Container = styled.div`
  text-align: center;
  width: 85%;
  min-height: 85%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`

const Title = styled.h1`
  font-family: var(--font-primary);
  font-size: var(--fs-80);
  font-weight: 400;
  color: var(--secondary-text-color);
  text-transform: uppercase;
  margin-bottom: .25em;

  span {
    font-family: var(--font-secondary);
    font-size: var(--fs-16);
    color: var(--primary-text-color);
    letter-spacing: 2.7px;
    display: block;
    margin-bottom: 1.25em;
  }

  @media screen and (min-width: 480px) {
    font-size: var(--fs-150);
    margin-bottom: .1em;

    span {
      font-size: var(--fs-20);
      letter-spacing: 3.375px;
      margin-bottom: .75em;
    }
  }
`

const Text = styled.p`
  font-family: var(--font-tertiary);
  color: var(--primary-text-color);
  font-size: var(--fs-15);
  line-height: 25px;

  @media screen and (min-width: 480px){
    max-width: 440px;
    font-size: var(--fs-16);
  }
`

const Button = styled.a`
  font-family: var(--font-primary);
  font-size: var(--fs-20);
  letter-spacing: 1.25px;
  text-decoration: none;
  text-transform: uppercase;
  background-color: var(--secondary-text-color);
  color: var(--tertiary-text-color);
  border-radius: 100%;
  padding: 3.17em 1.411em;
  transition: outline .2s ease;

  &:hover {
    outline: 2.5rem solid rgba(255, 255, 255, .2);
  }

  @media screen and (min-width: 480px) {
    font-size: var(--fs-32);
    padding: 3.206em 1.5245em;

    &:hover {
      outline: 3.5rem solid rgba(255, 255, 255, .2);
    }
  }
`

export { Hero, Container, Title, Text, Button }