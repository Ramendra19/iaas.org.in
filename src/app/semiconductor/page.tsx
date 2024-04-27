"user Client"
import Breadcrumb from "@/components/Common/Breadcrumb";
import ConductorList from "@/components/ConductorList";
import FconductorList from "@/components/FsemiList"





import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Semiconductor Industries | IAAS",
  description: "Welcome to Semiconductors page",
  // other metadata
};

const events = () => {
  return (
    <>
      <Breadcrumb
        pageName="Semiconductor Industries"
        description="The Industry-Academia Association of Semiconductors and Space hosts dynamic events driving innovation at the intersection of technology and exploration. Join us in shaping the future of semiconductors and space."
      />

      <ConductorList/>
      <FconductorList/>
    </>
  );
};

export default events;
