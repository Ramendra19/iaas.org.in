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

const eventus: eventdetail[] = [
  {
    title: "SpaceX",
    description:
      "Private aerospace manufacturer and space transportation company.",
    link: "https://www.spacex.com/",
  },
  {
    title: "Boeing",
    description:
      "Major aerospace company providing commercial and defense products.",
    link: "https://www.boeing.com/space/",
  },
  {
    title: "Lockheed Martin Space",
    description:
      "Global aerospace and defense company involved in satellite systems.",
    link: "https://www.lockheedmartin.com/en-us/who-we-are/business-areas/space.html",
  },
  {
    title: "Northrop Grumman",
    description: "Leading aerospace and defense technology company.",
    link: "https://www.northropgrumman.com/Capabilities/Space/",
  },
  {
    title: "Blue Origin",
    description:
      "Private aerospace manufacturer focusing on reusable rocket technology.",
    link: "https://www.blueorigin.com/",
  },
  {
    title: "Virgin Galactic",
    description:
      "Spaceflight company offering suborbital space tourism flights.",
    link: "https://www.virgingalactic.com/",
  },
  {
    title: "Raytheon Technologies Corporation",
    description: "Multinational aerospace and defense company.",
    link: "https://www.rtx.com/",
  },
  {
    title: "Ball Aerospace",
    description:
      "Provider of spacecraft, instruments, and sensors for space missions.",
    link: "https://www.ball.com/aerospace",
  },
  {
    title: "Aerojet Rocketdyne",
    description: "Manufacturer of rocket and missile propulsion systems.",
    link: "https://www.rocket.com/",
  },
  {
    title: "Maxar Technologies",
    description:
      "Space technology company providing satellite imagery and geospatial data.",
    link: "https://www.maxar.com/",
  },
];


const eventrussia: eventdetail[] = [
  {
    title: "Roscosmos State Corporation",
    description: "Russian governmental body overseeing space activities.",
    link: "https://www.roscosmos.ru/",
  },
  {
    title: "RSC Energia",
    description: "Leading Russian spacecraft manufacturer.",
    link: "https://www.energia.ru/",
  },
  {
    title: "Khrunichev State Research and Production Space Center",
    description: "Manufacturer of rocket launch vehicles.",
    link: "http://en.khrunichev.com/",
  },
  {
    title: "ISS Reshetnev",
    description: "Russian satellite manufacturer.",
    link: "https://www.iss-reshetnev.com/",
  },
  {
    title: "Gazprom Space Systems",
    description: "Subsidiary of Gazprom focusing on satellite communications.",
    link: "http://www.gazprom-spacesystems.ru/",
  },
  {
    title: "Glavkosmos",
    description:
      "Subsidiary of Roscosmos specializing in international space cooperation.",
    link: "https://glavkosmos.com/en/",
  },
];

const eventchina: eventdetail[] = [
  {
    title: "China Aerospace Science and Technology Corporation (CASC)",
    description: "Main contractor for China's space program.",
    link: "http://english.spacechina.com/",
  },
  {
    title: "China Aerospace Science and Industry Corporation (CASIC)",
    description: "State-owned defense and aerospace company.",
    link: "http://english.casic.cn/",
  },
  {
    title: "China Great Wall Industry Corporation (CGWIC)",
    description: "Provider of commercial launch services.",
    link: "http://www.cgwic.com/",
  },
  {
    title: "China Satellite Communications Co., Ltd. (China Satcom)",
    description: "State-owned satellite operator.",
    link: "http://www.chinasatcom.com/",
  },
  {
    title: "China Academy of Space Technology (CAST)",
    description: "Research institution specializing in spacecraft development.",
    link: "http://english.cast.cn/",
  },
];

const eventgermany: eventdetail[]= 
[
  {
    "title": "OHB SE",
    "description": "European aerospace and technology company based in Germany.",
    "link": "https://www.ohb.de/en/"
  },
  {
    "title": "Airbus Defence and Space",
    "description": "Division of Airbus specializing in space systems.",
    "link": "https://www.airbus.com/defence.html"
  }
]


