import React from "react";
import HomeImg from "../PNG/Your Images Here.png";
import About from "./About";
import Projects from "./Projects";
import Blog from "./Blog";
import Footer from "./Footer";
import { IoIosSearch } from "react-icons/io";
import { GoChevronDown } from "react-icons/go";

const Home = () => {
  return (
    <>
      <div className="w-full bg-[#F4F9FF] md:h-screen flex flex-col">
        {/* Hero Section */}
        <div id="home" className="flex flex-col md:flex-row justify-center">
          <div className="mt-20 md:flex md:w-[1000px] md:h-[400px]">
            {/* Content */}
            <div className="flex flex-col justify-center items-center gap-8">
              <h1 className="text-2xl md:text-5xl md:w-5/6 text-[#0D263B] w-3/4 font-bold text-center">
                Discover A Place You'll Love To Live
              </h1>
              <p className="text-center w-3/4 text-[#7C8893]">
                Homie is a real estate solution that gives you the local scoop
                about homes. Search confidently with your trusted source of
                homes for sale or rent.
              </p>
              <button className="bg-[#0061E0] text-white py-3 px-4 font-thin">
                Make An Enquiry
              </button>
            </div>
            <div className="md:flex md:items-center mt-8 md:mt-0">
              <img src={HomeImg} alt="" />
            </div>
          </div>
        </div>

        {/* Search Section */}
        <div className="flex justify-center items-center relative md:py-16 py-5 h-24 mt-24 md:mt-3">
          <div className="flex flex-col md:flex-row justify-center w-[24rem] lg:w-[60rem] md:w-[50rem] bg-white gap-4 py-8 shadow-lg">
            <div className="flex flex-col md:flex-row justify-center items-center gap-3">
              <div className="border border-black font-thin py-2 px-2 flex">
                <input type="text" placeholder="Choice Location" className="" />
                <GoChevronDown />
              </div>
              <div className="border border-black font-thin py-2 px-2 flex">
                <input type="text" placeholder="Bedrooms" className="" />
                <GoChevronDown />
              </div>
              <div className="border border-black font-thin py-2 px-2 flex">
                <input type="text" className="" placeholder="For Rent" />
                <GoChevronDown />
              </div>
            </div>
            <div className="flex justify-center items-center">
              <button className="py-2 px-4 bg-[#0061E0] text-white font-thin ml-4 flex">
                <IoIosSearch className="text-white w-5 h-5 mt-1" /> Search
              </button>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div id="about">
          <About />
        </div>

        {/* Projects Section */}
        <div id="projects">
          <Projects />
        </div>

        {/* Blog Section */}
        <div id="blog">
          <Blog />
        </div>
  <div id="contact">
  <Footer />
  </div>
      
      </div>
    </>
  );
};

export default Home;
