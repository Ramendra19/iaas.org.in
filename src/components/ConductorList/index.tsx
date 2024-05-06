"use client";
import React from "react";
import Link from "next/link";

interface eventdetail {
  tittle: string;
  description: string;
  // venue:  string;
  // link: string;
}

interface eventdeatilplace {
  title: string;
  members: eventdetail[];
}

const eventdetails:eventdetail[] = [
  
  {
      tittle: "TCL Labs",
      description: "Where precision meets innovation in analytical solutions. Established with a commitment to redefine the standards of quality, safety, and performance, TCL Labs stands as a beacon of excellence in the field of analytical services."
    },
  
  {
      tittle: "Cubicuss",
      description: "Mission is to revolutionize industries through innovative solutions and sustainable practices. Discover how we're making a difference every day."
    },
  
  {
      tittle: "Next Planet Inc",
      description: "Next Planet Inc is a GenX electric vehicle, energy and aerospace company with strong R&D base led by IITians and professionals from pioneer organisations like ISRO, etc."
    },
  
  
  {
      tittle: "Intel India",
      description: "Engaged in semiconductor design and research & development."
    },
    {
      tittle: "Qualcomm India",
      description: "Involved in semiconductor design, development, and manufacturing."
    },
    {
      tittle: "Texas Instruments India",
      description: "Focused on semiconductor design, manufacturing, and research & development."
    },
    {
      tittle: "STMicroelectronics India",
      description: "Engaged in semiconductor design, manufacturing, and research & development."
    },
    {
      tittle: "NXP Semiconductors India",
      description: "Involved in semiconductor design, development, and manufacturing."
    },
    {
      tittle: "Cypress Semiconductor India",
      description: "Engaged in semiconductor design, development, and manufacturing."
    },
    {
      tittle: "Micron India",
      description: "Involved in semiconductor research, development, and manufacturing."
    },
    {
      tittle: "Analog Devices India",
      description: "Focused on semiconductor design, development, and manufacturing."
    },
    {
      tittle: "Broadcom India",
      description: "Engaged in semiconductor design, development, and manufacturing."
    },
    {
      tittle: "Synopsys India",
      description: "Provides semiconductor design tools and services."
    },
    {
      tittle: "Cadence Design Systems India",
      description: "Offers semiconductor design software and solutions."
    },
    {
      tittle: "Mentor Graphics India",
      description: "Provides semiconductor design tools and services."
    },
    {
      tittle: "eInfochips (An Arrow Company)",
      description: "Offers semiconductor design services and solutions."
    },
    {
      tittle: "Tata Consultancy Services (TCS)",
      description: "Offers semiconductor design, testing, and consulting services."
    },
    {
      tittle: "Wipro Limited",
      description: "Offers semiconductor design, testing, and consulting services."
    },
    {
      tittle: "Indian Institute of Technology (IIT) Bombay",
      description: "Conducts research and offers education programs related to semiconductor technology."
    },
    {
      tittle: "Indian Institute of Science (IISc) Bangalore",
      description: "Conducts research in semiconductor materials, devices, and technologies."
    },
    {
      tittle: "Sankalp Semiconductor",
      description: "Provides semiconductor design services including analog and mixed-signal design."
    },
    {
      tittle: "Cosmic Circuits (now part of Cadence Design Systems)",
      description: "Specialized in providing semiconductor IP cores for various applications."
    },
    {
      tittle: "Ittiam Systems",
      description: "Offers semiconductor design services, specializing in multimedia and communication technologies."
    },
    {
      tittle: "Mistral Solutions",
      description: "Provides semiconductor design services and solutions for embedded systems."
    },
    {
      tittle: "SoftJin Technologies",
      description: "Offers semiconductor design and verification solutions, including tools and services."
    },
    {
      tittle: "Test and Verification Solutions (T&VS) India",
      description: "Provides semiconductor testing and verification services."
    },
    {
      tittle: "SmartPlay Technologies",
      description: "Offers semiconductor design services, specializing in digital, analog, and mixed-signal designs."
    },
    {
      tittle: "eInfochips (An Arrow Company)",
      description: "Offers semiconductor design and verification services, including FPGA and ASIC design."
    },
    {
      tittle: "Sankhya Technologies",
      description: "Develops semiconductor IP cores and system-on-chip (SoC) solutions for various applications."
    },
    {
      tittle: "Crest Ultrasonics India",
      description: "Engaged in manufacturing ultrasonic cleaning systems used in semiconductor fabrication."
    },
    {
      tittle: "Midas Communication Technologies Pvt. Ltd.",
      description: "Provides semiconductor design services and solutions for communication applications."
    },
    {
      tittle: "NXP Software India",
      description: "Offers software solutions for semiconductor-based systems, focusing on multimedia and connectivity."
    },
    {
      tittle: "ChipEdge Technologies Pvt. Ltd.",
      description: "Provides semiconductor training and skill development programs for engineers and professionals."
    },
    {
      tittle: "Semi-Conductor Laboratory (SCL)",
      description: "Engaged in the manufacturing of semiconductor devices and electronic components."
    },
    {
      tittle: "MosChip Semiconductor Technology Ltd.",
      description: "Provides semiconductor solutions including IoT, connectivity, and networking."
    },
    {
      tittle: "Nelso Technology Pvt. Ltd.",
      description: "Offers semiconductor testing and packaging services."
    },
    {
      tittle: "Saankhya Labs",
      description: "Develops semiconductor IP cores and wireless communication solutions."
    },
    {
      tittle: "Venus Semiconductors",
      description: "Specializes in semiconductor manufacturing and assembly services."
    },
    {
      tittle: "Sibridge Technologies",
      description: "Offers semiconductor verification and validation services, including FPGA prototyping."
    },
    {
      tittle: "VVDN Technologies",
      description: "Provides semiconductor design and manufacturing services for IoT, AI, and automotive applications."
    },
    {
      tittle: "Vimicro Electronics Corporation India Pvt. Ltd.",
      description: "Engaged in the design and development of semiconductor products for multimedia and imaging applications."
    },
    {
      tittle: "Vi Microsystems Pvt. Ltd.",
      description: "Offers semiconductor design services, specializing in custom IC design."
    },
    {
      tittle: "Silicon Interfaces",
      description: "Provides semiconductor IP cores and design services for ASIC and FPGA development."
    },
    {
      tittle: "Invecas Technologies Pvt. Ltd.",
      description: "Provides semiconductor design services and solutions for AI, automotive, and networking applications."
    },
    {
      tittle: "Sanmar Foundries Limited",
      description: "Engaged in the manufacturing of semiconductor equipment and components."
    },
    {
      tittle: "TronicsZone",
      description: "Offers semiconductor design and development services for embedded systems and IoT applications."
    },
    {
      tittle: "Sivalabs Technologies",
      description: "Provides semiconductor testing and validation services, specializing in RF and mixed-signal ICs."
    },
    {
      tittle: "Eurys Infosystems Pvt. Ltd.",
      description: "Offers semiconductor design and verification services, including ASIC and FPGA design."
    },
    {
      tittle: "Sierra Atlantic",
      description: "Provides semiconductor software development and testing services for semiconductor companies."
    },
    {
      tittle: "Vayavya Labs",
      description: "Specializes in semiconductor tools and services for SoC design and verification."
    },
    {
      tittle: "L&T Technology Services",
      description: "Offers semiconductor engineering services including design, testing, and manufacturing support."
    },
    {
      tittle: "Saankhya Labs Pvt. Ltd.",
      description: "Engaged in the design and development of semiconductor products for wireless communication and broadcast applications."
    },
    {
      tittle: "KTwo Technologies",
      description: "Provides semiconductor design services, specializing in digital, analog, and mixed-signal designs."
    },
    {
      tittle: "Syschip Semiconductor & Systems Design Pvt. Ltd.",
      description: "Offers semiconductor design and verification services, focusing on ASIC and FPGA development."
    },
    {
      tittle: "Cyient",
      description: "Provides semiconductor engineering services including design, testing, and supply chain management."
    },
    {
      tittle: "Pathpartner Technology",
      description: "Offers semiconductor design and development services for embedded vision and AI applications."
    },
    {
      tittle: "Tessolve Semiconductor",
      description: "Provides semiconductor engineering and testing services, specializing in test development and validation."
    },

    {
      tittle: "Sasken Technologies",
      description: "Offers semiconductor engineering services including design, testing, and software development."
    },
    {
      tittle: "Interra Systems",
      description: "Provides semiconductor software solutions for quality assurance and compliance testing."
    },
    {
      tittle: "Sasken Communication Technologies Limited",
      description: "Engaged in semiconductor design and development for communication and networking applications."
    },
    {
      tittle: "Wipro VLSI Solutions",
      description: "Offers semiconductor design services, including digital, analog, and mixed-signal designs."
    },
    {
      tittle: "iWave Systems Technologies",
      description: "Provides semiconductor design and development services for embedded systems and FPGA-based solutions."
    },
    {
      tittle: "Arastu Systems",
      description: "Specializes in semiconductor IP cores and design services for high-performance computing and AI applications."
    }
    
   


];

