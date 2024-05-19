"user Client"
import Breadcrumb from "@/components/Common/Breadcrumb";
import Footer from "@/components/Footer";
import Fsemiconductor from "@/components/Fsemiconductor"

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Institute of Semiconductors | IAAS",
  description: "Welcome to Semiconductors page",
  // other metadata
};

const events = () => {
  return (
    <>
      <Breadcrumb
        pageName="Institute of Semiconductors"
        description="The global leaders in semiconductors, driving innovation and technological advancements worldwide."
      />

<Fsemiconductor/>
    <Footer/>
    </>
  );
};

export default events;
