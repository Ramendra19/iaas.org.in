"use client";
import React from "react";
import Link from "next/link";

interface AdvisoryMember {
  name: string;
  designation: string;
  contact: string;
}

interface AdvisoryCouncilProps {
  title: string;
  members: AdvisoryMember[];
} 

const EdtMemberErs = [
    {
      tittle: "National Institute Technology, Srinagar",
      designation: "RASE 2024",
      link: "https://sk24.rase.co.in/"     
    }, 
  
  ];


const events = () => {
  return (
    <div className=" bg-white p-4">
      <section id="editorial-board" className="mb-8">
      <h2 className="text-xl  font-semibold text-colour">
          Our Upcoming Events
        </h2> 
        <table className="table-fixed max-width my-5 rounded-lg overflow-hidden ">
        <thead>
          <tr className="bg-primary">
            <th className="w-1/3 p-2 border text-left text-white">Tittle</th>
            <th className="w-1/3 p-2 border text-left text-white">Event Name</th>
            
          </tr>
        </thead>
        <tbody>
          {EdtMemberErs.map((member, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-blue-100' : 'bg-white'}>
              <td className="p-2 border text-left text-black"><Link className="text-blue-500" href={member.link}>
                  {member.tittle}
                </Link></td>
              <td className="p-2 border text-left text-black">{member.designation}</td>
           
            </tr>
          ))}
        </tbody>
      </table>
      </section>
    </div>
  );
};