const eventeurope: eventdetail[] = [
  {
    title: "Airbus Defence and Space",
    description:
      "Aerospace company offering satellite systems and space transportation.",
    link: "https://www.airbus.com/space.html",
  },
  {
    title: "Thales Alenia Space",
    description: "Joint venture specializing in satellite manufacturing.",
    link: "https://www.thalesgroup.com/en/worldwide/space",
  },
  {
    title: "ArianeGroup",
    description:
      "Provider of commercial launch services with the Ariane rockets.",
    link: "https://www.ariane.group/en/",
  },
  {
    title: "OHB SE",
    description: "European aerospace and technology company.",
    link: "https://www.ohb.de/en/",
  },
  {
    title: "Safran",
    description: "Aerospace company providing propulsion systems.",
    link: "https://www.safran-group.com/",
  },
  {
    title: "Arianespace",
    description: "European launch service provider.",
    link: "https://www.arianespace.com/",
  },
  {
    title: "Surrey Satellite Technology Ltd. (SSTL)",
    description: "British satellite manufacturer.",
    link: "https://www.sstl.co.uk/",
  },
];

const eventjapan: eventdetail[] = [
  {
    title: "Japan Aerospace Exploration Agency (JAXA)",
    description: "National space agency of Japan.",
    link: "https://www.jaxa.jp/",
  },
  {
    title: "Mitsubishi Heavy Industries (MHI)",
    description: "Leading Japanese aerospace company.",
    link: "https://www.mhi.com/products/space/",
  },
  {
    title: "IHI Aerospace",
    description:
      "Subsidiary of IHI Corporation specializing in aerospace technology.",
    link: "No specific website available",
  },
  {
    title: "NEC Corporation",
    description:
      "Multinational technology company offering satellite ground systems.",
    link: "https://www.nec.com/en/global/prod/satellite/",
  },
  {
    title: "Toshiba",
    description: "Technology company providing components for satellites.",
    link: "https://www.toshiba.co.jp/worldwide/index.html",
  },
];

const eventcanada: eventdetail[] = [
  {
    title: "Canadian Space Agency (CSA)",
    description: "National space agency of Canada.",
    link: "https://www.asc-csa.gc.ca/eng/default.asp",
  },
  {
    title: "MDA Corporation (MacDonald, Dettwiler and Associates)",
    description: "Aerospace company specializing in satellite technology.",
    link: "https://www.mdacorporation.com/",
  },
];

const eventiseral: eventdetail[] = [
  {
    title: "Israel Aerospace Industries (IAI)",
    description: "Leading aerospace and defense company in Israel.",
    link: "https://www.iai.co.il/",
  },
  {
    title: "SpaceIL",
    description:
      "Israeli nonprofit organization focusing on space exploration.",
    link: "https://www.spaceil.com/",
  },
];
const eventance: eventdetail[] = [
  {
    "title": "CNES (Centre National d'Études Spatiales)",
    "description": "National space agency of France.",
    "link": "https://cnes.fr/en"
  },
  {
    "title": "ArianeGroup",
    "description": "European aerospace company specializing in launch vehicles.",
    "link": "https://www.ariane.group/en/"
  },
  {
    "title": "Thales Alenia Space",
    "description": "Joint venture offering satellite solutions.",
    "link": "https://www.thalesgroup.com/en/worldwide/space"
  },
  {
    "title": "Arianespace",
    "description": "European launch service provider.",
    "link": "https://www.arianespace.com/"
  }
]

const eventitaly: eventdetail[] = [
  {
    title: "Thales Alenia Space",
    description: "Joint venture providing satellite solutions.",
    link: "https://www.thalesgroup.com/en/worldwide/space",
  },
  {
    title: "Avio S.p.A.",
    description: "Aerospace company manufacturing launch vehicles.",
    link: "https://www.avio.com/en/home",
  },
];
const eventluxembourg: eventdetail[] = [
  {
    title: "SES S.A.",
    description: "Global satellite operator headquartered in Luxembourg.",
    link: "https://www.ses.com/",
  },
  {
    title: "OHB SE (Office in Luxembourg)",
    description: "European aerospace company with an office in Luxembourg.",
    link: "https://www.ohb.de/en/",
  },
];
const eventaustralia: eventdetail[] = [
  {
    title: "Australian Space Agency (ASA)",
    description: "National space agency of Australia.",
    link: "https://www.space.gov.au/",
  },
  {
    title: "Gilmour Space Technologies",
    description:
      "Australian aerospace company specializing in rocket propulsion systems.",
    link: "https://www.gspacetech.com/",
  },
];
const eventuk: eventdetail[] = [
  {
    title: "UK Space Agency",
    description: "National space agency of the United Kingdom.",
    link: "https://www.gov.uk/government/organisations/uk-space-agency",
  },
  {
    title: "Surrey Satellite Technology Ltd. (SSTL)",
    description: "British satellite manufacturer.",
    link: "https://www.sstl.co.uk/",
  },
];

