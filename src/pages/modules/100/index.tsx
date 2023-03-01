import Sidebar from "@/src/components/ui/Text/Sidebar";
import React from "react";
import Head from "next/head";

const items = [
  {
    name: "Objetivos de Aprendizaje",
    content: <SLTs100 />,
  },
  {
    name: "Lección 1",
    content: <><Status100 /> <br/> <Lesson1001 /></>,
  },
  {
    name: "Lección 2",
    content: <><Status100 /> <br/> <Lesson1002 /></>,
  },
  {
    name: "Lección 3",
    content: <><Status100 /> <br/> <Lesson1003 /></>,
  },
  {
    name: "Lección 4",
    content: <><Status100 /> <br/> <Lesson1004 /></>,
  },
];

const Module100 = () => {

  const moduleSelected = slt.modules.find((m) => m.number === 100);

  return (
    <>
    <Head>
      <title>PPBL Módulo 100</title>
    </Head>
    <div>
      <Sidebar items={moduleSelected?.lessons ?? []} modulePath="/modules/100" selected={0} />
    </div>
    </>
  );
};

export default Module100;