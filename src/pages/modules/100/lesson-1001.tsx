import AssignmentComponent from "@/src/components/lms/Lesson/AssignmentComponent";
import SuccessComponent from "@/src/components/lms/Lesson/SuccessComponent";
import VideoComponent from "@/src/components/lms/Lesson/VideoComponent";
import SLT from "@/src/components/ui/Text/SLT";
import { Box, Grid, Stack, StackDivider, Text } from "@chakra-ui/react";
import { CardanoWallet, useAddress, useNetwork, useWallet } from "@meshsdk/react";

export default function Lesson1001() {
    const { connected, wallet } = useWallet();
    const address = useAddress();
    const network = useNetwork();
  
    return (
        <Stack maxWidth="80%" marginLeft="1em" marginTop="2em" divider={<StackDivider borderColor="theme.three" />}>
        <SLT id="100.1">Puedo conectar una billetera Cardano al testnet de pre-producción</SLT>
        <Grid templateColumns="repeat(2, 1fr)" gap={10}>
          <AssignmentComponent>
            <Text py="5">Intenta conectar tu billetera. !Asegurate de estar conectado a una testnet!</Text>
            <Box mb="20">
              <CardanoWallet />
            </Box>
            {connected ? (
              <Box>
                {network == 0 ? (
                  "Éxito!"
                ) : (
                  "Revisa la conección de red"
                )}
              </Box>
            ) : (
              "No hay conexión"
            )}
          </AssignmentComponent>
          <SuccessComponent mastery={connected && network == 0}>Estás conectado al Testnet de Cardano</SuccessComponent>
        </Grid>
  
        <VideoComponent videoId="aa">Placeholder Video (for demo)</VideoComponent>
      </Stack>
    );
  }
  