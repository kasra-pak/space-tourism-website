import React, { useState } from "react"

import { useSiteContext } from "../../contexts/websiteContext";
import { Hero, Container, Title, TabImg, Tabs, Tab, TabHeading, Text, Statistic } from "./Destination.styled";
import Navbar from '../../components/Navbar'
import MobileMenu from "../../components/MobileMenu";


function Destination() {
  const { content } = useSiteContext()
  const [currDestData, setCurrDestData] = useState(content.destinations[0])

  function toggleActiveTab(tabName) {
    setCurrDestData(content.destinations.filter(data => (
      data.name === tabName
    ))[0])
  }

  return (
    <Hero>
    <MobileMenu />
    <Navbar />
    <Container>
      <section>
        <Title><span>01</span>pick your destination</Title>
        <TabImg src={currDestData.images.png} alt={currDestData.name} />
        <Tabs>
          {content.destinations.map((dest, idx) => (
            <Tab
              key={idx}
              onClick={() => toggleActiveTab(dest.name)}
              activetab={dest.name === currDestData.name}
            >
              {dest.name}
            </Tab>
          ))}
        </Tabs>
        <TabHeading>{currDestData.name}</TabHeading>
        <Text>{currDestData.description}</Text>
        <hr />
        <Statistic>avg. distance <span>{currDestData.distance}</span></Statistic>
        <Statistic>est. travel time <span>{currDestData.travel}</span></Statistic>
      </section>
    </Container>
  </Hero>
  )
}

export default Destination