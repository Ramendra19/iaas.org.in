"user Client"
import Breadcrumb from "@/components/Common/Breadcrumb";
import FconductorList from "@/components/FsemiList"



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
        description="The global leaders in semiconductors, driving innovation and technological advancements worldwide."
      />

    <FconductorList/>
    </>
  );
};

export default events;
