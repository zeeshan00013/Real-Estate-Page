import React from "react";
import mask1 from "../images/Mask group.svg";
import mask2 from "../images/Mask group (1).svg";
import mask3 from "../images/Mask group (2).svg";
import mask4 from "../images/Mask group (3).svg";
import mask5 from "../images/Mask group (4).svg";
import mask6  from "../images/Mask group (5).svg";
import customer1 from "../images/Avatar.svg";

import { FaBed } from "react-icons/fa6";
import { FaBath } from "react-icons/fa6";
import { GiHomeGarage } from "react-icons/gi";
import { PiSquaresFourBold } from "react-icons/pi";
import { IoPerson } from "react-icons/io5";
import { CiClock2 } from "react-icons/ci";
import  quote1 from "../images/quote-down.svg"
import quote2 from "../images/quote-up.svg";
import property1 from "../images/property1.svg";


const Projects = () => {

  const projectData = [
    {
      imgSrc: mask1,
      title: "1963 S Crescent Heights Blvd",
      location: "Hills, CA 90210",
      area: "2350 Square Feet",
      garages: "2 Garages",
      bedrooms: "20 Bedrooms",
      bathrooms: "8 Bathrooms",
      button: "$5,304,000",
      name: "Michel Smith",
      days: "1 days ago",
      service: "For Sale",
    },
    {
      imgSrc: mask2,
      title: "302 North Plam Drive",
      location: "Beverly Hills, CA 90210",
      area: "2350 Square Feet",
      garages: "2 Garages",
      bedrooms: "20 Bedrooms",
      bathrooms: "8 Bathrooms",
      button: "$5,142,000",
      name: "Michel Smith",
      days: "1 days ago",
      service: "For Sale",
    },
    {
      imgSrc: mask3,
      title: "28 Quaker Road, Manhasset",
      location: "California Hills, CA 90210",
      area: "2350 Square Feet",
      garages: "2 Garages",
      bedrooms: "20 Bedrooms",
      bathrooms: "8 Bathrooms",
      button: "$4,784,000",
      name: "Michel Smith",
      days: "1 days ago",
      service: "For Rent",
    },
    {
      imgSrc: mask4,
      title: "Sofi Berryessa 750 King Road",
      location: "Los Angel, CA 90210",
      area: "2350 Square Feet",
      garages: "2 Garages",
      bedrooms: "20 Bedrooms",
      bathrooms: "8 Bathrooms",
      button: "$3,534,000",
      name: "Michel Smith",
      days: "1 days ago",
      service: "For Sale",
    },
    {
      imgSrc: mask5,
      title: "1203 Orren Street, Northeast",
      location: "Louisiana, CA 90210",
      area: "2350 Square Feet",
      garages: "2 Garages",
      bedrooms: "20 Bedrooms",
      bathrooms: "8 Bathrooms",
      button: "$3,142,000",
      name: "Michel Smith",
      days: "1 days ago",
      service: "For Rent",
    },
    {
      imgSrc: mask6,
      title: "28 Ridge Road, Manhasset",
      location: "Claremont, CA 90210",
      button: "$2,384,000",
      area: "2350 Square Feet",
      garages: "2 Garages",
      bedrooms: "20 Bedrooms",
      bathrooms: "8 Bathrooms",
      name: "Michel Smith",
      days: "1 days ago",
      service: "For Sale",
    },
  ];

  const Customers = [
    {
      message:
        "I could probably go into sales for you. I am completely blown away. After using SEO my business skyrocketed! The very best",
      src: customer1,
      name: "Grace Hall",
      work: "Customer",
    },
    {
      message:
        "I could probably go into sales for you. I am completely blown away. After using SEO my business skyrocketed! The very best",
      src: customer1,
      name: "Grace Hall",
      work: "Customer",
    },
    {
      message:
        "I could probably go into sales for you. I am completely blown away. After using SEO my business skyrocketed! The very best",
      src: customer1,
      name: "Grace Hall",
      work: "Customer",
    },
  ];

  const properties = [
    {
      img1: customer1,
      location: "SINGAPORE",
      address: "5232 North Carolina Ave. 21BC",
      price: "$300,000",
      agent: "William Hue",
      bed: "3",
      bath: "4",
      role: "Estate Agents",
      image: property1, // Replace with your image path
    },
    {
      img1: customer1,
      location: "LOS ANGELES",
      address: "5232 North Carolina Ave. 21BC",
      bed: "3",
      bath: "4",
      price: "$350,000",
      details: "5 beds 3 baths",
      agent: "Adam Smith",
      role: "Estate Agents",
      image: property1, // Replace with your image path
    },
    {
      img1: customer1,
      role: "Estate Agents",
      bed: "3",
      bath: "4",
      address: "5232 North Carolina Ave. 21BC",
      location: "CALIFORNIA",
      price: "$500,000",
      details: "6 beds 4 baths",
      agent: "Butcher Bos",
      image: property1, // Replace with your image path
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center">
       <div className=" mt-20 md:mt-28 w-screen flex flex-col justify-center items-center md:w-[980px]">
          <div className="text-center gap-2">
            <p className="text-[#0061E0]">FEATURED LISTING</p>
            <h2 className="text-3xl font-semibold">We Bring Dream Homes
            To Reality</h2>
          </div>
          <div className="mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:ml-20 lg:ml-0 ">
      {projectData.map((card, index) => (
        <div
          key={index}
          className="shadow-lg flex flex-col items-center h-[540px]  md:h-[500px] w-auto"
        >
          <div className="relative">
          <img className="mb-4 " src={card.imgSrc} alt="img" />
          <div className="absolute top-0 py-1 px-2 bg-[#0D263B] text-white">
            {card.service}
          </div>
          </div>
          <div className=" border-b border-solid border-gray-400 pb-6 w-64">
          <h1 className="font-bold text-center ">{card.title}</h1>
          <p className="text-[#7C8893] text-sm text-center">{card.location}</p>
          </div>
          <div className="flex flex-col pb-6 border-b border-solid border-gray-400 w-64 mt-4 gap-3 ">
            <div className="flex justify-between text-[#7C8893] text-sm">
              <span className="flex"><PiSquaresFourBold className="text-[#0061E0]" />{card.area}</span>
              <span className="flex"><GiHomeGarage className="text-[#0061E0]"/>{card.garages}</span>
            </div>
            <div className="flex justify-between text-[#7C8893] text-sm">
              <span className="flex"><FaBed className="text-[#0061E0]"/>{card.bedrooms}</span>
              <span className="flex"><FaBath className="text-[#0061E0]"/>{card.bathrooms}</span>
            </div>
          </div>
          <div className="flex gap-16 mt-2 text-[#7C8893] text-sm mb-5">
             <span className="flex"><IoPerson className="text-[#0061E0]"/>{card.name}</span>
             <span className="flex"><CiClock2 className="text-[#0061E0]"/>{card.days}</span>
          </div>
        
          <button className="py-2 px-28 bg-[#0061E0] text-white ">
            {card.button}
          </button>
        </div>
      ))}
    </div>
          </div>
       </div>
       <div className="w-full bg-[#E9F3FF] flex flex-col mt-24 justify-center items-center relative">
            <div className="mt-28 gap-2">
              <p className="text-[#0061E0] text-center">OUR TESTIMONIALS</p>
              <h2 className="text-[#282828] text-center text-2xl md:text-3xl font-semibold">What Our Customers Says</h2>
            </div>
            <div className="absolute  md:top-10 md:left-32 top-0 left-4">
             <img src={quote2} alt=""  />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
              {Customers.map((card,index)=>(
                  <div key={index}
                  className="flex flex-col items-center h-[240px]  md:h-[300px] w-96  ">
                     <div className="w-72 h-32 bg-white rounded-lg shadow-md text-center justify-center items-center mt-8">
                      <p className="text-center  text-gray-600 mt-5 text-sm">{card.message}</p>
                     </div>
                     <div className="flex gap-10 items-start mt-5">
                      <div><img src={card.src} alt="" /></div>
                      <div><p className="font-semibold">{card.name}</p>
                      <p className="text-sm text-gray-700">{card.work}</p></div>
                     </div>
                  </div>
                )) }
            </div>
            <div className="mt-6 flex gap-3 mb-10 "> 
              <div className="w-3 h-3 bg-white rounded-full border border-blue-700"> <button></button> </div>
              <div className="w-3 h-3 bg-white rounded-full border border-blue-700"> <button></button> </div>
              <div className="w-3 h-3 bg-white rounded-full border border-blue-700"> <button></button> </div>
              <div className="w-3 h-3 bg-white rounded-full border border-blue-700"> <button></button> </div> 

       </div>
       <div className="absolute md:bottom-10 md:right-32 bottom-0 right-4 ">
        <img src={quote1} alt="" />
       </div>
       </div>

        <div className="flex flex-col justify-center items-center w-full ">
        <div className="mt-28 gap-2 ">
              <p className="text-[#0061E0] text-center">PROPERETIES</p>
              <h2 className="text-[#282828] text-center text-2xl md:text-3xl font-semibold">Our Popular Properties</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:ml-20 lg:ml-0 mt-10 ">
      {properties.map((card, index) => (
        <div
          key={index}
          className="shadow-lg flex flex-col items-center h-[540px]  md:h-[500px] w-auto md:w-[300px]"
        >
          <div className="relative">
          <img className="mb-4 " src={card.image} alt="img" />
          <div className="absolute top-0 right-0 py-1 px-5 bg-[#0061E0] text-white">
            {card.location}
          </div>
          </div>
          <div className="flex flex-col gap-2 justify-start items-start">
            <p>{card.price}</p>
            <p>{card.address}</p>
            <h2>{card.location}</h2>
            <div className="flex gap-4">
            <span className="flex"><FaBed className="text-gray-500"/>{card.bed}</span>
            <span className="flex"><FaBath className="text-gray-500"/>{card.bath}</span>
            </div>
            <div className="flex gap-4">
              <span><img src={card.img1} alt="" /></span>
              <span>
                <p>{card.agent}</p>
                <p>{card.role}</p>
              </span>
            </div>
          </div>

        
        </div>
      ))}
    </div>
    <div className="mt-10 flex gap-3 mb-20 "> 
              <div className="w-3 h-3 bg-white rounded-full border border-blue-700"> <button></button> </div>
              <div className="w-3 h-3 bg-white rounded-full border border-blue-700"> <button></button> </div>
              <div className="w-3 h-3 bg-white rounded-full border border-blue-700"> <button></button> </div>
              <div className="w-3 h-3 bg-white rounded-full border border-blue-700"> <button></button> </div> 

       </div>
        </div>
      
    </div>
  );
};

export default Projects;
