import styled from 'styled-components';

import mobileBG from '../../images/crew/background-crew-mobile.jpg';
import tabletBG from '../../images/crew/background-crew-tablet.jpg';
import desktopBG from '../../images/crew/background-crew-desktop.jpg';

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
    padding: 0;
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
  padding: 0 1.5em;

  @media screen and (min-width: 480px) {
    section {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

  @media screen and (min-width: 575px) {
    padding: 0 2.5em;
  }

  @media screen and (min-width: 1025px) {
    text-align: left;
    padding: 0 3.375em;

    section {
      display: grid;
      grid-template-columns: 8fr 7fr;
      grid-template-rows: 20vh 43vh 12vh;
      justify-items: left;
    }
  }

  @media screen and (min-width: 1290px) {
    max-width: 80%;
    margin: 0 auto;
    padding: 0;
  }
`;

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
    opacity: 0.25;
    margin-right: 0.75em;
  }

  @media screen and (min-width: 480px) {
    align-self: flex-start;
    font-size: var(--fs-20);
    letter-spacing: 3.375px;
  }

  @media screen and (min-width: 1025px) {
    align-self: flex-start;
    font-size: var(--fs-28);
    letter-spacing: 4.725px;
  }
`;

const TabImg = styled.div`
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  margin-top: 2em;

  img {
    object-fit: cover;
    height: 223px;
    margin: 0 auto;
  }

  @media screen and (min-width: 480px) {
    order: 3;
    border: none;
    overflow: hidden;

    img {
      width: 90%;
      height: auto;
    }
  }

  @media screen and (min-width: 1025px) {
    grid-row: 1 / -1;
    grid-column: 2;
    margin-top: 0;
    align-self: flex-end;

    img {
      max-width: 100%;
    }
  }

  @media screen and (max-height: 750px) {
    img {
      max-width: 80%;
    }
  }
`;

const Slider = styled.ul`
  display: flex;
  justify-content: center;
  gap: 1.1em;
  margin: 2.25em 0;

  @media screen and (min-width: 480px) {
    order: 2;
    margin: 2.25em 0 0;
  }

  @media screen and (min-width: 1025px) {
    margin: 0;
    gap: 1.4em;
    align-self: flex-start;
  }
`;

const Dot = styled.li`
  list-style: none;
  text-transform: uppercase;
  background-color: var(--secondary-text-color);
  opacity: ${({ activedot }) => (activedot ? '1' : '.17')};
  width: 10px;
  height: 10px;
  border-radius: 100%;
  cursor: pointer;
  position: relative;

  &:hover {
    opacity: ${({ activedot }) => (activedot ? '1' : '.5')};
  }

  @media screen and (min-width: 1025px) {
    width: 15px;
    height: 15px;
  }
`;

const Info = styled.div`
  @media screen and (min-width: 1025px) {
    align-self: flex-start;
  }
`;

const CrewRole = styled.p`
  font-family: var(--font-primary);
  font-size: var(--fs-16);
  font-weight: 400;
  color: var(--secondary-text-color);
  text-transform: uppercase;
  margin: 0.5em 0 0.1em;
  opacity: 0.5;

  @media screen and (min-width: 480px) {
    font-size: var(--fs-24);
    margin-top: 2.5em;
  }

  @media screen and (min-width: 1025px) {
    font-size: var(--fs-32);
    margin: 0 0 0.1em;
  }
`;

const CrewName = styled.h2`
  font-family: var(--font-primary);
  font-size: var(--fs-24);
  font-weight: 400;
  color: var(--secondary-text-color);
  text-transform: uppercase;
  margin: 0.25em 0 1em;

  @media screen and (min-width: 480px) {
    font-size: var(--fs-40);
    margin: 0.25em 0 0.5em;
  }

  @media screen and (min-width: 1025px) {
    font-size: var(--fs-56);
    margin: 0.25em 0 0.45em;
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
    max-width: 590px;
  }

  @media screen and (min-width: 1025px) {
    font-size: var(--fs-18);
    line-height: 32px;
    max-width: 444px;
  }
`;

export {
  Hero,
  Container,
  Title,
  TabImg,
  Slider,
  Info,
  Dot,
  CrewRole,
  CrewName,
  Text,
};
