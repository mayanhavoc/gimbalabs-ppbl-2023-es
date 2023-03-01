import {
  Box,
  Container,
  Divider,
  Heading,
  ListItem,
  OrderedList,
  Stack,
  Text,
  UnorderedList,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const AboutSLTs = () => {
  const textColorBlue = useColorModeValue("theme.darkBlue", "theme.blue");
  return (
    <Container maxWidth="80%" marginLeft="1em" marginTop="2em">
      <Text>Módulo 100</Text>
      <Heading size="2xl" color="theme.blue">Introducción y primeros pasos</Heading>
      <Text fontSize="xl" marginTop="1em">Bienvenido de nuevo al aprendizaje basado en problemas de Plutus, (o PPBL por sus siglas en inglés). Este curso funciona de la siguiente manera.</Text>

        <OrderedList margin="1em" marginLeft="3em">
          <ListItem  fontSize="xl">Cada módulo empieza con una lista de Objetivos de Aprendizaje para el Estudiante (SLTs por sus siglas en inglés)</ListItem>
          <ListItem  fontSize="xl">Cada lección en cada módulo está diseñada para ayudarte a dominar cada objetivo de aprendizaje.</ListItem>
          <ListItem  fontSize="xl">Deberás completar proyectos para demostrar dominio de cada objetivo de aprendizaje.</ListItem>
          <ListItem  fontSize="xl">Puedes ver el status de cada uno de tus objetivos de aprendizaje en la esquina superior derecha de esta página.</ListItem>
        </OrderedList>

      <Heading size="2xl" color="theme.blue" marginTop="1em">¿Qué es un objetivo de aprendizaje?</Heading>
      <Text fontSize="xl" marginTop="1em">Un objetivo de aprendizaje describe que sabrás y podrás hacer al finalizar cada lección o módulo. En otras palabras, cada objetivo de aprendizaje existe para ayudarte a entender el "Por que" de cada lección.</Text>
    </Container>
  );
};

export default AboutSLTs;
