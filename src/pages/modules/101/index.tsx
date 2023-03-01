import Sidebar from "@/src/components/ui/Text/Sidebar";
import React from "react";
import Head from "next/head";

import slt from "@/src/data/slts-english.json"

const items = [
  {
    name: "Verifica",
    content: <> <Example /> <Module101 /> </>,
  },
  {
    name: "Introducción",
    content: <> <Status101 /> <Introduction /> </>,
  },
  {
    name: "Lección 1",
    content: <><Status101 /> <br/> <Lesson1011 /></>,
  },
  {
    name: "Lección 2",
    content: <><Status101 /> <br/> <Lesson1012 /></>,
  },
  {
    name: "Lección 3",
    content: <><Status101 /> <br/> <Lesson1013 /></>,
  },
  {
    name: "Lección 4",
    content: <><Status101 /> <br/> <Lesson1004 /></>,
  },
];

const HomeModule101 = () => {
  return (
    <>
      <Head>
        <title>PPBL Módulo 101</title>
      </Head>
      <div>
        <Sidebar items={items} />
      </div>
    </>
  );
};

export default Module101;
