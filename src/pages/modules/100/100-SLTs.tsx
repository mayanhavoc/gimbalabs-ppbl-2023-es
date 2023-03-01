import SLTsItems from "@/src/components/course-modules/SLTs";
import React from "react";

const SLTs100 = () => {
  const items = [
    { id: "100.1", SLT: "Puedo conectar una billetera Cardano a la testnet de pre-producción" },
    { id: "100.2", SLT: "Puedo obtener tAda gratis en la testnet de pre-producción" },
    { id: "100.3", SLT: "Se como guardar seguramente mis llaves" },
    { id: "100.4", SLT: "Puedo acuñar un token de contribuidor del PPBL" },
  ];

  return (
    <SLTsItems module="Módulo 100" items={items} />
  );
};

export default SLTs100;

