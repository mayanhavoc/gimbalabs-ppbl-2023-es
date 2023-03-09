import { Heading, Box } from "@chakra-ui/react";
import Head from "next/head";

export default function LiveCoding() {
  return (
    <>
      <Head>
        <title>PPBL 2023</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box>
        <Heading py="10" size="4xl">Live Coding</Heading>
        <Heading>Gimbalabs - English</Heading>
        <Heading>Gimbalabs Indonesia</Heading>
        <Heading>Gimbalabs Vietnam</Heading>
      </Box>
    </>
  );
}