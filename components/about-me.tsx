import { Heading, VStack, Text, Flex, Box } from "@chakra-ui/react";

export default function AboutMe() {
  return (

    <VStack spacing={4} justifyContent="left" alignItems="flex-start">
      <Heading color={"displayColor"}>
        About Us
      </Heading>
      <Text fontSize="display3" color="textSecondary">
        V.K. Capital is a student-led real-money fund that aims to connect young investors from different UK universities, providing them with the opportunity to experience the techniques that will be required in financial industries such as investment banking, asset management and trading. The fund invests in a range of asset classes, including equities, emerging markets, commodities and fixed income - maintaining an ethical and sustainable focus backed by our investment strategy. The fund is also looking forward to adopting algorithmic trading strategies and expanding in the cryptocurrency market.
      </Text>
    </VStack>

  )

}