import type { AppProps } from "next/app";
import { MeshProvider } from "@meshsdk/react";
import { Box, ChakraProvider, extendTheme, useColorModeValue } from "@chakra-ui/react";
import { ApolloProvider } from "@apollo/client";
import client from "../../apollo-client";
import WithSubnavigation from "../components/ui/Text/Navbar";

import "@fontsource/miriam-libre";
import "@fontsource/open-sans";
import SocialLinks from "../components/lms/Course/SocialLinks";

const theme = extendTheme({
  colors: {
    theme: {
      dark: "#121619",
      light: "#DDD8C4",
      blue: "#9BBAE6",
      darkBlue: "#1560BD",
      green: "#79B995",
      gray: "#454545",
      lightGray: "#1c2634",
      cyan: "#00B5D8",
      yellow: "#EBBA6F",
    },
  },
  fonts: {
    heading: `'Miriam Libre', sans-serif`,
    body: `'Open Sans', serif`,
  },
  components: {
    Button: {
      defaultProps: {
        size: "lg",
        colorScheme: "orange",
      },
    },
    Heading: {
      baseStyle: {
        py: "5",
      },
    },
    Link: {
      baseStyle: {
        color: "theme.yellow",
      },
    },
  },
  styles: {
    global: {
      ".mdx-content": {
        h1: {
          fontSize: "4xl",
          fontWeight: "900",
          mb: "4",
          color: "theme.blue",
        },
        h2: {
          fontSize: "3xl",
          fontWeight: "400",
          my: "4",
          color: "theme.yellow",
        },
        h3: {
          fontSize: "xl",
          fontWeight: "900",
          my: "4",
          color: "theme.green",
        },
        h4: {
          fontSize: "lg",
          fontWeight: "900",
          my: "4",
          color: "theme.green",
        },
        p: {
          fontSize: "lg",
          py: "2"
        },
        ul: {
          ml: "6",
        },
        ol: {
          ml: "6",
        },
        li: {
          fontSize: "lg",
          pl: "2",
          py: "1",
        },
      },
      ".demo-component": {
        h1: {
          fontSize: "md",
          py: "0",
          color: "theme.green"
        },
        h2: {
          fontSize: "xl",
          py: "0",
          color: "theme.green"
        },
        h3: {
          fontSize: "md",
          py: "0",
          color: "theme.green"
        },
        h4: {
          fontSize: "md",
          py: "0",
          color: "theme.green"
        }
      }
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MeshProvider>
      <ApolloProvider client={client}>
        <ChakraProvider theme={theme}>
          <Box minH="100vh">
            <WithSubnavigation />
            <Component {...pageProps} />
          </Box>
          <SocialLinks />
        </ChakraProvider>
      </ApolloProvider>
    </MeshProvider>
  );
}

export default MyApp;
