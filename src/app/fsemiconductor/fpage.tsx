"user Client"
import Breadcrumb from "@/components/Common/Breadcrumb";
import FconductorList from "@/components/FconductorList/findex"



import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Foreign Semiconductor Industries | IAAS",
  description: "Welcome to Semiconductors page",
  // other metadata
};

const events = () => {
  return (
    <>
      <Breadcrumb
        pageName="Foreign Industries List"
        description="The Industry-Academia Association of Semiconductors and Space hosts dynamic events driving innovation at the intersection of technology and exploration. Join us in shaping the future of semiconductors and space."
      />

    <FconductorList/>
    </>
  );
};

export default events;
