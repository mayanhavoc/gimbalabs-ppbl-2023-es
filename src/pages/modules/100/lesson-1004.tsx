import ContributorPairMintingComponent from "@/src/components/course-modules/100/ContributorMinter/ContributorPairMintingComponent";
import AssignmentComponent from "@/src/components/lms/Lesson/AssignmentComponent";
import SuccessComponent from "@/src/components/lms/Lesson/SuccessComponent";
import SLT from "@/src/components/ui/Text/SLT";
import { Box, Heading, ListItem, Stack, StackDivider, Text, UnorderedList } from "@chakra-ui/react";
import { Asset } from "@meshsdk/core";
import { useAssets, useWallet } from "@meshsdk/react";
import { useEffect, useState } from "react";

export default function Lesson1004() {
    const { connected } = useWallet();
    const walletAssets = useAssets();

    const [connectedPPBL2023Token, setConnectedPPBL2023Token] = useState<Asset | undefined>(undefined);

    useEffect(() => {
      if (walletAssets) {
        const _ppbl2023 = walletAssets.filter(
          (a: Asset) => a.unit.substring(0, 56) == "05cf1f9c1e4cdcb6702ed2c978d55beff5e178b206b4ec7935d5e056"
        );
        setConnectedPPBL2023Token(_ppbl2023[0]);
      }
    }, [walletAssets]);

    return (
      <Stack maxWidth="80%" marginLeft="1em" marginTop="2em" divider={<StackDivider borderColor="theme.three" />}>
        <SLT id="100.4">Puedo acuñar un Token de Contribuidor al PPBL</SLT>

        <SuccessComponent mastery={connected && connectedPPBL2023Token != undefined}>
          <Text py="2">Tienes un PPBL2023 Token en tu billetera.</Text>
          <Text py="2">Revisa tu billetera para ver si tienes un token con el Policy Id</Text>
          <code>05cf1f9c1e4cdcb6702ed2c978d55beff5e178b206b4ec7935d5e056</code>
        </SuccessComponent>
        <AssignmentComponent>
          <Text>
            Si tienes una billetera conectada al Testnet de Pre-producción de Cardano, puedes completar esta tarea.
          </Text>
          <Box my="5" p="2" bg="gray.500" color="gray.900">
            {connected ? (
              <>
                {connectedPPBL2023Token != undefined && (
                  <>
                    <Heading size="md" py="3">
                      &#127881; Parece que ya tienes un token &#127881;
                    </Heading>
                    <Text py="3">!Felicidades, has demostrado maestría de este objetivo de aprendizaje! </Text>
                    <Heading size="md" py="3">
                      &#127959; Up Next: &#127959;
                    </Heading>
                    <UnorderedList>
                      <ListItem>
                        {" "}
                        En este curso de PBL de Plutus, aprenderás como el token PPBL2023 se acuño y como usar tokens para hacer que las aplicaciones respondan de diferente manera cuando diferentes tokens están conectadas.
                      </ListItem>
                      <ListItem>
                        En los Módulos 101 y 102, aprenderás como cambiar el número de la suerte en tu nuevo Token de Contribuidor.
                      </ListItem>
                      <ListItem>
                        Aprenderás tambié como hackear este sitio web para acuñar cuantos tokens PPBL2023 quieras - discutiremos esto más adelante.
                      </ListItem>
                    </UnorderedList>
                    <Text py="3"></Text>
                    <Text py="3">!Estamos emocionados por participar de esta aventura contigo - empecemos!</Text>
                  </>
                )}
                {connectedPPBL2023Token == undefined && (
                  <>
                    <ContributorPairMintingComponent />
                  </>
                )}
              </>
            ) : (
              "asegúrate de conectar tu billetera"
            )}
          </Box>
        </AssignmentComponent>
      </Stack>
    );
  }
