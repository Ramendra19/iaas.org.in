import Breadcrumb from "@/components/Common/Breadcrumb";
import Pricing from "@/components/Pricing";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get in Touch With IAAS",
  description: "This is Contact Page to connect with IAAS",
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
    </>
  );
};

export default membershipPage;
