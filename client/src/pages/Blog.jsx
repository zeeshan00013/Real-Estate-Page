import React from "react";
import realEstate1 from "../PNG/Hexa Logo.png";
import realEstate2 from "../PNG/Real Estate Logo (1).png";
import realEstate3 from "../PNG/Real Estate Logo (2).png";
import realEstate4 from "../PNG/Real Estate Logo.png";
import realEstate5 from "../PNG/Tech Logo.png";
import property1 from "../images/property1.svg";
import { LuBed } from "react-icons/lu";
import { IoMdPerson } from "react-icons/io";
import { BsCalendarDate } from "react-icons/bs";

const Blog = () => {
  const properties = [
    {
      image: property1, // Replace with your image path
      name:"William Seklo",
      apartment:"Apartment",
      title:"Diamond Manor Apartment in the New York",
      date:"July 13, 2022"
    },
    {
      image: property1, // Replace with your image path
      name:"William Seklo",
      apartment:"Apartment",
      title:"Diamond Manor Apartment in the New York",
      date:"July 13, 2022"
    },
    {
      image: property1, // Replace with your image path
      name:"William Seklo",
      apartment:"Apartment",
      title:"Diamond Manor Apartment in the New York",
      date:"July 13, 2022"
    },
    {
      image: property1, // Replace with your image path
      name:"William Seklo",
      apartment:"Apartment",
      title:"Diamond Manor Apartment in the New York",
      date:"July 13, 2022"
    },
    {
      image: property1, // Replace with your image path
      name:"William Seklo",
      apartment:"Apartment",
      title:"Diamond Manor Apartment in the New York",
      date:"July 13, 2022"
    },
    {
      image: property1, // Replace with your image path
      name:"William Seklo",
      apartment:"Apartment",
      title:"Diamond Manor Apartment in the New York",
      date:"July 13, 2022"
    },
  ];
  return (
    <div className="flex flex-col w-full">
      <div className="bg-[#F5F5F5] w-auto h-auto lg:h-40 flex flex-col lg:flex-row justify-center items-center gap-5 lg:gap-10">
        <div>
          <img src={realEstate1} alt="" />
        </div>
        <div>
          <img src={realEstate2} alt="" />
        </div>
        <div>
          <img src={realEstate3} alt="" />
        </div>
        <div>
          <img src={realEstate4} alt="" />
        </div>
        <div>
          <img src={realEstate5} alt="" />
        </div>
      </div>
      <div className="flex justify-center w-full h-auto">
        <div className=" w-auto lg:w-[900px] mt-10 flex flex-col lg:flex-row justify-center gap-5">
          <div className="w-auto">img</div>
          <div className="flex flex-col justify-center lg:ml-80 gap-5">
            <div className="space-y-4">
              <p className="text-center lg:text-start text-[#0061E0]">OUR FACILITIES</p>
              <h2 className="text-2xl lg:text-3xl text-[#0D263B] lg:w-3/4 text-center lg:text-start font-semibold">
                The experts in local and international property
              </h2>
              <p className="text-gray-600 lg:w-3/4 text-sm text-center lg:text-start">
                Agent hen an unknown printer took a galley of type and scramble
                d it to make a type specimen book. It has survived not only five
                centuries, but also the leap into electronic.
              </p>
            </div>
             <div className="flex flex-col justify-start lg:items-start gap-6">
             <div className="flex justify-center gap-10  text-gray-600">
              <p>parking space </p>
              <p> Medical center</p>
            </div>
            <div className="flex justify-center gap-10  text-gray-600">
              <p>swimming pool</p>
              <p>kids playLand</p>
            </div>
            <div  className="flex justify-center gap-10 text-gray-600">
              <p>privat security </p>
              <p>library area</p>
            </div>
            <p className="text-[#0061E0] text-center font-bold">Read More</p>
             </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center w-full ">
        <div className="mt-28 gap-2 ">
          <p className="text-[#0061E0] text-center">PROPERETIES</p>
          <h2 className="text-[#282828] text-center text-2xl md:text-3xl font-semibold">
            Our Popular Properties
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:ml-20 lg:ml-0 mt-10 ">
          {properties.map((card, index) => (
            <div
              key={index}
              className="shadow-lg flex flex-col items-center h-[540px]  md:h-[500px] w-auto md:w-[300px]"
            >
              <div className="">
                <img className="mb-4 " src={card.image} alt="img" />
              </div>
              <div className="flex flex-col gap-4 justify-start items-start">
                <div className="flex gap-6 justify-center items-center ml-5">
                  <p className="flex">
                    <IoMdPerson className="text-[#0061E0]" />
                    {card.name}
                  </p>
                  <p className="flex">
                    <LuBed className="text-[#0061E0]" />
                    {card.apartment}
                  </p>
                </div>
                <h2 className="text-xl py-3 border-b border-black ">
                  {card.title}
                </h2>
                <div className="flex justify-center items-center gap-6 text-[#0061E0] ml-5 mt-5">
                  <p className="flex">
                    {" "}
                    <BsCalendarDate className="text-[#0061E0]" />
                    {card.date}
                  </p>
                  <p>read more</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 flex gap-3 mb-20 ">
          {" "}
          <button className="py-2 px-3 rounded-2xl bg-white border border-solid border-[#0061E0] text-gray-600">
            View All{" "}
          </button>{" "}
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center w-full h-auto lg:h-32 bg-[#0061E0] gap-5 lg:gap-12">
          <div className="flex flex-col justify-start items-start text-white ">
            <h2 className="text-2xl font-semibold">Join Our Newsletter Now</h2>
            <p>Register now to gets updates on promotions...</p>
          </div>
          <div className="mb-10">
            <div className="flex border text-center rounded-lg w-auto text-white  ">
              <input
                type="text"
                name=""
                id=""
                className="py-2 lg:px-6 rounded-l-lg "
                placeholder="enter your email "
              />
              <button className="py-2 lg:px-5 rounded-r-lg bg-[#0D263B] ">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
