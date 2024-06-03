import Breadcrumb from "@/components/Common/Breadcrumb";
import Footer from "@/components/Footer";
import Pricing from "@/components/Pricing";


import { Metadata } from "next";

export const metadata: Metadata = {
  title: "IAAS | Become Our Family Member",
  description: "Welcome to IAAS Membership Page",
  // other metadata
};

const membershipPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Join Our Family"
        description="Join IAAS for exclusive access to tech insights, networking, and career growth opportunities. Elevate your future today..."
      />

      <Pricing/>
      <Footer isMembershipPage= {true}/>
    </>
  );
};

export default membershipPage;