const Industries = () => {
  return (
    <div className="flex justify-center items-center">
  <div className="container bg-white dark:bg-black p-16 rounded-md shadow-lg">
    <section id="editorial-board" className="mb-8">
      <h2 className="flex justify-center text-colour text-xl font-semibold">
       Bharat
      </h2>
      <table className="w-full items-center my-5 table-fixed overflow-hidden rounded-lg">
        <thead>
          <tr className="bg-primary">
            <th className="w-1/2 border p-2 text-left text-white dark:bg-black">Company</th>
            <th className="w-1/2 border p-2 text-left text-white dark:bg-black">Description</th>
            {/* <th className="w-1/2 border p-2 text-left text-white dark:bg-black">Venue</th> */}
            {/* <th className="w-1/2 border p-2 text-left text-white dark:bg-black">For More Information</th> */}
          </tr>
        </thead>
        <tbody>
          {eventdetails.map((member, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? "bg-blue-100 dark:bg-gray-dark" : "bg-white dark:bg-black"}
            >
              <td className="border p-2 text-left">
              {member.tittle}
              </td>
              <td className="border p-2 text-left text-black dark:text-white">
                {member.description}
              </td>
              {/* <td className="border p-2 text-left text-black dark:text-white">
                {member.venue}
              </td> */}
              {/* <td className="border p-2 text-left text-black dark:text-white">
              <Link className="text-blue-500" href={member.link}> Click Here
                  
                </Link>
               
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  </div>
</div>

  );
};

export default Industries;