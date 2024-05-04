"user Client"
import Breadcrumb from "@/components/Common/Breadcrumb";
import Spacelist from "@/components/Spacelist"
import Fspacelist from "@/components/Fspacelist/page"



import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Space | IAAS",
  description: "Welcome to Space Information Page",
  // other metadata
};

const events = () => {
  return (
    <>
      <Breadcrumb
        pageName="Welcome to Space Industries Information"
        description="Your ultimate space source which stay updated on missions, tech, and industry innovations."
      />

    <Spacelist/>
    <Fspacelist/>
    </>
  );
};

export default events;
