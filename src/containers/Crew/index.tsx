import React, { useState } from 'react';

import { useSiteContext } from '../../contexts/websiteContext';
import {
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
} from './Crew.styled';
import Navbar from '../../components/Navbar';
import MobileMenu from '../../components/MobileMenu';

function Crew() {
  const { content } = useSiteContext();
  const [currCrewData, setCurrCrewData] = useState(content.crew[0]);

  function toggleActiveTab(crewIndex: number) {
    setCurrCrewData(content.crew[crewIndex]);
  }

  return (
    <Hero>
      <MobileMenu />
      <Navbar />
      <Container>
        <section>
          <Title>
            <span>02</span>meet your crew
          </Title>
          <TabImg>
            <img src={currCrewData.images.png} alt={currCrewData.name} />
          </TabImg>
          <Slider>
            {content.crew.map((item, idx: number) => (
              <Dot
                key={idx}
                onClick={() => toggleActiveTab(idx)}
                activedot={item.name === currCrewData.name}
              ></Dot>
            ))}
          </Slider>
          <Info>
            <CrewRole>{currCrewData.role}</CrewRole>
            <CrewName>{currCrewData.name}</CrewName>
            <Text>{currCrewData.bio}</Text>
          </Info>
        </section>
      </Container>
    </Hero>
  );
}

export default Crew;
