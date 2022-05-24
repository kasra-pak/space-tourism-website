import React from "react";

import { Hero, Container, Title, Text, Button } from "./Home.styled";
import Navbar from '../../components/Navbar'
import MobileMenu from "../../components/MobileMenu";

function Home() {
  return (
    <Hero>
      <MobileMenu />
      <Navbar />
      <Container>
        <section>
          <Title><span>so, you want to travel to</span> space</Title>
          <Text>Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!</Text>
        </section>
        <Button href="#">
          explore
        </Button>
      </Container>
    </Hero>
  )
}

export default Home
