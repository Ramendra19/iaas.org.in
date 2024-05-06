import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get in Touch With IAAS",
  description: "This is Contact Page to connect with IAAS",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
    
      <Breadcrumb
        pageName="Contact Us"
        description="Connect with us effortlessly via our contact page. Share inquiries, feedback, or collaboration ideas."
      />

      <Contact />
      <Footer/>
    </>
  );
};

export default ContactPage;
