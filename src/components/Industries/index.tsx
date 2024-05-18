"use client";
import React from "react";
import Link from "next/link";

interface eventdetail {
  tittle: string;
  date: string;
  venue:  string;
  link: string;
}

interface eventdeatilplace {
  title: string;
  members: eventdetail[];
}

const eventdetails:eventdetail[] = [
  {
    tittle: "Role of Academic-driven Startups in Developing Economy of J&K",
    date: "June 29-30, 2024",
    venue: "National Institute of Technology Srinagar",
    link: "https://sk24.rase.co.in/",

  },

  {
    tittle: "Indian Education System for Global Developement",
    date: "October 4-6, 2024",
    venue: "Indian Institute of Technology Ropar",
    link: "https://sm24.rase.co.in/",
  },
];

const pasteventdetails:eventdetail[] = [
  {
    tittle: "Recent Advances in School Education",
    date: "June 09-11, 2023",
    venue: "National Institute of Technology Jalandhar",
    link: "https://sm23.rase.co.in/",

  },

  {
    tittle: "Role of Academic-Driven Startups in Economy",
    date: "December 30, 2023",
    venue: "Indian Institute of Technology Kurukshetra",
    link: "https://sk23.rase.co.in/",
  },
];

const Industries = () => {
  return (
    <div className="flex justify-center items-center">
  <div className="container bg-white dark:bg-black p-4 lg:p-16 rounded-md shadow-lg">
    <section id="editorial-board" className="mb-8">
      <h2 className="flex justify-center text-colour text-xl font-semibold">
        Our Upcoming Events
      </h2>
      <table className="w-full items-center my-5 table-fixed overflow-hidden rounded-lg">
        <thead>
          <tr className="bg-primary">
            <th className="w-1/2 border p-2 text-left text-white dark:bg-black">Title</th>
            <th className="w-1/2 border p-2 text-left text-white dark:bg-black">Date</th>
            <th className="w-1/2 border p-2 text-left text-white dark:bg-black">Venue</th>
            {/* <th className="w-1/2 border p-2 text-left text-white dark:bg-black">For More Information</th> */}
          </tr>
        </thead>
        <tbody>
          {eventdetails.map((member, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? "bg-blue-100 dark:bg-gray-dark" : "bg-white dark:bg-black"}
            >
              <td className="border flex justify-between pr-4 text-justify text-color lg:p-2">
              <Link className="text-blue-500" href={member.link}> 
              {member.tittle}
                  </Link>
              
              </td>
              <td className="border   px-2 text-center text-black dark:text-white">
                {member.date}
              </td>
              <td className="border p-2 text-justify text-black dark:text-white">
                {member.venue}
              </td>
             </tr>
          ))}
        </tbody>
      </table>
    </section>

    <section id="editorial-board" className="mb-8">
      <h2 className="flex justify-center text-colour text-xl font-semibold">
        Our Past Events
      </h2>
      <table className="w-full items-center my-5 table-fixed overflow-hidden rounded-lg">
        <thead>
          <tr className="bg-primary">
            <th className="w-1/2 border p-2 text-left text-white dark:bg-black">Title</th>
            <th className="w-1/2 border p-2 text-left text-white dark:bg-black">Date</th>
            <th className="w-1/2 border p-2 text-left text-white dark:bg-black">Venue</th>
            {/* <th className="w-1/2 border p-2 text-left text-white dark:bg-black">For More Information</th> */}
          </tr>
        </thead>
        <tbody>
          {pasteventdetails.map((member, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? "bg-blue-100 dark:bg-gray-dark" : "bg-white dark:bg-black"}
            >
              <td className="border flex justify-between pr-4 text-justify text-color lg:p-2">
              <Link className="text-blue-500" href={member.link}> 
              {member.tittle}
                  </Link>
              
              </td>
              <td className="border   px-2 text-center text-black dark:text-white">
                {member.date}
              </td>
              <td className="border p-2 text-justify text-black dark:text-white">
                {member.venue}
              </td>
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