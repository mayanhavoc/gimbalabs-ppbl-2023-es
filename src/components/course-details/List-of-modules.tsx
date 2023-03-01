import { Button, Container, Divider, Heading, List, ListIcon, ListItem, Text, useColorModeValue } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import ModuleListWithSLTs from "../lms/Course/ModuleListWithSLTs";

const ListOfModules = () => {
    const items = [
        { '100': 'Introducción y primeros pasos' },
        { '101': 'Escribe tu primer Smart Contract' },
        { '102': 'Construye tus primeras transacciones' },
        { '103': 'Que vas a aprender en este curso' },
        { '201': 'Construye una plantilla para tu dApp' },
        { '202': 'Tres maneras de acuñar un token' },
        { '203': 'Tres maneras de acuñar un NFT' },
        { '204': 'Escribir y utilizar validadores Plutus' },
        { '301': 'Proyecto: El grifo de PPBL' },
        { '302': 'Fundamentos básicos de On-chain' },
        { '303': 'Fundamentos básicos de Off-chain: Transacciones, Interfaz de usuario, y Búsquedas' },
        { '304': 'Introducción al testing y optimización' },
        { '401': 'Introducción al proyecto de tesorería y depósito en garantía de Gimbalabs' }
    ];
    
    return (
        <Container maxWidth="max" marginLeft="0">
                <Heading size="2xl" color="theme.blue" marginTop="1em">El Plutus PBL está organizado por módulos</Heading>
                <Text fontSize="xl" marginTop="1em">
                    Este es el primer módulo del curso, titulado "Introducción y primeros pasos".
                </Text>
            
    
            <Divider marginTop="1em"/>
    

            <Heading size="2xl" color="theme.blue" marginTop="1em">Esta es una lista de todos los módulos de este curso:</Heading>

            <List spacing={3} marginTop="1em">
                {items.map((item, index) => {
                    const [moduleNumber, moduleName] = [Object.keys(item)[0], Object.values(item)[0]];
                    return (
                        <ListItem key={moduleNumber}>
                            <ListIcon as={CheckCircleIcon} color="theme.green" />
                            <Text fontWeight="bold" style={{ display: 'inline-flex' }}>
                                <Text color="theme.blue" style={{ marginRight: 4 }}>{moduleNumber}</Text>
                                {moduleName}
                            </Text>
                        </ListItem>
                    );
                })}
            </List>
        </Container>
    );
    
    
};

export default ListOfModules;
