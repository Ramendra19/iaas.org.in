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

const eventdetails: eventdetail[] = [
  {
    title: "Indian Institute of Technology Bombay (IIT Bombay)",
    description: "Research focus on Semiconductor Devices.",
    link: "http://www.iitb.ac.in/",
  },
  
  
  {
    "title": "Indian Institute of Technology Delhi (IIT Delhi)",
    "description": "Specializes in research on Integrated Circuits.",
    "link": "http://www.iitd.ac.in/"
  },
  {
    "title": "Indian Institute of Technology Madras (IIT Madras)",
    "description": "Focuses on research in Nanoelectronics.",
    "link": "https://www.iitm.ac.in/"
  },
  {
    "title": "Indian Institute of Science (IISc Bangalore)",
    "description": "Conducts research in Semiconductor Physics.",
    "link": "https://www.iisc.ac.in/"
  },
  {
    "title": "Indian Institute of Technology Kanpur (IIT Kanpur)",
    "description": "Engages in research on Semiconductor Materials.",
    "link": "http://www.iitk.ac.in/"
  },
  {
    "title": "Centre for Nano Science and Engineering (CeNSE), IISc Bangalore",
    "description": "Conducts research in Nanoelectronic Devices.",
    "link": "https://www.cense.iisc.ac.in/"
  },
  {
    "title": "Indian Institute of Technology Kharagpur (IIT Kharagpur)",
    "description": "Focuses on research in VLSI Design.",
    "link": "https://www.iitkgp.ac.in/"
  },
  {
    "title": "SemiConductor Laboratory (SCL), Mohali",
    "description": "Engaged in Semiconductor Fabrication.",
    "link": "https://www.scl.gov.in/"
  },
  {
    "title": "National Institute of Technology Calicut (NIT Calicut)",
    "description": "Conducts research in Microelectronics.",
    "link": "https://www.nitc.ac.in/"
  },
  {
    "title": "Indian Space Research Organisation (ISRO)",
    "description": "Specializes in research on Space Electronics.",
    "link": "https://www.isro.gov.in/"
  },
  {
    "title": "Indian Institute of Technology Roorkee (IIT Roorkee)",
    "description": "Research focus on Semiconductor Materials and Devices.",
    "link": "https://www.iitr.ac.in/"
  },
  {
    "title": "Indian Institute of Technology Guwahati (IIT Guwahati)",
    "description": "Engages in research on Microelectronics.",
    "link": "https://www.iitg.ac.in/"
  },
  {
    "title": "International Advanced Research Centre for Powder Metallurgy and New Materials (ARCI), Hyderabad",
    "description": "Conducts research in Semiconductor Thin Films.",
    "link": "https://www.arci.res.in/"
  },
  {
    "title": "SemiConductor Laboratory (SCL), Chandigarh",
    "description": "Engaged in Manufacturing Semiconductor Devices.",
    "link": "https://www.scl.gov.in/"
  },
  {
    "title": "National Physical Laboratory (NPL), New Delhi",
    "description": "Conducts research in Semiconductor Characterization.",
    "link": "https://www.nplindia.in/"
  },
  {
    "title": "Indian Institute of Information Technology Hyderabad (IIIT Hyderabad)",
    "description": "Research focus on VLSI and Embedded Systems.",
    "link": "https://www.iiit.ac.in/"
  },
  {
    "title": "Indian Institute of Science Education and Research Kolkata (IISER Kolkata)",
    "description": "Conducts research in Semiconductor Optoelectronics.",
    "link": "https://www.iiserkol.ac.in/"
  },
  {
    "title": "Centre for Development of Advanced Computing (C-DAC), Pune",
    "description": "Specializes in research on Embedded Systems.",
    "link": "https://www.cdac.in/"
  },
  {
    "title": "Indian Institute of Technology Bhubaneswar (IIT Bhubaneswar)",
    "description": "Conducts research in Semiconductor Device Modeling.",
    "link": "https://www.iitbbs.ac.in/"
  },
  {
    "title": "Society for Applied Microwave Electronics Engineering & Research (SAMEER), Mumbai",
    "description": "Conducts research in Microwave Semiconductor Devices.",
    "link": "https://www.sameer.gov.in/"
  },
  {
    "title": "Solid State Physics Laboratory (SSPL), Delhi",
    "description": "Specializes in research on Semiconductor Devices.",
    "link": "https://www.drdo.gov.in/labs-establishment/solid-state-physics-laboratory-sspl"
  },
  {
    "title": "Saha Institute of Nuclear Physics (SINP), Kolkata",
    "description": "Conducts research in Semiconductor Detectors.",
    "link": "https://www.saha.ac.in/"
  },
  {
    "title": "Institute of Nano Science and Technology (INST), Mohali",
    "description": "Research focus on Nanoscale Semiconductor Devices.",
    "link": "http://inst.ac.in/"
  },
  {
    "title": "Defence Research and Development Organisation (DRDO), Hyderabad",
    "description": "Conducts research in Semiconductor Materials.",
    "link": "https://www.drdo.gov.in/"
  },
  {
    "title": "National Institute of Technology Karnataka (NITK), Surathkal",
    "description": "Conducts research in Semiconductor Sensors.",
    "link": "https://www.nitk.ac.in/"
  },
  {
    "title": "International Institute of Information Technology, Bhubaneswar (IIIT Bhubaneswar)",
    "description": "Specializes in research on Semiconductor Device Simulation.",
    "link": "https://www.iiit-bh.ac.in/"
  },
  {
    "title": "International Institute of Information Technology, Naya Raipur (IIIT Naya Raipur)",
    "description": "Conducts research in Semiconductor Process Technology.",
    "link": "https://www.iiitnr.ac.in/"
  },
  {
    "title": "International Institute of Information Technology, Pune (IIIT Pune)",
    "description": "Focuses on research in Semiconductor Photonics.",
    "link": "https://www.isquareit.edu.in/"
  },
  {
    "title": "International Institute of Information Technology, Ranchi (IIIT Ranchi)",
    "description": "Engages in research on Semiconductor Device Fabrication.",
    "link": "https://www.iiitranchi.ac.in/"
  },
  {
    "title": "International Institute of Information Technology, Sonepat (IIIT Sonepat)",
    "description": "Conducts research in Semiconductor Device Characterization.",
    "link": "https://www.iiit.ac.in/"
  },

  {
    "title": "Indian Institute of Engineering Science and Technology, Shibpur (IIEST Shibpur)",
    "description": "Specializes in research on Semiconductor Physics.",
    "link": "https://www.iiests.ac.in/"
  },
  {
    "title": "Indian Institute of Information Technology, Design and Manufacturing, Vadodara (IIITDM Vadodara)",
    "description": "Conducts research in Semiconductor Device Integration.",
    "link": "https://www.iiitvadodara.ac.in/"
  },
  {
    "title": "Indian Institute of Information Technology, Kalyani (IIIT Kalyani)",
    "description": "Focuses on research in Semiconductor Heterostructures.",
    "link": "https://www.iiitkalyani.ac.in/"
  },
  {
    "title": "Indian Institute of Information Technology, Design and Manufacturing, Vadodara (IIITDM Vadodara)",
    "description": "Conducts research in Semiconductor Process Engineering.",
    "link": "https://www.iiitvadodara.ac.in/"
  },
  {
    "title": "Indian Institute of Information Technology, Lucknow (IIIT Lucknow)",
    "description": "Engages in research on Semiconductor Device Physics.",
    "link": "https://www.iiitl.ac.in/"
  },
  {
    "title": "Indian Institute of Information Technology, Una (IIIT Una)",
    "description": "Conducts research in Semiconductor Device Optimization.",
    "link": "https://www.iiitu.ac.in/"
  },
  {
    "title": "Indian Institute of Information Technology, Dharwad (IIIT Dharwad)",
    "description": "Specializes in research on Semiconductor Process Technology.",
    "link": "https://www.iiitdwd.ac.in/"
  },
  {
    "title": "Indian Institute of Information Technology, Jhalwa, Allahabad (IIIT Jhalwa)",
    "description": "Engages in research on Semiconductor Device Fabrication.",
    "link": "https://www.iiita.ac.in/"
  },
  {
    "title": "Indian Institute of Information Technology, Manipur (IIIT Manipur)",
    "description": "Conducts research in Semiconductor Sensors.",
    "link": "https://www.iiitmanipur.ac.in/"
  },
  {
    "title": "Indian Institute of Information Technology, Tiruchirappalli (IIIT Tiruchirappalli)",
    "description": "Focuses on research in Semiconductor Thin Films.",
    "link": "https://www.iiitt.ac.in/"
  },
  {
    "title": "National Institute of Technology, Arunachal Pradesh (NIT Arunachal Pradesh)",
    "description": "Specializes in research on Semiconductor Device Physics.",
    "link": "https://www.nitap.ac.in/"
  },
  {
    "title": "National Institute of Technology, Delhi (NIT Delhi)",
    "description": "Conducts research in Semiconductor Device Characterization.",
    "link": "https://www.nitdelhi.ac.in/"
  },
  {
    "title": "National Institute of Technology, Goa (NIT Goa)",
    "description": "Engages in research on Semiconductor Device Fabrication.",
    "link": "https://www.nitgoa.ac.in/"
  },
  {
    "title": "National Institute of Technology, Jalandhar (NIT Jalandhar)",
    "description": "Focuses on research in Semiconductor Device Integration.",
    "link": "https://www.nitj.ac.in/"
  },
  {
    "title": "National Institute of Technology, Kurukshetra (NIT Kurukshetra)",
    "description": "Conducts research in Semiconductor Device Physics.",
    "link": "https://www.nitkkr.ac.in/"
  },
  {
    "title": "National Institute of Technology, Manipur (NIT Manipur)",
    "description": "Specializes in research on Semiconductor Device Simulation.",
    "link": "https://www.nitmanipur.ac.in/"
  },
  {
    "title": "National Institute of Technology, Meghalaya (NIT Meghalaya)",
    "description": "Conducts research in Semiconductor Device Optimization.",
    "link": "https://www.nitm.ac.in/"
  },
  {
    "title": "National Institute of Technology, Mizoram (NIT Mizoram)",
    "description": "Specializes in research on Semiconductor Process Technology.",
    "link": "https://www.nitmz.ac.in/"
  },
  {
    "title": "National Institute of Technology, Nagaland (NIT Nagaland)",
    "description": "Engages in research on Semiconductor Heterostructures.",
    "link": "https://www.nitnagaland.ac.in/"
  },
  {
    "title": "National Institute of Technology, Patna (NIT Patna)",
    "description": "Conducts research in Semiconductor Device Fabrication.",
    "link": "https://www.nitp.ac.in/"
  },
  {
    "title": "National Institute of Technology, Puducherry (NIT Puducherry)",
    "description": "Specializes in research on Semiconductor Device Physics.",
    "link": "https://www.nitpy.ac.in/"
  },
  {
    "title": "National Institute of Technology, Raipur (NIT Raipur)",
    "description": "Conducts research in Semiconductor Device Characterization.",
    "link": "https://www.nitrr.ac.in/"
  },
  {
    "title": "National Institute of Technology, Sikkim (NIT Sikkim)",
    "description": "Engages in research on Semiconductor Device Fabrication.",
    "link": "https://www.nitsikkim.ac.in/"
  },
  {
    "title": "National Institute of Technology, Silchar (NIT Silchar)",
    "description": "Specializes in research on Semiconductor Device Integration.",
    "link": "https://www.nits.ac.in/"
  },
  {
    "title": "National Institute of Technology, Srinagar (NIT Srinagar)",
    "description": "Conducts research in Semiconductor Device Optimization.",
    "link": "https://www.nitsri.ac.in/"
  },
  {
    "title": "National Institute of Technology, Surathkal (NIT Surathkal)",
    "description": "Focuses on research in Semiconductor Thin Films.",
    "link": "https://www.nitk.ac.in/"
  },
  {
    "title": "National Institute of Technology, Trichy (NIT Trichy)",
    "description": "Specializes in research on Semiconductor Device Physics.",
    "link": "https://www.nitt.edu/"
  },
  {
    "title": "National Institute of Technology, Uttarakhand (NIT Uttarakhand)",
    "description": "Conducts research in Semiconductor Device Simulation.",
    "link": "https://www.nituk.ac.in/"
  },
  {
    "title": "National Institute of Technology, Warangal (NIT Warangal)",
    "description": "Engages in research on Semiconductor Device Optimization.",
    "link": "https://www.nitw.ac.in/"
  },
  {
    "title": "Indian Institute of Technology (Indian School of Mines), Dhanbad (IIT Dhanbad)",
    "description": "Specializes in research on Semiconductor Process Technology.",
    "link": "https://www.iitism.ac.in/"
  },
  {
    "title": "Indian Institute of Technology, Bhilai (IIT Bhilai)",
    "description": "Conducts research in Semiconductor Heterostructures.",
    "link": "https://www.iitbhilai.ac.in/"
  },
  {
    "title": "Indian Institute of Technology, Bhubaneswar (IIT Bhubaneswar)",
    "description": "Conducts research in Semiconductor Device Fabrication.",
    "link": "https://www.iitbbs.ac.in/"
  },
  {
    "title": "Indian Institute of Technology, Gandhinagar (IIT Gandhinagar)",
    "description": "Engages in research on Semiconductor Device Physics.",
    "link": "https://www.iitgn.ac.in/"
  },
  {
    "title": "Indian Institute of Technology, Goa (IIT Goa)",
    "description": "Conducts research in Semiconductor Device Characterization.",
    "link": "https://www.iitgoa.ac.in/"
  },
  {
    "title": "Indian Institute of Technology, Hyderabad (IIT Hyderabad)",
    "description": "Specializes in research on Semiconductor Device Integration.",
    "link": "https://www.iith.ac.in/"
  },
  {
    "title": "Indian Institute of Technology, Indore (IIT Indore)",
    "description": "Conducts research in Semiconductor Device Optimization.",
    "link": "https://www.iiti.ac.in/"
  },
  {
    "title": "Indian Institute of Technology, Jammu (IIT Jammu)",
    "description": "Focuses on research in Semiconductor Thin Films.",
    "link": "https://www.iitjammu.ac.in/"
  },
  {
    "title": "Indian Institute of Technology, Jodhpur (IIT Jodhpur)",
    "description": "Specializes in research on Semiconductor Device Simulation.",
    "link": "https://www.iitj.ac.in/"
  },
  {
    "title": "Indian Institute of Technology, Kanpur (IIT Kanpur)",
    "description": "Conducts research in Semiconductor Device Physics.",
    "link": "https://www.iitk.ac.in/"
  },
  {
    "title": "Indian Institute of Technology, Kharagpur (IIT Kharagpur)",
    "description": "Engages in research on Semiconductor Device Fabrication.",
    "link": "https://www.iitkgp.ac.in/"
  }


];

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

// const eventsk: eventdetail[] = [];

// const eventjapan: eventdetail[] = [];

// const eventgermany: eventdetail[] = [];

const Industries = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="container rounded-md bg-white p-16 shadow-lg dark:bg-black">
        <section id="editorial-board" className="mb-8">
          <h2 className="text-colour flex justify-center text-xl font-semibold">
            Bharat
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
              {eventdetails.map((member, index) => (
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
