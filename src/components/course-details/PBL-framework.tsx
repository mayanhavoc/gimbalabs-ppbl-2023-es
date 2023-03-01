import {
  Box,
  Container,
  Divider,
  Flex,
  Heading,
  Image,
  Text,
  Stack,
  Center,
  Grid,
  GridItem,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const PBLFramework = () => {
  const textColorBlue = useColorModeValue("theme.darkBlue", "theme.blue")
  return (
      <Container maxWidth="max" marginLeft="2em" marginTop="2em">
        <Heading size="2xl" color="theme.blue" lineHeight="1.4">La meta de cualquier curso PBL es ayudar a las personas a contribuir a proyectos reales.</Heading>
        <Container maxWidth="80%" bgColor="theme.lightGray"  marginTop="2em" marginLeft="0">
          <Flex flexDirection="column">
            <Heading lineHeight="1.4" mt="1em" ml="2em" color="white">
              Los módulos están organizados conforme a la estructura PBL:
            </Heading>
            <Flex mb="2em">
              <Box width="50%" m="2em" ml="5em">
                <Image src="./PBLFramework.png" width="60%"></Image>
              </Box>
              <Box width="50%" mr="4em" display="flex" alignItems="center">
                <Box>

                <Text fontWeight="bold" fontSize="xl" m="0.5em" color="white">Inducción (100):</Text>
                
                <Text fontSize="xl" m="0.5em" color="white">¿Qué es esto? ¿Cómo puedo empezar?</Text>
                <Text m="3" color="white">
                  What is that? How can I get started?
                </Text>

                <Divider my="8" />

                <Divider/>

                <Text fontWeight="bold" fontSize="xl" m="0.5em" color="white">Desarrollando conocimientos básicos (200):</Text>
                <Text fontSize="xl" m="0.5em" color="white">¿Cómo funciona? ¿Qué necesito saber?</Text>

                <Divider/>

                <Text fontWeight="bold" fontSize="xl" m="0.5em" color="white">Especialización (300):</Text>
                <Text fontSize="xl" m="0.5em" color="white">¿Cómo lo construyo?</Text>
                <Divider my="8" />

                <Divider/>

                <Text fontWeight="bold" fontSize="xl" m="0.5em" color="white">Contribuye (400):</Text>
                <Text fontSize="xl" m="0.5em" color="white">¿Cómo puedo contribuir?</Text>
                </Box>
                <Text fontWeight="bold" m="3" color="white">
                  Contributing (400):
                </Text>
                <Text m="3" color="white">
                  How can I contribute?
                </Text>
              </Box>
            </Flex>
          </Flex>
        </Container>
      </Container>
  );
};

export default PBLFramework;
