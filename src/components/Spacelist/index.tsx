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

const eventdetails:eventdetail[] = [
    
        {
          title: "Indian Space Research Organisation (ISRO)",
          description: "The primary space agency of the Indian government responsible for space research and exploration.",
          link: "https://www.isro.gov.in/"
        },
        {
          title: "Antrix Corporation Limited",
          description: "The commercial arm of ISRO, responsible for marketing products and services developed by ISRO.",
          link: "https://www.antrix.gov.in/"
        },
        {
          title: "Indian Space Tech Park (ISTP)",
          description: "A company focused on developing space technology parks and promoting space-related businesses in India.",
          link: "http://www.istp.co.in/"
        },
        {
          title: "Bellatrix Aerospace",
          description: "A private aerospace startup specializing in satellite propulsion systems and in-space transportation services.",
          link: "https://www.bellatrixaerospace.com/"
        },
        {
          title: "Skyroot Aerospace",
          description: "A startup working on developing and manufacturing rocket propulsion systems for small satellite launch vehicles.",
          link: "https://www.skyroot.in/"
        },
        {
          title: "Astrome Technologies",
          description: "A company developing satellite-based broadband internet services using innovative technology.",
          link: "https://astrome.co/"
        },
        {
          title: "Pixxel",
          description: "A startup focused on building a constellation of Earth-imaging small satellites to provide high-resolution imagery.",
          link: "https://www.pixxel.io/"
        },
        {
          title: "Agnikul Cosmos",
          description: "A startup working on building small satellite launch vehicles using 3D printing technology.",
          link: "https://agnikul.in/"
        },
        {
          title: "Team Indus",
          description: "A private aerospace company formerly competing for the Google Lunar XPRIZE, now focusing on lunar exploration missions.",
          link: "https://www.teamindus.in/"
        },
        {
          title: "Kawa Space",
          description: "A startup developing small satellite propulsion systems and providing satellite launch services.",
          link: "https://www.kawaspace.com/"
        },
        {
          title: "Exseed Space",
          description: "A startup specializing in satellite-based IoT solutions and space-based communication services.",
          link: "https://exseed.space/"
        },
        {
          title: "Earth2Orbit (E2O)",
          description: "A company providing satellite launch brokerage services and consulting for space missions.",
          link: "http://www.earth2orbit.com/"
        },
        {
          title: "Dhruva Space",
          description: "A startup focused on developing small satellite platforms and providing satellite-based services.",
          link: "https://www.dhruvaspace.com/"
        },
        {
          title: "SatSure",
          description: "A company leveraging satellite data and analytics for agricultural and environmental monitoring applications.",
          link: "https://satsure.co.in/"
        },
        {
          title: "Spacetech Aerospace",
          description: "A startup working on developing propulsion systems for small satellites and satellite deployment technologies.",
          link: "https://spacetechaerospace.com/"
        },
        {
          title: "SpectraMinds",
          description: "A company offering satellite imagery analysis and geospatial data solutions for various industries.",
          link: "http://spectraminds.com/"
        },
        {
          title: "NoPo Nanotechnologies",
          description: "A startup developing nanomaterials for space applications, including lightweight materials for satellites.",
          link: "https://nopo.tech/"
        },
        {
          title: "Astroscale India",
          description: "A subsidiary of Astroscale, a global company focusing on space debris removal and satellite servicing.",
          link: "https://astroscale.com/"
        },
        {
          title: "Asgard Space",
          description: "A startup working on developing small satellite propulsion systems and technologies for space exploration.",
          link: "https://www.asgard.space/"
        },
        {
          title: "Vesta Space Technology",
          description: "A company offering satellite-based maritime surveillance and vessel tracking services.",
          link: "https://www.vestaspace.com/"
        },
        {
          title: "Bellatrix Aerospace",
          description: "A startup specializing in developing satellite propulsion systems, electric propulsion, and satellite-based services.",
          link: "https://bellatrixaerospace.com/"
        },
        {
          title: "Skyroot Aerospace",
          description: "A startup focusing on developing launch vehicles and propulsion systems for small satellite deployment.",
          link: "https://www.skyroot.in/"
        },
        {
          title: "Pixxel",
          description: "A startup working on building a constellation of Earth-imaging satellites to provide high-resolution imagery for various applications.",
          link: "https://www.pixxel.io/"
        },
        {
          title: "Agnikul Cosmos",
          description: "A startup developing small satellite launch vehicles and propulsion systems for space missions.",
          link: "https://www.agnikul.in/"
        },
        {
          title: "Asteria Aerospace",
          description: "A company offering drone-based solutions for surveillance, agriculture, and infrastructure monitoring, among other applications.",
          link: "https://www.asteria.co.in/"
        },
        {
          title: "TeamIndus Foundation",
          description: "A nonprofit organization focused on promoting space education and fostering innovation in the Indian space industry.",
          link: "https://teamindusfoundation.org/"
        },
        {
          title: "PixelDo",
          description: "A company providing satellite imagery analysis and geospatial intelligence solutions for agriculture, urban planning, and disaster management.",
          link: "https://pixeldo.com/"
        },
        {
          title: "Transcelestial Technologies",
          description: "A startup working on developing laser communication systems for satellite communication and data transfer.",
          link: "https://www.transcelestial.com/"
        },
        {
          title: "Skylo Technologies",
          description: "A company offering satellite-based IoT connectivity solutions for industries such as agriculture, logistics, and maritime.",
          link: "https://www.skylo.tech/"
        },
        {
          title: "Astrome Technologies",
          description: "A startup developing satellite-based broadband internet services to provide affordable connectivity in remote and rural areas.",
          link: "https://www.astrome.co/"
        },
        {
          title: "Ananth Technologies Limited",
          description: "An aerospace and defense technology company specializing in satellite communication systems, payloads, and ground systems.",
          link: "https://www.ananthtech.com/"
        },
        {
          title: "Alpha Design Technologies Pvt. Ltd.",
          description: "A company involved in manufacturing aerospace and defense electronics, including satellite subsystems and payloads.",
          link: "http://www.adtl.co.in/"
        },
        {
          title: "VEM Technologies Pvt. Ltd.",
          description: "A company engaged in manufacturing and supplying aerospace components, systems, and ground support equipment for satellite launches.",
          link: "http://www.vemtechnologies.com/"
        },
        {
          title: "Avasarala Technologies Limited",
          description: "A provider of engineering solutions and services for the aerospace, defense, and space industries, including satellite integration and testing.",
          link: "http://avasaralatechnologies.com/"
        },
        {
          title: "NoPo Nanotechnologies India Pvt. Ltd.",
          description: "A company focusing on nanotechnology-based solutions for space applications, including lightweight materials and coatings for satellites.",
          link: "https://www.nopotech.com/"
        },
        {
          title: "Xovian Analytics",
          description: "A company offering satellite-based analytics and insights for various industries, including agriculture, forestry, and urban planning.",
          link: "https://www.xovian.com/"
        },
        {
          title: "Shakthi Aerospace Solutions Pvt. Ltd.",
          description: "A provider of aerospace engineering services, including design, analysis, and testing for satellite components and subsystems.",
          link: "http://shakthiaerospace.com/"
        },
        {
          title: "Dhruva Space",
          description: "A startup specializing in developing small satellite platforms, payloads, and space missions for scientific research and commercial applications.",
          link: "https://www.dhruvaspace.com/"
        },

        
  {
    title: "Aarav Unmanned Systems",
    description: "A company offering unmanned aerial vehicles (UAVs) and drones for various applications, including surveillance, mapping, and monitoring.",
    link: "https://www.aaravuav.com/"
  },
  {
    title: "Vayavya Labs",
    description: "A provider of semiconductor tools and services for system-on-chip (SoC) design and verification, including solutions for space-grade electronics.",
    link: "https://www.vayavyalabs.com/"
  },
  {
    title: "Pixxel",
    description: "A startup specializing in building a constellation of Earth-imaging small satellites for high-frequency monitoring of the planet.",
    link: "https://www.pixxel.io/"
  },
  {
    title: "Astrome Technologies Pvt. Ltd.",
    description: "A company focused on developing high-speed satellite communication technology for broadband internet access and other applications.",
    link: "https://astrome.co/"
  },
  {
    title: "Bharat Electronics Limited (BEL)",
    description: "A state-owned company involved in manufacturing and supplying electronic equipment and systems for defense, aerospace, and space applications.",
    link: "https://bel-india.in/"
  },
  {
    title: "Axiom Research Labs Pvt. Ltd.",
    description: "The company behind TeamIndus, a private aerospace startup that aimed to land a rover on the Moon as part of the Google Lunar XPRIZE competition.",
    link: "http://www.teamindus.in/"
  },
  {
    title: "Bellatrix Aerospace",
    description: "A startup developing satellite propulsion systems, including electric propulsion and green propellants, for small satellite missions.",
    link: "https://www.bellatrixaerospace.com/"
  },
  {
    title: "Agnikul Cosmos",
    description: "A startup working on building a small satellite launch vehicle to provide affordable and responsive access to space for small satellites.",
    link: "https://agnikul.in/"
  },
  {
    title: "Skyroot Aerospace",
    description: "A startup developing launch vehicles for small satellite missions, focusing on building cost-effective and reliable access to space.",
    link: "https://www.skyroot.in/"
  },
  {
    title: "Kawa Space",
    description: "A startup providing satellite data analytics and insights for agriculture, forestry, urban planning, and disaster management applications.",
    link: "https://www.kawaspace.com/"
  },
  {
    title: "Astralytical",
    description: "A company offering space policy analysis, consulting, and advisory services to governments, space agencies, and private companies.",
    link: "https://astralytical.com/"
  },
  {
    title: "Exseed Space",
    description: "A company involved in building and operating CubeSat missions for Earth observation, remote sensing, and communication purposes.",
    link: "https://exseed.space/"
  },
  {
    title: "Ananth Technologies Limited",
    description: "An engineering services company specializing in providing design, analysis, and manufacturing services for aerospace and defense sectors, including satellite components.",
    link: "http://www.ananthtech.com/"
  },
  {
    title: "Alpha Design Technologies Pvt. Ltd.",
    description: "A company involved in designing, developing, and manufacturing aerospace and defense electronics, including components for satellites and launch vehicles.",
    link: "https://www.adtl.co.in/"
  },
  {
    title: "NewSpace India Limited (NSIL)",
    description: "A government-owned company under the Department of Space (DOS), responsible for facilitating the commercialization of space products, services, and technologies developed by the Indian Space Research Organisation (ISRO).",
    link: "https://www.nsilindia.co.in/"
  },
  {
    title: "L&T Space",
    description: "A division of Larsen & Toubro Limited (L&T) focused on providing end-to-end solutions for satellite and space technology, including satellite manufacturing, ground systems, and space exploration.",
    link: "https://www.larsentoubro.com/"
  },
  {
    title: "AstroLabs India",
    description: "A company offering satellite communication solutions, including ground station services, satellite operations, and satellite-based Internet-of-Things (IoT) connectivity.",
    link: "https://astrolabsindia.com/"
  },
  {
    title: "SpaceKidz India",
    description: "An organization dedicated to promoting space science and technology education among students through workshops, training programs, and hands-on projects.",
    link: "https://www.spacekidzindia.org/"
  },
  {
    title: "NoPo Nanotechnologies India Pvt. Ltd.",
    description: "A startup developing nanomaterial-based solutions for aerospace and defense applications, including lightweight materials for satellites and spacecraft.",
    link: "http://www.noponano.com/"
  },
  {
    title: "Astra Microwave Products Limited",
    description: "A company specializing in manufacturing microwave components and sub-systems for defense, aerospace, and communication applications, including satellite payloads.",
    link: "https://www.astramwp.com/"
  },
  {
    title: "Devas Multimedia Pvt. Ltd.",
    description: "A company focused on providing satellite-based broadband communication services for enterprise, government, and consumer markets.",
    link: "https://www.devas.com/"
  },
  {
    title: "TeamSpace",
    description: "A startup offering satellite data analytics solutions for agriculture, forestry, environmental monitoring, and disaster management applications.",
    link: "https://teamspace.co.in/"
  }       
      
];

const eventus: eventdetail[] = [];

// const eventchaina: eventdetail[] = [];

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
              Bharat Space Industries
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




            
          </section>
        </div>
      </div>
    );
  };
  
  export default Industries;
  