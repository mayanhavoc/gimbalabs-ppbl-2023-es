import AssignmentComponent from "@/src/components/lms/Lesson/AssignmentComponent";
import SuccessComponent from "@/src/components/lms/Lesson/SuccessComponent";
import SLT from "@/src/components/ui/Text/SLT";
import { Grid, Stack, StackDivider, Text } from "@chakra-ui/react";

export default function Lesson1003() {
    return (
      <Stack maxWidth="80%" marginLeft="1em" marginTop="2em" divider={<StackDivider borderColor="theme.three" />}>
        <SLT id="100.3">Se como guardar seguramente mis llaves</SLT>
        <Grid templateColumns="repeat(2, 1fr)" gap={10}>
          <AssignmentComponent>
            <Text py="2">
              Cuando construyes en Cardano, hay diferentes maneras de manejar tus llaves. Vamos a empezar con mnemotécnica. Más adelante en el curso discutiremos el manejo de llaves en el cardano-cli y en aplicaciones.
            </Text>
          </AssignmentComponent>
          <SuccessComponent mastery={false}>Estás seguro que nadie más puede accesar a tus llaves.</SuccessComponent>
        </Grid>
      </Stack>
    );
  }
  