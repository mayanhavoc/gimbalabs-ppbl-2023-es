import SLTsItems from "@/src/components/lms/Lesson/SLTs";
import { Container, Divider, Heading, Box } from "@chakra-ui/react";
import React from "react";

const SLTs303 = () => {
  return (
    <Container maxWidth="90%" marginTop="2em">
      <SLTsItems moduleTitle="Module 303" moduleNumber={303} />
      <Divider mt="5" />
      <Box py="5">
        <Heading>About this Module</Heading>
      </Box>
    </Container>
  );
};

export default SLTs303;