import { Box, Button, Flex, Spacer, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";
import NextLink from "next/link";
import Apply from '../components/form';

export default function Navbar() {
  const Bracket = styled.span`
    color: #8f9094;
    font-weight: 600;
  `;


  return (
    <Flex minWidth='max-content' justifyContent="center" alignItems="center" pl={"1vw"} pr={"2vw"}>
      <Box p='2'>
        <Text
          cursor="pointer"
          color="displayColor"
          fontWeight="bold"
          fontSize="32px">
          <Bracket>&#123;</Bracket>V.K.<Bracket>&#125;</Bracket>
        </Text>
      </Box>
      <Spacer />
      <Box >
        <NextLink href="/" passHref>
          <Button as="a" variant="ghost" p="4" ml="3vw" fontSize="16px" color="textSecondary">
            Home
          </Button>
        </NextLink>
        <NextLink href="/apply" passHref>
          <Button as="a" variant="ghost" p="4" ml="3vw" fontSize="16px" color="textSecondary">
            Apply Now!
          </Button>
        </NextLink>
      </Box>
    </Flex>
  )
}