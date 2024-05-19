"use client";
import React from "react";
import Link from "next/link";

interface eventdetail {
  title: string;
  description: string;
  link: string;
}

interface eventdeatilplace {
  title: string;
  members: eventdetail[];
}




const eventfrogein: eventdetail[] = [
    {
      "title": "Massachusetts Institute of Technology (MIT), USA",
      "description": "Nanoelectronics",
      "link": "https://www.mit.edu/"
    },
    {
      "title": "Stanford University, USA",
      "description": "Quantum Computing",
      "link": "https://www.stanford.edu/"
    },
    {
      "title": "University of California, Berkeley, USA",
      "description": "Integrated Circuits",
      "link": "https://www.berkeley.edu/"
    },
    {
      "title": "University of Cambridge, UK",
      "description": "Semiconductor Physics",
      "link": "https://www.cam.ac.uk/"
    },
    {
      "title": "ETH Zurich, Switzerland",
      "description": "Microfabrication",
      "link": "https://ethz.ch/en.html"
    },
    {
      "title": "Technical University of Munich (TUM), Germany",
      "description": "Semiconductor Materials",
      "link": "https://www.tum.de/en/"
    },
    {
      "title": "Eindhoven University of Technology, Netherlands",
      "description": "Photonic Integration",
      "link": "https://www.tue.nl/en/"
    },
    {
      "title": "École Polytechnique Fédérale de Lausanne (EPFL), Switzerland",
      "description": "Quantum Engineering",
      "link": "https://www.epfl.ch/en/"
    },
    {
      "title": "University of Tokyo, Japan",
      "description": "Semiconductor Device Engineering",
      "link": "https://www.u-tokyo.ac.jp/en/"
    },
    {
      "title": "Seoul National University, South Korea",
      "description": "Nanoscale Electronics",
      "link": "https://en.snu.ac.kr/"
    },
    {
      "title": "California Institute of Technology (Caltech), USA",
      "description": "Quantum Information Science",
      "link": "https://www.caltech.edu/"
    },
    {
      "title": "University of Oxford, UK",
      "description": "Semiconductor Nanomaterials",
      "link": "https://www.ox.ac.uk/"
    },
    {
      "title": "University of Illinois Urbana-Champaign, USA",
      "description": "Flexible Electronics",
      "link": "https://illinois.edu/"
    },
    {
      "title": "University of Tokyo, Japan",
      "description": "Semiconductor Device Physics",
      "link": "https://www.u-tokyo.ac.jp/en/"
    },
    {
      "title": "Swiss Federal Institute of Technology in Lausanne (EPFL), Switzerland",
      "description": "Quantum Computing",
      "link": "https://www.epfl.ch/en/"
    },
    {
      "title": "University of Michigan, USA",
      "description": "Semiconductor Optoelectronics",
      "link": "https://umich.edu/"
    },
    {
      "title": "National University of Singapore (NUS)",
      "description": "Semiconductor Manufacturing",
      "link": "https://www.nus.edu.sg/"
    },
    {
      "title": "University of California, Santa Barbara, USA",
      "description": "Spintronics",
      "link": "https://www.ucsb.edu/"
    },
    {
      "title": "Technical University of Munich (TUM), Germany",
      "description": "Semiconductor Device Fabrication",
      "link": "https://www.tum.de/en/"
    },
    {
      "title": "Kyoto University, Japan",
      "description": "Semiconductor Materials Chemistry",
      "link": "https://www.kyoto-u.ac.jp/en/"
    },
    {
      "title": "Stanford University, USA",
      "description": "Semiconductor Photonics",
      "link": "https://www.stanford.edu/"
    },
    {
      "title": "University of Cambridge, UK",
      "description": "Semiconductor Quantum Dots",
      "link": "https://www.cam.ac.uk/"
    },
    {
      "title": "ETH Zurich, Switzerland",
      "description": "Semiconductor Nanoelectronics",
      "link": "https://ethz.ch/en.html"
    },
    {
      "title": "University of California, Berkeley, USA",
      "description": "Semiconductor Process Integration",
      "link": "https://www.berkeley.edu/"
    },
    {
      "title": "Massachusetts Institute of Technology (MIT), USA",
      "description": "Semiconductor Device Engineering",
      "link": "https://web.mit.edu/"
    },
    {
      "title": "University of Tokyo, Japan",
      "description": "Semiconductor Device Fabrication",
      "link": "https://www.u-tokyo.ac.jp/en/"
    },
    {
      "title": "University of Michigan, USA",
      "description": "Semiconductor Materials Science",
      "link": "https://umich.edu/"
    },
    {
      "title": "University of Cambridge, UK",
      "description": "Semiconductor Quantum Devices",
      "link": "https://www.cam.ac.uk/"
    },
    {
      "title": "University of California, Los Angeles (UCLA), USA",
      "description": "Semiconductor Nanomaterials",
      "link": "https://www.ucla.edu/"
    },
    {
      "title": "University of Illinois Urbana-Champaign, USA",
      "description": "Semiconductor Device Physics",
      "link": "https://illinois.edu/"
    },
    {
      "title": "École Polytechnique Fédérale de Lausanne (EPFL), Switzerland",
      "description": "Semiconductor Nanophotonics",
      "link": "https://www.epfl.ch/en/"
    },
    {
      "title": "California Institute of Technology (Caltech), USA",
      "description": "Semiconductor Quantum Computing",
      "link": "https://www.caltech.edu/"
    },
    {
      "title": "University of Oxford, UK",
      "description": "Semiconductor Spintronics",
      "link": "https://www.ox.ac.uk/"
    },
    {
      "title": "Georgia Institute of Technology (Georgia Tech), USA",
      "description": "Semiconductor Power Electronics",
      "link": "https://www.gatech.edu/"
    },
    {
      "title": "University of California, Santa Barbara (UCSB), USA",
      "description": "Semiconductor Quantum Materials",
      "link": "https://www.ucsb.edu/"
    },
    {
      "title": "University of California, San Diego (UCSD), USA",
      "description": "Semiconductor Device Characterization",
      "link": "https://ucsd.edu/"
    },
    {
      "title": "University of Texas at Austin, USA",
      "description": "Semiconductor Nanofabrication",
      "link": "https://www.utexas.edu/"
    },
    {
      "title": "Imperial College London, UK",
      "description": "Semiconductor Device Modeling",
      "link": "https://www.imperial.ac.uk/"
    },
    {
      "title": "Tokyo Institute of Technology, Japan",
      "description": "Semiconductor Optoelectronics",
      "link": "https://www.titech.ac.jp/english/"
    },
    {
      "title": "University of Washington, USA",
      "description": "Semiconductor Quantum Sensing",
      "link": "https://www.washington.edu/"
    },
    {
      "title": "ETH Zurich, Switzerland",
      "description": "Semiconductor Device Physics",
      "link": "https://www.ethz.ch/en.html"
    },
    {
      "title": "University of Cambridge, UK",
      "description": "Semiconductor Materials Growth",
      "link": "https://www.cam.ac.uk/"
    },
    {
      "title": "Purdue University, USA",
      "description": "Semiconductor Device Fabrication",
      "link": "https://www.purdue.edu/"
    },
    {
      "title": "University of Michigan, USA",
      "description": "Semiconductor Quantum Information",
      "link": "https://umich.edu/"
    },
    {
      "title": "University of California, Berkeley (UC Berkeley), USA",
      "description": "Semiconductor Nanoelectronics",
      "link": "https://www.berkeley.edu/"
    },
    {
      "title": "University of Tokyo, Japan",
      "description": "Semiconductor Device Integration",
      "link": "https://www.u-tokyo.ac.jp/en/"
    },
    {
      "title": "Stanford University, USA",
      "description": "Semiconductor Photonics",
      "link": "https://www.stanford.edu/"
    },
    {
      "title": "University of Illinois at Urbana-Champaign, USA",
      "description": "Semiconductor Spintronics",
      "link": "https://illinois.edu/"
    },
    {
      "title": "University of Pennsylvania, USA",
      "description": "Semiconductor Device Reliability",
      "link": "https://www.upenn.edu/"
    },
    {
      "title": "Massachusetts Institute of Technology (MIT), USA",
      "description": "Semiconductor Nanomaterials",
      "link": "https://www.mit.edu/"
    },
    {
      "title": "University of Oxford, UK",
      "description": "Semiconductor Device Physics",
      "link": "https://www.ox.ac.uk/"
    },
    {
      "title": "Eindhoven University of Technology, Netherlands",
      "description": "Semiconductor Process Engineering",
      "link": "https://www.tue.nl/"
    },
    {
      "title": "University of California, Los Angeles (UCLA), USA",
      "description": "Semiconductor Optoelectronics",
      "link": "https://www.ucla.edu/"
    },
    {
      "title": "University of Texas at Austin, USA",
      "description": "Semiconductor Materials Synthesis",
      "link": "https://www.utexas.edu/"
    },
    {
      "title": "National University of Singapore (NUS), Singapore",
      "description": "Semiconductor Nanofabrication",
      "link": "https://www.nus.edu.sg/"
    },
    {
      "title": "University of Tokyo, Japan",
      "description": "Semiconductor Device Modeling",
      "link": "https://www.u-tokyo.ac.jp/en/"
    },
    {
      "title": "University of California, Santa Barbara (UCSB), USA",
      "description": "Semiconductor Quantum Computing",
      "link": "https://www.ucsb.edu/"
    },
    {
      "title": "Korea Advanced Institute of Science and Technology (KAIST), South Korea",
      "description": "Semiconductor Device Design",
      "link": "https://www.kaist.ac.kr/"
    },
    {
      "title": "University of California, San Diego (UCSD), USA",
      "description": "Semiconductor Sensors",
      "link": "https://ucsd.edu/"
    },
    {
      "title": "University of Sydney, Australia",
      "description": "Semiconductor Device Characterization",
      "link": "https://www.sydney.edu.au/"
    }
  ];
  
  
  // const eventtiawan: eventdetail[] = [];
  

  
  const Industries = () => {
    return (
      <div className="flex items-center justify-center">
        <div className="container rounded-md bg-white p-16 shadow-lg dark:bg-black">
          <section id="editorial-board" className="mb-8">
           
  
            <h2 className="text-colour flex justify-center text-xl font-semibold">
            Foreign
            </h2>
            <table className="my-5 w-full table-fixed items-center overflow-hidden rounded-lg">
              <thead>
                <tr className="bg-primary">
                  <th className="w-1/4 border p-3 text-left text-white dark:bg-black ">
                    Institutes Name
                  </th>
                  <th className="w-1/4 border p-2 text-left text-white dark:bg-black ">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody>
                {eventfrogein.map((member, index) => (
                  <tr
                    key={index}
                    className={
                      index % 2 === 0
                        ? "bg-blue-100  dark:bg-gray-dark"
                        : "bg-white dark:bg-black"
                    }
                  >
                    <Link className="text-blue-500 p-" href={member.link}>
                      {member.title}
                    </Link>
                    <td className="border p-0 text-left text-black dark:text-white">
                      {member.description}
                    </td>
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
  