const Industries = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="container rounded-md bg-white p-16 shadow-lg dark:bg-black">
        <section id="editorial-board" className="mb-8">
          <h2 className="text-colour flex justify-center text-xl font-semibold">
            United States of America
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
              {eventus.map((member, index) => (
                <tr
                  key={index}
                  className={
                    index % 2 === 0
                      ? "bg-blue-100  dark:bg-gray-dark"
                      : "bg-white dark:bg-black"
                  }
                >
                  <Link className="p- text-blue-500" href={member.link}>
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
            Russia
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
              {eventrussia.map((member, index) => (
                <tr
                  key={index}
                  className={
                    index % 2 === 0
                      ? "bg-blue-100  dark:bg-gray-dark"
                      : "bg-white dark:bg-black"
                  }
                >
                  <Link className="p- text-blue-500" href={member.link}>
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
            China
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
              {eventchina.map((member, index) => (
                <tr
                  key={index}
                  className={
                    index % 2 === 0
                      ? "bg-blue-100  dark:bg-gray-dark"
                      : "bg-white dark:bg-black"
                  }
                >
                  <Link className="p- text-blue-500" href={member.link}>
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
            Europe
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
              {eventeurope.map((member, index) => (
                <tr
                  key={index}
                  className={
                    index % 2 === 0
                      ? "bg-blue-100  dark:bg-gray-dark"
                      : "bg-white dark:bg-black"
                  }
                >
                  <Link className="p- text-blue-500" href={member.link}>
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
            Japan
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
              {eventjapan.map((member, index) => (
                <tr
                  key={index}
                  className={
                    index % 2 === 0
                      ? "bg-blue-100  dark:bg-gray-dark"
                      : "bg-white dark:bg-black"
                  }
                >
                  <Link className="p- text-blue-500" href={member.link}>
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
            Canada
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
              {eventcanada.map((member, index) => (
                <tr
                  key={index}
                  className={
                    index % 2 === 0
                      ? "bg-blue-100  dark:bg-gray-dark"
                      : "bg-white dark:bg-black"
                  }
                >
                  <Link className="p- text-blue-500" href={member.link}>
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
            Israel
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
              {eventiseral.map((member, index) => (
                <tr
                  key={index}
                  className={
                    index % 2 === 0
                      ? "bg-blue-100  dark:bg-gray-dark"
                      : "bg-white dark:bg-black"
                  }
                >
                  <Link className="p- text-blue-500" href={member.link}>
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
            France
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
              {eventance.map((member, index) => (
                <tr
                  key={index}
                  className={
                    index % 2 === 0
                      ? "bg-blue-100  dark:bg-gray-dark"
                      : "bg-white dark:bg-black"
                  }
                >
                  <Link className="p- text-blue-500" href={member.link}>
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
            Germany
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
              {eventgermany.map((member, index) => (
                <tr
                  key={index}
                  className={
                    index % 2 === 0
                      ? "bg-blue-100  dark:bg-gray-dark"
                      : "bg-white dark:bg-black"
                  }
                >
                  <Link className="p- text-blue-500" href={member.link}>
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
            Italy
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
              {eventitaly.map((member, index) => (
                <tr
                  key={index}
                  className={
                    index % 2 === 0
                      ? "bg-blue-100  dark:bg-gray-dark"
                      : "bg-white dark:bg-black"
                  }
                >
                  <Link className="p- text-blue-500" href={member.link}>
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
            Luxembourg
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
              {eventluxembourg.map((member, index) => (
                <tr
                  key={index}
                  className={
                    index % 2 === 0
                      ? "bg-blue-100  dark:bg-gray-dark"
                      : "bg-white dark:bg-black"
                  }
                >
                  <Link className="p- text-blue-500" href={member.link}>
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
            Australia
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
              {eventaustralia.map((member, index) => (
                <tr
                  key={index}
                  className={
                    index % 2 === 0
                      ? "bg-blue-100  dark:bg-gray-dark"
                      : "bg-white dark:bg-black"
                  }
                >
                  <Link className="p- text-blue-500" href={member.link}>
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
            United Kingdom
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
              {eventuk.map((member, index) => (
                <tr
                  key={index}
                  className={
                    index % 2 === 0
                      ? "bg-blue-100  dark:bg-gray-dark"
                      : "bg-white dark:bg-black"
                  }
                >
                  <Link className="p- text-blue-500" href={member.link}>
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
