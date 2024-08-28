// Footer.js
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import logo from "../PNG/logo-white 1.png"

const Footer = () => {
  return (
    <footer className="bg-[#0E1F51] text-white w-full py-10 mt-auto">
      <div className="container mx-auto flex flex-col lg:flex-row justify-center items-start">
        {/* Company Logo & Description */}
        <div className="w-full sm:w-1/4 mb-6 gap-4 border-b-2 border-gray-600 py-4 lg:border-none">
          <div className="flex items-center justify-center ">

            <img src={logo} alt="" className="w-36 h-16" />
          </div>
          <div className="flex flex-col items-center justify-center mt-4 space-x-4 ">
          <p className="text-center">Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
           <div className="flex mt-5 gap-10">
           <FaFacebookF className="w-8 h-8" />
            <FaTwitter className="w-8 h-8"/>
            <FaLinkedinIn className="w-8 h-8"/>
            <FaInstagram className="w-8 h-8"/>
           </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="w-full sm:w-1/4 mb-6 sm:mb-0  border-b-2 border-gray-600 py-4 lg:border-none ">
          <h3 className="font-bold text-2xll mb-3 text-center">Quick Links</h3>
          <ul className="flex flex-col items-center text-start  mt-5 gap-4">
            <li>Home</li>
            <li>About Us</li>
            <li>Blog</li>
            <li>FAQ</li>
            <li>Services</li>
          </ul>
        </div>

        {/* Services */}
        <div className="w-full sm:w-1/4 mb-6 sm:mb-0  border-b-2 border-gray-600 py-4 lg:border-none ">
          <h3 className="font-bold mb-3 text-center text-2xl">Services</h3>
          <ul className="flex flex-col items-center text-start  mt-5 gap-4">
            <li>Wish List</li>
            <li>Login</li>
            <li>Sbmit a Request</li>
            <li>Appointment</li>
            <li>Promotionals Offers</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="w-full sm:w-1/4  border-b-2 border-gray-600 py-4 lg:border-none ">
          <h3 className="font-bold mb-3 text-center text-2xl">Contact</h3>
          <div className="flex flex-col items-center text-start  mt-5 gap-4">
            <p>14T Block New York</p>
            <p>+(123)456 7890</p>
            <p>info@houzing.com</p>
          </div>
        </div>
      </div>
      <div className=" w-full flex  justify-center items-center border-gray-600 border-t-2 my-10">
        <div  className=" flex flex-col lg:flex-row  lg:gap-48 gap-5 mt-8">
        <div>
          <p>© Copyright Medih 2022 All Right Reserved.</p>
        </div>
        <div className="text-center">
            <span>terms of use</span>
            <span>privacy policy</span>
        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
