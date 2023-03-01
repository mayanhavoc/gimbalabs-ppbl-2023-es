import { Button, Container, Divider, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const Governance = () => {
  const textColorBlue = useColorModeValue("theme.darkBlue", "theme.blue");
  return (
    <Container maxWidth="max" marginLeft="1em" marginTop="2em">
      <Heading size="2xl" color="theme.blue">Más allá de Contribución: Governanza</Heading>
      <Text fontSize="xl" marginTop="1em">Nuestro intención es que seas más que un contribuidor.</Text>
      <Text fontSize="xl" marginTop="1em">Queremos que tomes decisiones que ayuden a responder la pregunta:</Text>

      <Heading size="2xl" color="theme.green" marginTop="1em">"¿Qué deberíamos hacer después?"</Heading>
      <Text fontSize="xl" marginTop="1em">Creemos que cuando las personas son educadas, están mejor preparadas para tomar decisiones. Creemos que la mejor manera de educar es haciendo.</Text>
      <Text fontSize="xl" marginTop="1em">Asi que empecemos.</Text>
    </Container>
  );
};

export default Governance;
