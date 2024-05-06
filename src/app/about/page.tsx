import AboutSectionOne from "@/components/About/AboutSectionOne";
// import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Footer from "@/components/Footer";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About IAAS",
  description: "This is About Page to Know about  Industry-Academia Association of Semiconductors & Space",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About IAAS"
        description="Welcome to the Industry-Academia Association of Semiconductors (IAAS), where innovation meets collaboration in the dynamic world of semiconductor and space technologies."
      />
      <AboutSectionOne />
      {/* <AboutSectionTwo /> */}
      <Footer/>
    </>
  );
};

export default AboutPage;
