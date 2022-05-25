import styled from "styled-components";

import mobileBG from '../../images/destination/background-destination-mobile.jpg'
import tabletBG from '../../images/destination/background-destination-tablet.jpg'
import desktopBG from '../../images/destination/background-destination-desktop.jpg'

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
  width: 87%;
  margin: 0 auto;
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

const TabImg = styled.img`
  width: 170px;
  margin: 1.75em auto;
`

const Tabs = styled.ul`
  display: flex;
  justify-content: center;
  gap: 1.5em; 
`

const Tab = styled.li`
  list-style: none;
  text-transform: uppercase;
  color: ${({activetab}) => activetab ?
      'var(--secondary-text-color)' :
      'var(--primary-text-color)'};
  font-family: var(--font-secondary);
  font-size: var(--fs-14);
  letter-spacing: 2.3625px;
  padding: .5em 0;
  cursor: pointer;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    background-color: var(--secondary-text-color);
    width: 100%;
    height: 3px;
    left: 0;
    bottom: -3px;
    display: ${props => props.activetab ? 'block' : 'none'};
  }
  
  &:hover::after {
    content: '';
    position: absolute;
    background-color: ${props => props.activetab ?
      '#fff' : 'rgba(255, 255, 255, .5)'};
    width: 100%;
    height: 3px;
    left: 0;
    bottom: -3px;
  }
`

const TabHeading = styled.h2`
  font-family: var(--font-primary);
  font-size: var(--fs-56);
  font-weight: 400;
  color: var(--secondary-text-color);
  text-transform: uppercase;
  margin: .5em 0 .1em;
`

const Text = styled.p`
  font-family: var(--font-tertiary);
  color: var(--primary-text-color);
  font-size: var(--fs-15);
  line-height: 25px;
  margin-bottom: 2em;
`

const Statistic = styled.p`
  font-family: var(--font-secondary);
  font-size: var(--fs-14);
  color: var(--primary-text-color);
  text-transform: uppercase;
  letter-spacing: 2.3625px;
  margin-top: 2.25em;
  
  span {
    display: block;
    font-family: var(--font-primary);
    font-size: var(--fs-28);
    color: var(--secondary-text-color);
    margin-top: .25em;
  }
`



export { Hero, Container, Title, TabImg, Tabs, Tab, TabHeading, Text, Statistic }