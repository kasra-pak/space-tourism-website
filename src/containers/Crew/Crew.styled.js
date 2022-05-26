import styled from "styled-components";

import mobileBG from '../../images/crew/background-crew-mobile.jpg'
import tabletBG from '../../images/crew/background-crew-tablet.jpg'
import desktopBG from '../../images/crew/background-crew-desktop.jpg'

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
  margin: 0 1.5em;
`

const Title = styled.h1`
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

const TabImg = styled.div`
  border-bottom: 1px solid rgba(255, 255, 255, .2);
  margin-top: 2em;

  img {
    height: 327px;
    height: 223px;
    margin: 0 auto;
  }
`

const Slider = styled.ul`
  display: flex;
  justify-content: center;
  gap: 1.1em;
  margin: 2.25em 0;
`

const Dot = styled.li`
  list-style: none;
  text-transform: uppercase;
  background-color: var(--secondary-text-color);
  opacity: ${({activedot}) => activedot ? '1' : '.17'};
  width: 10px;
  height: 10px;
  border-radius: 100%;
  cursor: pointer;
  position: relative;
  
  &:hover {
    opacity: ${({activedot}) => activedot ? '1' : '.5'};
  }
`

const CrewRole = styled.p`
  font-family: var(--font-primary);
  font-size: var(--fs-16);
  font-weight: 400;
  color: var(--secondary-text-color);
  text-transform: uppercase;
  margin: .5em 0 .1em;
  opacity: 0.5;
`

const CrewName = styled.h2`
  font-family: var(--font-primary);
  font-size: var(--fs-24);
  font-weight: 400;
  color: var(--secondary-text-color);
  text-transform: uppercase;
  margin: .25em 0 1em;
`

const Text = styled.p`
  font-family: var(--font-tertiary);
  color: var(--primary-text-color);
  font-size: var(--fs-15);
  line-height: 25px;
`


export { Hero, Container, Title, TabImg, Slider, Dot, CrewRole, CrewName, Text }