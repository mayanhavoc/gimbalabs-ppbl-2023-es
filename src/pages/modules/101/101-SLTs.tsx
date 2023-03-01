import SLTsItems from "@/src/components/course-modules/SLTs";
import React from "react";

const SLTs101 = () => {
  const items = [
    { id: "101.1", SLT: "Puedo compilar un validador plutus a Untyped Plutus Core (UPLC)." },
    { id: "101.2", SLT: "Entiendo el rol que juega el UPLC en una aplicación decentralizada en Cardano." },
    { id: "101.3", SLT: "Puedo utilizar Demeter.run para compilar un script en formato .plutus" },
    { id: "101.4", SLT: "Puedo configurar un ambiente local para desarrollar Plutus utilizando un nix shell, y utilizarlo para compilar un script en formato .plutus"},
  ];

  return (
    <SLTsItems module="Módulo 101" items={items} />
  );
};

export default SLTs101;
