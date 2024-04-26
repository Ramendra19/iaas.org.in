"user Client"
import Breadcrumb from "@/components/Common/Breadcrumb";
// import Eventdata from "@/components/Eventdata/eventinfo";






import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get in Touch With IAAS",
  description: "This is Contact Page to connect with IAAS",
  // other metadata
};

const events = () => {
  return (
    <>
      <Breadcrumb
        pageName="Our Events"
        description="The Industry-Academia Association of Semiconductors and Space hosts dynamic events driving innovation at the intersection of technology and exploration. Join us in shaping the future of semiconductors and space."
      />

      {/* <Eventdata/> */}
    </>
  );
};

export default events;
