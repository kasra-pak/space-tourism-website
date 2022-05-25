import styled from "styled-components";

import mobileBG from '../../images/technology/background-technology-mobile.jpg'
import tabletBG from '../../images/technology/background-technology-tablet.jpg'
import desktopBG from '../../images/technology/background-technology-desktop.jpg'

const Hero = styled.div`
  background: url(${mobileBG});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  padding-bottom: 1em;

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
  width: 87%;
  margin: 0 auto;
`

const Title = styled.h1`
  text-align: center;
  color: var(--secondary-text-color);
  font-family: var(--font-secondary);
  font-size: var(--fs-16);
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 2.7px;
  
  span {
    font-weight: 700;
    color: var(--primary-text-color);
    opacity: .25;
    margin-right: .75em;
  }
`

const TabImg = styled.img`
  width: 374px;
  height: 170px;
  border-bottom: 1px solid rgba(255, 255, 255, .2);
  margin-top: 2em;
`

const Slider = styled.ul`
  display: flex;
  justify-content: center;
  gap: 1.1em;
  margin: 2em 0;
`

const Circle = styled.li`
  list-style: none;
  font-family: var(--font-primary);
  background-color: ${({activecircle}) => activecircle ? 'var(--secondary-text-color)' : 'transparent'};
  color: ${({activecircle}) => activecircle ? 'default' : 'var(--secondary-text-color)'};
  border: 1px solid ${({activecircle}) => activecircle ? 'var(--secondary-text-color)' : 'rgba(255,255,255,.25)'};
  width: 40px;
  height: 40px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  
  &:hover {
    border: 1px solid var(--secondary-text-color);
  }
`

const Term = styled.p`
  font-family: var(--font-secondary);
  font-size: var(--fs-14);
  font-weight: 400;
  color: var(--primary-text-color);
  text-transform: uppercase;
  letter-spacing: 2.3625px;
`

const CrewName = styled.h2`
  font-family: var(--font-primary);
  font-size: var(--fs-24);
  font-weight: 400;
  color: var(--secondary-text-color);
  text-transform: uppercase;
  margin: .5em 0 .75em;
`

const Text = styled.p`
  font-family: var(--font-tertiary);
  color: var(--primary-text-color);
  font-size: var(--fs-15);
  line-height: 25px;
`


export { Hero, Container, Title, TabImg, Slider, Circle, Term, CrewName, Text }