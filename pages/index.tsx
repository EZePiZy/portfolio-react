import { Stack, Wrap, WrapItem } from "@chakra-ui/react"
import { NextPage } from "next"
import GdscCanvas from "../components/gdsc-canvas"
import Container from "../components/container"
import Intro from "../components/intro"
import AboutMe from "../components/about-me"

const Home: NextPage = () => {
  return (
    <>
      <Container> 
        <Stack
          spacing={"144px"}
          justifyContent="center"
          alignItems="flex-start"
          px={{base: "5vw", md:"7.5vw"}}
          mt={{base:"12.5vh", md:"22.5vh"}}
          >
            <Wrap>
              <WrapItem><Intro/> </WrapItem> 
              <WrapItem><GdscCanvas/></WrapItem>
            </Wrap>
            <AboutMe/>
        </Stack>
      </Container>
    </>
  )
}

export default Home