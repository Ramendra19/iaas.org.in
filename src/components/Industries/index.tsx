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
    tittle: "Role of Academic driven Startups in Developing Economy of J&K",
    date: "June 29-30, 2024",
    venue: "National Institute of Technology, Srinagar",
    link: "https://sk24.rase.co.in/",

  },

  {
    tittle: "Indian Education system for global developement",
    date: "October 4-6, 2024",
    venue: "Indian Institute of Technology, Roopar",
    link: "https://sm24.rase.co.in/",
  },
];

const Industries = () => {
  return (
    <div className="flex justify-center items-center">
  <div className="container bg-white dark:bg-black p-16 rounded-md shadow-lg">
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
            <th className="w-1/2 border p-2 text-left text-white dark:bg-black">For More Information</th>
          </tr>
        </thead>
        <tbody>
          {eventdetails.map((member, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? "bg-blue-100 dark:bg-gray-dark" : "bg-white dark:bg-black"}
            >
              <td className="border p-2 text-left text-black">
              {member.tittle}
              </td>
              <td className="border p-2 text-left text-black dark:text-white">
                {member.date}
              </td>
              <td className="border p-2 text-left text-black dark:text-white">
                {member.venue}
              </td>
              <td className="border p-2 text-left text-black dark:text-white">
              <Link className="text-blue-500" href={member.link}> Click Here
                  
                </Link>
               
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