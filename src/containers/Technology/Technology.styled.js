import styled from 'styled-components';

import mobileBG from '../../images/technology/background-technology-mobile.jpg';
import tabletBG from '../../images/technology/background-technology-tablet.jpg';
import desktopBG from '../../images/technology/background-technology-desktop.jpg';

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
`;

const Container = styled.div`
  text-align: center;
  padding: 0 1.6em;

  @media screen and (min-width: 1025px) {
    text-align: left;
    padding: 0 0 0 3.5em;

    section {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 1.5em;
      gap: 2em;
    }
  }

  @media screen and (min-width: 1250px) {
    padding: 0;
    margin-left: auto;
    width: 90%;
  }
`;

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
    opacity: 0.25;
    margin-right: 0.75em;
  }

  @media screen and (min-width: 480px) {
    font-size: var(--fs-20);
    letter-spacing: 3.375px;
    text-align: left;
    padding: 0 1.25em;
  }

  @media screen and (min-width: 575px) {
    padding: 0 2em;
  }

  @media screen and (min-width: 1025px) {
    font-size: var(--fs-28);
    letter-spacing: 4.725px;
    padding-right: 0;
  }

  @media screen and (min-width: 1250px) {
    width: 90%;
    margin-left: auto;
    padding: 0;
  }
`;

const TabImg = styled.img`
  width: 100%;
  height: 170px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  margin-top: 2em;

  @media screen and (min-width: 480px) {
    height: auto;
    margin-top: 3.5em;
  }

  @media screen and (min-width: 1025px) {
    display: none;
  }
`;

const Slider = styled.ul`
  display: flex;
  justify-content: center;
  gap: 1.1em;
  margin: 2em 0;

  @media screen and (min-width: 480px) {
    margin: 3.5em 0;
  }

  @media screen and (min-width: 1025px) {
    flex-direction: column;
    gap: 2em;
  }
`;

const Circle = styled.li`
  list-style: none;
  font-family: var(--font-primary);
  background-color: ${({ activecircle }) =>
    activecircle ? 'var(--secondary-text-color)' : 'transparent'};
  color: ${({ activecircle }) =>
    activecircle ? 'default' : 'var(--secondary-text-color)'};
  border: 1px solid
    ${({ activecircle }) =>
      activecircle ? 'var(--secondary-text-color)' : 'rgba(255,255,255,.25)'};
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

  @media screen and (min-width: 480px) {
    width: 58px;
    height: 58px;
    font-size: var(--fs-24);
  }

  @media screen and (min-width: 1025px) {
    width: 80px;
    height: 80px;
    font-size: var(--fs-32);
  }
`;

const Info = styled.div`
  flex-shrink: 0;
`;

const Term = styled.p`
  font-family: var(--font-secondary);
  font-size: var(--fs-14);
  font-weight: 400;
  color: var(--primary-text-color);
  text-transform: uppercase;
  letter-spacing: 2.3625px;

  @media screen and (min-width: 480px) {
    font-size: var(--fs-16);
    letter-spacing: 2.7px;
  }
`;

const TechName = styled.h2`
  font-family: var(--font-primary);
  font-size: var(--fs-24);
  font-weight: 400;
  color: var(--secondary-text-color);
  text-transform: uppercase;
  margin: 0.5em 0 0.75em;

  @media screen and (min-width: 480px) {
    font-size: var(--fs-40);
    margin: 0.25em 0 0.5em;
  }

  @media screen and (min-width: 1025px) {
    font-size: var(--fs-56);
    margin: 0.25em 0 0.4em;
  }
`;

const Text = styled.p`
  font-family: var(--font-tertiary);
  color: var(--primary-text-color);
  font-size: var(--fs-15);
  line-height: 25px;

  @media screen and (min-width: 480px) {
    font-size: var(--fs-16);
    line-height: 28px;
    max-width: 440px;
    margin: 0 auto;
  }

  @media screen and (min-width: 1025px) {
    font-size: var(--fs-18);
    line-height: 32px;
    max-width: 444px;
    margin: 0;
  }
`;

const TabImgPortrait = styled.img`
  display: none;

  @media screen and (min-width: 1025px) {
    display: block;
    max-width: 35vw;
  }
`;

export {
  Hero,
  Container,
  Title,
  TabImg,
  Slider,
  Info,
  Circle,
  Term,
  TechName,
  Text,
  TabImgPortrait,
};
