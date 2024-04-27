"use client";
import React from "react";
import Link from "next/link";

interface eventdetail {
  tittle: string;
  description: string;
  
}

interface eventdeatilplace {
  title: string;
  members: eventdetail[];
}

const eventdetails:eventdetail[] = [
  
  {
      tittle: "Intel India",
      description: "Engaged in semiconductor design and research & development."
    },
   
    
   


];

const Industries = () => {
  return (
    <div className="flex justify-center items-center">
  <div className="container bg-white dark:bg-black p-16 rounded-md shadow-lg">
    <section id="editorial-board" className="mb-8">
      <h2 className="flex justify-center text-colour text-xl font-semibold">
       Foregin Industries List
      </h2>
      <table className="w-full items-center my-5 table-fixed overflow-hidden rounded-lg">
        <thead>
          <tr className="bg-primary">
            <th className="w-1/2 border p-2 text-left text-white dark:bg-black">Company</th>
            <th className="w-1/2 border p-2 text-left text-white dark:bg-black">Description</th>
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