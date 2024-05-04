"use client";
import React from "react";
import Link from "next/link";

interface eventdetail {
  tittle: string;
  // description: string;
  
}

interface eventdeatilplace {
  title: string;
  members: eventdetail[];
}

const eventdetails:eventdetail[] = [
  
  
    { 
      tittle: "Intel Corporation",
     },
    { tittle: "Nvidia Corporation" },
    { tittle: "Qualcomm Incorporated" },
    { tittle: "Texas Instruments Incorporated" },
    { tittle: "Broadcom Inc." },
    { tittle: "Advanced Micro Devices (AMD)" },
    { tittle: "Micron Technology Inc." },
    { tittle: "Applied Materials Inc." },
    { tittle: "Analog Devices Inc." },
    { tittle: "Western Digital Corporation" },
    { tittle: "Xilinx Inc." },
    { tittle: "Maxim Integrated Products Inc." },
    { tittle: "NVIDIA" },
    { tittle: "Cypress Semiconductor Corporation" },
    { tittle: "ON Semiconductor Corporation" }
  ];
  
  const eventchaina:eventdetail[] =[
  
      { tittle: "Semiconductor Manufacturing International Corporation (SMIC)" },
      { tittle: "Huawei Technologies Co., Ltd." },
      { tittle: "HiSilicon Technologies Co., Ltd." },
      { tittle: "Tsinghua Unigroup" },
      { tittle: "Spreadtrum Communications" },
      { tittle: "ZTE Corporation" },
      { tittle: "Tianjin Zhonghuan Semiconductor" },
      { tittle: "Yangtze Memory Technologies Co., Ltd." },
      { tittle: "Semiconductor Manufacturing International (Beijing)" },
      { tittle: "Shanghai Huahong Grace Semiconductor Manufacturing Corporation (HHGrace)" },
      { tittle: "Jiangsu Changjiang Electronics Technology Co., Ltd. (JCET)" },
      { tittle: "Hangzhou Silan Microelectronics Co., Ltd." },
      { tittle: "Gigadevice Semiconductor (Beijing)" },
      { tittle: "Jiangsu Changjiang Electronics Technology Co., Ltd." },
      { tittle: "Actions Semiconductor Co., Ltd." }
    ];
    
const eventtiawan:eventdetail[] =[
 
    { tittle: "Taiwan Semiconductor Manufacturing Company (TSMC)" },
    { tittle: "MediaTek Inc." },
    { tittle: "United Microelectronics Corporation (UMC)" },
    { tittle: "ASE Technology Holding Co., Ltd. (ASE Group)" },
    { tittle: "Powerchip Semiconductor Corporation" },
    { tittle: "Silicon Integrated Systems Corp. (SiS)" },
    { tittle: "Realtek Semiconductor Corp." },
    { tittle: "Winbond Electronics Corporation" },
    { tittle: "Himax Technologies, Inc." },
    { tittle: "Novatek Microelectronics Corp." },
    { tittle: "Macronix International Co., Ltd." },
    { tittle: "Global Unichip Corp. (GUC)" },
    { tittle: "Nanya Technology Corporation" },
    { tittle: "Phison Electronics Corporation" },
    { tittle: "Elite Semiconductor Memory Technology Inc. (ESMT)" }
  ];

  const eventsk:eventdetail[] =[
 
   
      { tittle: "Samsung Electronics Co., Ltd." },
      { tittle: "SK Hynix Inc." },
      { tittle: "LG Electronics Inc." },
      { tittle: "MagnaChip Semiconductor Corporation" },
      { tittle: "Dongbu HiTek Co., Ltd." },
      { tittle: "Samsung Electro-Mechanics Co., Ltd." },
      { tittle: "DB HiTek" },
      { tittle: "Melfas Inc." },
      { tittle: "Silicon Works Co., Ltd." },
      { tittle: "Amkor Technology Inc. (South Korea)" },
      { tittle: "e2v Semiconductors Korea Co., Ltd." },
      { tittle: "LG Innotek Co., Ltd." },
      { tittle: "MagnaChip Semiconductor LLC" },
      { tittle: "SFA Semicon Co., Ltd." },
      { tittle: "SEMCO Co., Ltd." }
   
    
  ];

  const eventjapan:eventdetail[] =[
 
   
    
      { tittle: "Renesas Electronics Corporation" },
      { tittle: "Toshiba Electronic Devices & Storage Corporation" },
      { tittle: "Sony Semiconductor Solutions Corporation" },
      { tittle: "Rohm Co., Ltd." },
      { tittle: "Murata Manufacturing Co., Ltd." },
      { tittle: "Panasonic Corporation" },
      { tittle: "Fujitsu Semiconductor Limited" },
      { tittle: "Mitsubishi Electric Corporation" },
      { tittle: "NEC Corporation" },
      { tittle: "Hitachi, Ltd." },
      { tittle: "Nidec Corporation" },
      { tittle: "Kyocera Corporation" },
      { tittle: "Sharp Corporation" },
      { tittle: "Denso Corporation" },
      { tittle: "Seiko Epson Corporation" }
    ];


    
  const eventgermany:eventdetail[] =[
 
   
    
 
      { tittle: "Infineon Technologies AG" },
      { tittle: "Bosch Sensortec GmbH" },
      { tittle: "Dialog Semiconductor PLC" },
      { tittle: "X-FAB Semiconductor Foundries AG" },
      { tittle: "Osram Opto Semiconductors GmbH" },
      { tittle: "LFoundry GmbH" },
      { tittle: "Elmos Semiconductor AG" },
      { tittle: "Leoni AG" },
      { tittle: "Siltronic AG" },
      { tittle: "Melexis GmbH" },
      { tittle: "First Sensor AG" },
      { tittle: "Vincotech GmbH" },
      { tittle: "Siltectra GmbH" },
      { tittle: "ams AG" },
      { tittle: "Fraunhofer-Gesellschaft" }
    ];
    

    
 
  
  

   
    
   




