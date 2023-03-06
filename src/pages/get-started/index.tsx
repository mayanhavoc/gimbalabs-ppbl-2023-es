import AboutSLTs from "@/src/components/course-details/About-SLTs";
import Governance from "@/src/components/course-details/Governance";
import ListOfModules from "@/src/components/course-details/List-of-modules";
import PBLFramework from "@/src/components/course-details/PBL-framework";
import React from "react";
import Sidebar from "@/src/components/ui/Text/Sidebar";
import Head from "next/head";

const items = [
  {
    name: "Estructura PBL",
    content: <PBLFramework />,
  },
  {
    name: "About Student Learning Targets",
    content: <AboutSLTs />,
  },
  {
    name: "List of Course Modules",
    content: <ListOfModules />,
  },
  {
    name: "Governanza",
    content: <Governance />,
  },
];

const GetStarted = () => {
  return (
    <>
    <Head>
      <title>Empieza aquí</title>
    </Head>
    <div>
      <Sidebar items={items} />
    </div>
    </>
  );
};

export default GetStarted;