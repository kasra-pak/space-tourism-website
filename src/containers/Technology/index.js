import React, { useState } from "react"

import { useSiteContext } from "../../contexts/websiteContext";
import { Hero, Container, Title, TabImg, Slider, Circle, Term, CrewName, Text } from "./Technology.styled";
import Navbar from '../../components/Navbar'
import MobileMenu from "../../components/MobileMenu";


function Technology() {
  const { content } = useSiteContext()
  const [currTechData, setCurrTechData] = useState(content.technology[0])

  function toggleActiveTab(crewIndex) {
    setCurrTechData(content.technology[crewIndex])
  }

  return (
    <Hero>
    <MobileMenu />
    <Navbar />
    <Title><span>03</span>space launch 101</Title>
    <TabImg src={currTechData.images.landscape} alt={currTechData.name} />
    <Container>
      <section>
        
        <Slider>
          {content.technology.map((item, idx) => (
            <Circle
              key={idx}
              onClick={() => toggleActiveTab(idx)}
              activecircle={item.name === currTechData.name}
            >
              {idx + 1}
            </Circle>
          ))}
        </Slider>
        <Term>the terminology ...</Term>
        <CrewName>{currTechData.name}</CrewName>
        <Text>{currTechData.description}</Text>
      </section>
    </Container>
  </Hero>
  )
}

export default Technology