const Industries = () => {
  return (
    <div className="flex justify-center items-center">
  <div className="container bg-white dark:bg-black p-16 rounded-md shadow-lg">
    <section id="editorial-board" className="mb-8">
      <h2 className="flex justify-center text-colour text-xl font-semibold">
      United States of America
      </h2>
      <table className="w-full items-center my-5 table-fixed overflow-hidden rounded-lg">
        <thead>
          <tr className="bg-primary">
            <th className="w-1/2 border p-2 text-left text-white dark:bg-black ">Company</th>
            
           </tr>
        </thead>
        <tbody>
          {eventdetails.map((member, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? "bg-blue-100  dark:bg-gray-dark" : "bg-white dark:bg-black"}
            >
              <td className="border p-2 text-left text-colour">
              {member.tittle}
              </td>
              {/* <td className="border p-2 text-left text-black dark:text-white">
                {member.description}
              </td> */}
              
            </tr>
          ))}
        </tbody>
      </table>


      <h2 className="flex justify-center text-colour text-xl font-semibold">
      China
      </h2>
      <table className="w-full items-center my-5 table-fixed overflow-hidden rounded-lg">
        <thead>
          <tr className="bg-primary">
            <th className="w-1/2 border p-2 text-left text-white dark:bg-black">Company</th>
            
           </tr>
        </thead>
        <tbody>
          {eventchaina.map((member, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? "bg-blue-100 dark:bg-gray-dark" : "bg-white dark:bg-black"}
            >
              <td className="border p-2 text-left text-colour">
              {member.tittle}
              </td>
              {/* <td className="border p-2 text-left text-black dark:text-white">
                {member.description}
              </td> */}
              
            </tr>
          ))}
        </tbody>
      </table>



      <h2 className="flex justify-center text-colour text-xl font-semibold">
      Taiwan
      </h2>
      <table className="w-full items-center my-5 table-fixed overflow-hidden rounded-lg">
        <thead>
          <tr className="bg-primary">
            <th className="w-1/2 border p-2 text-left text-white dark:bg-black">Company</th>
            
           </tr>
        </thead>
        <tbody>
          {eventtiawan.map((member, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? "bg-blue-100 dark:bg-gray-dark" : "bg-white dark:bg-black"}
            >
              <td className="border p-2 text-left text-colour">
              {member.tittle}
              </td>
              {/* <td className="border p-2 text-left text-black dark:text-white">
                {member.description}
              </td> */}
              
            </tr>
          ))}
        </tbody>
      </table>


      
      <h2 className="flex justify-center text-colour text-xl font-semibold">
      South Korea
      </h2>
      <table className="w-full items-center my-5 table-fixed overflow-hidden rounded-lg">
        <thead>
          <tr className="bg-primary">
            <th className="w-1/2 border p-2 text-left text-white dark:bg-black">Company</th>
            
           </tr>
        </thead>
        <tbody>
          {eventsk.map((member, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? "bg-blue-100 dark:bg-gray-dark" : "bg-white dark:bg-black"}
            >
              <td className="border p-2 text-left text-colour">
              {member.tittle}
              </td>
              {/* <td className="border p-2 text-left text-black dark:text-white">
                {member.description}
              </td> */}
              
            </tr>
          ))}
        </tbody>
      </table>


      <h2 className="flex justify-center text-colour text-xl font-semibold">
      Japan
      </h2>
      <table className="w-full items-center my-5 table-fixed overflow-hidden rounded-lg">
        <thead>
          <tr className="bg-primary">
            <th className="w-1/2 border p-2 text-left text-white dark:bg-black">Company</th>
            
           </tr>
        </thead>
        <tbody>
          {eventjapan.map((member, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? "bg-blue-100 dark:bg-gray-dark" : "bg-white dark:bg-black"}
            >
              <td className="border p-2 text-left text-colour">
              {member.tittle}
              </td>
              {/* <td className="border p-2 text-left text-black dark:text-white">
                {member.description}
              </td> */}
              
            </tr>
          ))}
        </tbody>
      </table>

<h2 className="flex justify-center text-colour text-xl font-semibold">
      Germany
      </h2>
      <table className="w-full items-center my-5 table-fixed overflow-hidden rounded-lg">
        <thead>
          <tr className="bg-primary">
            <th className="w-1/2 border p-2 text-left text-white dark:bg-black">Company</th>
            
           </tr>
        </thead>
        <tbody>
          {eventgermany.map((member, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? "bg-blue-100 dark:bg-gray-dark" : "bg-white dark:bg-black"}
            >
              <td className="border p-2 text-left text-colour">
              {member.tittle}
              </td>
              {/* <td className="border p-2 text-left text-black dark:text-white">
                {member.description}
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