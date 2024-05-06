"user Client"
import Breadcrumb from "@/components/Common/Breadcrumb";
import Footer from "@/components/Footer";
import Industries from "@/components/Industries";






import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Up Coming | IAAS",
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

      <Industries/>
      <Footer/>
    </>
  );
};

export default events;
