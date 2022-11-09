import { Stack, Wrap, WrapItem } from "@chakra-ui/react"
import { NextPage } from "next"
import Apply from "../components/form"
import Container from "../components/container"

const Form: NextPage = () => {
    return (
        <>
            <Container>
                <Stack
                    spacing={"144px"}
                    justifyContent="center"
                    alignItems="flex-start"
                    px={{ base: "5vw", md: "7.5vw" }}
                    mt={{ base: "12.5vh", md: "22.5vh" }}
                >
                    <Wrap>
                        <WrapItem><Apply /> </WrapItem>

                    </Wrap>

                </Stack>
            </Container>
        </>
    )


}

export default Form
