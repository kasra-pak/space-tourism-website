import styled from "styled-components";

import mobileBG from '../../images/destination/background-destination-mobile.jpg'
import tabletBG from '../../images/destination/background-destination-tablet.jpg'
import desktopBG from '../../images/destination/background-destination-desktop.jpg'

const Hero = styled.div`
  background: url(${mobileBG});
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
  background-position: center;
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
    padding-bottom: 5em;
  }
`

const Container = styled.div`
  text-align: center;
  padding: 0 1.5em;

  @media screen and (min-width: 575px) {
    padding: 0 2.5em;
  }

  @media screen and (min-width: 1025px) {
    text-align: left;
    padding: 0 3.375em;

    section {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
    }
  }

  @media screen and (min-width: 1154px) {
    section {
      justify-content: center;
      gap: 0 9.8125em;
    }
  }

  @media screen and (min-width: 1308px) {
    max-width: 80%;
    margin: 0 auto;
    padding: 0;
  }
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

  @media screen and (min-width: 480px) {
    text-align: left;
    font-size: var(--fs-20);
    letter-spacing: 3.375px;
  }

  @media screen and (min-width: 1025px) {
    flex: 1 1 100%;
    font-size: var(--fs-28);
    letter-spacing: 4.725px;
    margin-bottom: 2.29em;
  }
`

const TabImg = styled.img`
  width: 170px;
  margin: 1.75em auto;

  @media screen and (min-width: 480px) {
    width: 300px;
    margin: 3.75em auto 3.5em;
  }

  @media screen and (min-width: 1025px) {
    width: 445px;
    margin: 0;
  }
`

const Tabs = styled.ul`
  display: flex;
  justify-content: center;
  gap: 1.5em;

  @media screen and (min-width: 480px) {
    gap: 2.25em;
  }

  @media screen and (min-width: 1025px) {
    justify-content: flex-start;
  }
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
  padding: .25em 0 .5em;
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

  @media screen and (min-width: 480px) {
    font-size: var(--fs-16);
    letter-spacing: 2.7px;
    padding: .25em 0 .9em;
  }
`

const TabHeading = styled.h2`
  font-family: var(--font-primary);
  font-size: var(--fs-56);
  font-weight: 400;
  color: var(--secondary-text-color);
  text-transform: uppercase;
  margin: .5em 0 .1em;

  @media screen and (min-width: 480px) {
    font-size: var(--fs-80);
  }

  @media screen and (min-width: 1025px) {
    font-size: var(--fs-100);
    margin: .4em 0 .1em;
  }
`

const Text = styled.p`
  font-family: var(--font-tertiary);
  color: var(--primary-text-color);
  font-size: var(--fs-15);
  line-height: 25px;
  padding-bottom: 2em;
  margin-bottom: 2.25em;
  border-bottom: 1px solid #383b4b;

  @media screen and (min-width: 480px) {
    font-size: var(--fs-16);
    line-height: 28px;
    max-width: 572px;
    padding-bottom: 3em;
    margin: 0 auto 2.25em;
  }

  @media screen and (min-width: 1025px) {
    font-size: var(--fs-18);
    line-height: 32px;
    max-width: 444px;

  }
`

const Statistics = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.25em;

  @media screen and (min-width: 480px) {
    flex-direction: row;
    justify-content: center;
    gap: 6.5em;
  }

  @media screen and (min-width: 1025px) {
    justify-content: flex-start;
    gap: 4em;
  }
`

const Statistic = styled.p`
  font-family: var(--font-secondary);
  font-size: var(--fs-14);
  font-weight: 400;
  color: var(--primary-text-color);
  text-transform: uppercase;
  letter-spacing: 2.3625px;
  
  span {
    display: block;
    font-family: var(--font-primary);
    font-size: var(--fs-28);
    color: var(--secondary-text-color);
    margin-top: .25em;
  }
`

export { Hero, Container, Title, TabImg, Tabs, Tab, TabHeading, Text, Statistics,  Statistic }