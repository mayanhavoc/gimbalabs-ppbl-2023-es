import SLTsItems from "@/src/components/lms/Lesson/SLTs";
import { Container, Divider, Heading, Box } from "@chakra-ui/react";
import React from "react";

const SLTs103 = () => {
  return (
    <Container maxWidth="90%" marginTop="2em">
      <SLTsItems moduleTitle="Module 103" moduleNumber={103} />
      <Divider mt="5" />
      <Box py="5">
        <Heading>About this Module</Heading>
      </Box>
    </Container>
  );
};

export default SLTs103;